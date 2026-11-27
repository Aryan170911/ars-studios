import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ARS Studios — production site (Vite + React + Tailwind + GSAP + Lenis)
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works on any host, including the
  // GitHub Pages project subpath (aryan170911.github.io/ars-studios/).
  base: './',
  build: {
    // Keep the bundle lean for Indian 4G connections (plan.md §6.4)
    target: 'es2019',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['gsap', 'lenis'],
        },
      },
    },
  },
});
