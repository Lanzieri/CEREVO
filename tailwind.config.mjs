/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // Aproximación del gradiente del logo (magenta → violeta)
        brand: {
          500: '#C52E7C', // magenta
          600: '#B02870',
          700: '#992365',
        },
        brand2: {
          500: '#6C2B8D', // violeta
          600: '#5C247A',
          700: '#4B1E64',
        },
      },
    },
  },
  plugins: [],
}
