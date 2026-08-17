import os
import sqlite3
from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder=".", template_folder=".")
CORS(app)

DATABASE = os.path.join(os.path.dirname(__file__), "agriguard.db")

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS sensor_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                temperature REAL,
                humidity REAL,
                soil_moisture REAL,
                crop_health TEXT
            )
        """)
        conn.commit()

init_db()

@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(".", path)

@app.route("/api/status", methods=["GET"])
def get_status():
    return jsonify({
        "status": "online",
        "system": "AgriGuard Monitoring System",
        "version": "1.0.0"
    })

@app.route("/api/data", methods=["GET", "POST"])
def handle_data():
    if request.method == "POST":
        data = request.get_json() or {}
        temperature = data.get("temperature", 28.5)
        humidity = data.get("humidity", 65.0)
        soil_moisture = data.get("soil_moisture", 45.0)
        crop_health = data.get("crop_health", "Healthy")

        with get_db() as conn:
            conn.execute(
                "INSERT INTO sensor_logs (temperature, humidity, soil_moisture, crop_health) VALUES (?, ?, ?, ?)",
                (temperature, humidity, soil_moisture, crop_health)
            )
            conn.commit()

        return jsonify({"message": "Data recorded successfully", "success": True}), 201

    with get_db() as conn:
        cursor = conn.execute("SELECT * FROM sensor_logs ORDER BY timestamp DESC LIMIT 10")
        rows = [dict(row) for row in cursor.fetchall()]

    return jsonify({"logs": rows, "success": True})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
@app.route("/api/contact", methods=["POST"])
@app.route("/submit-request", methods=["POST"])
def handle_specialist_request():
    try:
        data = request.get_json() or request.form.to_dict()
        print("Specialist query received:", data)
        
        # Return proper JSON response
        return jsonify({
            "success": True,
            "message": "Your query has been submitted to an Agri specialist successfully!"
        }), 200
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500