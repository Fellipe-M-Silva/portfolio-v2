<script setup>
import { useThemeStore } from '@/stores/theme'
import { onMounted } from 'vue'

const themeStore = useThemeStore()

onMounted(() => {
  // Initialize the theme based on local storage or default
  const savedTheme = localStorage.getItem('theme') || 'light'
  themeStore.setTheme(savedTheme)
})
</script>

<template>
  <button @click="themeStore.toggleTheme" class="theme-toggle">
    <span class="material-icons">{{ themeStore.themeIcon }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background-color: var(--color-background);
  color: var(--color-text-soft);
  border: none;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}
.theme-toggle:hover {
  background-color: var(--color-background-hover);
  /* background-color: #123378; */
  color: var(--color-text-strong);
}
.theme-toggle .material-icons {
  font-size: 1.5rem;
}
</style>
