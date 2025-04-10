// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  base: '/astro-demo',
  site: 'https://nigh.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
