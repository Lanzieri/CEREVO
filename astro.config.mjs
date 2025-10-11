import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  // 👇 usa tu URL completa con la subcarpeta
  site: 'https://lanzieri.github.io/CEREVO/',
  base: '/CEREVO/',
  // Opcional (muy útil en Pages): fuerza CSS inline en el HTML
  // build: { inlineStylesheets: 'always' },
  integrations: [tailwind()],
})

