# Voice of Gospel

A modern, production-ready Next.js 15 application built with the App Router, JavaScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  app/
    (site)/          # Route group for main site
      layout.js      # Site layout with Navbar and Footer
      page.js        # Home page
      about/         # About page
      gallery/       # Gallery page
      ministries/    # Ministries page
      watch/         # Watch page
      give/          # Give page
      visit/         # Visit page
  components/
    layout/          # Layout components
      Navbar.js
      Footer.js
      Container.js
    ui/              # Reusable UI components
      Section.js
      Heading.js
  lib/
    utils.js         # Utility functions
  styles/
    globals.css      # Global styles
```

## Features

- ✅ Next.js 15 with App Router
- ✅ JavaScript (no TypeScript)
- ✅ Tailwind CSS for styling
- ✅ Responsive design (mobile-first)
- ✅ SEO-ready with metadata support
- ✅ Clean, scalable folder structure
- ✅ Ready for CMS integration
- ✅ Vercel deployment ready

## Pages

- **Home** (`/`)
- **About** (`/about`)
- **Gallery** (`/gallery`)
- **Ministries** (`/ministries`)
- **Watch** (`/watch`)
- **Give** (`/give`)
- **Visit** (`/visit`)

## Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
```

Or simply push to your Git repository and connect to Vercel for automatic deployments.

## Next Steps

- Implement UI designs from Figma
- Connect to CMS
- Add API routes
- Implement admin panel
- Add dynamic content
