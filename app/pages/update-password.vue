
<template>
  <div class="min-h-screen bg-nuxt-background flex items-center justify-center">
    <div class="w-full max-w-md p-8 bg-nuxt-surface rounded-lg shadow-lg">
      <h1 class="text-heading-xl text-nuxt-text mb-6 text-center">Redefinir senha</h1>
      <div v-if="errorMessage" class="mb-4 p-4 bg-red-900/20 border border-red-500 rounded-lg">
        <p class="text-red-400 text-body-sm">{{ errorMessage }}</p>
      </div>
      <div v-if="successMessage" class="mb-4 p-4 bg-green-900/20 border border-green-500 rounded-lg">
        <p class="text-green-400 text-body-sm">{{ successMessage }}</p>
      </div>
      <form @submit.prevent="handleUpdatePassword" class="space-y-6">
        <BaseInput
          v-model="newPassword"
          type="password"
          label="Nova senha"
          placeholder="Digite sua nova senha"
          required
          autocomplete="new-password"
        />
        <BaseButton
          type="submit"
          variant="primary"
          size="lg"
          full-width
          :loading="loading"
        >
          Atualizar senha
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const newPassword = ref('')
const loading = ref(false)
const errorMessage = ref<string | null>(null)
const successMessage = ref<string | null>(null)

const handleUpdatePassword = async () => {
  errorMessage.value = null
  successMessage.value = null
  if (!newPassword.value) {
    errorMessage.value = 'A nova senha é obrigatória.'
    return
  }
  loading.value = true
  const { data, error } = await supabase.auth.updateUser({ password: newPassword.value })
  loading.value = false
  if (error) {
    errorMessage.value = error.message || 'Erro ao atualizar a senha.'
  } else {
    successMessage.value = 'Senha atualizada com sucesso! Redirecionando...'
    newPassword.value = ''
    setTimeout(() => {
      navigateTo('/dashboard')
    }, 1000)
  }
}

useHead({
  title: 'Redefinir Senha - Auth Supabase',
  meta: [
    { name: 'description', content: 'Página para redefinir a senha do usuário.' }
  ]
})
</script>
