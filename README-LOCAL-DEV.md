# Local Development Setup

## 🛠️ Running HIVE 3.0 Workspace Locally

**Important:** To use the comment system locally, you need to run `vercel dev` so the API functions work with Redis.

### 🚀 Quick Start

#### For Comment System (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Install dependencies
npm install

# Create environment file with your Redis credentials
echo "KV_REST_API_URL=your_redis_url_here" > .env.local
echo "KV_REST_API_TOKEN=your_redis_token_here" >> .env.local

# Start Vercel development server
vercel dev

# Open browser
open http://localhost:3000
```

#### For Static Preview Only (No Comments)

If you just want to preview the design without comments:

```bash
# Python 3
python -m http.server 8000

# Or use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### 🔄 How Comments Work

**With `vercel dev`:**

- ✅ **Full comment system** with Redis persistence
- ✅ **Add comments** that save to your Redis database
- ✅ **Delete comments** with confirmation
- ✅ **Comments persist** between sessions
- ✅ **Same data** as production environment

**With simple HTTP server:**

- ❌ **No comment system** (API calls will fail)
- ✅ **Static preview** of all pages and design
- ✅ **Navigation** and UI features work

### ✅ What Works with Vercel Dev

- ✅ **Full comment system** with Redis persistence
- ✅ **Add/Delete comments** with confirmation
- ✅ **Comment types** (Comment, Suggestion, Question, Ideas)
- ✅ **User name memory** for repeat comments
- ✅ **All documentation sections**
- ✅ **Responsive design** and UI features
- ✅ **Search functionality**
- ✅ **Same Redis data** as production

### 🌐 Environment Setup

1. **Get Redis Credentials** from your Vercel dashboard:

   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Copy `KV_REST_API_URL` and `KV_REST_API_TOKEN`

2. **Create `.env.local**:\*\*

   ```bash
   KV_REST_API_URL=https://your-redis-url.upstash.io
   KV_REST_API_TOKEN=your-redis-token-here
   ```

3. **Start Development:**
   ```bash
   vercel dev
   ```

### 🔧 Local vs Production

| Feature          | Local (`vercel dev`)  | Production (Vercel) |
| ---------------- | --------------------- | ------------------- |
| Comments Storage | Redis/Upstash         | Redis/Upstash       |
| Add Comments     | ✅                    | ✅                  |
| Delete Comments  | ✅                    | ✅                  |
| Data Persistence | ✅ Same as production | ✅                  |
| Team Sharing     | ✅                    | ✅                  |

### 📝 Development Workflow

1. **Start vercel dev**: `vercel dev`
2. **Open browser**: `http://localhost:3000`
3. **Test comments** - they save to real Redis
4. **Make changes** to HTML/CSS/JS files
5. **Refresh browser** to see changes
6. **Commit & push**: `git add . && git commit -m "message" && git push`

### 🚨 Important Notes

- **Comments require `vercel dev`** - they won't work with simple HTTP servers
- **Local and production share the same Redis** - comments are synced
- **Delete functionality included** - click × to delete comments
- **Environment variables required** - get them from Vercel dashboard

### 🔧 Troubleshooting

**Comments not saving?**

1. Check you're running `vercel dev` (not python server)
2. Verify `.env.local` has correct Redis credentials
3. Check browser console for API errors
4. Ensure you're using `http://localhost:3000`

**API errors?**

1. Restart `vercel dev`
2. Check Redis credentials in Vercel dashboard
3. Verify environment variables match production

---

**Need production deployment?** Check `README-DEPLOYMENT.md` for full setup guide.
