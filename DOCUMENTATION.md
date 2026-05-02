# Voice of the Gospel Tabernacle Website - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Key Features](#key-features)
6. [Admin Panel Guide](#admin-panel-guide)
7. [Content Management](#content-management)
8. [Customization Guide](#customization-guide)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

The Voice of the Gospel Tabernacle website is a modern, full-featured church website built with cutting-edge web technologies. It provides:

- **Public-facing pages** for visitors to learn about the church, watch services, view events, and donate
- **Admin panel** for managing content (blogs, events, livestream settings)
- **Contact form** with email notifications
- **PayPal integration** for donations
- **YouTube livestream** integration
- **Photo gallery** for church events
- **Mobile-responsive design** that works on all devices

---

## Technology Stack

### Core Technologies
- **Next.js 15** - Modern React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **MongoDB** - Database for storing blogs, events, and livestream data
- **Mongoose** - MongoDB object modeling for Node.js
- **Tailwind CSS** - Utility-first CSS framework for styling

### Additional Libraries
- **nodemailer** - Sending emails from contact form
- **jsonwebtoken** - Admin authentication
- **bcryptjs** - Password hashing for admin security
- **Next.js Image** - Optimized image loading

### Hosting & Deployment
- **Vercel** - Cloud platform for deployment
- **MongoDB Atlas** - Cloud database hosting

---

## Getting Started

### Prerequisites
- Node.js 18+ installed on your computer
- A code editor (VS Code recommended)
- Git for version control

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd voice-of-gospel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory with these variables:
   ```env
   # MongoDB Connection
   MONGODB_URI=your_mongodb_connection_string
   
   # Admin Authentication
   JWT_SECRET=your_secret_key_here
   
   # Email Configuration (for contact form)
   GMAIL_USER=your_email@gmail.com
   GMAIL_APP_PASSWORD=your_gmail_app_password
   CONTACT_EMAIL_TO=nhomicil@yahoo.com
   
   # Site URL (for sitemap and robots.txt)
   SITE_URL=https://voice-of-gospel.vercel.app
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Visit `http://localhost:3000` to see the website

---

## Project Structure

```
voice-of-gospel/
│
├── public/                          # Static files (images, icons)
│   └── images/                      # All website images
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── (site)/                  # Public website pages
│   │   │   ├── layout.js            # Main layout with Navbar & Footer
│   │   │   ├── page.js              # Home page
│   │   │   ├── about/               # About page
│   │   │   ├── ministries/          # Ministries page
│   │   │   ├── watch/               # Watch/livestream page
│   │   │   ├── events/              # Events page
│   │   │   ├── give/                # Donation page
│   │   │   ├── visit/               # Visit page
│   │   │   ├── gallery/             # Photo gallery
│   │   │   ├── blogs/               # Blog listing
│   │   │   ├── contact/             # Contact page
│   │   │   └── global-mission/      # Global mission pages
│   │   │
│   │   ├── admin/                   # Admin panel
│   │   │   ├── login/               # Admin login
│   │   │   ├── blogs/               # Blog management
│   │   │   ├── events/              # Event management
│   │   │   └── livestream/          # Livestream settings
│   │   │
│   │   ├── api/                     # API routes
│   │   │   ├── auth/                # Authentication
│   │   │   ├── blogs/               # Blog CRUD operations
│   │   │   ├── events/              # Event CRUD operations
│   │   │   ├── livestream/          # Livestream settings
│   │   │   └── contact/             # Contact form handler
│   │   │
│   │   ├── sitemap.js               # SEO sitemap
│   │   └── robots.js                # SEO robots.txt
│   │
│   ├── components/                  # Reusable components
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.js            # Navigation bar
│   │   │   ├── Footer.js            # Footer
│   │   │   └── Container.js         # Content wrapper
│   │   │
│   │   ├── home/                    # Home page components
│   │   ├── about/                   # About page components
│   │   ├── ministries/              # Ministry components
│   │   ├── watch/                   # Watch page components
│   │   ├── events/                  # Event components
│   │   ├── give/                    # Donation components
│   │   ├── blogs/                   # Blog components
│   │   ├── contact/                 # Contact components
│   │   └── gallery/                 # Gallery components
│   │
│   ├── lib/                         # Utility functions
│   │   ├── mongodb.js               # Database connection
│   │   └── auth.js                  # Authentication utilities
│   │
│   ├── models/                      # Database models
│   │   ├── Blog.js                  # Blog schema
│   │   ├── Event.js                 # Event schema
│   │   ├── Livestream.js            # Livestream schema
│   │   └── Admin.js                 # Admin user schema
│   │
│   └── styles/
│       └── globals.css              # Global styles & Tailwind
│
├── .env.local                       # Environment variables (not in git)
├── package.json                     # Project dependencies
├── tailwind.config.js               # Tailwind CSS configuration
└── next.config.js                   # Next.js configuration
```

---

## Key Features

### 1. **Homepage**
- Hero carousel with church images
- Bishop's welcome section
- Ministries overview grid
- Upcoming events display
- Recent blog posts
- Call-to-action sections

### 2. **About Page**
- Church history and mission
- Leadership information
- Core values and beliefs
- Contact section with service times

### 3. **Ministries Page**
- Women's Ministry
- Men's Ministry
- Youth Ministry
- Music Ministry
- Food Distribution
- Single "Contact Us to Learn More" button

### 4. **Watch Page**
- YouTube livestream integration
- Handles both specific video IDs and channel live URLs
- Service times display
- Clickable link to YouTube when using channel URL

### 5. **Events Page**
- Displays upcoming events from database
- Event details (date, time, location, description)
- Managed through admin panel

### 6. **Give Page**
- PayPal donation button integration
- QR code for mobile donations
- Responsive layout

### 7. **Gallery Page**
- Photo gallery with category filtering
- Modal view for larger images
- Images stored in `/public/images/`

### 8. **Blog Page**
- Blog posts managed through admin
- Category filtering
- Search functionality
- Published/draft status

### 9. **Contact Page**
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Subject
  - Message
- Sends confirmation email to visitor
- Sends notification email to church admin
- Displays church contact information:
  - Physical Address: 47-49 Edgewater Dr, Mattapan, MA 02126
  - Mailing Address: P.O. Box 260564, Mattapan, MA 02126
  - Phone: (857) 312-0663
  - Email: nhomicil@yahoo.com

### 10. **Admin Panel**
- Secure login with JWT authentication
- Manage blogs (create, edit, delete, publish/unpublish)
- Manage events (create, edit, delete)
- Configure livestream settings (YouTube URL, service times)

---

## Admin Panel Guide

### Accessing the Admin Panel

1. Navigate to `/admin/login`
2. Enter admin credentials
3. Click "Sign In"

### Default Admin Credentials
**Important:** Change these after first login!
- Email: `admin@voiceofgospel.com`
- Password: `admin123`

### Managing Blogs

**To Create a New Blog Post:**
1. Go to Admin Dashboard → Blogs
2. Click "Create New Blog"
3. Fill in:
   - Title
   - Category (select from dropdown)
   - Featured Image URL (path to image in `/public/images/`)
   - Content (supports rich text)
   - Published status (toggle on/off)
4. Click "Create Blog"

**To Edit a Blog Post:**
1. Go to Admin Dashboard → Blogs
2. Click "Edit" on the blog you want to modify
3. Make your changes
4. Click "Update Blog"

**To Delete a Blog Post:**
1. Go to Admin Dashboard → Blogs
2. Click "Delete" on the blog
3. Confirm deletion

### Managing Events

**To Create a New Event:**
1. Go to Admin Dashboard → Events
2. Click "Create New Event"
3. Fill in:
   - Title
   - Date (select from calendar)
   - Time
   - Location
   - Description
   - Image URL (optional)
4. Click "Create Event"

**To Edit an Event:**
1. Go to Admin Dashboard → Events
2. Click "Edit" on the event
3. Make your changes
4. Click "Update Event"

**To Delete an Event:**
1. Go to Admin Dashboard → Events
2. Click "Delete" on the event
3. Confirm deletion

### Managing Livestream

**To Update Livestream Settings:**
1. Go to Admin Dashboard → Livestream
2. Enter YouTube URL:
   - For specific video: `https://www.youtube.com/watch?v=VIDEO_ID`
   - For channel live: `https://www.youtube.com/@channelname/live`
3. Add service times (optional):
   - Click "Add Service Time"
   - Enter day and time (e.g., "Sunday 10:00 AM")
4. Click "Update Livestream"

---

## Content Management

### Adding Images

1. **Prepare your image:**
   - Recommended size: 1920x1080px for banners, 800x600px for general use
   - Format: JPG or PNG
   - Optimize for web (compress to reduce file size)

2. **Upload to project:**
   - Place image in `/public/images/` folder
   - Use descriptive filename (e.g., `easter-service-2024.jpg`)

3. **Reference in code or admin:**
   - Use path: `/images/your-image-name.jpg`
   - Example in admin: When creating a blog, enter `/images/easter-service-2024.jpg` in Featured Image field

### Updating Contact Information

**To change church contact details:**

1. **Footer** (`src/components/layout/Footer.js`):
   - Find line ~142-145 for addresses
   - Find line ~162 for phone
   - Find line ~178 for email

2. **Contact Page** (`src/components/contact/ContactInfo.js`):
   - Find line ~104 for physical address
   - Find line ~125 for mailing address
   - Find line ~145 for phone
   - Find line ~167 for email

3. **Visit Page** (`src/components/visit/LocationMap.js`):
   - Find line ~48 for address
   - Find line ~66 for phone

### Updating Navigation Links

**To modify menu items:**

Edit `src/components/layout/Navbar.js`:
- Find `navLinks` array (around line 9)
- Add, remove, or modify links:
  ```javascript
  { href: "/your-page", label: "Your Page Name" }
  ```

**To modify footer links:**

Edit `src/components/layout/Footer.js`:
- Find `quickLinks` array (around line 5)
- Add, remove, or modify links

---

## Customization Guide

### Changing Colors

The website uses a color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  'brand-primary': '#90221A',    // Main red color
  'brand-accent': '#D4A574',     // Gold accent
  'background-main': '#FFFFFF',  // White background
  'background-light': '#F9FAFB', // Light gray
}
```

**To change colors:**
1. Open `tailwind.config.js`
2. Modify the hex color codes
3. Save and refresh your browser

### Changing Fonts

Current fonts:
- **Headings:** Playfair Display (serif)
- **Body text:** Lato (sans-serif)

**To change fonts:**
1. Open `src/app/layout.js`
2. Import new Google Fonts
3. Update font variables
4. Modify `tailwind.config.js` to use new fonts

### Modifying Hero Section Heights

All page hero sections use consistent heights:
- Mobile: 300px
- Tablet: 350px
- Desktop: 400px

**To adjust heights:**
1. Find the hero component (e.g., `src/components/about/AboutChurchHero.js`)
2. Modify the className on the `<section>` tag:
   ```javascript
   className="relative h-[300px] md:h-[350px] lg:h-[400px]"
   ```
3. Change pixel values as desired

### Adding a New Page

1. **Create page file:**
   ```
   src/app/(site)/your-page/page.js
   ```

2. **Create page component:**
   ```javascript
   export default function YourPage() {
     return (
       <>
         <YourHero />
         <YourContent />
       </>
     );
   }
   ```

3. **Add to navigation:**
   - Edit `src/components/layout/Navbar.js`
   - Add to `navLinks` array

4. **Create components:**
   - Create folder: `src/components/your-page/`
   - Add components as needed

---

## Deployment

### Deploying to Vercel

**First-time deployment:**

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure environment variables (copy from `.env.local`)
   - Click "Deploy"

**Subsequent deployments:**

Simply push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel will automatically deploy your changes.

**Manual deployment from command line:**
```bash
vercel --prod
```

### Environment Variables on Vercel

After connecting your project, add these environment variables in Vercel dashboard:

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `CONTACT_EMAIL_TO`
   - `SITE_URL`

### Custom Domain Setup

1. Go to Vercel Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (can take up to 48 hours)

---

## Troubleshooting

### Common Issues and Solutions

#### **Issue: Contact form emails not sending**

**Solution:**
1. Verify Gmail credentials in environment variables
2. Enable "Less secure app access" or use App Password
3. Check `GMAIL_USER` and `GMAIL_APP_PASSWORD` are correct
4. Ensure `CONTACT_EMAIL_TO` is set to `nhomicil@yahoo.com`

#### **Issue: Admin login not working**

**Solution:**
1. Check MongoDB connection is active
2. Verify `JWT_SECRET` is set in environment variables
3. Clear browser cookies and try again
4. Check admin user exists in database

#### **Issue: Images not displaying**

**Solution:**
1. Verify image exists in `/public/images/` folder
2. Check image path starts with `/images/` (not `./images/`)
3. Ensure image filename matches exactly (case-sensitive)
4. Check image file format is supported (jpg, png, webp)

#### **Issue: Livestream not showing**

**Solution:**
1. Check YouTube URL is correct in admin panel
2. For channel live URLs, use format: `https://www.youtube.com/@channelname/live`
3. For specific videos, use format: `https://www.youtube.com/watch?v=VIDEO_ID`
4. Verify livestream settings are saved in database

#### **Issue: Blog posts not appearing**

**Solution:**
1. Check blog is marked as "Published" in admin
2. Verify blog has all required fields filled
3. Check MongoDB connection is working
4. Clear browser cache and refresh

#### **Issue: Deployment failed on Vercel**

**Solution:**
1. Check build logs for specific errors
2. Verify all environment variables are set
3. Ensure `package.json` has correct scripts
4. Check Node.js version compatibility (use 18+)

---

## Database Schema Reference

### Blog Model
```javascript
{
  title: String (required),
  slug: String (auto-generated),
  content: String (required),
  excerpt: String,
  featuredImage: String,
  category: String,
  author: String (default: "Admin"),
  published: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

### Event Model
```javascript
{
  title: String (required),
  description: String (required),
  date: Date (required),
  time: String (required),
  location: String (required),
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Livestream Model
```javascript
{
  youtubeUrl: String,
  streamTitle: String,
  isLive: Boolean (default: false),
  serviceTimes: [{
    day: String,
    time: String
  }],
  updatedAt: Date
}
```

### Admin Model
```javascript
{
  email: String (required, unique),
  password: String (required, hashed),
  name: String,
  createdAt: Date
}
```

---

## Support and Maintenance

### Regular Maintenance Tasks

**Weekly:**
- Check contact form is working
- Review and respond to new blog comments (if enabled)
- Update upcoming events

**Monthly:**
- Review and update outdated content
- Check all links are working
- Update photos in gallery
- Review analytics (if configured)

**Quarterly:**
- Update dependencies: `npm update`
- Review security: `npm audit`
- Backup database
- Test all forms and features

### Getting Help

**For technical issues:**
- Check this documentation first
- Review error messages in browser console (F12)
- Check Vercel deployment logs
- Contact your developer

**For content updates:**
- Use the admin panel for blogs, events, and livestream
- For other changes, refer to the Customization Guide section

---

## Security Best Practices

1. **Change default admin password immediately**
2. **Keep environment variables secret** - never commit `.env.local` to Git
3. **Use strong passwords** for admin accounts
4. **Keep dependencies updated** - run `npm update` regularly
5. **Enable 2FA on Vercel account**
6. **Backup database regularly** - use MongoDB Atlas automated backups
7. **Monitor admin panel access** - review login attempts

---

## Quick Reference

### Important File Locations

| What to Update | File Location |
|----------------|---------------|
| Contact Email | `src/components/layout/Footer.js` line 178<br>`src/components/contact/ContactInfo.js` line 167 |
| Phone Number | `src/components/layout/Footer.js` line 162<br>`src/components/contact/ContactInfo.js` line 145 |
| Physical Address | `src/components/layout/Footer.js` line 142<br>`src/components/contact/ContactInfo.js` line 104 |
| Mailing Address | `src/components/layout/Footer.js` line 144<br>`src/components/contact/ContactInfo.js` line 125 |
| Navigation Menu | `src/components/layout/Navbar.js` line 9 |
| Footer Links | `src/components/layout/Footer.js` line 5 |
| Home Page Content | `src/app/(site)/page.js` |
| Colors | `tailwind.config.js` |

### Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Update dependencies
npm update

# Check for security issues
npm audit
```

---

**Last Updated:** May 2026  
**Version:** 1.0  
**Maintained by:** Voice of the Gospel Tabernacle Development Team
