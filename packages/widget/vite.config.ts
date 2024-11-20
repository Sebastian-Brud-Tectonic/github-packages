import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, './src/lib.tsx'),
      fileName: 'app',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react'],
    }
  }
})
