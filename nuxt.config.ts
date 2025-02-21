// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',

  alias: {
    '@base-composables': resolve('./composables'),
  },

  runtimeConfig: {
    apiBaseUrl: 'NUXT_API_BASE_URL',
    apiUser: 'NUXT_API_USER',
    apiPassword: 'NUXT_API_PASSWORD',

    apiPromoUrl: 'NUXT_API_PROMO_URL',

    apiTgUrl: 'NUXT_API_TG_URL',
    apiTgUser: 'NUXT_API_TG_USER',
    apiTgPassword: 'NUXT_API_TG_PASSWORD',
    apiTgSecret: 'NUXT_API_TG_SECRET',

    public: {
      filterMods: 'NUXT_PUBLIC_FILTER_MODS',
    },
  },
});
