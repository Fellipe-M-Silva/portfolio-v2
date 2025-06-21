<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'

const isScrolled = ref(false)
const scrollThreshold = 100

const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold
}

onMounted(() => {
  console.log('Adicionando listener de scroll')
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  console.log('Removendo listener de scroll')
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ scrolled: isScrolled, unscrolled: !isScrolled }">
    <div class="left-container">
      <div class="photo-container" id="photo-container">
        <img src="../assets/media/photo.png" alt="Foto de Fellipe" class="photo" />
      </div>
      <div class="name-title">
        <h1 class="name">Fellipe Mayan</h1>
        <p class="body-sm">Designer de Produto</p>
      </div>
    </div>
    <nav>
      <a class="title-sm nav-link" href="#">Projetos,</a>
      <a class="title-sm nav-link" href="#">Serviços,</a>
      <a class="title-sm nav-link" href="#">Sobre,</a>
      <a class="title-sm nav-link" href="#">Contato</a>
    </nav>

    <div class="right-container">
      <div class="socials">
        <a class="title-sm" href="#" target="_blank">E-mail</a>
        <a class="title-sm" href="#" target="_blank">LinkedIn</a>
        <a class="title-sm" href="#" target="_blank">Behance</a>
        <a class="title-sm" href="#" target="_blank">Dribbble</a>
      </div>
      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
header {
  display: grid;
  align-self: stretch;
  padding: 1.5rem;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(12, minmax(0, 1fr));

  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  transition: all 0.3s ease-in-out;
}

header.scrolled {
  background-color: var(--color-background);
  height: 5rem;
}

header.unscrolled {
  background-color: transparent;
  height: 8rem;
}

.left-container {
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(4, minmax(0, 1fr));

  grid-row: 1 / span 1;
  grid-column: 1 / span 4;

  transition: grid-column 0.5s ease-in-out;
}

.photo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  transform: translateX(0);
  opacity: 1;
  width: auto;
  border-radius: 0.25rem;

  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out,
    width 0.5s ease-in-out;
}

.photo-container img {
  align-self: stretch;
}

header.unscrolled .photo-container {
  transform: translateX(0);
  opacity: 1;
  width: auto;
}

header.scrolled .photo-container {
  transform: translate(-100%);
  opacity: 0;
  width: 0;
}

.name-title {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  grid-row: 1 / span 1;
  grid-column: 2 / span 3;

  transition: grid-column 0.5s ease-in-out;
}

header.scrolled .name-title {
  grid-column: 1 / span 4;
}

.body-sm {
  color: var(--color-text-muted);
  opacity: 1;
  transform: translateY(0);

  transition: all 0.2s ease-in-out;
}

header.scrolled .body-sm {
  opacity: 0;
  transform: translateY(-100%);
}

nav {
  display: flex;
  align-items: flex-start;
  gap: 0;
  flex: 1 0 0;
  grid-row: 1 / span 1;
  grid-column: 5 / span 4;
}

nav a {
  color: var(--color-text-muted);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border-radius: 0.25rem;
  transition:
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  cursor: pointer;
}

nav :last-child {
  padding-right: 0.5rem;
}

nav a:hover {
  color: var(--color-text-strong);
  background-color: var(--color-background-hover);
}

nav a:active {
  color: var(--color-text-strong);
}

.right-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  grid-row: 1 / span 1;
  grid-column: 9 / span 4;
}

.socials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-row: 1 / span 1;
  grid-column: 9 / span 4;

  transform: flex-direction 0.5s ease-in-out;
}

header.scrolled .socials {
  flex-direction: row;
}

.socials a {
  color: var(--color-text-soft);
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  transition:
    color 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}

.socials a:hover {
  color: var(--color-text-strong);
  background-color: var(--color-background-hover);
}

.right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
