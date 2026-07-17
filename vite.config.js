import { defineConfig } from 'vite';

// GitHub Pages deployment: repository name confirmed by the owner as "Klime",
// so the site will live at https://<user>.github.io/Klime/
export default defineConfig({
  base: '/Klime/',
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    modulePreload: {
      // Native modulepreload is enough; skip Vite polyfill bytes on modern targets.
      polyfill: false,
    },
    rollupOptions: {
      output: {
        // Keep GSAP (+ motion modules) in a dedicated async chunk.
        manualChunks(id) {
          if (id.includes('node_modules/gsap')) return 'gsap';
          if (
            id.includes('/src/js/modules/animations.js') ||
            id.includes('/src/js/modules/hero-visual.js')
          ) {
            return 'motion';
          }
        },
      },
    },
  },
});
