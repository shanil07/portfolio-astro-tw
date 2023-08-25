/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "ffffff",
      transparent: "transparent",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
    },
    backgroundColor: {
      default: "var(--bg-default)",
    },
    extend: {},
  },
  plugins: [],
};
