import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle: "sass",
      })]
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: "sass",
      })]
    }),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/assets/theme.css" as *;
        @use "@/assets/base.css" as *;
        @use "@/assets/elementPlus-custom.css" as *;
      `,
      }
    }
  }
})
