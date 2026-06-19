// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). No SSR adapter so it deploys to Vercel with zero
// extra configuration. Set `site` to your production domain when known —
// it powers canonical + Open Graph absolute URLs.
export default defineConfig({
  site: 'https://www.rcc-cv.com',
  output: 'static',
});
