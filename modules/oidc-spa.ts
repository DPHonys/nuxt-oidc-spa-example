import { addVitePlugin, defineNuxtModule } from 'nuxt/kit'
import { oidcSpa } from 'oidc-spa/vite-plugin'

export default defineNuxtModule({
  setup(_options, nuxt) {
    // Check if SSR is disabled
    if (nuxt.options.ssr !== false) {
      throw new Error(
        'oidc-spa module requires SSR to be disabled. Please set `ssr: false` in your nuxt.config.ts'
      )
    }

    // Add vite plugin to only client side
    addVitePlugin(
      oidcSpa({
        freezeFetch: true,
        freezeXMLHttpRequest: true,
        freezeWebSocket: true,
      }),
      {
        client: true,
        server: false,
      }
    )
  },
})
