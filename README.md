# Nuxt OIDC SPA Example

A Nuxt 4 Single Page Application demonstrating how to use `oidc-spa` with Keycloak as the identity provider.

## Project Structure

### Modules
- **`modules/oidc-spa.ts`** - Custom Nuxt module that integrates the `oidc-spa` Vite plugin. Ensures SSR is disabled and configures the plugin to freeze fetch/XHR/WebSocket during authentication flows.

### Composables
- **`app/composables/useAuth.ts`** - Authentication composable providing:
  - `isAuthenticated` - Computed boolean for auth status
  - `idToken` - Computed decoded ID token
  - `login()` - Initiates login flow
  - `logout()` - Initiates logout flow

### Plugins
- **`app/plugins/01.oidc.client.ts`** - Client-only plugin that:
  - Initializes the `oidc-spa` with Keycloak configuration
  - Configures issuer URI, client ID, and base URL
  - Sets up auto-logout behavior
  - Provides `$oidc` instance to the app

### Schemas
- **`app/schemas/decodedIdToken.ts`** - Zod schema for validating decoded ID tokens:
  - `preferred_username` (string)
  - `name` (string)

### Pages
- **`app/pages/index.vue`** - Demo page showing authentication status and login/logout buttons

## Setup

1. **Install dependencies:**
```bash
pnpm install
```

2. **Configure environment variables:**

Create a `.env` file in the root directory (use `.env.example` as template):

```bash
NUXT_PUBLIC_KEYCLOAK_URL=https://your-keycloak-url.com/
NUXT_PUBLIC_KEYCLOAK_REALM=Your-Realm-Name
NUXT_PUBLIC_KEYCLOAK_CLIENT_ID=Your-Client-Id
```

3. **Configure Keycloak:**

In your Keycloak admin console:
- Create a client with the Client ID matching your `.env` file
- Set **Access Type** to `public`
- Add valid redirect URIs:
  - `http://localhost:3000/*` (for development)
  - Add your production URLs when deploying
- Add valid web origins: `http://localhost:3000`
- Enable **Standard Flow** (Authorization Code Flow)

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Tech Stack

- **Nuxt 4** - Vue.js framework (SPA mode)
- **oidc-spa** - OpenID Connect client library
- **Nuxt UI** - UI component library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Zod** - Schema validation
- **Keycloak** - Identity provider

## Production

Build the application for production:

```bash
pnpm build
```

Preview production build locally:

```bash
pnpm preview
```
