import type { Oidc } from 'oidc-spa'
import type { DecodedIdToken } from '~/schemas/decodedIdToken'

declare module '#app' {
  interface NuxtApp {
    $oidc: Oidc<DecodedIdToken>
  }
}

export {}
