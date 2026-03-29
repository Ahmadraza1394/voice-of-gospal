# 🚀 Deploy to Vercel - Quick Start

Your code is ready and pushed to GitHub! Follow these steps to deploy.

---

## 📍 **Your GitHub Repository**

✅ Repository: `https://github.com/Ahmadraza1394/voice-of-gospal`
✅ Branch: `main`
✅ All code pushed successfully

---

## 🎯 **Deploy in 5 Minutes**

### **Step 1: Go to Vercel**
1. Open: https://vercel.com/new
2. Sign in with GitHub (if not already)

### **Step 2: Import Repository**
1. You'll see your repositories
2. Find: `voice-of-gospal`
3. Click **"Import"**

### **Step 3: Configure Project**
- **Framework:** Next.js ✅ (auto-detected)
- **Root Directory:** `./` ✅ (default)
- **Build Command:** `next build` ✅ (auto)
- **Output Directory:** `.next` ✅ (auto)

**Don't deploy yet!** Click **"Environment Variables"** first.

### **Step 4: Add Environment Variables**

Click **"Environment Variables"** and add these **exactly**:

#### **Copy-Paste These:**

```
MONGODB_URI
mongodb+srv://communityatvgt_db_user:YjJHbNtBDKhHjM66@cluster0.mg3fde1.mongodb.net/voiceofgospel?retryWrites=true&w=majority

JWT_SECRET
Secret123!

ADMIN_EMAIL
admin@voiceofgospel.com

ADMIN_PASSWORD
123456789

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
dmhhkhy3r

NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
ml_default
```

**For each variable:**
1. Paste **Key** (e.g., `MONGODB_URI`)
2. Paste **Value** (the long string)
3. Select **All environments** (Production, Preview, Development)
4. Click **"Add"**
5. Repeat for all 6 variables

#### **Optional - Contact Form (Add Later):**
```
GMAIL_USER
your-email@gmail.com

GMAIL_APP_PASSWORD
your-16-char-app-password

CONTACT_EMAIL_TO
admin@voiceofgospel.com
```

### **Step 5: Deploy!**
1. After adding all variables
2. Click **"Deploy"** button
3. Wait 2-3 minutes ⏳
4. ✅ Done!

---

## 🎉 **Your Website Will Be Live At:**

`https://voice-of-gospal.vercel.app`

(or similar - Vercel will show you the exact URL)

---

## ✅ **After Deployment - Test These:**

1. **Homepage:** Check it loads
2. **Admin Login:** Go to `/admin/login`
   - Email: `admin@voiceofgospel.com`
   - Password: `123456789`
3. **Create Blog:** Test admin panel
4. **Create Event:** Test event creation
5. **Livestream:** Update YouTube link
6. **Contact Form:** Send test message (if Gmail configured)

---

## 🔒 **Security - Do This First!**

After successful deployment:

1. **Change Admin Password:**
   - Login to admin panel
   - Change password
   - Update in Vercel env vars

2. **Change JWT Secret:**
   - Generate random: https://randomkeygen.com/
   - Update `JWT_SECRET` in Vercel
   - Redeploy

---

## 🌐 **Add Custom Domain (Optional)**

In Vercel Dashboard:
1. Go to **Settings** → **Domains**
2. Add: `voiceofgospel.com`
3. Follow DNS instructions
4. Wait for SSL certificate

---

## 🔄 **Future Updates**

To update your website:
```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will **automatically** rebuild and deploy! 🚀

---

## 📊 **Vercel Dashboard**

Access at: https://vercel.com/dashboard

**Features:**
- View deployments
- Check analytics
- Manage domains
- Update environment variables
- View logs

---

## 🆘 **Troubleshooting**

### **Build Failed?**
- Check build logs in Vercel
- Verify all env variables added
- Check for typos in variable names

### **MongoDB Connection Error?**
- Verify connection string is correct
- Check MongoDB Atlas IP whitelist (use `0.0.0.0/0`)
- Test connection locally first

### **Admin Login Not Working?**
- Check `JWT_SECRET` is set
- Verify `ADMIN_EMAIL` and `ADMIN_PASSWORD`
- Clear browser cache

### **Images Not Uploading?**
- Verify Cloudinary credentials
- Check upload preset is unsigned
- Test in admin panel

---

## 📞 **Need Help?**

If deployment fails:
1. Check Vercel build logs
2. Verify environment variables
3. Test locally: `npm run build`
4. Check GitHub repository is updated

---

## ✨ **What's Included**

Your deployed website has:
- ✅ Modern admin dashboard
- ✅ Blog management
- ✅ Event management
- ✅ Livestream settings
- ✅ Contact form (with Nodemailer)
- ✅ Image uploads (Cloudinary)
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast performance

---

**Ready to deploy! Go to https://vercel.com/new and follow the steps above.** 🚀

**Deployment time: ~5 minutes**
