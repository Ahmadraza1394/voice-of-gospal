# Admin Backend Setup Guide

This guide will help you set up the admin backend system for managing blogs and events.

## Prerequisites

1. MongoDB Atlas account (free tier works)
2. Node.js installed
3. Vercel account (for deployment)

## Installation Steps

### 1. Install Dependencies

Run the following command in your project root:

```bash
npm install mongoose jsonwebtoken
```

### 2. Set Up MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string

### 3. Configure Environment Variables

1. Create a `.env.local` file in your project root:

```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your values:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/voiceofgospel?retryWrites=true&w=majority
JWT_SECRET=your_random_secret_key_here_min_32_chars
ADMIN_EMAIL=admin@voiceofgospel.com
ADMIN_PASSWORD=YourSecurePassword123!
```

**Important:** Never commit `.env.local` to Git!

### 4. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000/admin/login` to access the admin panel.

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs?published=true` - Get published blogs only
- `GET /api/blogs/[id]` - Get single blog
- `POST /api/blogs` - Create blog (requires auth)
- `PUT /api/blogs/[id]` - Update blog (requires auth)
- `DELETE /api/blogs/[id]` - Delete blog (requires auth)

### Events
- `GET /api/events` - Get all events
- `GET /api/events?published=true` - Get published events only
- `GET /api/events/[id]` - Get single event
- `POST /api/events` - Create event (requires auth)
- `PUT /api/events/[id]` - Update event (requires auth)
- `DELETE /api/events/[id]` - Delete event (requires auth)

## Deployment to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Add admin backend"
git push
```

### 2. Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`

4. Deploy!

### 3. Verify Deployment

Visit `https://your-domain.vercel.app/admin/login`

## Security Notes

1. **Change default credentials** in production
2. **Use strong JWT_SECRET** (minimum 32 characters)
3. **Enable MongoDB IP whitelist** for production
4. **Use HTTPS only** in production
5. Consider adding rate limiting for API routes
6. Consider using bcrypt for password hashing in production

## Database Models

### Blog Schema
```javascript
{
  title: String (required, max 200 chars)
  slug: String (auto-generated from title)
  excerpt: String (required, max 500 chars)
  content: String (required)
  image: String (required, image URL)
  author: String (default: "Admin")
  category: String (default: "Uncategorized")
  published: Boolean (default: true)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

### Event Schema
```javascript
{
  title: String (required, max 200 chars)
  slug: String (auto-generated from title)
  description: String (required)
  image: String (required, image URL)
  date: Date (required)
  time: String (required)
  location: String (required)
  category: String (default: "General")
  published: Boolean (default: true)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

## Troubleshooting

### MongoDB Connection Issues
- Check if your IP is whitelisted in MongoDB Atlas
- Verify connection string is correct
- Ensure network access is configured

### Authentication Issues
- Check JWT_SECRET is set
- Verify admin credentials match .env.local
- Clear browser cookies and try again

### Deployment Issues
- Verify all environment variables are set in Vercel
- Check Vercel function logs for errors
- Ensure MongoDB allows connections from anywhere (0.0.0.0/0)

## Next Steps

After setup, you can:
1. Access admin dashboard at `/admin`
2. Create, edit, and delete blogs
3. Manage events
4. View analytics (if implemented)

For support, contact your development team.
