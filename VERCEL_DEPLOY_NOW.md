# 🚀 Deploy to Vercel - Step-by-Step Guide

Follow these exact steps to deploy your Voice of the Gospel website to Vercel.

---

## ✅ **Pre-Deployment Checklist**

Before deploying, make sure you have:
- ✅ MongoDB Atlas account with database ready
- ✅ Cloudinary account with upload preset
- ✅ Gmail app password for contact form
- ✅ GitHub account (or GitLab/Bitbucket)
- ✅ Vercel account (free)

---

## 📋 **Step 1: Push Code to GitHub**

### **Option A: Using Git Command Line**

1. **Initialize Git (if not already done):**
```bash
git init
git add .
git commit -m "Initial commit - Voice of Gospel website"
```

2. **Create GitHub Repository:**
   - Go to: https://github.com/new
   - Repository name: `voice-of-gospel`
   - Make it **Private** (recommended)
   - Don't initialize with README (we already have one)
   - Click **Create repository**

3. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR-USERNAME/voice-of-gospel.git
git branch -M main
git push -u origin main
```

### **Option B: Using GitHub Desktop**

1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. Click **File** → **Add Local Repository**
4. Select your project folder
5. Click **Publish repository**
6. Choose **Private** repository
7. Click **Publish**

---

## 🌐 **Step 2: Deploy to Vercel**

### **A. Create Vercel Account**

1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Complete account setup

### **B. Import Project**

1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find `voice-of-gospel` repository
4. Click **"Import"**

### **C. Configure Project**

1. **Framework Preset:** Next.js (auto-detected)
2. **Root Directory:** `./` (leave as is)
3. **Build Command:** `next build` (auto-filled)
4. **Output Directory:** `.next` (auto-filled)
5. **Install Command:** `npm install` (auto-filled)

**Don't click Deploy yet!** We need to add environment variables first.

---

## 🔐 **Step 3: Add Environment Variables**

Click **"Environment Variables"** section and add these **one by one**:

### **Required Variables:**

| Key | Value | Notes |
|-----|-------|-------|
| `MONGODB_URI` | `mongodb+srv://communityatvgt_db_user:YjJHbNtBDKhHjM66@cluster0.mg3fde1.mongodb.net/voiceofgospel?retryWrites=true&w=majority` | Your MongoDB connection |
| `JWT_SECRET` | `Secret123!` | Change to something more secure |
| `ADMIN_EMAIL` | `admin@voiceofgospel.com` | Admin login email |
| `ADMIN_PASSWORD` | `123456789` | Change to secure password |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | `dmhhkhy3r` | Your Cloudinary cloud name |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | `ml_default` | Your Cloudinary preset |

### **Optional (Contact Form):**

| Key | Value | Notes |
|-----|-------|-------|
| `GMAIL_USER` | `your-email@gmail.com` | Your Gmail address |
| `GMAIL_APP_PASSWORD` | `your-16-char-password` | Gmail app password |
| `CONTACT_EMAIL_TO` | `admin@voiceofgospel.com` | Where to receive messages |

**How to add each variable:**
1. Enter the **Key** (exact name)
2. Enter the **Value**
3. Select **Production**, **Preview**, and **Development** (all three)
4. Click **"Add"**
5. Repeat for all variables

---

## 🎯 **Step 4: Deploy**

1. After adding all environment variables
2. Click **"Deploy"** button
3. Wait 2-5 minutes for build to complete
4. Watch the build logs (optional)

---

## ✅ **Step 5: Verify Deployment**

Once deployed, you'll see:
- ✅ **Production URL:** `https://voice-of-gospel.vercel.app` (or similar)
- ✅ **Deployment Status:** Ready

**Test these features:**
1. Visit the homepage
2. Check navigation works
3. Test admin login: `/admin/login`
4. Create a test blog post
5. Create a test event
6. Test contact form
7. Test livestream settings

---

## 🔧 **Step 6: Custom Domain (Optional)**

### **Add Your Own Domain:**

1. In Vercel project → **Settings** → **Domains**
2. Enter your domain: `voiceofgospel.com`
3. Click **"Add"**
4. Follow DNS configuration instructions
5. Add these records to your domain registrar:

