# Cloudinary Setup Guide - Image Upload

This guide will help you set up Cloudinary for image uploads in your admin panel.

---

## 🎯 Why Cloudinary?

- ✅ **Free tier** - 25GB storage, 25GB bandwidth/month
- ✅ **Automatic optimization** - Images are compressed and optimized
- ✅ **CDN delivery** - Fast image loading worldwide
- ✅ **Easy integration** - Works perfectly with Vercel
- ✅ **No server storage needed** - Perfect for serverless

---

## 📝 Step-by-Step Setup

### **Step 1: Create Cloudinary Account**

1. Go to **https://cloudinary.com/users/register_free**
2. Sign up with your email (free account)
3. Verify your email
4. You'll be redirected to the dashboard

---

### **Step 2: Get Your Cloud Name**

1. In the Cloudinary dashboard, you'll see:
   - **Cloud name** (e.g., `dxyz123abc`)
   - API Key
   - API Secret

2. **Copy your Cloud Name** - you'll need this

---

### **Step 3: Create Upload Preset**

1. In Cloudinary dashboard, go to **Settings** (gear icon)
2. Click **Upload** tab
3. Scroll down to **Upload presets**
4. Click **Add upload preset**
5. Configure:
   - **Preset name**: `voiceofgospel` (or any name you like)
   - **Signing Mode**: **Unsigned** (important!)
   - **Folder**: `voiceofgospel` (optional, organizes your images)
   - Leave other settings as default
6. Click **Save**
7. **Copy the preset name** you created

---

### **Step 4: Add to Environment Variables**

#### **For Local Development:**

1. Open your `.env.local` file
2. Add these lines:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name-here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=voiceofgospel
```

Replace `your-cloud-name-here` with your actual cloud name from Step 2.

#### **For Vercel Deployment:**

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these two variables:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your-cloud-name-here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = voiceofgospel
```

4. Make sure to add them to **Production**, **Preview**, and **Development** environments

---

### **Step 5: Restart Your Dev Server**

```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

---

## ✅ Test Image Upload

1. Go to **http://localhost:3000/admin/blogs/new**
2. You'll see a new image upload section with:
   - **Drag & drop area** - Click to upload from computer
   - **OR** - URL input (still works if you prefer)
3. Try uploading an image:
   - Click the upload area
   - Select an image (PNG, JPG, GIF up to 5MB)
   - Wait for upload (shows "Uploading...")
   - Image preview appears
   - Image URL is automatically saved

---

## 🎨 How It Works

### **Upload Flow:**
1. User selects image from computer
2. Image is sent to `/api/upload` endpoint
3. Server uploads to Cloudinary
4. Cloudinary returns optimized image URL
5. URL is saved in database
6. Image displays from Cloudinary CDN

### **Features:**
- ✅ **Drag & drop** or click to upload
- ✅ **File validation** - Only images, max 5MB
- ✅ **Live preview** - See image before saving
- ✅ **Remove button** - Delete and re-upload
- ✅ **URL option** - Can still paste URLs if preferred
- ✅ **Automatic optimization** - Cloudinary compresses images

---

## 📊 Cloudinary Free Tier Limits

| Feature | Free Tier |
|---------|-----------|
| Storage | 25 GB |
| Bandwidth | 25 GB/month |
| Transformations | 25 credits/month |
| Images | Unlimited |

**This is more than enough for a church website!**

---

## 🔧 Troubleshooting

### **Upload fails with "Upload failed"**

1. Check your Cloud Name is correct
2. Check your Upload Preset name matches
3. Make sure preset is set to **Unsigned**
4. Restart your dev server

### **"No file provided" error**

- Make sure you're selecting an image file
- Check file size is under 5MB

### **Image doesn't show in preview**

- Check browser console for errors
- Verify Cloudinary credentials
- Try a different image

### **CORS errors**

- Cloudinary should work by default
- If issues, check Cloudinary settings → Security → Allowed domains

---

## 🎯 Where Image Upload Works

Image upload is now available in:

1. **Blog Management**
   - `/admin/blogs/new` - Create new blog
   - `/admin/blogs/edit/[id]` - Edit existing blog

2. **Event Management**
   - `/admin/events/new` - Create new event
   - `/admin/events/edit/[id]` - Edit existing event

---

## 💡 Tips

1. **Image Size**: Keep images under 2MB for best performance
2. **Dimensions**: Recommended 1200x630px for blogs/events
3. **Format**: JPG for photos, PNG for graphics with transparency
4. **Organization**: Images are stored in Cloudinary with automatic names
5. **Backup**: Cloudinary keeps your images safe, no need to backup

---

## 🔐 Security

- Upload preset is **unsigned** for easy uploads
- Only images are accepted (validated)
- File size limited to 5MB
- Cloudinary scans for malicious content
- Images are served over HTTPS

---

## 📱 Mobile Upload

The image upload works on mobile devices too:
- Tap the upload area
- Choose from camera or gallery
- Upload directly from phone

---

## 🎉 You're All Set!

Once configured, you can:
1. Upload images directly from your computer
2. Images are automatically optimized
3. Fast CDN delivery worldwide
4. No storage worries
5. Professional image management

**No more copying and pasting image URLs!** 🎊

---

## 📞 Support

If you need help:
1. Check Cloudinary dashboard for upload logs
2. Check browser console for errors
3. Verify environment variables are set
4. Restart dev server after changes

---

**Happy uploading!** 📸
