# HIVE 3.0 V0 Workspace - Deployment Guide

## 🚀 Quick Deploy to Vercel with Comments

This workspace includes a collaborative comment system that works without user login. Comments are stored in Redis and persist between sessions.

### Prerequisites

1. **Vercel Account** - [vercel.com](https://vercel.com)
2. **Upstash Redis** - [upstash.com](https://upstash.com) (free tier available)
3. **Node.js 18+** (for local development)

### 1. Setup Upstash Redis

1. Go to [Upstash Console](https://console.upstash.com)
2. Create a new Redis database (choose any region)
3. Copy your Redis credentials:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### 2. Deploy to Vercel

#### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/zeno-hive-workspace)

#### Option B: Manual Deploy

1. **Clone and prepare:**

   ```bash
   git clone <your-repo>
   cd zeno_hive
   npm install
   ```

2. **Connect to Vercel:**

   ```bash
   npx vercel
   # Follow prompts to connect your project
   ```

3. **Add environment variables:**

   ```bash
   vercel env add UPSTASH_REDIS_REST_URL
   vercel env add UPSTASH_REDIS_REST_TOKEN
   ```

   Or add them in the Vercel dashboard under Settings > Environment Variables

4. **Deploy:**
   ```bash
   vercel --prod
   ```

### 3. Test the Comment System

1. Visit your deployed site
2. Navigate to any documentation section
3. Click "💬 Enable Comments" in the top-right
4. Click anywhere in the content to add a comment
5. Add your name and comment - it will persist!

## 🏗️ Architecture

### Comment System Features

- **No Login Required** - Users just enter their name when commenting
- **Persistent Storage** - Comments saved to Redis, survive page refreshes
- **Real-time Feedback** - Immediate comment display and count updates
- **Multiple Types** - Comments, Suggestions, Questions, Ideas
- **User Memory** - Remembers your name for subsequent comments
- **Section Isolation** - Comments are organized by documentation section

### Redis Data Structure

```
comments:{section}     → List of comments for each section
comments:all          → Global list of all comments
```

Each comment object:

```json
{
  "id": "1703123456789",
  "text": "This section needs more detail",
  "author": "Sarah Johnson",
  "email": "sarah@zeno.com",
  "type": "suggestion",
  "priority": "medium",
  "section": "functional",
  "target": "general",
  "timestamp": "2023-12-20T15:30:45.123Z"
}
```

### API Endpoints

- `GET /api/comments` - Retrieve all comments
- `GET /api/comments?section=overview` - Get comments for specific section
- `POST /api/comments` - Add new comment

## 🛠️ Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Create `.env.local`:**

   ```bash
   UPSTASH_REDIS_REST_URL=your_redis_url_here
   UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
   ```

3. **Start development server:**

   ```bash
   vercel dev
   ```

4. **Open browser:** `http://localhost:3000`

## 📋 Comment Management

### Admin Features (Future Enhancement)

- View all comments across sections
- Mark comments as resolved
- Export comments to CSV
- Moderate inappropriate content

### Current Limitations

- No comment editing/deletion (by design for v0)
- No threaded conversations (v0 keeps it simple)
- No notifications (can be added later)

## 🔧 Customization

### Modify Comment Types

Edit `script.js` line ~1080:

```javascript
<select id="commentType">
  <option value="comment">💬 Comment</option>
  <option value="suggestion">✏️ Suggestion</option>
  <option value="question">❓ Question</option>
  <option value="idea">💡 New Idea</option>
  <option value="concern">⚠️ Concern</option> // Add new type
</select>
```

### Adjust Data Retention

Edit `api/comments.js` line ~67:

```javascript
// Set expiration to 90 days instead of 30
await redis.expire(commentKey, 90 * 24 * 60 * 60);
```

## 🚨 Troubleshooting

### Comments Not Saving

1. Check Vercel function logs: `vercel logs`
2. Verify Redis credentials in environment variables
3. Test Redis connection in Upstash console

### CORS Issues

- Ensured in `vercel.json` and `api/comments.js`
- If issues persist, check browser network tab for specific errors

### Local Development Issues

```bash
# Clear Vercel cache
vercel dev --debug

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📈 Scaling Considerations

- **Free Tier Limits:** Upstash free tier includes 10k requests/day
- **Comment Volume:** Current setup handles ~1000 comments comfortably
- **Geographic Distribution:** Add Redis regions if global team
- **Backup Strategy:** Redis data persists, but consider periodic exports

## 🔒 Security Notes

- No authentication required (by design for v0)
- Comments are public to all workspace users
- Email addresses are optional and not validated
- Consider adding rate limiting for production use

---

## 📞 Support

For deployment issues, contact the ZENO development team or check the Vercel/Upstash documentation.
