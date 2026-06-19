// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output (default). No SSR adapter so it deploys to Vercel with zero
// extra configuration. Set `site` to your production domain when known —
// it powers canonical + Open Graph absolute URLs and the generated sitemap.
export default defineConfig({
  site: 'https://www.rcc-cv.com',
  output: 'static',
  integrations: [sitemap()],
});
