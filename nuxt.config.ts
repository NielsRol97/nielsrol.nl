// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  /* ---------------------------------
   * Global CSS
   * --------------------------------- */
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/variables.css',
    '@/assets/css/main.css'
  ],

  /* ---------------------------------
   * Modules
   * --------------------------------- */
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  /* ---------------------------------
   * Rendering / Hosting
   * --------------------------------- */
  ssr: false,

  nitro: {
    preset: 'github-pages'
  },

  /* ---------------------------------
   * GitHub Pages config
   * --------------------------------- */
  app: {
    baseURL: '/nielsrol.nl/',
    buildAssetsDir: '_nuxt/'
  }
})
