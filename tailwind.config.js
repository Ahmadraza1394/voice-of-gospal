/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#90221A",
          accent: "#C9A84C",
        },
        background: {
          light: "#F9F5F0",
          main: "#FFFFFF",
        },
        footer: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-playfair)", "Helvetica", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
