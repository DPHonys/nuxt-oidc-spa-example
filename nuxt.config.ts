// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/icon', 'oidc-spa/nuxt-spa'],
  ssr: false,
  runtimeConfig: {
    public: {
      keycloakUrl: '',
      keycloakRealm: '',
      keycloakClientId: '',
    },
  },
  css: ['./app/assets/css/main.css'],
  nitro: {
    minify: false,
  },
  vite: {
    // @ts-expect-error Type mismatch between Vite's plugin type and Nuxt's expected plugin type
    plugins: [tailwindcss()],
    build: {
      minify: false,
      sourcemap: true, // Generates source maps for easier debugging
      rollupOptions: {
        output: {
          // Preserve readable variable/function names
          compact: false,
        },
      },
    },
  },
  sourcemap: {
    server: true,
    client: true,
  },
  oidcSpa: {
    browserRuntimeFreeze: {
      enabled: true,
    },
  },
})
