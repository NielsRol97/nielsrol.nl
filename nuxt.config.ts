export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '@/assets/css/main.css'
  ],

  modules: ['@nuxt/icon'],
  ssr: false,

  app: {
    baseURL: '/nielsrol.nl/',
    buildAssetsDir: '_nuxt/'
  }
})
