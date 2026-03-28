# Vercel Deployment Guide - Voice of the Gospel Tabernacle

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- GitHub account
- Vercel account (free tier works)
- MongoDB Atlas connection string

---

## 📋 Step-by-Step Deployment

### **Step 1: Push Code to GitHub**

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Voice of the Gospel Tabernacle"
```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name: `voice-of-gospel-tabernacle`
   - Make it **Private** (recommended)
   - Don't initialize with README (you already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/voice-of-gospel-tabernacle.git
git branch -M main
git push -u origin main
```

---

### **Step 2: Deploy to Vercel**

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `voice-of-gospel-tabernacle`
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Add Environment Variables** (IMPORTANT):
   Click "Environment Variables" and add these:

   ```
   MONGODB_URI=mongodb+srv://communityatvgt_db_user:IpgHdweuQtwPeT1D@cluster0.mg3fde1.mongodb.net/voiceofgospel?retryWrites=true&w=majority
   
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   
   ADMIN_EMAIL=admin@voiceofgospel.com
   
   ADMIN_PASSWORD=your-secure-admin-password
   ```

   **⚠️ IMPORTANT**: 
   - Use the "original voice of gospel" MongoDB connection string
   - Change `JWT_SECRET` to a random secure string
   - Change `ADMIN_PASSWORD` to a strong password
   - Add these to **Production**, **Preview**, and **Development** environments

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

---

### **Step 3: Configure Custom Domain (Optional)**

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `voiceofgospel.org`)

2. **Update DNS**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to Vercel's IP

3. **SSL Certificate**:
   - Vercel automatically provisions SSL (HTTPS)
   - Takes 5-10 minutes to activate

---

## 🔒 Security Checklist

Before going live, ensure:

- [ ] Changed `JWT_SECRET` to a strong random string
- [ ] Changed `ADMIN_PASSWORD` to a secure password
- [ ] MongoDB connection string is correct
- [ ] Environment variables are set in Vercel
- [ ] `.env.local` is in `.gitignore` (never commit secrets!)
- [ ] Test admin login at `https://your-site.vercel.app/admin/login`

---

## 🔧 Post-Deployment Configuration

### **Enable Authentication (Production)**

Currently, authentication is temporarily disabled for development. To enable it:

1. **Update API Routes**:
   - Edit `src/app/api/blogs/route.js`
   - Edit `src/app/api/blogs/[id]/route.js`
   - Edit `src/app/api/events/route.js`
   - Edit `src/app/api/events/[id]/route.js`

2. **Uncomment auth checks**:
   ```javascript
   // Change this:
   // const authCheck = await checkAuth(req);
   // if (!authCheck.authenticated) {
   //   return authCheck.response;
   // }
   
   // To this:
   const authCheck = await checkAuth(req);
   if (!authCheck.authenticated) {
     return authCheck.response;
   }
   ```

3. **Update Dashboard**:
   - Edit `src/app/(site)/admin/dashboard/page.js`
   - Uncomment authentication check

4. **Redeploy**:
   ```bash
   git add .
   git commit -m "Enable authentication"
   git push
   ```
   - Vercel will auto-deploy

---

## 📊 MongoDB Atlas Configuration

### **Whitelist Vercel IPs**

1. **Go to MongoDB Atlas**:
   - Navigate to Network Access
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add Vercel's IP ranges

2. **Database User**:
   - Ensure user `communityatvgt_db_user` has read/write permissions
   - Password: `IpgHdweuQtwPeT1D`

---

## 🎯 Testing Your Deployment

### **1. Test Public Pages**
- ✅ Homepage: `https://your-site.vercel.app/`
- ✅ About: `https://your-site.vercel.app/about`
- ✅ Blogs: `https://your-site.vercel.app/blogs`
- ✅ Events: `https://your-site.vercel.app/events`
- ✅ Global Mission: `https://your-site.vercel.app/global-mission`

### **2. Test Admin Panel**
- ✅ Login: `https://your-site.vercel.app/admin/login`
- ✅ Dashboard: `https://your-site.vercel.app/admin/dashboard`
- ✅ Create Blog: `https://your-site.vercel.app/admin/blogs/new`
- ✅ Manage Blogs: `https://your-site.vercel.app/admin/blogs`

### **3. Test Blog Functionality**
1. Create a new blog in admin panel
2. Publish it
3. View it on `/blogs` page
4. Click "Read More" to view full blog
5. Test social sharing buttons

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Your commit message"
git push

# Vercel will automatically:
# 1. Detect the push
# 2. Build your project
# 3. Deploy to production
# 4. Update your live site
```

---

## 📱 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-random-secret-key-here` |
| `ADMIN_EMAIL` | Admin login email | `admin@voiceofgospel.com` |
| `ADMIN_PASSWORD` | Admin login password | `your-secure-password` |

---

## 🐛 Troubleshooting

### **Build Fails**
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### **Database Connection Fails**
- Verify MongoDB connection string
- Check MongoDB Atlas IP whitelist
- Ensure database user has correct permissions

### **Images Not Loading**
- External images are configured in `next.config.js`
- Vercel automatically optimizes images
- Check image URLs are accessible

### **404 on Blog Pages**
- Ensure MongoDB has blogs with `published: true`
- Check API route: `/api/blogs/slug/[slug]`
- Verify slug format in database

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check MongoDB Atlas logs
3. Test API endpoints directly
4. Review browser console for errors

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created and connected
- [ ] Environment variables added in Vercel
- [ ] MongoDB Atlas IP whitelist configured
- [ ] First deployment successful
- [ ] Homepage loads correctly
- [ ] Admin login works
- [ ] Blog creation works
- [ ] Blog display works
- [ ] All pages load without errors
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Authentication enabled (for production)

---

## 🎉 Your Site is Live!

Once deployed, your Voice of the Gospel Tabernacle website will be accessible at:
- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)

**Admin Panel**: `https://your-site.vercel.app/admin/login`

---

## 🔐 Important Security Notes

1. **Never commit `.env.local` to Git**
2. **Use strong passwords** for admin access
3. **Rotate JWT_SECRET** periodically
4. **Enable authentication** before going live
5. **Monitor MongoDB** for unusual activity
6. **Keep dependencies updated** for security patches

---

## 📈 Next Steps After Deployment

1. **Create content**: Add blogs and events through admin panel
2. **Test thoroughly**: Check all pages and features
3. **Monitor performance**: Use Vercel Analytics
4. **Backup database**: Regular MongoDB backups
5. **Update content**: Keep site fresh with new blogs/events

---

**Congratulations! Your church website is now live on Vercel! 🎊**
