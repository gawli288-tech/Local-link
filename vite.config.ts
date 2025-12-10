import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  // CRITICAL: Must be './' for mobile apps (Capacitor) to load assets correctly
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  define: {
    // This allows the build environment to inject the key safely
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "YOUR_API_KEY_HERE"),
  },
});