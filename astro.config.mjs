// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { hastVision } from './src/plugins/hast-vision.mjs';
import { visionContent } from './src/data/vision.ts';
import { teoriaDelCambioContent } from './src/data/teoria-del-cambio.ts';

// Los documentos fundacionales declaran su canonical sin barra final; el sitemap que genera Astro los lista con barra.
// Se corrige con las mismas URLs de las que salen los canonicals, para que coincidan siempre.
const sinBarraFinal = new Map(
  [visionContent, teoriaDelCambioContent].flatMap((doc) =>
    Object.values(doc).map(({ canonical }) => [`${canonical}/`, canonical])
  )
);

// https://astro.build/config
export default defineConfig({
  site: 'https://aisafety.es',
  integrations: [
    react(),
    sitemap({
      serialize: (item) => (sinBarraFinal.has(item.url) ? { ...item, url: sinBarraFinal.get(item.url) } : item)
    })
  ],

  // Mismo procesador de Markdown de siempre (Sätteri); el plugin solo actúa sobre los documentos fundacionales (ver el propio plugin)
  markdown: {
    processor: satteri({ hastPlugins: [hastVision] })
  },

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});