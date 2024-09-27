import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-age-calculator/',
  plugins: [react()],
  build: {
    outDir: './dist', // Change to './build' if necessary
  },
  optimizeDeps: {
    include: ['tsparticles'],
  },
});
