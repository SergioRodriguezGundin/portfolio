import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  adapter: vercel(),
});
