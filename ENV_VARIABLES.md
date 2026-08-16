# 🔐 Environment Variables Guide for AgriGuard

## What are Environment Variables?

Environment variables are key-value pairs that configure how your application behaves. They allow you to:
- Keep sensitive data safe (passwords, API keys)
- Have different settings for development vs production
- Avoid hardcoding values in your code
- Easily change settings without modifying code

---

## How Environment Variables Work in AgriGuard

### Local Development
```
.env file (on your computer)
    ↓
dotenv package reads it
    ↓
process.env in Node.js
    ↓
Your application uses the values
```

### Production Deployment
```
Platform Dashboard (Render/Railway/Heroku)
    ↓
Environment variables set in dashboard
    ↓
process.env in Node.js
    ↓
Your deployed application uses the values
```

---

## Available Environment Variables

### Essential Variables

| Variable | Purpose | Default | Example |
|----------|---------|---------|---------|
| `PORT` | Server port | 5000 | 5000, 3000, 8080 |
| `NODE_ENV` | Environment | development | development, production |
| `APP_NAME` | Application name | AgriGuard | AgriGuard |
| `LOG_LEVEL` | Logging level | info | info, debug, error |

### Database Variables (if using PostgreSQL)

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | Full connection string | postgresql://user:pass@host:5432/db |
| `DB_USER` | Database user | postgres |
| `DB_HOST` | Database server | localhost |
| `DB_PORT` | Database port | 5432 |
| `DB_NAME` | Database name | agriguard |
| `DB_PASSWORD` | Database password | secure_password |

### Future Features (Optional)

| Variable | Purpose | Example |
|----------|---------|---------|
| `API_KEY` | API authentication | abc123xyz789 |
| `SECRET_TOKEN` | Security token | your_secret_token |
| `SMTP_HOST` | Email server | smtp.gmail.com |
| `SMTP_PORT` | Email port | 587 |
| `SMTP_USER` | Email account | your_email@gmail.com |
| `SMTP_PASSWORD` | Email password | your_app_password |
| `WEATHER_API_KEY` | Weather API | your_weather_key |
| `SMS_API_KEY` | SMS service | your_sms_key |

---

## 📝 Setting Up Environment Variables

### Step 1: Local Development (.env file)

1. **Create `.env` file** in your project root:
   ```
   d:\agriguard\.env
   ```

2. **Copy template from `.env.example`:**
   ```bash
   cp .env.example .env
   ```

3. **Edit with your values:**
   ```env
   PORT=5000
   NODE_ENV=development
   APP_NAME=AgriGuard
   LOG_LEVEL=info
   ```

4. **Never commit to GitHub:**
   - `.env` is already in `.gitignore` ✅
   - It contains sensitive data!

### Step 2: Production Deployment (Render.com)

1. **Go to Render Dashboard**
2. **Select your service**
3. **Click "Environment" tab**
4. **Add each variable:**

   ```
   KEY: PORT
   VALUE: 5000
   
   KEY: NODE_ENV
   VALUE: production
   
   KEY: APP_NAME
   VALUE: AgriGuard
   ```

5. **Save and redeploy**

---

## 💻 Using Environment Variables in Code

### Reading from process.env

```javascript
// Basic usage
const port = process.env.PORT;
const env = process.env.NODE_ENV;

// With default values
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';
const appName = process.env.APP_NAME || 'AgriGuard';

// In conditionals
if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');
} else {
  console.log('Running in development mode');
}

// Using multiple variables
const config = {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  debug: process.env.LOG_LEVEL === 'debug'
};
```

### In AgriGuard server.js

