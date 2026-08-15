const express = require('express');
const sqlite3 = require('sqlite3').verbose();
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

// Initialize SQLite Database
const dbPath = path.resolve(__dirname, 'agriguard.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to the AgriGuard SQLite database.');
  }
});

// Initialize Contact Queries Table
db.serialize(() => {
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

// ------------------- API ROUTES ------------------- //

/**
 * POST /api/contact
 * Receives specialist inquiries from farmers
 */
app.post('/api/contact', (req, res) => {
  const { name, phone, crop, issue } = req.body;

  if (!name || !phone || !crop || !issue) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const sql = `INSERT INTO contact_queries (name, phone, crop, issue) VALUES (?, ?, ?, ?)`;
  db.run(sql, [name, phone, crop, issue], function (err) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error.' });
    }
    res.status(201).json({ success: true, message: 'Request submitted successfully!', queryId: this.lastID });
  });
});

/**
 * GET /api/queries
 * View submitted queries
 */
app.get('/api/queries', (req, res) => {
  db.all(`SELECT * FROM contact_queries ORDER BY created_at DESC`, [], (err, rows) => {
    if (err) return res.status(500).json({ success: false, message: 'Failed to fetch data.' });
    res.json({ success: true, data: rows });
  });
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