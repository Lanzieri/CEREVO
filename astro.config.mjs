import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://lanzieri.github.io/CEREVO/',
  base: '/CEREVO/',
  integrations: [tailwind()],
  // si querés blindarlo aún más, descomenta la línea de abajo:
  // build: { inlineStylesheets: 'always' },
})
