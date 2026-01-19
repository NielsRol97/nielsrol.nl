// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: [
    '@/assets/css/fonts.css',
    '@/assets/css/variables.css',
    '@/assets/css/main.css'
  ],

  modules: ['@nuxt/fonts', '@nuxt/icon'],
  ssr: false,

  app: {
    baseURL: '/nielsrol.nl/',
    buildAssetsDir: '_nuxt/'
  }
})