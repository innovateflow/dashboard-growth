<template>
  <div class="min-h-screen bg-dark-background">
    <!-- Sidebar -->
    <SidebarMenu />

    <!-- Main Content -->
    <div :class="[minimized ? 'ml-20' : 'ml-64', 'p-6', 'transition-all', 'duration-300']">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-heading-xl font-heading font-bold text-primary">Dashboard</h1>
          <p class="text-body-base text-secondary">Olá, Administrador! Bem-vindo ao seu Dashboard.</p>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-body-sm text-secondary">Hoje</span>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <!-- Facebook Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">f</span>
            </div>
            <span class="text-primary-500 text-body-sm font-medium">+7.2%</span>
          </div>
          <div class="text-body-sm text-secondary mb-1">Facebook</div>
          <div class="text-heading-md font-bold text-primary">1245</div>
        </div>

        <!-- Instagram Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">📷</span>
            </div>
            <span class="text-primary-500 text-body-sm font-medium">+4.8%</span>
          </div>
          <div class="text-body-sm text-secondary mb-1">Instagram</div>
          <div class="text-heading-md font-bold text-primary">987</div>
        </div>

        <!-- TikTok Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">🎵</span>
            </div>
            <span class="text-primary-500 text-body-sm font-medium">+16%</span>
          </div>
          <div class="text-body-sm text-secondary mb-1">TikTok</div>
          <div class="text-heading-md font-bold text-primary">756</div>
        </div>

        <!-- LinkedIn Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">in</span>
            </div>
            <span class="text-primary-500 text-body-sm font-medium">+18%</span>
          </div>
          <div class="text-body-sm text-secondary mb-1">LinkedIn</div>
          <div class="text-heading-md font-bold text-primary">543</div>
        </div>

        <!-- WhatsApp Card -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">✓</span>
            </div>
            <span class="text-primary-500 text-body-sm font-medium">+11%</span>
          </div>
          <div class="text-body-sm text-secondary mb-1">WhatsApp</div>
          <div class="text-heading-md font-bold text-primary">432</div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Area Chart -->
        <div class="lg:col-span-2 bg-dark-accent border border-dark rounded-xl p-6">
          <h3 class="text-heading-sm font-heading font-semibold text-primary mb-6">Geração de Leads por Hora</h3>
          <div class="h-64 bg-dark-secondary rounded-lg flex items-end justify-center p-4">
            <!-- Simulated chart area -->
            <div class="w-full h-full relative bg-gradient-to-t from-primary-500/20 to-primary-500/5 rounded-lg flex items-end">
              <svg class="w-full h-full" viewBox="0 0 300 150">
                <path d="M 0 120 Q 50 100 100 80 Q 150 60 200 40 Q 250 30 300 20" 
                      stroke="#01A767" 
                      stroke-width="3" 
                      fill="none" 
                      opacity="0.8"/>
                <path d="M 0 120 Q 50 100 100 80 Q 150 60 200 40 Q 250 30 300 20 L 300 150 L 0 150 Z" 
                      fill="url(#gradient)" 
                      opacity="0.3"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#01A767;stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:#01A767;stop-opacity:0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <!-- Donut Chart -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <h3 class="text-heading-sm font-heading font-semibold text-primary mb-6">Solicitações por Empresa</h3>
          <div class="flex items-center justify-center h-48">
            <div class="relative w-32 h-32">
              <svg class="transform -rotate-90 w-32 h-32">
                <circle cx="64" cy="64" r="50" stroke="#1A2332" stroke-width="12" fill="transparent"/>
                <circle cx="64" cy="64" r="50" stroke="#7C3AED" stroke-width="12" fill="transparent"
                        stroke-dasharray="219" stroke-dashoffset="66" class="transition-all duration-300"/>
                <circle cx="64" cy="64" r="50" stroke="#01A767" stroke-width="12" fill="transparent"
                        stroke-dasharray="219" stroke-dashoffset="153" class="transition-all duration-300"/>
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-heading-sm font-bold text-primary">80</div>
                  <div class="text-body-sm text-secondary">Total</div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-3 mt-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span class="text-body-sm text-secondary">SMBOT: 50</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span class="text-body-sm text-secondary">SMCLICK: 22</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Vendedores -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <h3 class="text-heading-sm font-heading font-semibold text-primary mb-6">Solicitações por Vendedor</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-body-base text-primary font-medium">Paulo Tarini</div>
                <div class="text-body-sm text-secondary">73% Enviadas</div>
              </div>
              <div class="flex-1 mx-4 bg-dark-secondary rounded-full h-2">
                <div class="bg-gradient-to-r from-purple-500 to-primary-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <div class="text-body-base text-primary font-medium">Ingrid Freitas</div>
                <div class="text-body-sm text-secondary">60% Enviadas</div>
              </div>
              <div class="flex-1 mx-4 bg-dark-secondary rounded-full h-2">
                <div class="bg-gradient-to-r from-purple-500 to-primary-500 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <div class="text-body-base text-primary font-medium">Ricardo Almeida</div>
                <div class="text-body-sm text-secondary">85% Enviadas</div>
              </div>
              <div class="flex-1 mx-4 bg-dark-secondary rounded-full h-2">
                <div class="bg-gradient-to-r from-purple-500 to-primary-500 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Stats -->
        <div class="bg-dark-accent border border-dark rounded-xl p-6">
          <h3 class="text-heading-sm font-heading font-semibold text-primary mb-6">Resumo do Período</h3>
          <div class="space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-body-base text-secondary">Total de Leads</span>
              <span class="text-heading-sm font-bold text-primary">4.963</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-body-base text-secondary">Conversões</span>
              <span class="text-heading-sm font-bold text-primary-500">1.247</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-body-base text-secondary">Taxa de Conversão</span>
              <span class="text-heading-sm font-bold text-primary-500">25.1%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-body-base text-secondary">Receita Gerada</span>
              <span class="text-heading-sm font-bold text-primary">R$ 89.540</span>
            </div>
          </div>
        </div>
      </div>
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