# Voice of Gospel - Theme & Color System Guide

This document explains how to use the centralized color theme system in the Voice of Gospel project.

## Brand Colors

All brand colors are defined in `tailwind.config.js` and can be used throughout the project.

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary** | `#90221A` | Main brand color - buttons, headings, icons, links |
| **Accent** | `#C9A84C` | Highlight color - secondary elements, hover states |
| **Background Light** | `#F9F5F0` | Light section backgrounds, cards |
| **Background Main** | `#FFFFFF` | Main page background |
| **Footer** | `#1A1A1A` | Footer background |

## Using Colors in Tailwind

### Background Colors

```jsx
// Primary brand background
<div className="bg-brand-primary">

// Accent background
<div className="bg-brand-accent">

// Light section background
<div className="bg-background-light">

// Main background (white)
<div className="bg-background-main">

// Footer background
<div className="bg-footer">
```

### Text Colors

```jsx
// Primary brand text
<h1 className="text-brand-primary">

// Accent text
<span className="text-brand-accent">
```

### Border Colors

```jsx
<div className="border-brand-primary">
<div className="border-brand-accent">
```

### Hover States

```jsx
// Hover background
<button className="hover:bg-brand-primary">

// Hover text
<a className="hover:text-brand-accent">

// Opacity variants
<div className="bg-brand-primary/90">
```

## Reusable Component Classes

Pre-built CSS classes are available in `globals.css`:

### Buttons

```jsx
// Primary button (brand primary color)
<button className="btn-primary">Click Me</button>

// Secondary button (brand accent color)
<button className="btn-secondary">Learn More</button>

// Outline button
<button className="btn-outline">Contact</button>
```

### Sections

```jsx
// Light background section
<section className="section-light">

// Footer background
<footer className="footer-bg">
```

### Cards

```jsx
// Card with white background and subtle border
<div className="card-bg">
```

## Reusable Components

### Button Component

```jsx
import Button from '@/components/ui/Button'

// Primary button
<Button variant="primary">Submit</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Outline button
<Button variant="outline">Learn More</Button>
```

### Card Component

```jsx
import Card from '@/components/ui/Card'

<Card>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

## Examples

### Hero Section

```jsx
<Section className="section-light">
  <Heading level="h1" className="text-brand-primary">
    Welcome to Voice of Gospel
  </Heading>
  <p className="text-gray-600 mb-6">
    Your description here
  </p>
  <Button variant="primary">Get Started</Button>
</Section>
```

### Content Section

```jsx
<Section>
  <Heading level="h2" className="text-brand-primary">
    Our Mission
  </Heading>
  <p className="text-gray-600">
    Content here
  </p>
</Section>
```

### Call to Action

```jsx
<Section className="bg-brand-primary text-white">
  <Heading level="h2" className="text-white">
    Join Us Today
  </Heading>
  <Button variant="secondary">Sign Up</Button>
</Section>
```

## Adding New Colors

To add new colors to the theme:

1. Open `tailwind.config.js`
2. Add your color to the `theme.extend.colors` object:

```js
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#90221A',
        accent: '#C9A84C',
        // Add new brand colors here
        secondary: '#YOUR_COLOR',
      },
      // Or add new color categories
      custom: {
        blue: '#YOUR_BLUE',
      }
    }
  }
}
```

3. Use it in your components: `bg-custom-blue`, `text-brand-secondary`

## Best Practices

### ✅ DO

- Use brand colors for all UI elements
- Use `text-brand-primary` for main headings
- Use `text-brand-accent` for highlights
- Use `section-light` for alternating section backgrounds
- Use the Button component for consistent styling

### ❌ DON'T

- Don't use random hex colors like `bg-[#123456]`
- Don't use generic Tailwind colors for brand elements (avoid `bg-red-500`, `bg-blue-600` for brand elements)
- Don't hardcode colors in component styles

## Color Accessibility

- **Primary (#90221A)**: Dark red - good contrast on white backgrounds
- **Accent (#C9A84C)**: Gold - ensure sufficient contrast when used on light backgrounds
- **Always test color combinations** for WCAG AA compliance

## File Locations

- **Color definitions**: `tailwind.config.js`
- **CSS classes**: `src/styles/globals.css`
- **Button component**: `src/components/ui/Button.js`
- **Card component**: `src/components/ui/Card.js`

---

**Last Updated**: March 2026
