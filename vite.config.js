import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/topadventurejoyhub.com/',
  build: {
    outDir: 'docs', // Папка для сборки
  },
  plugins: [react()],
  base: './',
})
