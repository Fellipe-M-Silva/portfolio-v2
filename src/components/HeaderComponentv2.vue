<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'

const isScrolled = ref(false)
const scrollThreshold = 10
const activeSection = ref('')

const sections = ['projects-section', 'services-section', 'about-section', 'contact-section']
let observers = []

const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold
}

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    activeSection.value = elementId
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const setupIntersectionObserver = () => {
  const observerOptions = {
    // root: null, // Observa em relação à viewport
    rootMargin: '-50% 0px -50% 0px', // Aciona quando o meio da seção está na viewport
    threshold: 0, // Não é usado diretamente com rootMargin negativo
  }

  observers.forEach((obs) => obs.disconnect())
  observers = []

  sections.forEach((sectionId) => {
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      }, observerOptions)
      observer.observe(sectionElement)
      observers.push(observer)
    }
  })
}

onMounted(() => {
  console.log('Adicionando listener de scroll')
  window.addEventListener('scroll', handleScroll)
  setupIntersectionObserver()
})

onUnmounted(() => {
  console.log('Removendo listener de scroll')
  window.removeEventListener('scroll', handleScroll)
  observers.forEach((observer) => observer.disconnect())
})
</script>

<template>
  <header :class="{ scrolled: isScrolled, unscrolled: !isScrolled }">
    <div class="left-container">
      <img src="../assets/logo.svg" alt="Logo" />
      <div class="name-title">
        <h1 class="name" id="my-name">Fellipe Mayan</h1>
      </div>
    </div>
    <nav>
      <a
        class="title-sm nav-link"
        href="#"
        :class="{ 'active-link': activeSection === 'projects-section' }"
        @click.prevent="scrollTo('projects-section')"
        >Projetos,</a
      >
      <a
        class="title-sm nav-link"
        href="#"
        :class="{ 'active-link': activeSection === 'services-section' }"
        @click.prevent="scrollTo('services-section')"
        >Serviços,</a
      >
      <a
        class="title-sm nav-link"
        href="#"
        :class="{ 'active-link': activeSection === 'about-section' }"
        @click.prevent="scrollTo('about-section')"
        >Sobre,</a
      >
      <a
        class="title-sm nav-link"
        href="#"
        :class="{ 'active-link': activeSection === 'contact-section' }"
        @click.prevent="scrollTo('contact-section')"
        >Contato</a
      >
    </nav>

    <div class="right-container">
      <!--
      <div class="socials">
        <a class="title-sm" href="#" target="_blank">E-mail</a>
        <a class="title-sm" href="#" target="_blank">LinkedIn</a>
        <a class="title-sm" href="#" target="_blank">Behance</a>
        <a class="title-sm" href="#" target="_blank">Dribbble</a>
      </div> -->
      <ThemeToggle />
    </div>
    <hr class="border-bottom" :class="{ scrolled: isScrolled, unscrolled: !isScrolled }" />
  </header>
</template>

<style scoped>
header {
  display: grid;
  align-self: stretch;
  padding: 1.25rem 1.5rem;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(12, minmax(0, 1fr));
  background-color: var(--surface-a);

  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;

  transition:
    all 0.3s ease-in-out,
    background-color 0.1s ease-in-out,
    z-index 0.3s ease-in-out;
}

header.scrolled {
  background-color: var(--surface-a);
  z-index: 1001;
}

header.unscrolled {
  background-color: transparent;
  z-index: 1000;
}

.left-container {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
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
  color: var(--text-strong);
  /* grid-row: 1 / span 1;
  grid-column: 1 / span 4; */

  transition: grid-column 0.5s ease-in-out;
}

header.scrolled .name-title {
  grid-column: 1 / span 4;
}

.body-sm {
  color: var(--text-muted);
  opacity: 1;
  transform: translateY(-0.5rem);

  transition: all 0.2s ease-in-out;
}

header.scrolled .body-sm {
  opacity: 0;
  transform: translateY(-100%);
}

nav {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0;
  flex: 1 0 0;
  grid-row: 1 / span 1;
  grid-column: 5 / span 4;
}

nav a {
  color: var(--text-muted);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

nav :last-child {
  padding-right: 0.5rem;
}

nav a:hover {
  color: var(--text-strong);
  background-color: var(--surface-a-hover);
}

nav a.active-link {
  font-weight: 600;
  color: var(--text-strong);
}

.right-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  /* justify-content: space-between; */
  grid-row: 1 / span 1;
  grid-column: 9 / span 4;
}

.socials {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  color: var(--text-strong);
  background-color: var(--surface-a-hover);
}

.right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.border-bottom {
  position: absolute;
  bottom: 0px;
  left: -2px;
  z-index: 1000;
  display: block;
  height: 1px;
  border: none;
  background-color: var(--border-strong);
  transition: all 0.3s ease-in-out;
}

.border-bottom.scrolled {
  width: 100vw;
  left: 0px;
}

.border-bottom.unscrolled {
  width: 0vw;
}

@media screen and (max-width: 480px) {
  header {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  nav {
    display: none;
  }

  .left-container {
    grid-column: 1 / span 3;
  }
  .right-container {
    grid-column: 4 / span 1;
    justify-content: flex-end;
  }
}
</style>
