<template>
  <div class="flex min-h-screen bg-dark-background">
    <SidebarMenu />
    <main :class="[minimized ? 'pl-24' : '', 'flex-1', 'p-6', 'transition-all', 'duration-300']">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from '~/components/SidebarMenu.vue'
import { useState } from '#imports'
const minimized = useState('sidebar-minimized', () => false)
</script>
