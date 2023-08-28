/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      default: "var(--text)",
      inverse: "var(--text-inverse)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      link: "var(--link)",
      bgDefault: "var(--background)",
    },
    backgroundColor: {
      default: "var(--background)",
      secondary: "var(--background-secondary)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: (theme) => ({
        blueGradient: `linear-gradient(to bottom, ${theme(
          "colors.primary"
        )}, ${theme("colors.accent")})`,
      }),
    },
    fontFamily: {
      sans: ["Poppins"],
      display: ["Poppins"],
      heading: ["REM"],
    },
  },
  darkMode: ["class"],
};
