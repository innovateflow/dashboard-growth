<script setup lang="ts">
import { ref } from 'vue'
import InputPassword from '~/components/InputPassword.vue'
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const newPassword = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')

const updatePassword = async () => {
  error.value = ''
  success.value = ''
  if (newPassword.value !== confirmPassword.value) {
    error.value = 'As senhas não coincidem.'
    return
  }
  if (!newPassword.value) {
    error.value = 'A nova senha é obrigatória.'
    return
  }
  loading.value = true
  const { error: updateError } = await supabase.auth.updateUser({ password: newPassword.value })
  loading.value = false
  if (updateError) {
    error.value = updateError.message
  } else {
    success.value = 'Senha atualizada com sucesso!'
    newPassword.value = ''
    confirmPassword.value = ''
    setTimeout(() => {
      navigateTo('/dashboard')
    }, 1200)
  }
}
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-dark-background py-12 px-4">
    <div class="w-full max-w-md bg-dark-accent border border-dark rounded-xl p-8 shadow-xl">
      <h1 class="text-heading-md font-heading font-bold text-primary mb-8 text-center">Editar Perfil</h1>
      <form @submit.prevent="updatePassword" class="space-y-6">
        <InputPassword
          v-model="newPassword"
          label="Nova Senha"
          placeholder="••••••••"
          required
          autocomplete="new-password"
        />
        <InputPassword
          v-model="confirmPassword"
          label="Confirmar Nova Senha"
          placeholder="••••••••"
          required
          autocomplete="new-password"
        />
        <button type="submit" class="w-full btn-primary text-white py-3 rounded-lg text-lg font-semibold flex items-center justify-center" :disabled="loading">
          <span v-if="loading">Salvando...</span>
          <span v-else>Salvar Senha</span>
        </button>
        <div v-if="error" class="mt-2 text-red-400 text-center">{{ error }}</div>
        <div v-if="success" class="mt-2 text-green-400 text-center">{{ success }}</div>
      </form>
    </div>
  </div>
</template>
