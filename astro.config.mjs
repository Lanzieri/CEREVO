import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://lanzieri.github.io',  // tu user de GitHub
  base: '/DalaInc/',                   // ¡respetá mayúsculas/minúsculas del repo!
  vite: {
    plugins: [tailwindcss()],
  },
})
