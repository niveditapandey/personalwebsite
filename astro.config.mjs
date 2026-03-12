import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://personalwebsite-one-chi.vercel.app',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});
