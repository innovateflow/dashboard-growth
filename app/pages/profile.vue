<script setup lang="ts">
import { ref } from 'vue'
import { useState } from '#imports'
import SidebarMenu from '~/components/SidebarMenu.vue'
import InputPassword from '~/components/InputPassword.vue'
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const minimized = useState('sidebar-minimized', () => false)

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
<NuxtLayout name="default-layout">
  <div class="p-8 flex justify-center">
    <div class="w-full max-w-6xl">
      <!-- Informações cadastrais -->
      <div class="bg-dark-accent border border-dark rounded-xl shadow-xl p-6 mb-8">
        <div class="flex items-center mb-6">
          <h2 class="text-2xl font-bold text-primary">Informações cadastrais</h2>
          <div class="flex-1 border-t border-dark ml-4"></div>
        </div>
        <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-secondary mb-1 font-medium">Nome da Empresa</label>
            <input type="text" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o nome da empresa" />
          </div>
          <div>
            <label class="block text-secondary mb-1 font-medium">Nome do Responsável</label>
            <input type="text" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o nome do responsável" />
          </div>
          <div>
            <label class="block text-secondary mb-1 font-medium">Email de acesso</label>
            <input type="email" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o email de acesso" />
          </div>
          <div>
            <label class="block text-secondary mb-1 font-medium">Documento</label>
            <input type="text" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o documento" />
          </div>
          <div>
            <label class="block text-secondary mb-1 font-medium">Email secundário</label>
            <input type="email" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o email secundário" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-secondary mb-1 font-medium">CEP</label>
              <input type="text" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o CEP" />
            </div>
            <div>
              <label class="block text-secondary mb-1 font-medium">Número da Residência</label>
              <input type="text" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o número" />
            </div>
          </div>
          <div class="md:col-span-2">
            <label class="block text-secondary mb-1 font-medium">Telefone</label>
            <input type="text" class="w-full bg-dark-secondary border border-dark rounded px-4 py-2 text-primary" placeholder="Digite o telefone" />
          </div>
          <div class="md:col-span-2 flex justify-end mt-2">
            <button type="button" class="btn-primary px-8 py-2 rounded-lg text-white font-semibold">Salvar</button>
          </div>
        </form>
      </div>
      <!-- Troca de senha -->
      <div class="bg-dark-accent border border-dark rounded-xl shadow-xl p-6 w-full">
        <div class="flex items-center mb-6">
          <h2 class="text-2xl font-bold text-primary">Troca de senha</h2>
          <div class="flex-1 border-t border-dark ml-4"></div>
        </div>
        <form @submit.prevent="updatePassword" class="space-y-6 w-full">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputPassword
              v-model="newPassword"
              label="Senha nova"
              placeholder="••••••••"
              required
              autocomplete="new-password"
            />
            <InputPassword
              v-model="confirmPassword"
              label="Confirme sua senha"
              placeholder="••••••••"
              required
              autocomplete="new-password"
            />
          </div>
          <div class="flex flex-col md:flex-row w-full mt-2">
            <div class="flex-1">
              <div v-if="error" class="mt-2 text-red-400 text-center md:text-left">{{ error }}</div>
              <div v-if="success" class="mt-2 text-green-400 text-center md:text-left">{{ success }}</div>
            </div>
            <div class="flex justify-end w-full md:w-auto">
              <button type="submit" class="btn-primary text-white py-3 rounded-lg text-lg font-semibold flex items-center justify-center px-8 mt-4 md:mt-0 md:ml-4" :disabled="loading">
                <span v-if="loading">Salvando...</span>
                <span v-else>Confirmar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>
