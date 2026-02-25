// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/icon'],
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
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
})
