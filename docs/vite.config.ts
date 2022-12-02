import { defineConfig } from 'vite'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'
export default defineConfig({
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  plugins: [MarkdownTransform()]
})
