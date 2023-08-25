/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "ffffff",
      transparent: "transparent",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
    },
    backgroundColor: {
      default: "var(--background)",
    },
    extend: {},
    fontFamily: {
      display: ["Varela Round"],
      heading: ["REM"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["class"],
};
