const express = require('express');
const { Pool } = require('pg');
const path = require('path');

// Validate environment variables
if (!process.env.DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is not set!');
  console.error('Please create a .env file with DATABASE_URL configured.');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Serve static frontend files
app.use(express.static(__dirname));

// Initialize PostgreSQL Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('render.com')
    ? { rejectUnauthorized: false }
    : false,
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Error connecting to PostgreSQL database:', err.message);
    console.error('Please ensure DATABASE_URL is correct and PostgreSQL server is running.');
  } else {
    console.log('✅ Connected to the AgriGuard PostgreSQL database.');
    release();
  }
});

// Initialize database schema
(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_queries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        crop TEXT NOT NULL,
        issue TEXT NOT NULL,
        status TEXT DEFAULT 'Pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Database schema initialized.');
  } catch (err) {
    console.error('❌ Error creating contact_queries table:', err.message);
  }
})();
// ------------------- API ROUTES ------------------- //

/**
 * POST /api/contact
 * Receives specialist inquiries from farmers
 */
app.post('/api/contact', async (req, res) => {
  const { name, phone, crop, issue } = req.body;

  // Validate required fields
  if (!name || !phone || !crop || !issue) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Validate phone format (10 digits)
  if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
    return res.status(400).json({ success: false, message: 'Phone must be 10 digits.' });
  }

  // Validate field lengths
  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ success: false, message: 'Name must be between 2 and 100 characters.' });
  }

  if (crop.length < 2 || crop.length > 50) {
    return res.status(400).json({ success: false, message: 'Crop name must be between 2 and 50 characters.' });
  }

  if (issue.length < 10 || issue.length > 500) {
    return res.status(400).json({ success: false, message: 'Issue description must be between 10 and 500 characters.' });
  }

  try {
    const sql = `INSERT INTO contact_queries (name, phone, crop, issue) VALUES ($1, $2, $3, $4) RETURNING id, created_at`;
    const result = await pool.query(sql, [name.trim(), phone.trim(), crop.trim(), issue.trim()]);
    res.status(201).json({
      success: true,
      message: 'Request submitted successfully!',
      queryId: result.rows[0].id,
      createdAt: result.rows[0].created_at
    });
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to submit query. Please try again.' });
  }
});
/**
 * GET /api/queries
 * View submitted queries (with pagination)
 */
app.get('/api/queries', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  if (page < 1 || limit < 1 || limit > 100) {
    return res.status(400).json({ success: false, message: 'Invalid pagination parameters.' });
  }

  try {
    const result = await pool.query(
      `SELECT * FROM contact_queries ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    const countResult = await pool.query(`SELECT COUNT(*) FROM contact_queries`);
    const total = parseInt(countResult.rows[0].count);

    res.json({
      success: true,
      data: result.rows,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch data.' });
  }
});

/**
 * GET /api/queries/:id
 * Get a specific query by ID
 */
app.get('/api/queries/:id', async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid query ID.' });
  }

  try {
    const result = await pool.query(`SELECT * FROM contact_queries WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Query not found.' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch query.' });
  }
});

/**
 * PUT /api/queries/:id
 * Update query status
 */
app.put('/api/queries/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['Pending', 'In Progress', 'Resolved', 'Closed'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: `Status must be one of: ${validStatuses.join(', ')}` });
  }

  if (!id || isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid query ID.' });
  }

  try {
    const result = await pool.query(
      `UPDATE contact_queries SET status = $1 WHERE id = $2 RETURNING *`,
      [status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Query not found.' });
    }
    res.json({ success: true, message: 'Status updated successfully!', data: result.rows[0] });
  } catch (err) {
    console.error('Update error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to update query.' });
  }
});

/**
 * DELETE /api/queries/:id
 * Delete a query
 */
app.delete('/api/queries/:id', async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid query ID.' });
  }

  try {
    const result = await pool.query(`DELETE FROM contact_queries WHERE id = $1 RETURNING id`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Query not found.' });
    }
    res.json({ success: true, message: 'Query deleted successfully!' });
  } catch (err) {
    console.error('Delete error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to delete query.' });
  }
});

/**
 * GET /
 * Delivers index.html directly
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is healthy', timestamp: new Date().toISOString() });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found.' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ AgriGuard server is running at http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📝 API endpoints: POST /api/contact, GET /api/queries`);
  console.log(`🗄️  Database: Connected via DATABASE_URL`);
});