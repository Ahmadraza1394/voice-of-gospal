# Logo Setup Instructions

## Where to Place Your Logo

Place your logo image in the following directory:

```
public/images/logo.png
```

### Full Path:
```
d:/fiverr/In Progress/voiceOfGospel/public/images/logo.png
```

## Logo Requirements

- **Format**: PNG, SVG, or JPG
- **Recommended filename**: `logo.png` or `logo.svg`
- **Recommended size**: 
  - Minimum: 200x200 pixels
  - Recommended: 400x400 pixels or higher for retina displays
- **Aspect ratio**: Square or close to square works best
- **Background**: Transparent background (PNG) is recommended

## If Using a Different Filename

If you want to use a different filename (e.g., `church-logo.svg`), update the following file:

**File**: `src/components/layout/Navbar.js`

**Line 28**: Change from:
```js
src="/images/logo.png"
```

To:
```js
src="/images/your-filename.svg"
```

## Current Setup

The Navbar component is already configured to display your logo. Once you place the logo file in the correct location, it will automatically appear in the navigation bar.

### Logo Display:
- **Desktop**: Logo + "Voice of the Gospel Tabernacle" text
- **Mobile**: Logo only (text hidden to save space)
- **Size**: 48px x 48px (automatically scaled)

## Testing

After placing your logo:
1. Run `npm run dev`
2. Open http://localhost:3000
3. Your logo should appear in the top-left corner of the navigation bar

## Troubleshooting

If the logo doesn't appear:
1. Verify the file is in `public/images/logo.png`
2. Check the filename matches exactly (case-sensitive)
3. Restart the development server
4. Clear your browser cache
