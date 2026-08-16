const express = require('express');
const { Pool } = require('pg');
const path = require('path');

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

// Serve static frontend files
app.use(express.static(__dirname));

// Initialize PostgreSQL Database
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('render.com')
    ? { rejectUnauthorized: false }
    : false,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database:', err.message);
  } else {
    console.log('Connected to the AgriGuard PostgreSQL database.');
    release();
  }
});

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
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch (err) {
    console.error('Error creating contact_queries table:', err.message);
  }
})();
// ------------------- API ROUTES ------------------- //

/**
 * POST /api/contact
 * Receives specialist inquiries from farmers
 */
app.post('/api/contact', async (req, res) => {
  const { name, phone, crop, issue } = req.body;

  if (!name || !phone || !crop || !issue) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const sql = `INSERT INTO contact_queries (name, phone, crop, issue) VALUES ($1, $2, $3, $4) RETURNING id`;
    const result = await pool.query(sql, [name, phone, crop, issue]);
    res.status(201).json({ success: true, message: 'Request submitted successfully!', queryId: result.rows[0].id });
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ success: false, message: 'Database error.' });
  }
});
/**
 * GET /api/queries
 * View submitted queries
 */
app.get('/api/queries', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM contact_queries ORDER BY created_at DESC`);
    res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch data.' });
  }
});

/**
 * GET /
 * Delivers index.html directly
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`AgriGuard server is running at http://localhost:${PORT}`);
});