<script setup lang="ts">
const { isAuthenticated, idToken, login, logout } = useAuth()
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-4 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <UCard class="w-full max-w-2xl shadow-2xl border border-slate-700/50 bg-slate-900/90 backdrop-blur-xl relative z-10">
      <template #header>
        <div class="py-4">
          <h1 class="text-4xl font-extrabold text-center bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nuxt oidc-spa showcase
          </h1>
          <p class="text-center text-slate-400 text-sm mt-2">Secure authentication demo</p>
        </div>
      </template>

      <div class="space-y-8 py-4">
        <!-- Authentication Status -->
        <div class="relative group">
          <div class="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
          <div class="relative flex items-center justify-between p-5 rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
            <span class="text-sm font-semibold text-slate-300 tracking-wide">Authentication Status</span>
            <UBadge 
              :color="isAuthenticated ? 'success' : 'error'" 
              variant="solid"
              size="lg"
              class="px-4 py-2 font-medium shadow-lg"
            >
              <UIcon :name="`material-symbols:${isAuthenticated ? 'check_circle' : 'error'}`"></UIcon>
              {{ isAuthenticated ? 'Logged In' : 'Not Logged In' }}
            </UBadge>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 justify-center py-4">
          <UButton 
            v-if="!isAuthenticated"
            color="primary" 
            variant="solid"
            size="xl"
            class="px-10 py-3 font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200"
            @click="login"
          >
            <span class="flex items-center gap-2">
              <UIcon name="material-symbols:login"></UIcon>
              Login
            </span>
          </UButton>
          
          <UButton 
            v-if="isAuthenticated"
            color="error" 
            variant="solid"
            size="xl"
            class="px-10 py-3 font-bold text-base shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-200"
            @click="logout"
          >
            <UIcon name="material-symbols:logout"></UIcon>
            <span class="flex items-center gap-2">
              Logout
            </span>
          </UButton>
        </div>

        <!-- Decoded ID Token -->
        <div v-if="isAuthenticated && idToken" class="space-y-4 animate-in fade-in duration-500">
          <div class="flex items-center gap-2">
            <div class="h-px flex-1 bg-linear-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 class="text-lg font-bold text-slate-200 px-3">Decoded ID Token</h2>
            <div class="h-px flex-1 bg-linear-to-r from-transparent via-slate-700 to-transparent"></div>
          </div>
          <div class="relative group">
            <div class="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl blur-sm"></div>
            <div class="relative bg-slate-950/80 rounded-xl p-5 overflow-auto max-h-96 border border-slate-700/50 backdrop-blur-sm">
              <pre class="text-sm text-emerald-300 font-mono">{{ JSON.stringify(idToken, null, 2) }}</pre>
            </div>
          </div>
        </div>

        <!-- Not Logged In Message -->
        <div v-if="!isAuthenticated" class="text-center py-12 space-y-3">
          <div class="text-6xl opacity-80"><UIcon name="material-symbols:lock"></UIcon></div>
          <p class="text-slate-400 text-lg font-medium">Please log in to view your decoded ID token</p>
          <p class="text-slate-500 text-sm">Your authentication details will appear here</p>
        </div>
      </div>
    </UCard>
  </div>
</template>