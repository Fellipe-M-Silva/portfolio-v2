<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:isVisible'])

const closeMenu = () => {
  emit('update:isVisible', false)
}

const scrollToAndClose = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }
}
</script>

<template>
  <transition name="menu-overlay">
    <div v-if="props.isVisible" class="mobile-menu-overlay">
      <div class="overlay-header">
        <button @click="closeMenu" class="close-button">
          <span class="material-icons">close</span>
        </button>
      </div>
      <nav class="overlay-nav">
        <a @click="scrollToAndClose('projects-section')" class="nav-link">Projetos</a>
        <a @click="scrollToAndClose('services-section')" class="nav-link">Serviços</a>
        <a @click="scrollToAndClose('about-section')" class="nav-link">Sobre</a>
        <a @click="scrollToAndClose('contact-section')" class="nav-link">Contato</a>
      </nav>
    </div>
  </transition>
</template>

<style scoped>
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--primary);
  z-index: 1003;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 2rem; */
  overflow-y: auto;
}

.overlay-header {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--text-strong);
  cursor: pointer;
}

.overlay-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.overlay-nav .nav-link,
.overlay-nav .social-link {
  font-size: 2rem;
  color: var(--text-medium);
  padding: 2rem;
  text-decoration: none;
  border-bottom: 1px solid var(--border-strong);
  transition: all 0.3s ease-in-out;
}

.overlay-nav .nav-link:hover,
.overlay-nav .social-link:hover {
  color: var(--text-strong);
  background-color: var(--primary-hover);
}

.overlay-nav .nav-link:focus,
.overlay-nav .social-link:focus {
  color: var(--text-strong);
  background-color: var(--primary-hover);
}

/* Transições (opcional, mas recomendado para um overlay) */
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  transition:
    /* opacity 0.1s ease-out, */ transform 0.3s ease-out;
}

.menu-overlay-enter-from,
.menu-overlay-leave-to {
  /* opacity: 0; */
  transform: translateY(100%); /* Desliza de cima para baixo */
}
</style>
