import type { Oidc } from 'oidc-spa'
import type { DecodedIdToken } from '~/plugins/01.oidc.client'

declare module '#app' {
  interface NuxtApp {
    $oidc: Oidc<DecodedIdToken>
  }
}

export {}
