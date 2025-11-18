<template>
  <div class="min-h-screen bg-nuxt-background flex items-center justify-center p-8">
    <div class="max-w-2xl w-full bg-dark-accent rounded-xl shadow-2xl p-10 border border-dark">
      <h1 class="text-heading-xl font-bold text-nuxt-text mb-4">Documentação do Projeto</h1>
      <p class="text-body-lg text-secondary mb-6">
        Esta é uma página de teste para exibir conteúdos de documentação. Você pode customizar este espaço para mostrar guias, exemplos de uso, ou qualquer informação relevante para o seu projeto Nuxt + Supabase.
      </p>
      <ul class="list-disc pl-6 text-body-base text-nuxt-text space-y-2">
        <li>Exemplo de item de documentação</li>
        <li>Outro item de exemplo</li>
        <li>Integração com Supabase pronta para uso</li>
        <li>Layout responsivo e moderno</li>
      </ul>
      <div class="mt-8">
        <NuxtLink to="/" class="btn-primary">Voltar para Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Docs - Projeto Nuxt',
  meta: [
    { name: 'description', content: 'Página de documentação de exemplo para o projeto Nuxt + Supabase' }
  ]
})
</script>
