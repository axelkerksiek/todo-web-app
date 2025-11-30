import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(), tailwindcss()],

  // Path aliases - Clean imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@root': path.resolve(__dirname, './'),
    },
  },

  // Dev server - Better DX
  server: {
    port: 3000,
    open: false,
    host: '0.0.0.0', // Test on mobile
  },

  // Build - Production optimizations
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'],
          icons: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/vue-fontawesome',
          ],
          ui: ['@headlessui/vue', '@vueuse/core'],
        },
      },
    },
  },
})
