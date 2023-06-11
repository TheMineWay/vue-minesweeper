// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    lazy: true,
    langDir: "locales/",
  },
  components: [{ path: "~/components", pathPrefix: false }],
  buildModules: ["@nuxtjs/pwa"],
  pwa: {
    manifest: {
      name: "Minesweeper",
      description: "A web based Minesweeper game",
      lang: "en",
      useWebmanifestExtension: false,
    },
  },
  ssr: false,
  app: {
    baseURL: "/vue-minesweeper/",
  },
});
