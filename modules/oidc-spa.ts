import { addVitePlugin, defineNuxtModule } from 'nuxt/kit'
import { oidcSpa } from 'oidc-spa/vite-plugin'

export default defineNuxtModule({
  setup() {
    // TODO check for ssr false
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
