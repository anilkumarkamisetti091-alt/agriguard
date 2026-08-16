const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for API requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Serve static frontend files (index.html, style.css, script.js)
app.use(express.static(__dirname));

// Initialize SQLite Database File
const dbPath = path.resolve(__dirname, 'agriguard.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to the AgriGuard SQLite database.');
  }
});

// Create Required Database Tables
db.serialize(() => {
  // 1. Users Table (for Farmer Login & Registration)
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 2. Contact Queries Table (for Support & Specialist Inquiries)
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_queries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      crop TEXT NOT NULL,
      issue TEXT NOT NULL,
      status TEXT DEFAULT 'Pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// ------------------- AUTHENTICATION ROUTES ------------------- //

/**
 * POST /api/register
 * Registers a new farmer
 */
app.post('/api/register', (req, res) => {
  const { name, phone, password } = req.body;

  if (!name || !phone || !password) {
    return res.status(400).json({ success: false, message: 'Name, phone, and password are required.' });
  }

  const sql = `INSERT INTO users (name, phone, password) VALUES (?, ?, ?)`;
  db.run(sql, [name, phone, password], function (err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ success: false, message: 'Phone number already registered. Please login.' });
      }
      return res.status(500).json({ success: false, message: 'Database registration error.' });
    }

    res.status(201).json({
      success: true,
      message: 'Farmer account created successfully!',
      user: { id: this.lastID, name, phone }
    });
  });
});

/**
 * POST /api/login
 * Verifies farmer credentials
 */
app.post('/api/login', (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ success: false, message: 'Phone and password are required.' });
  }

  const sql = `SELECT id, name, phone FROM users WHERE phone = ? AND password = ?`;
  db.get(sql, [phone, password], (err, user) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database lookup error.' });
    }
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid mobile number or password.' });
    }

    res.json({
      success: true,
      message: 'Login successful!',
      user
    });
  });
});

// ------------------- FARMER SUPPORT ROUTES ------------------- //

/**
 * POST /api/contact
 * Saves a new crop inquiry
 */
app.post('/api/contact', (req, res) => {
  const { name, phone, crop, issue } = req.body;

  if (!name || !phone || !crop || !issue) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const sql = `INSERT INTO contact_queries (name, phone, crop, issue) VALUES (?, ?, ?, ?)`;
  db.run(sql, [name, phone, crop, issue], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ success: false, message: 'Failed to record query.' });
    }

    res.status(201).json({
      success: true,
      message: 'Support request recorded successfully!',
      queryId: this.lastID
    });
  });
});

/**
 * GET /api/queries
 * Fetches all submitted support requests
 */
app.get('/api/queries', (req, res) => {
  const sql = `SELECT * FROM contact_queries ORDER BY created_at DESC`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to retrieve queries.' });
    }

    res.json({ success: true, count: rows.length, data: rows });
  });
});

// ------------------- ROOT FALLBACK ROUTE ------------------- //

/**
 * GET /
 * Delivers index.html directly
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`AgriGuard server is running at http://localhost:${PORT}`);
});