<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header>
    <div class="container">
      <img src="../assets/logo.svg" alt="Logo" width="2rem" height="2rem" />
      <h1 class="title-lg">Fellipe Mayan</h1>
    </div>
    <div class="container">
      <nav class="container">
        <a class="body-md nav-link" href="#">Projetos</a>
        <a class="body-md nav-link" href="#">Serviços</a>
        <a class="body-md nav-link" href="#">Contato</a>
      </nav>
      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  padding: 0 1rem;
  background-color: var(--color-background);
  gap: 1rem;
  align-items: center;
  height: 5rem;
}

header a {
  color: var(--color-text-soft);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  transition:
    color 0.3s ease-in-out,
    text-decoration 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  cursor: pointer;
}

header a:hover {
  color: var(--color-text-strong);
  text-decoration: underline;
}
</style>
