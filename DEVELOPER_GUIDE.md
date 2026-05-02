# Developer Guide - Voice of the Gospel Tabernacle Website

## For Technical Users and Developers

This guide provides technical details for developers who need to maintain, extend, or customize the website.

---

## Table of Contents
1. [Technical Architecture](#technical-architecture)
2. [Development Setup](#development-setup)
3. [Code Structure](#code-structure)
4. [API Documentation](#api-documentation)
5. [Database Schema](#database-schema)
6. [Authentication System](#authentication-system)
7. [Email System](#email-system)
8. [Styling System](#styling-system)
9. [Adding New Features](#adding-new-features)
10. [Performance Optimization](#performance-optimization)
11. [Testing](#testing)
12. [Deployment Pipeline](#deployment-pipeline)

---

## Technical Architecture

### Stack Overview

```
Frontend:
├── Next.js 15 (App Router)
├── React 18
├── Tailwind CSS
└── Next.js Image Optimization

Backend:
├── Next.js API Routes
├── MongoDB (via Mongoose)
├── JWT Authentication
└── Nodemailer (Email)

Deployment:
├── Vercel (Hosting)
├── MongoDB Atlas (Database)
└── GitHub (Version Control)
```

### Key Technologies

**Next.js 15 App Router:**
- Server Components by default
- File-based routing in `src/app/`
- API routes in `src/app/api/`
- Automatic code splitting
- Built-in image optimization

**MongoDB + Mongoose:**
- NoSQL database for flexible schema
- Mongoose for object modeling
- Connection pooling for performance
- Indexes for query optimization

**JWT Authentication:**
- Stateless authentication
- Token stored in localStorage
- Middleware for protected routes
- bcryptjs for password hashing

---

## Development Setup

### Prerequisites

```bash
# Required software
Node.js 18+ (LTS recommended)
npm 9+
Git
MongoDB (local) or MongoDB Atlas account
```

### Environment Setup

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd voice-of-gospel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   
   Create `.env.local`:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/voiceofgospel
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/voiceofgospel
   
   # Authentication
   JWT_SECRET=your-super-secret-jwt-key-change-this
   
   # Email (Gmail)
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   CONTACT_EMAIL_TO=nhomicil@yahoo.com
   
   # Site Configuration
   SITE_URL=http://localhost:3000
   # In production: https://voice-of-gospel.vercel.app
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Access application:**
   - Frontend: `http://localhost:3000`
   - Admin: `http://localhost:3000/admin/login`

### Creating Admin User

Run this script to create the first admin user:

```javascript
// scripts/createAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const Admin = require('./src/models/Admin');

async function createAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  await Admin.create({
    email: 'admin@voiceofgospel.com',
    password: hashedPassword,
    name: 'Admin'
  });
  
  console.log('Admin created successfully');
  process.exit(0);
}

createAdmin();
```

Run: `node scripts/createAdmin.js`

---

## Code Structure

### Directory Layout

```
src/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Route group (shares layout)
│   │   ├── layout.js             # Site layout wrapper
│   │   ├── page.js               # Homepage
│   │   ├── about/page.js         # About page
│   │   ├── ministries/page.js    # Ministries page
│   │   ├── watch/page.js         # Watch page
│   │   ├── events/page.js        # Events page
│   │   ├── give/page.js          # Give page
│   │   ├── visit/page.js         # Visit page
│   │   ├── gallery/page.js       # Gallery page
│   │   ├── blogs/page.js         # Blog listing
│   │   ├── contact/page.js       # Contact page
│   │   └── global-mission/       # Global mission pages
│   │
│   ├── admin/                    # Admin panel routes
│   │   ├── layout.js             # Admin layout
│   │   ├── page.js               # Admin dashboard
│   │   ├── login/page.js         # Admin login
│   │   ├── blogs/
│   │   │   ├── page.js           # Blog list
│   │   │   ├── new/page.js       # Create blog
│   │   │   └── edit/[id]/page.js # Edit blog
│   │   ├── events/
│   │   │   ├── page.js           # Event list
│   │   │   ├── new/page.js       # Create event
│   │   │   └── edit/[id]/page.js # Edit event
│   │   └── livestream/page.js    # Livestream settings
│   │
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   │   └── login/route.js    # POST /api/auth/login
│   │   ├── blogs/
│   │   │   ├── route.js          # GET, POST /api/blogs
│   │   │   └── [id]/route.js     # GET, PUT, DELETE /api/blogs/:id
│   │   ├── events/
│   │   │   ├── route.js          # GET, POST /api/events
│   │   │   └── [id]/route.js     # GET, PUT, DELETE /api/events/:id
│   │   ├── livestream/
│   │   │   └── route.js          # GET, PUT /api/livestream
│   │   └── contact/
│   │       └── route.js          # POST /api/contact
│   │
│   ├── layout.js                 # Root layout
│   ├── sitemap.js                # Dynamic sitemap
│   └── robots.js                 # Robots.txt
│
├── components/                   # React components
│   ├── layout/
│   │   ├── Navbar.js             # Navigation bar
│   │   ├── Footer.js             # Footer
│   │   └── Container.js          # Content wrapper
│   ├── home/                     # Homepage components
│   ├── about/                    # About page components
│   ├── ministries/               # Ministry components
│   ├── watch/                    # Watch page components
│   ├── events/                   # Event components
│   ├── give/                     # Donation components
│   ├── blogs/                    # Blog components
│   ├── contact/                  # Contact components
│   └── gallery/                  # Gallery components
│
├── lib/                          # Utility libraries
│   ├── mongodb.js                # MongoDB connection
│   └── auth.js                   # Auth utilities
│
├── models/                       # Mongoose models
│   ├── Blog.js
│   ├── Event.js
│   ├── Livestream.js
│   └── Admin.js
│
└── styles/
    └── globals.css               # Global styles + Tailwind
```

### Component Patterns

**Page Components:**
```javascript
// src/app/(site)/about/page.js
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Voice of the Gospel Tabernacle'
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}
```

**Client Components:**
```javascript
// src/components/contact/ContactForm.js
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Server Components (default):**
```javascript
// src/components/about/AboutContent.js
export default function AboutContent() {
  // No 'use client' directive = Server Component
  return <section>...</section>;
}
```

---

## API Documentation

### Authentication

**POST /api/auth/login**

Login admin user and receive JWT token.

Request:
```json
{
  "email": "admin@voiceofgospel.com",
  "password": "admin123"
}
```

Response (200):
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "507f1f77bcf86cd799439011",
    "email": "admin@voiceofgospel.com",
    "name": "Admin"
  }
}
```

Response (401):
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### Blogs

**GET /api/blogs**

Get all blogs (optionally filter by published status).

Query params:
- `published` (optional): `true` | `false`

Response (200):
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Easter Sunday Service",
      "slug": "easter-sunday-service",
      "content": "...",
      "excerpt": "...",
      "featuredImage": "/images/easter.jpg",
      "category": "Sermon",
      "author": "Admin",
      "published": true,
      "createdAt": "2024-03-15T10:00:00.000Z",
      "updatedAt": "2024-03-15T10:00:00.000Z"
    }
  ]
}
```

**POST /api/blogs**

Create new blog post (requires authentication).

Headers:
```
Authorization: Bearer <token>
```

Request:
```json
{
  "title": "New Blog Post",
  "content": "Blog content here...",
  "excerpt": "Short excerpt",
  "featuredImage": "/images/blog.jpg",
  "category": "News",
  "published": true
}
```

Response (201):
```json
{
  "success": true,
  "data": { /* created blog object */ }
}
```

**GET /api/blogs/[id]**

Get single blog by ID.

Response (200):
```json
{
  "success": true,
  "data": { /* blog object */ }
}
```

**PUT /api/blogs/[id]**

Update blog (requires authentication).

Headers:
```
Authorization: Bearer <token>
```

Request:
```json
{
  "title": "Updated Title",
  "published": false
}
```

Response (200):
```json
{
  "success": true,
  "data": { /* updated blog object */ }
}
```

**DELETE /api/blogs/[id]**

Delete blog (requires authentication).

Headers:
```
Authorization: Bearer <token>
```

Response (200):
```json
{
  "success": true,
  "message": "Blog deleted successfully"
}
```

### Events

Similar CRUD operations as Blogs:
- `GET /api/events`
- `POST /api/events`
- `GET /api/events/[id]`
- `PUT /api/events/[id]`
- `DELETE /api/events/[id]`

### Livestream

**GET /api/livestream**

Get current livestream settings.

Response (200):
```json
{
  "success": true,
  "data": {
    "youtubeUrl": "https://www.youtube.com/@channel/live",
    "streamTitle": "Sunday Service",
    "isLive": false,
    "serviceTimes": [
      { "day": "Sunday", "time": "10:00 AM" },
      { "day": "Wednesday", "time": "7:00 PM" }
    ]
  }
}
```

**PUT /api/livestream**

Update livestream settings (requires authentication).

Headers:
```
Authorization: Bearer <token>
```

Request:
```json
{
  "youtubeUrl": "https://www.youtube.com/@newchannel/live",
  "streamTitle": "Live Service",
  "serviceTimes": [
    { "day": "Sunday", "time": "11:00 AM" }
  ]
}
```

### Contact

**POST /api/contact**

Submit contact form.

Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "subject": "Prayer Request",
  "message": "Please pray for..."
}
```

Response (200):
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

---

## Database Schema

### Blog Model

```javascript
// src/models/Blog.js
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    maxlength: 200
  },
  featuredImage: {
    type: String,
    default: '/images/default-blog.jpg'
  },
  category: {
    type: String,
    enum: ['Sermon', 'Testimony', 'News', 'Prayer', 'Event', 'Other'],
    default: 'Other'
  },
  author: {
    type: String,
    default: 'Admin'
  },
  published: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Auto-generate slug from title
blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});
```

### Event Model

```javascript
// src/models/Event.js
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/default-event.jpg'
  }
}, {
  timestamps: true
});

// Index for efficient date queries
eventSchema.index({ date: 1 });
```

### Livestream Model

```javascript
// src/models/Livestream.js
const livestreamSchema = new mongoose.Schema({
  youtubeUrl: {
    type: String,
    default: ''
  },
  streamTitle: {
    type: String,
    default: 'Live Service'
  },
  isLive: {
    type: Boolean,
    default: false
  },
  serviceTimes: [{
    day: String,
    time: String
  }]
}, {
  timestamps: true
});
```

### Admin Model

```javascript
// src/models/Admin.js
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    default: 'Admin'
  }
}, {
  timestamps: true
});

// Don't return password in queries
adminSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
});
```

---

## Authentication System

### JWT Token Generation

```javascript
// src/lib/auth.js
import jwt from 'jsonwebtoken';

export function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}
```

### Protected API Routes

```javascript
// src/lib/auth.js
export function checkAuth(req) {
  const authHeader = req.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { authenticated: false };
  }
  
  const token = authHeader.substring(7);
  const decoded = verifyToken(token);
  
  if (!decoded) {
    return { authenticated: false };
  }
  
  return { authenticated: true, user: decoded };
}
```

### Usage in API Routes

```javascript
// src/app/api/blogs/route.js
import { checkAuth } from '@/lib/auth';

export async function POST(req) {
  const auth = checkAuth(req);
  
  if (!auth.authenticated) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  // Proceed with creating blog
}
```

### Client-Side Authentication

```javascript
// Admin pages
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);
  
  // Page content
}
```

---

## Email System

### Configuration

Uses Gmail SMTP with App Password (not regular password).

**Setting up Gmail App Password:**
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security → App Passwords
3. Generate new app password for "Mail"
4. Use this 16-character password in `GMAIL_APP_PASSWORD`

### Email Templates

```javascript
// src/app/api/contact/route.js
const userEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: #90221A; color: white; padding: 30px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Us!</h1>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>We have received your message...</p>
    </div>
  </div>
</body>
</html>
`;
```

### Sending Emails

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

await transporter.sendMail({
  from: `"Voice of the Gospel" <${process.env.GMAIL_USER}>`,
  to: email,
  subject: 'Thank you for contacting us',
  html: emailTemplate
});
```

---

## Styling System

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#90221A',
        'brand-accent': '#D4A574',
        'background-main': '#FFFFFF',
        'background-light': '#F9FAFB',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### Custom CSS Classes

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .footer-bg {
    @apply bg-gradient-to-b from-gray-900 to-gray-800 text-white;
  }
  
  .btn-primary {
    @apply bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-sm font-semibold transition-all;
  }
}
```

### Responsive Design Breakpoints

```javascript
// Tailwind default breakpoints
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

---

## Adding New Features

### Adding a New Page

1. **Create page file:**
   ```javascript
   // src/app/(site)/new-page/page.js
   import NewPageHero from '@/components/new-page/NewPageHero';
   
   export const metadata = {
     title: 'New Page',
     description: 'Description of new page'
   };
   
   export default function NewPage() {
     return (
       <>
         <NewPageHero />
         {/* Other components */}
       </>
     );
   }
   ```

2. **Create components:**
   ```bash
   mkdir src/components/new-page
   touch src/components/new-page/NewPageHero.js
   ```

3. **Add to navigation:**
   ```javascript
   // src/components/layout/Navbar.js
   const navLinks = [
     // ... existing links
     { href: '/new-page', label: 'New Page' }
   ];
   ```

### Adding a New API Endpoint

1. **Create route file:**
   ```javascript
   // src/app/api/new-endpoint/route.js
   import { NextResponse } from 'next/server';
   
   export async function GET(req) {
     return NextResponse.json({
       success: true,
       data: {}
     });
   }
   
   export async function POST(req) {
     const body = await req.json();
     
     return NextResponse.json({
       success: true,
       data: body
     });
   }
   ```

2. **Add authentication if needed:**
   ```javascript
   import { checkAuth } from '@/lib/auth';
   
   export async function POST(req) {
     const auth = checkAuth(req);
     if (!auth.authenticated) {
       return NextResponse.json(
         { success: false, message: 'Unauthorized' },
         { status: 401 }
       );
     }
     
     // Proceed with logic
   }
   ```

### Adding a New Database Model

1. **Create model file:**
   ```javascript
   // src/models/NewModel.js
   import mongoose from 'mongoose';
   
   const newModelSchema = new mongoose.Schema({
     field1: {
       type: String,
       required: true
     },
     field2: {
       type: Number,
       default: 0
     }
   }, {
     timestamps: true
   });
   
   export default mongoose.models.NewModel || 
     mongoose.model('NewModel', newModelSchema);
   ```

2. **Use in API routes:**
   ```javascript
   import NewModel from '@/models/NewModel';
   import connectDB from '@/lib/mongodb';
   
   export async function GET() {
     await connectDB();
     const items = await NewModel.find({});
     
     return NextResponse.json({
       success: true,
       data: items
     });
   }
   ```

---

## Performance Optimization

### Image Optimization

Always use Next.js Image component:

```javascript
import Image from 'next/image';

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}  // Set true for above-fold images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Code Splitting

Next.js automatically code-splits by route. For dynamic imports:

```javascript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { loading: () => <p>Loading...</p> }
);
```

### Database Query Optimization

```javascript
// Use lean() for read-only queries
const blogs = await Blog.find({ published: true }).lean();

// Select only needed fields
const events = await Event.find({})
  .select('title date time location')
  .lean();

// Use indexes
eventSchema.index({ date: 1 });
blogSchema.index({ slug: 1 });
```

### Caching Strategies

```javascript
// Revalidate static pages every hour
export const revalidate = 3600;

// Or use on-demand revalidation
import { revalidatePath } from 'next/cache';

export async function POST(req) {
  // Update data
  revalidatePath('/blogs');
  
  return NextResponse.json({ success: true });
}
```

---

## Testing

### Manual Testing Checklist

**Before Deployment:**
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Contact form sends emails
- [ ] Admin login works
- [ ] Blog CRUD operations work
- [ ] Event CRUD operations work
- [ ] Livestream settings save
- [ ] Images load correctly
- [ ] Mobile responsive design works
- [ ] Forms validate properly

### Testing Contact Form

1. Fill out contact form
2. Check confirmation email received
3. Check admin notification email received
4. Verify all form fields appear in email

### Testing Admin Panel

1. Login with credentials
2. Create new blog (published and unpublished)
3. Edit existing blog
4. Delete blog
5. Create new event
6. Edit event
7. Delete event
8. Update livestream settings

---

## Deployment Pipeline

### Pre-Deployment Checklist

- [ ] Update environment variables on Vercel
- [ ] Test all features locally
- [ ] Check MongoDB connection
- [ ] Verify email configuration
- [ ] Update SITE_URL in production
- [ ] Test build: `npm run build`

### Deployment Steps

1. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

2. **Automatic deployment:**
   - Vercel detects push
   - Runs build
   - Deploys to production

3. **Manual deployment:**
   ```bash
   vercel --prod
   ```

### Post-Deployment Verification

- [ ] Visit production URL
- [ ] Test critical paths
- [ ] Check error logs in Vercel dashboard
- [ ] Verify environment variables loaded
- [ ] Test contact form in production
- [ ] Test admin panel in production

---

## Troubleshooting

### Build Errors

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

**Error: Environment variable not defined**
- Check `.env.local` exists
- Verify variable names match exactly
- Restart dev server after adding variables

### Database Connection Issues

**Error: MongoServerError**
- Check MongoDB URI is correct
- Verify network access in MongoDB Atlas
- Check database user permissions

### Email Not Sending

**Error: Invalid login**
- Use App Password, not regular Gmail password
- Enable 2FA on Gmail account
- Check GMAIL_USER and GMAIL_APP_PASSWORD

### Authentication Issues

**Token expired or invalid**
- Check JWT_SECRET is set
- Verify token is being sent in Authorization header
- Check token expiration (default 7 days)

---

## Best Practices

### Code Style

```javascript
// Use descriptive variable names
const publishedBlogs = await Blog.find({ published: true });

// Add comments for complex logic
// Extract YouTube video ID from various URL formats
const videoId = extractYouTubeId(url);

// Use async/await instead of .then()
const data = await fetchData();

// Handle errors properly
try {
  await riskyOperation();
} catch (error) {
  console.error('Operation failed:', error);
  return NextResponse.json(
    { success: false, message: 'Operation failed' },
    { status: 500 }
  );
}
```

### Security

- Never commit `.env.local` to Git
- Always validate user input
- Use parameterized queries (Mongoose does this)
- Sanitize HTML input
- Use HTTPS in production
- Keep dependencies updated

### Performance

- Use Server Components by default
- Add 'use client' only when needed
- Optimize images before upload
- Use lazy loading for heavy components
- Minimize client-side JavaScript
- Enable caching where appropriate

---

**Last Updated:** May 2026  
**For:** Developers maintaining Voice of the Gospel Tabernacle Website
