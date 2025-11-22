<template>
  <div class="min-h-screen bg-dark-background">
    <!-- Sidebar -->
    <SidebarMenu />

    <!-- Main Content -->
    <div :class="[minimized ? 'ml-20' : 'ml-64', 'p-6', 'transition-all', 'duration-300']">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start w-full">
          <div>
            <h1 class="text-heading-xl font-heading font-bold text-primary">Dashboard</h1>
            <p class="text-body-base text-secondary">Olá, Administrador! Bem-vindo ao seu Dashboard.</p>
          </div>
          <div class="md:mt-0 mt-4">
            <DashboardFilter />
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <!-- Facebook Ads Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <Icon name="mdi:facebook" class="text-white w-6 h-6" />
            <div class="text-heading-sm font-bold text-primary">1245</div>
          </div>
          <div class="text-body-sm text-secondary mb-1">Facebook Ads</div>
        </div>

        <!-- Google Ads Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <Icon name="mdi:google" class="text-white w-6 h-6" />
            <div class="text-heading-sm font-bold text-primary">987</div>
          </div>
          <div class="text-body-sm text-secondary mb-1">Google Ads</div>
        </div>

        <!-- TikTok Ads Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <Icon name="mdi:music" class="text-white w-6 h-6" />
            <div class="text-heading-sm font-bold text-primary">756</div>
          </div>
          <div class="text-body-sm text-secondary mb-1">TikTok Ads</div>
        </div>

        <!-- LinkedIn Ads Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <Icon name="mdi:linkedin" class="text-white w-6 h-6" />
            <div class="text-heading-sm font-bold text-primary">543</div>
          </div>
          <div class="text-body-sm text-secondary mb-1">LinkedIn Ads</div>
        </div>

        <!-- Google Maps Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <Icon name="mdi:map-marker" class="text-white w-6 h-6" />
            <div class="text-heading-sm font-bold text-primary">432</div>
          </div>
          <div class="text-body-sm text-secondary mb-1">Google Maps</div>
        </div>
      </div>

      <!-- Charts Section -->
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from '~/components/SidebarMenu.vue'
import { useAuth } from '~/composables/useAuth'
import { useState } from '#imports'
const { signOut, loading } = useAuth()

const minimized = useState('sidebar-minimized', () => false)

const handleLogout = async () => {
  await signOut()
  navigateTo('/login')
}
</script>