import { IntlifyModuleOptions } from "@intlify/nuxt3";

declare module "@nuxt/schema" {
  export interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
    i18n?: Object;
    buildModules?: Object;
    pwa?: Object;
  }
}
