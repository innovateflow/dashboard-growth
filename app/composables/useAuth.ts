import { useSupabaseClient, useSupabaseUser } from '#imports'

export function useAuth() {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Login com e-mail e senha
  const signIn = async (email: string, password: string) => {
    loading.value = true
    error.value = null
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (signInError) {
        error.value = signInError.message
        return { success: false, error: signInError.message }
      }
      return { success: true }
    } catch (err: any) {
      error.value = err.message || 'Erro desconhecido'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Logout
  const signOut = async () => {
    loading.value = true
    error.value = null
    try {
      const { error: signOutError } = await supabase.auth.signOut()
      if (signOutError) {
        error.value = signOutError.message
        return { success: false, error: signOutError.message }
      }
      return { success: true }
    } catch (err: any) {
      error.value = err.message || 'Erro desconhecido'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Reset de senha
  const resetPassword = async (email: string) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: typeof window !== 'undefined' ? `${window.location.origin}/update-password` : undefined
      })
      if (resetError) {
        error.value = resetError.message
        return { success: false, error: resetError.message }
      }
      return { success: true, message: 'Se o e-mail estiver cadastrado, você receberá um link para redefinir a senha.' }
    } catch (err: any) {
      error.value = err.message || 'Erro desconhecido'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Registro de novo usuário
  const signUp = async (email: string, password: string) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/confirm` : undefined
        }
      })
      if (signUpError) {
        error.value = signUpError.message
        return { success: false, error: signUpError.message }
      }
      // Se o usuário precisa confirmar o e-mail
      const needsEmailConfirmation = !data.user || !data.user.email_confirmed_at
      return {
        success: true,
        needsEmailConfirmation,
        message: needsEmailConfirmation
          ? 'Verifique seu e-mail para confirmar o cadastro.'
          : 'Conta criada com sucesso!'
      }
    } catch (err: any) {
      error.value = err.message || 'Erro desconhecido'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    error,
    signIn,
    signOut,
    resetPassword,
    signUp
  }
}
