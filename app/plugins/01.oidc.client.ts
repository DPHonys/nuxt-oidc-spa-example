import { createOidc } from 'oidc-spa/core'
import { z } from 'zod'

export const DecodedIdTokenSchema = z.object({
  preferred_username: z.string(),
  name: z.string(),
})

export type DecodedIdToken = z.infer<typeof DecodedIdTokenSchema>

export default defineNuxtPlugin({
  name: 'oidc',
  enforce: 'pre',
  async setup(nuxtApp) {
    const {
      public: {
        keycloakUrl: url,
        keycloakRealm: realm,
        keycloakClientId: clientId,
      },
    } = useRuntimeConfig()

    const normalizedKeycloakUrl = url.endsWith('/') ? url.slice(0, -1) : url
    const issuerUri = `${normalizedKeycloakUrl}/realms/${realm}`

    const oidc = await createOidc({
      issuerUri,
      clientId,
      autoLogin: false,
      debugLogs: true,
      autoLogoutParams: { redirectTo: 'specific url', url: '/' },
      BASE_URL: '/',
      decodedIdTokenSchema: DecodedIdTokenSchema,
    })

    nuxtApp.provide('oidc', oidc)
  },
})
