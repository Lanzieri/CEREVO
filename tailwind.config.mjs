/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Magenta (basado en el logo) — para el inicio del gradiente
        brand: {
          50:  "#FFF1F7",
          100: "#FCE7F1",
          200: "#F8CBE4",
          300: "#F1A5D1",
          400: "#E06CB4",
          500: "#C02F8B", // principal
          600: "#A5247B",
          700: "#8B206B",
          800: "#6F1A58",
          900: "#531345",
        },
        // Púrpura — para el final del gradiente
        brand2: {
          50:  "#F4F0FF",
          100: "#EAE2FF",
          200: "#D6C6FF",
          300: "#B79BFF",
          400: "#966AF4",
          500: "#7D2FB6", // principal
          600: "#6E28A4",
          700: "#5B2188",
          800: "#481B6C",
          900: "#351451",
        },
      },
      boxShadow: {
        soft: "0 6px 24px rgba(16,24,40,.08)",
      },
    },
  },
  plugins: [],
};
