// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "nuxt-open-fetch"],
  compatibilityDate: "2024-07-03",
  eslint: {
    // options here
  },
  openFetch: {
    clients: {
      // pets: {},
      skilldb: {},
    }
  },
  runtimeConfig: {
    openFetch: {
      // pets: {
      //   schema: 'https://petstore3.swagger.io/api/v3/openapi.json',
      //   baseURL: 'https://petstore3.swagger.io/api/v3/'
      // },
      skilldb: {
        schema: 'http://localhost:1337/openapi.json',
        baseURL: 'http://localhost:1337/',
      },
    },
  },
  devtools: { enabled: true },
})
