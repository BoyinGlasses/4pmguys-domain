import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function staticHostingSyncPlugin(): Plugin {
  return {
    name: 'static-hosting-sync',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/' || req.url === '/index.html') {
          req.url = '/index.template.html'
        }
        next()
      })
    },
    closeBundle() {
      try {
        const distTemplate = path.resolve(import.meta.dirname, 'dist', 'index.template.html')
        const distHtml = path.resolve(import.meta.dirname, 'dist', 'index.html')
        const rootHtml = path.resolve(import.meta.dirname, 'index.html')

        if (fs.existsSync(distTemplate)) {
          fs.copyFileSync(distTemplate, distHtml)
        }

        if (fs.existsSync(distHtml)) {
          fs.copyFileSync(distHtml, rootHtml)
        }

        const distAssets = path.resolve(import.meta.dirname, 'dist', 'assets')
        const rootAssets = path.resolve(import.meta.dirname, 'assets')
        if (fs.existsSync(distAssets)) {
          fs.rmSync(rootAssets, { recursive: true, force: true })
          fs.cpSync(distAssets, rootAssets, { recursive: true, force: true })
        }
      } catch (err) {
        console.error('Error syncing production build for static hosting:', err)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    staticHostingSyncPlugin(),
    react(),
    tailwindcss(),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.template.html'),
      },
    },
  },
})
