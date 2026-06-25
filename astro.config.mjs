// @ts-check
import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://pequenosmomentos.mx',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts':    '/src/layouts',
        '@styles':     '/src/styles',
      }
    }
  },

  integrations: [sitemap(), compress()],
  adapter: cloudflare(),
});