// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxt/icon'],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/reset-password', '/register', '/docs', '/confirm', '/verify-email', '/update-password'] // /reset-password, /register, /verify-email, /update-password públicas
    }
  }
})