```javascript
// Current usage in server.js
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🔐 Security Best Practices

### ✅ ALWAYS DO:

1. **Store sensitive data in `.env`**
   ```env
   DATABASE_PASSWORD=super_secret_password
   API_KEY=your_secret_api_key
   ```

2. **Add `.env` to `.gitignore`** (already done ✅)
   ```
   .env
   .env.local
   .env.*.local
   ```

3. **Create `.env.example` with template**
   ```env
   DATABASE_PASSWORD=your_password_here
   API_KEY=your_api_key_here
   ```

4. **Document all variables used**
   ```env
   # Database password for PostgreSQL
   DATABASE_PASSWORD=
   
   # API key for external service
   API_KEY=
   ```

5. **Use strong passwords in production**
   ```env
   # ✅ Good
   DATABASE_PASSWORD=K7#mP2$xL9@qR8vN5wJ
   
   # ❌ Bad
   DATABASE_PASSWORD=password123
   ```

### ❌ NEVER DO:

1. **Hardcode secrets in code**
   ```javascript
   // ❌ WRONG - exposed to everyone!
   const API_KEY = "abc123xyz789";
   
   // ✅ RIGHT - use environment variable
   const API_KEY = process.env.API_KEY;
   ```

2. **Commit `.env` to GitHub**
   ```
   # Check .gitignore
   cat .gitignore | grep .env
   # Should show: .env
   ```

3. **Share `.env` file via email/chat**
   - Passwords could be intercepted
   - Share only `.env.example` template

4. **Use same value for dev and production**
   ```env
   # ❌ WRONG - same for all
   API_KEY=production_key
   
   # ✅ RIGHT - different for each
   # Local: DEV_API_KEY in .env
   # Production: PROD_API_KEY in Render dashboard
   ```

5. **Expose environment variables in responses**
   ```javascript
   // ❌ WRONG - exposes API key
   res.json({ apiKey: process.env.API_KEY });
   
   // ✅ RIGHT - only use server-side
   const apiKey = process.env.API_KEY;
   // Use for internal operations only
   ```

---

## 🚀 For Different Environments

### Development (.env)
```env
PORT=5000
NODE_ENV=development
LOG_LEVEL=debug
DATABASE_URL=sqlite://./agriguard.db
DEBUG=true
```

### Production (Render Dashboard)
```env
PORT=(auto-assigned by Render)
NODE_ENV=production
LOG_LEVEL=error
DATABASE_URL=(your PostgreSQL URL)
DEBUG=false
```

### Testing
```env
PORT=5001
NODE_ENV=test
LOG_LEVEL=error
DATABASE_URL=sqlite://./test.db
DEBUG=false
```

---

## 🐛 Troubleshooting

### Problem: "Cannot read property 'DATABASE_URL' of undefined"

**Solution:** Make sure `.env` file exists and dotenv is loaded
```javascript
// Add at top of server.js
require('dotenv').config();
```

### Problem: "PORT is already in use"

**Solution:** Change PORT in `.env`
```env
PORT=3000  # Instead of 5000
```

### Problem: Variables not loading

**Solution:** Check `.env` file format
```env
# ✅ CORRECT
KEY=value
DATABASE_URL=postgresql://user:pass@host/db

# ❌ WRONG (spaces, quotes)
KEY = value
DATABASE_URL = "postgresql://user:pass@host/db"
```

### Problem: Environment variables not updating

**Solution:** Restart your server
```bash
npm start
```

---

## ✅ Checklist Before Deployment

- [ ] `.env` file exists locally
- [ ] `.env` is in `.gitignore`
- [ ] `.env.example` has all variables documented
- [ ] No sensitive data in code files
- [ ] Environment variables set in Render dashboard
- [ ] Tested on production environment
- [ ] Database URL correct for production
- [ ] API keys updated for production

---

## 📚 Reference Links

- [Node.js process.env documentation](https://nodejs.org/en/knowledge/getting-started/what-is-the-process-object/)
- [dotenv npm package](https://www.npmjs.com/package/dotenv)
- [Render Environment Variables](https://render.com/docs/environment-variables)
- [Railway Environment Variables](https://railway.app/docs/services/environment-variables)

---

## 🎯 Example: Complete Workflow

### 1. Local Development
```bash
# Create .env from template
cp .env.example .env

# Edit with your local values
nano .env
```

### 2. Test Locally
```bash
npm install
npm start
# Visit http://localhost:5000
```

### 3. Deploy to Production
```bash
# Commit changes
git add .
git commit -m "Ready for production"
git push origin main

# In Render Dashboard:
# 1. Set environment variables
# 2. Trigger deployment
# 3. Verify on production URL
```

### 4. Monitor Production
```bash
# Check logs in Render dashboard
# Verify all features working
# Monitor performance
```

---

**Questions?** Check the full documentation in README.md or DEPLOYMENT.md!
