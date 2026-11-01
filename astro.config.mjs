import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lintlab.in',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // keep the 404 page and the certificate checker out of search results
      filter: (page) => !page.includes('/404') && !page.includes('/verify'),
    }),
  ],
});
