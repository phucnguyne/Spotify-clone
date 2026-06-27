import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],

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
    setupFiles: ['./src/test/setup.ts'],
  },
})