import pk from "./package.json";

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
  app: {
    baseURL:
      "/" +
      pk.repository.url.split("/").find((_, i, { length }) => i === length - 1),
  },
});
