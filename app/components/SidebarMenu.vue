<template>
  <div :class="[
    'bg-dark-primary border-r border-dark flex flex-col transition-all duration-300',
    minimized ? 'fixed left-0 top-0 h-full w-20 p-6 justify-between' : 'fixed left-0 top-0 h-screen w-64 p-6',
    !minimized && 'z-50 w-full h-full left-0 top-0 max-w-screen-mobile overflow-x-hidden md:static md:w-64 md:h-screen md:left-0 md:top-0 md:z-auto md:max-w-none',
  ]">
    <div>
      <div class="mb-8">
              <template v-if="!minimized">
                <h1 class="text-heading-md font-heading font-bold text-primary">Dashboard Growth</h1>
              </template>
              <template v-else>
                <span class="text-heading-md font-heading font-bold text-primary">DG</span>
              </template>
      </div>
      <nav class="space-y-4">
              <NuxtLink to="/dashboard" class="flex items-center p-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors" :class="minimized ? 'justify-center' : 'space-x-3'">
                <Icon name="mdi:view-dashboard" class="w-6 h-6 flex-shrink-0" />
                <span v-if="!minimized" class="font-medium">Dashboard</span>
              </NuxtLink>
              <a href="#" class="flex items-center p-3 rounded-lg text-secondary hover:bg-dark-accent transition-colors" :class="minimized ? 'justify-center' : 'space-x-3'">
                <Icon name="mdi:share-variant" class="w-6 h-6 flex-shrink-0" />
                <span v-if="!minimized">Canais</span>
              </a>
              <NuxtLink to="/profile" class="flex items-center p-3 rounded-lg text-secondary hover:bg-dark-accent transition-colors" :class="minimized ? 'justify-center' : 'space-x-3'">
                <Icon name="mdi:account" class="w-6 h-6 flex-shrink-0" />
                <span v-if="!minimized">Perfil</span>
              </NuxtLink>
      </nav>
    </div>
    <div :class="[ 'flex flex-col items-center w-full gap-2', 'mt-auto', minimized ? '' : 'px-2 pb-4', !minimized ? 'max-w-screen-mobile' : '' ]">
      <template v-if="minimized">
        <button @click="toggleMenu" class="w-10 h-10 flex items-center justify-center rounded-lg border border-dark bg-dark-accent text-secondary hover:bg-dark-secondary transition-colors mb-2" :title="'Expandir menu'">
          <Icon name="mdi:chevron-right" class="w-6 h-6 flex-shrink-0" />
        </button>
        <button @click="handleLogout" class="w-10 h-10 flex items-center justify-center rounded-lg border border-dark bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold">
          <Icon name="mdi:logout" class="w-6 h-6 flex-shrink-0" />
        </button>
      </template>
      <template v-else>
        <div class="flex items-center w-full gap-2">
          <button @click="handleLogout" class="flex-1 flex items-center space-x-3 p-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold justify-center">
            <Icon name="mdi:logout" class="w-6 h-6 flex-shrink-0" />
            <span>Sair</span>
          </button>
          <button @click="toggleMenu" class="flex items-center justify-center p-3 rounded-lg bg-dark-accent text-secondary hover:bg-dark-secondary transition-colors" :title="'Minimizar menu'">
            <Icon name="mdi:chevron-left" class="w-6 h-6 flex-shrink-0" />
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#imports'
import { useAuth } from '~/composables/useAuth'
const { signOut } = useAuth()

const handleLogout = async () => {
  await signOut()
  navigateTo('/login')
}

const minimized = useState('sidebar-minimized', () => false)
const toggleMenu = () => {
  minimized.value = !minimized.value
}
</script>
