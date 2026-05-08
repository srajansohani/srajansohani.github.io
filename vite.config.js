import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }
        }
      }
    }
  },
});
