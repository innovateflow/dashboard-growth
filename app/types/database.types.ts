// Tipos do banco Supabase para uso com o módulo @nuxtjs/supabase
// Edite conforme seu schema ou gere via Supabase CLI
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: Record<string, unknown>
    Views: Record<string, unknown>
    Functions: Record<string, unknown>
    Enums: Record<string, string[]>
  }
}
