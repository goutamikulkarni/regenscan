import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure this points to your root HTML
      },
    },
  },
  resolve: {
    alias: {
      // Add aliases if needed, e.g., for 'src'
    },
  },
});
