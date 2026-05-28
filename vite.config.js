import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [] // Overrides parent postcss config to prevent tailwind module loading issues
    }
  }
})
