import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://lanzieri.github.io',
  base: '/CEREVO/',              // <— clave para GitHub Pages del repo CEREVO
  integrations: [tailwind()],
})
