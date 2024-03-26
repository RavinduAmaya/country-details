// https://nuxt.com/docs/api/configuration/nuxt-config
// import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  css: ["~/assets/main.scss"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ["nuxt3-leaflet"],
});
