import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { target: 'https://student-portfolio-ckpc.onrender.com', changeOrigin: true }
    }
  },
  build: {
    // Aggressive code splitting to keep the initial load under 2 seconds.
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber'],
          motion: ['framer-motion'],
          vendor: ['react', 'react-dom', 'react-router-dom', 'axios'],
          icons: ['react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 800,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
