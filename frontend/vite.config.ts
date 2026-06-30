import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins:  [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },

  build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
          if (id.includes('react-dom') || id.includes('react/')) return 'react'
          if (id.includes('react-router-dom')) return 'router'
          if (id.includes('@tanstack/react-query')) return 'query'
          if (id.includes('zustand')) return 'zustand'
        },
      },
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})