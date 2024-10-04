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
    strategy: "prefix_and_default",
    lazy: true,
    langDir: "locales/",
  },
  components: [{ path: "~/components", pathPrefix: false }],
  ssr: false,
});
