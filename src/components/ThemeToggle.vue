<script setup>
import { useThemeStore } from '@/stores/theme'
import { ref } from 'vue';
import { watch } from 'vue';
import { onMounted } from 'vue'

const themeStore = useThemeStore()
const message = ref('')

watch(() => themeStore.theme, (newTheme) => {
  message.value = `Tema alterado para ${newTheme === 'light' ? 'claro' : 'escuro'}.`;
  setTimeout(() => {
    message.value = '';
  }, 1000);
});

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  themeStore.setTheme(savedTheme)
})
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="theme-toggle"
    :aria-label="`Alternar para o tema ${themeStore.theme === 'light' ? 'escuro' : 'claro'}`"
    :aria-pressed="themeStore.theme === 'dark'"
    aria-live="polite"
  >
    <span class="material-icons">{{ themeStore.themeIcon }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background-color: var(--color-background);
  color: var(--color-text-soft);
  border: none;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}
.theme-toggle:hover {
  background-color: var(--surface-a-hover);
  color: var(--color-text-strong);
}
.theme-toggle .material-icons {
  font-size: 1.5rem;
}
</style>
