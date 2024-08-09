import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/n
export default defineConfig({
  plugins: [react()],
  base:'./',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
