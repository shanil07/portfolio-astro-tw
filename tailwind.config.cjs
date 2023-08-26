/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
    },
    backgroundColor: {
      default: "var(--background)",
      secondary: "var(--background-secondary)",
      transparent: "transparent",
    },
    backgroundImage: (theme) => ({
      blueGradient: `linear-gradient(to bottom, ${theme(
        "colors.primary"
      )}, ${theme("colors.accent")})`,
    }),
    extend: {},
    fontFamily: {
      sans: ["Poppins"],
      display: ["Poppins"],
      heading: ["REM"],
    },
  },
  darkMode: ["class"],
};
