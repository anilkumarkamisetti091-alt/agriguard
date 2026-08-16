# AgriGuard - Agricultural Issue Tracking Platform

A full-stack web application for farmers to report crop issues and get specialist support.

## Features

- 🌾 Submit crop issue queries
- 📱 Real-time status tracking
- 🗄️ SQLite database (no setup needed!)
- 🚀 Express.js REST API
- 💻 Modern responsive frontend
- 🌍 Ready for worldwide deployment

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** SQLite (embedded, zero-config)
- **Frontend:** HTML, CSS, JavaScript
- **Deployment:** Render.com, Railway.app, Heroku

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anilkumarkamisetti091-alt/agriguard.git
   cd agriguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## 🌐 Deploy to the World (Free!)

### **Option 1: Render.com (Easiest)**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Set **Build Command:** `npm install`
6. Set **Start Command:** `npm start`
7. Click "Create Web Service"
8. Wait 2-3 minutes for deployment ✅
9. Your site will be live at: `https://agriguard-[random].onrender.com`

### **Option 2: Railway.app**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project from GitHub
4. It auto-detects your Node.js app
5. Deploy instantly! 🚀

### **Option 3: Heroku**
1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Run these commands:
   ```bash
   heroku login
   heroku create your-app-name
   git push heroku main
   ```
3. Your app is live at: `https://your-app-name.herokuapp.com`

## API Endpoints

### POST `/api/contact`
Submit a new crop issue query
```json
{
  "name": "John Farmer",
  "phone": "9876543210",
  "crop": "Rice",
  "issue": "Leaf spot disease affecting my paddy field"
}
```

### GET `/api/queries`
Retrieve all submitted queries with pagination
```bash
curl http://localhost:5000/api/queries?page=1&limit=10
```

### GET `/api/queries/:id`
Get a specific query
```bash
curl http://localhost:5000/api/queries/1
```

### PUT `/api/queries/:id`
Update query status
```bash
curl -X PUT http://localhost:5000/api/queries/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "In Progress"}'
```

### DELETE `/api/queries/:id`
Delete a query
```bash
curl -X DELETE http://localhost:5000/api/queries/1
```
```

## Database Schema

```sql
CREATE TABLE contact_queries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  crop TEXT NOT NULL,
  issue TEXT NOT NULL,
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Project Structure

```
agriguard/
├── server.js              # Express backend with SQLite
├── index.html             # Frontend UI
├── script.js              # Frontend logic
├── style.css              # Styling
├── agriguard.db           # SQLite database (auto-created)
├── package.json           # Dependencies
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Contributing

Feel free to fork and submit pull requests!

## Support

For issues or questions, please submit through the AgriGuard contact form on the website.

## License

ISC
