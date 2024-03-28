export default {
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
  buildModules: ['@nuxt/typescript-build']
}
