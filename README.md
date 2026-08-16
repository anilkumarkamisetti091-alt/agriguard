# AgriGuard - Agricultural Issue Tracking Platform

A full-stack web application for farmers to report crop issues and get specialist support.

## Features

- 🌾 Submit crop issue queries
- 📱 Real-time status tracking
- 🗄️ PostgreSQL database backend
- 🚀 Express.js REST API
- 💻 Modern responsive frontend

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Frontend:** HTML, CSS, JavaScript
- **Hosting Ready:** Render.com compatible

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- PostgreSQL (local or cloud instance)

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

3. **Create `.env` file** (copy from `.env.example`)
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables in `.env`**
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/agriguard
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the server**
   ```bash
   npm start
   ```

6. **Open in browser**
   ```
   http://localhost:5000
   ```

## API Endpoints

### POST `/api/contact`
Submit a new crop issue query
```json
{
  "name": "John Farmer",
  "phone": "9876543210",
  "crop": "Rice",
  "issue": "Leaf spot disease"
}
```

### GET `/api/queries`
Retrieve all submitted queries
```json
{
  "success": true,
  "data": [...]
}
```

## Database Schema

```sql
CREATE TABLE contact_queries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  crop TEXT NOT NULL,
  issue TEXT NOT NULL,
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Project Structure

```
agriguard/
├── server.js           # Express backend
├── index.html          # Frontend UI
├── script.js           # Frontend logic
├── style.css           # Styling
├── package.json        # Dependencies
├── .env.example        # Environment template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Deployment

### Render.com (Recommended)
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables
4. Deploy!

## Contributing

Feel free to fork and submit pull requests!

## License

ISC