**For root domain (voiceofgospel.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

6. Wait for DNS propagation (5 minutes - 48 hours)
7. Vercel will auto-issue SSL certificate

---

## 🔄 **Automatic Deployments**

Now every time you push to GitHub:
- ✅ Vercel automatically deploys
- ✅ Preview deployments for branches
- ✅ Production deployment for main branch

**To update your site:**
```bash
git add .
git commit -m "Update description"
git push
```

Vercel will automatically rebuild and deploy!

---

## 📊 **Vercel Dashboard Features**

### **Deployments Tab:**
- View all deployments
- See build logs
- Rollback to previous versions
- Preview deployments

### **Analytics Tab:**
- Page views
- Visitor stats
- Performance metrics
- Web Vitals

### **Settings Tab:**
- Environment variables
- Custom domains
- Build & development settings
- Integrations

---

## ⚠️ **Important Security Notes**

### **After First Deployment:**

1. **Change Admin Password:**
   - Log in to admin panel
   - Change default password
   - Update `ADMIN_PASSWORD` in Vercel

2. **Change JWT Secret:**
   - Generate random string: https://randomkeygen.com/
   - Update `JWT_SECRET` in Vercel
   - Redeploy

3. **Secure MongoDB:**
   - Use strong password (already done ✅)
   - Whitelist Vercel IPs or use 0.0.0.0/0
   - Enable MongoDB Atlas monitoring

4. **Review Environment Variables:**
   - Never commit `.env.local` to Git
   - Keep secrets in Vercel only
   - Rotate passwords regularly

---

## 🐛 **Troubleshooting**

### **Build Failed:**
- Check build logs in Vercel
- Verify all dependencies in `package.json`
- Check for syntax errors
- Ensure Node.js version compatibility

### **Environment Variables Not Working:**
- Verify variable names are exact
- Check for typos
- Redeploy after adding variables
- Clear build cache and redeploy

### **MongoDB Connection Failed:**
- Check MongoDB Atlas IP whitelist
- Verify connection string is correct
- Check MongoDB Atlas cluster is running
- Test connection string locally first

### **Images Not Loading:**
- Verify Cloudinary credentials
- Check `next.config.js` has correct domains
- Test image upload in admin panel

### **Contact Form Not Sending:**
- Verify Gmail app password
- Check Gmail account isn't blocked
- Test with different email address
- Check Vercel function logs

---

## 📈 **Performance Optimization**

Vercel automatically provides:
- ✅ Global CDN
- ✅ Edge caching
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Serverless functions
- ✅ DDoS protection

---

## 💰 **Vercel Pricing**

**Free Tier (Hobby):**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Serverless functions
- ✅ Automatic HTTPS
- ✅ Preview deployments
- ✅ Analytics (basic)

**Perfect for your church website!**

---

## 🔗 **Useful Links**

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Deployment Docs:** https://vercel.com/docs/deployments/overview
- **Environment Variables:** https://vercel.com/docs/environment-variables
- **Custom Domains:** https://vercel.com/docs/custom-domains
- **Build Logs:** Check in your project dashboard

---

## 📝 **Quick Reference - Environment Variables**

Copy these to Vercel (update values as needed):

```env
MONGODB_URI=mongodb+srv://communityatvgt_db_user:YjJHbNtBDKhHjM66@cluster0.mg3fde1.mongodb.net/voiceofgospel?retryWrites=true&w=majority
JWT_SECRET=Secret123!
ADMIN_EMAIL=admin@voiceofgospel.com
ADMIN_PASSWORD=123456789
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dmhhkhy3r
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=ml_default
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
CONTACT_EMAIL_TO=admin@voiceofgospel.com
```

---

## ✨ **Post-Deployment Checklist**

After successful deployment:

- [ ] Test homepage loads
- [ ] Test all navigation links
- [ ] Login to admin panel
- [ ] Create test blog post
- [ ] Create test event
- [ ] Update livestream settings
- [ ] Test contact form
- [ ] Test image uploads
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Set up custom domain (optional)
- [ ] Change default passwords
- [ ] Share website URL with team

---

## 🎉 **You're Live!**

Your website is now live on the internet!

**Default URL:** `https://your-project-name.vercel.app`

Share it with your congregation! 🙏✨

---

## 🆘 **Need Help?**

If you encounter any issues:
1. Check Vercel build logs
2. Review error messages
3. Check environment variables
4. Test locally first
5. Contact Vercel support (free tier included)

**Your website is ready to deploy! Follow the steps above and you'll be live in 10 minutes.** 🚀
