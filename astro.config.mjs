import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://lanzieri.github.io',
  base: '/DalaInc/',
  vite: { plugins: [tailwindcss()] },
})
