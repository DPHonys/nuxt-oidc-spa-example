<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950"
    >
      <UCard class="w-full max-w-md text-center">
        <template #header>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
            Hello, World!
          </h1>
        </template>
        <p class="text-gray-500 dark:text-gray-400">
          Welcome to the Nuxt OIDC SPA example.
        </p>
        <template #footer>
          <UButton color="primary" block>Get Started</UButton>
        </template>
      </UCard>
    </div>
  </UApp>
</template>
