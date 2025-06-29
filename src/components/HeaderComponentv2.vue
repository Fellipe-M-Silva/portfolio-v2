<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { onMounted } from 'vue'
import { onUnmounted } from 'vue'
import NavigatioinMenu from './NavigatioinMenu.vue'

const isScrolled = ref(false)
const scrollThreshold = 10
const activeSection = ref('')
const isMenuVisible = ref(false)

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
      <h1 class="name" id="my-name">Fellipe Mayan</h1>
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

    <div class="socials" :aria-hidden="!isScrolled">
      <a class="title-sm" href="#" target="_blank" :tabindex="isScrolled ? 0 : -1">Instagram</a>
      <a class="title-sm" href="#" target="_blank" :tabindex="isScrolled ? 0 : -1">LinkedIn</a>
      <a class="title-sm" href="#" target="_blank" :tabindex="isScrolled ? 0 : -1">Behance</a>
      <a class="title-sm" href="#" target="_blank" :tabindex="isScrolled ? 0 : -1">Dribbble</a>
    </div>

    <div class="right-container">
      <ThemeToggle />
      <button class="ghost icon-button" @click="isMenuVisible = true">
        <span class="material-icons"> menu </span>
      </button>
    </div>
    <hr class="border-bottom" :class="{ scrolled: isScrolled, unscrolled: !isScrolled }" />
  </header>

  <NavigatioinMenu v-model:isVisible="isMenuVisible" />
</template>

<style scoped>
header {
  display: grid;
  align-self: stretch;
  padding: 1.25rem 1.5rem;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  grid-column: 1 / span 1;

  transition: grid-column 0.5s ease-in-out;
}

.left-container h1 {
  font-size: 1rem;
  white-space: nowrap;
}

.left-container img {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

.name-title {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-strong);
  grid-column: 1 / span 4;

  transition: grid-column 0.5s ease-in-out;
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
  display: none;
  transition: all 0.3s ease-in-out;
}

nav a {
  color: var(--text-muted);
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border-radius: 0.25rem;
  transition:
    color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
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
  gap: 0.5rem;
  justify-content: flex-end;
  grid-row: 1 / span 1;
  grid-column: 4 / span 1;
}

.right-container .icon-button {
  display: flex;
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  grid-column: 3 / span 1;
}

.socials a {
  color: var(--color-text-soft);
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  display: inline-block;

  opacity: 0;
  transform: translateX(-3rem);
  pointer-events: none;

  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    pointer-events 0.3s linear;
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

@media screen and (min-width: 480px) {
  header {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .left-container {
    grid-column: 1 / span 2;
  }

  .left-container h1 {
    font-size: 1.25rem;
  }

  .left-container img {
    width: 2rem;
    height: 2rem;
  }
  
  .socials {
    display: none;
  }

  .right-container {
    justify-content: flex-end;
    grid-column: 6 / span 1;
  }

  .right-container .icon-button {
    display: flex;
  }
}

/* que beleza de responsividade */
@media screen and (min-width: 900px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0;
    flex: 1 0 0;
    grid-column: 4 / span 1;
  }

  .right-container .icon-button {
    display: none;
  }

  .socials {
    display: none;
  }
}

@media screen and (min-width: 1200px) {
  header {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .left-container {
    grid-column: 1 / span 4;
  }

  nav {
    justify-content: flex-end;
    grid-column: 6 / span 1;
  }

  .socials {
    display: flex;
    grid-column: 9 / span 1;
  }

  header.unscrolled .socials a {
    opacity: 0;
    transform: translateX(-2rem);
    pointer-events: none;
    transition-delay: 0s;
  }

  header.scrolled .socials a {
    opacity: 1;
    transform: translateX(-0.5rem);
    pointer-events: auto;
  }

  header.scrolled .socials a:nth-child(1) {
    transition-delay: 0.1s;
  }
  header.scrolled .socials a:nth-child(2) {
    transition-delay: 0.2s;
  }
  header.scrolled .socials a:nth-child(3) {
    transition-delay: 0.3s;
  }
  header.scrolled .socials a:nth-child(4) {
    transition-delay: 0.4s;
  }

  .right-container {
    justify-content: flex-end;
    grid-column: 12 / span 1;
  }

  .right-container .icon-button {
    display: none;
  }
}
</style>
