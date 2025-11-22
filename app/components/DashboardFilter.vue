<template>
  <div class="relative w-[170px]">
    <button @click="toggle" class="flex items-center gap-2 px-4 py-2 bg-dark-accent text-white rounded-lg shadow hover:bg-dark-secondary transition-colors">
      <span class="truncate w-[130px]">{{ selectedLabel }}</span>
      <Icon name="mdi:chevron-down" class="w-4 h-4" />
    </button>
    <div v-if="open" class="absolute left-0 mt-2 w-[170px] bg-dark-accent border border-dark rounded-lg shadow-lg z-10">
      <ul>
        <li v-for="option in options" :key="option.value">
          <button @click="select(option.value)" class="w-full text-left px-4 py-2 hover:bg-dark-secondary text-white">
            {{ option.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const options = [
  { label: 'Hoje', value: 'hoje' },
  { label: 'Ontem', value: 'ontem' },
  { label: 'Últimos 7 dias', value: '7dias' },
  { label: 'Últimos 30 dias', value: '30dias' },
  { label: 'Este mês', value: 'mes' },
  { label: 'Máximo', value: 'maximo' }
]
const selected = ref(options[0].value)
const open = ref(false)
const selectedLabel = computed(() => options.find(o => o.value === selected.value)?.label || '')
function toggle() {
  open.value = !open.value
}
function select(value: string) {
  selected.value = value
  open.value = false
}
</script>
