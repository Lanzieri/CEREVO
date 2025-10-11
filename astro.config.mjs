import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  // 👇 importante que incluya /CEREVO/ y termine con /
  site: 'https://lanzieri.github.io/CEREVO/',
  base: '/CEREVO/',
  build: {
    // 👇 inyecta los estilos en el HTML (evita rutas rotas a /_astro/*.css)
    inlineStylesheets: 'always',
  },
  integrations: [tailwind()],
})
