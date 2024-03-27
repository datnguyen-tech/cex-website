import vue from '@vitejs/plugin-vue'
import dns from 'dns'
import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgLoader({
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // viewBox is required to resize SVGs with CSS.
                // @see https://github.com/svg/svgo/issues/1128
                removeViewBox: false,
                convertColors: {
                  currentColor: true
                }
              }
            }
          },
          'removeDimensions'
        ]
      }
    }),
    vue(),
    AutoImport({
      // dirs: ['./src/composables'],
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            ['useDateFormat', 'useFormatDate'],
            ['useTimeAgo', 'useFormatTimeAgo']
          ]
        },
        {
          vue: ['defineModel']
        }
      ],
      eslintrc: {
        enabled: true
      },
      dts: './auto-imports.d.ts'
      // (vueUse) if vueTemplate: true, vscode can not go to definition of component, it conflict with unplugin-vue-components
      // vueTemplate: true
    }),
    Components({
      dts: true,
      dirs: ['src/components/base'],
      resolvers: [ElementPlusResolver()]
    })
    // VueDevTools({})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/assets/styles/_variable.scss" as *;`
  //     }
  //   }
  // },
  server: {
    port: 8080,
    open: true
  }
})
