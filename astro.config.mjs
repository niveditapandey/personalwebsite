import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://niveditapandey.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});
