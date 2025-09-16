import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
export default defineConfig({
  site: 'https://lanzieri.github.io',
  base: '/DalaInc/',
  integrations: [tailwind()],
})


