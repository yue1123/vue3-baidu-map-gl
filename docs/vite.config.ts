import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    optimizeDeps: {
      exclude: ['@vueuse/core', 'vitepress']
    },
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
})
