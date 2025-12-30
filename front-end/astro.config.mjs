import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import sanity from '@sanity/astro'
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sanity({
      projectId:"dcj71s87",
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),],
  devToolbar: {
        enabled: false,
  },
});