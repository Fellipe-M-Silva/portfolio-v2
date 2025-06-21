<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header>
    <div class="container-logo">
      <!-- <img src="../assets/logo.svg" alt="Logo" width="32px" height="32px" /> -->
      <div class="name-title">
        <h1 class="title-lg">Fellipe Mayan</h1>
        <p class="body-md">Designer de Produto</p>
      </div>
      <nav class="container">
        <a class="body-md nav-link" href="#">Projetos</a>
        <a class="body-md nav-link" href="#">Serviços</a>
        <a class="body-md nav-link" href="#">Contato</a>
      </nav>

    </div>
    <div class="container right">
      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  padding: 0 2rem;
  background-color: var(--color-background);
  gap: 1rem;
  align-items: center;
  height: 5rem;
  align-self: stretch;
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

.container-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
