from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)  # Enable Cross-Origin Resource Sharing

DB_NAME = "agriguard.db"

# --- Initialize SQLite Database ---
def init_db():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contact_queries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            crop TEXT NOT NULL,
            issue TEXT NOT NULL,
            status TEXT DEFAULT 'Pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# --- Serve Frontend Webpages ---
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

# --- API Endpoints ---

@app.route('/api/contact', methods=['POST'])
def save_contact_query():
    """Receives support queries submitted by farmers"""
    data = request.get_json()
    
    if not data:
        return jsonify({"success": False, "message": "No JSON payload provided."}), 400

    name = data.get('name')
    phone = data.get('phone')
    crop = data.get('crop')
    issue = data.get('issue')

    if not all([name, phone, crop, issue]):
        return jsonify({"success": False, "message": "All fields are required."}), 400

    try:
        conn = sqlite3.connect(DB_NAME)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO contact_queries (name, phone, crop, issue) VALUES (?, ?, ?, ?)",
            (name, phone, crop, issue)
        )
        conn.commit()
        query_id = cursor.lastrowid
        conn.close()

        return jsonify({
            "success": True, 
            "message": "Support query saved successfully.", 
            "queryId": query_id
        }), 201

    except sqlite3.Error as e:
        return jsonify({"success": False, "message": f"Database error: {str(e)}"}), 500


@app.route('/api/queries', methods=['GET'])
def get_all_queries():
    """Fetches all submitted queries from SQLite database"""
    try:
        conn = sqlite3.connect(DB_NAME)
        conn.row_factory = sqlite3.Row  # Return dict-like row objects
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM contact_queries ORDER BY created_at DESC")
        rows = cursor.fetchall()
        
        queries = [dict(row) for row in rows]
        conn.close()

        return jsonify({"success": True, "data": queries}), 200

    except sqlite3.Error as e:
        return jsonify({"success": False, "message": f"Database error: {str(e)}"}), 500


# --- Start Server ---
if __name__ == '__main__':
    print("🌾 AgriGuard Python Backend is running at http://localhost:5000")
    # '0.0.0.0' allows connections from local Wi-Fi and mobile devices
    app.run(host='0.0.0.0', port=5000, debug=True)