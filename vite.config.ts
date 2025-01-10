import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            '@anon-aadhaar/core',
            '@zk-email/helpers'
          ],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      events: 'events',
      timers: 'timers-browserify',
      buffer: 'buffer',
      process: 'process/browser',
      util: 'util',
      'node:buffer': 'buffer',
      'node:stream': 'stream-browserify',
      vm: resolve(__dirname, 'src/polyfills/vm-mock.js')
    }
  },
  optimizeDeps: {
    exclude: ['@anon-aadhaar/core', '@zk-email/helpers']
  },
  define: {
    'process.env': {},
    global: 'globalThis',
  }
})
