import { defineConfig } from 'vite';

// GitHub Pages deployment: repository name confirmed by the owner as "Klime",
// so the site will live at https://<user>.github.io/Klime/
export default defineConfig({
  base: '/Klime/',
  build: {
    target: 'es2020',
  },
});
