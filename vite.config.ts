import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import KoaMock from 'vite-plugin-koa-mock'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    KoaMock({
      port: 6868,
      mockDir: './mock',
      proxyKeys: ['/mock'],
    }), // mock服务
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/style/variables.scss" as *;',
      },
    },
  },
  server: {
    // proxy: {
    //   '/mock': {
    //     target: 'http://localhost:9719/',
    //     changeOrigin: true,
    //   },
    // },
    hmr: {
      overlay: true,
      // 解决热更新不同步的问题
      port: 443,
    },
  },
  envDir: 'env',
})
