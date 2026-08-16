const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize SQLite Database
const db = new sqlite3.Database('./agriguard.db', (err) => {
  if (err) {
    console.error('❌ Error connecting to SQLite database:', err.message);
  } else {
    console.log('✅ Connected to AgriGuard SQLite database.');
  }
});

// Initialize database schema
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_queries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      crop TEXT NOT NULL,
      issue TEXT NOT NULL,
      status TEXT DEFAULT 'Pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('❌ Error creating table:', err.message);
    } else {
      console.log('✅ Database schema initialized.');
    }
  });
});

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

// ================= API ROUTES =================

/**
 * POST /api/contact
 * Create a new query
 */
app.post('/api/contact', (req, res) => {
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

  const sql = `INSERT INTO contact_queries (name, phone, crop, issue) VALUES (?, ?, ?, ?)`;
  db.run(sql, [name.trim(), phone.trim(), crop.trim(), issue.trim()], function(err) {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ success: false, message: 'Failed to submit query. Please try again.' });
    }
    res.status(201).json({
      success: true,
      message: 'Request submitted successfully!',
      queryId: this.lastID,
      createdAt: new Date().toISOString()
    });
  });
});

/**
 * GET /api/queries
 * Get all queries with pagination
 */
app.get('/api/queries', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  if (page < 1 || limit < 1 || limit > 100) {
    return res.status(400).json({ success: false, message: 'Invalid pagination parameters.' });
  }

  db.get(`SELECT COUNT(*) as count FROM contact_queries`, (err, countRow) => {
    if (err) {
      console.error('Count error:', err.message);
      return res.status(500).json({ success: false, message: 'Failed to fetch data.' });
    }

    const total = countRow.count;

    db.all(
      `SELECT * FROM contact_queries ORDER BY created_at DESC LIMIT ? OFFSET ?`,
      [limit, offset],
      (err, rows) => {
        if (err) {
          console.error('Fetch error:', err.message);
          return res.status(500).json({ success: false, message: 'Failed to fetch data.' });
        }

        res.json({
          success: true,
          data: rows || [],
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit)
          }
        });
      }
    );
  });
});

/**
 * GET /api/queries/:id
 * Get a specific query
 */
app.get('/api/queries/:id', (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid query ID.' });
  }

  db.get(`SELECT * FROM contact_queries WHERE id = ?`, [id], (err, row) => {
    if (err) {
      console.error('Fetch error:', err.message);
      return res.status(500).json({ success: false, message: 'Failed to fetch query.' });
    }
    if (!row) {
      return res.status(404).json({ success: false, message: 'Query not found.' });
    }
    res.json({ success: true, data: row });
  });
});

/**
 * PUT /api/queries/:id
 * Update query status
 */
app.put('/api/queries/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['Pending', 'In Progress', 'Resolved', 'Closed'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: `Status must be one of: ${validStatuses.join(', ')}` });
  }

  if (!id || isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid query ID.' });
  }

  db.run(
    `UPDATE contact_queries SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
    [status, id],
    function(err) {
      if (err) {
        console.error('Update error:', err.message);
        return res.status(500).json({ success: false, message: 'Failed to update query.' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ success: false, message: 'Query not found.' });
      }
      res.json({ success: true, message: 'Status updated successfully!' });
    }
  );
});

/**
 * DELETE /api/queries/:id
 * Delete a query
 */
app.delete('/api/queries/:id', (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid query ID.' });
  }

  db.run(`DELETE FROM contact_queries WHERE id = ?`, [id], function(err) {
    if (err) {
      console.error('Delete error:', err.message);
      return res.status(500).json({ success: false, message: 'Failed to delete query.' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ success: false, message: 'Query not found.' });
    }
    res.json({ success: true, message: 'Query deleted successfully!' });
  });
});

/**
 * GET /
 * Serve index.html
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * GET /api/health
 * Health check with database verification
 */
app.get('/api/health', (req, res) => {
  db.get('SELECT COUNT(*) as count FROM contact_queries', (err, row) => {
    if (err) {
      console.error('Database verification failed:', err.message);
      return res.status(503).json({
        success: false,
        message: 'Database connection failed',
        timestamp: new Date().toISOString(),
        database: {
          status: 'disconnected',
          error: err.message
        }
      });
    }
    
    res.json({
      success: true,
      message: 'Server is healthy',
      timestamp: new Date().toISOString(),
      database: {
        status: 'connected',
        type: 'sqlite3',
        queries_count: row.count
      }
    });
  });
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
  console.log(`🗄️  Database: SQLite (agriguard.db)`);
});
