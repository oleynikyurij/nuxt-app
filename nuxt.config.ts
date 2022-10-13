// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    alias: {
        pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
    },
    vite: {
        plugins: [
          eslintPlugin()
        ]
      },
      modules: [
        '@intlify/nuxt3',
        '@vueuse/nuxt',
        [
        '@pinia/nuxt',
        {
            autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
        ]
      ],
    //   autoImports: ['defineStore', 'acceptHMRUpdate'],
      imports: {
        dirs: ['stores'],
      },
      intlify: {
        localeDir: 'locale',
        vueI18n: {
          locale: 'ru',
          fallbackLocale: 'en'
        }
      },
})
