// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { hastVision } from './src/plugins/hast-vision.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://aisafety.es',
  integrations: [react(), sitemap()],

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