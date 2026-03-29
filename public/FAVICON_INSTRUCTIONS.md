# Favicon Setup Instructions

## Required Favicon Files

To complete the favicon setup, you need to create the following image files from your church logo (`/images/1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png`):

### Files Needed:

1. **favicon.ico** (already exists) - 32x32 or 16x16 pixels
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels
4. **apple-touch-icon.png** - 180x180 pixels (for iOS devices)
5. **android-chrome-192x192.png** - 192x192 pixels (for Android)
6. **android-chrome-512x512.png** - 512x512 pixels (for Android)
7. **mstile-150x150.png** - 150x150 pixels (for Windows tiles)
8. **safari-pinned-tab.svg** - SVG format (for Safari pinned tabs)

## How to Generate Favicon Files:

### Option 1: Online Favicon Generator (Easiest)

1. Go to: https://realfavicongenerator.net/
2. Upload your logo: `/images/1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png`
3. Customize settings:
   - **iOS**: Use 180x180 icon
   - **Android**: Use 192x192 and 512x512 icons
   - **Windows**: Use 150x150 tile with #8B0000 background
   - **Safari**: Use SVG or high-res PNG
4. Download the generated package
5. Extract all files to the `/public` folder

### Option 2: Manual Creation

Use an image editor (Photoshop, GIMP, or online tools):

1. Open your logo: `/images/1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png`
2. Resize to each required size
3. Export as PNG (or ICO for favicon.ico)
4. Save all files to `/public` folder

### Option 3: Using ImageMagick (Command Line)

```bash
# Install ImageMagick first
# Then run these commands from the /public/images directory:

# 16x16
convert 1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png -resize 16x16 ../favicon-16x16.png

# 32x32
convert 1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png -resize 32x32 ../favicon-32x32.png

# Apple Touch Icon (180x180)
convert 1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png -resize 180x180 ../apple-touch-icon.png

# Android Chrome 192x192
convert 1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png -resize 192x192 ../android-chrome-192x192.png

# Android Chrome 512x512
convert 1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png -resize 512x512 ../android-chrome-512x512.png

# Windows Tile 150x150
convert 1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png -resize 150x150 ../mstile-150x150.png

# Favicon ICO (32x32)
convert 1-VOICE-OF-THE-GOSPEL-TABERNACLE-LOGO-.png -resize 32x32 ../favicon.ico
```

## Files Already Created:

✅ **site.webmanifest** - PWA manifest file
✅ **browserconfig.xml** - Windows tile configuration
✅ **Favicon metadata in layout.js** - Next.js favicon configuration

## After Creating Favicon Files:

1. Place all generated favicon files in the `/public` folder
2. Commit and push to GitHub
3. Deploy to Vercel
4. Test favicon appears in browser tabs, bookmarks, and mobile home screens

## Testing:

- **Desktop browsers**: Check browser tab icon
- **iOS**: Add to home screen and check icon
- **Android**: Add to home screen and check icon
- **Windows**: Pin to start menu and check tile

## Color Scheme:

- **Primary Color**: #8B0000 (Dark Red)
- **Background**: #FFFFFF (White)

---

**Note**: The favicon setup is already configured in the code. You just need to generate and add the actual image files to the `/public` folder.
