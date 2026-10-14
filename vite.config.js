import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // public/assets already holds the site's images; keep hashed bundles separate.
    assetsDir: 'static',
    // Read by scripts/prerender.mjs to preload each page's chunk.
    manifest: true,
  },
});
