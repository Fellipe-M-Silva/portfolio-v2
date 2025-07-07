<script setup>
import { socialLinks } from '@/constants/sociallinks'

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <footer class="container col far">
    <div>
      <button id="back-to-top" class="primary title-md" @click="backToTop">Voltar ao topo ↑</button>
    </div>
    <div class="footer-content">
      <p class="body-md">
        Atualmente finalizando o curso de Design Digital na Universidade Federal do Ceará, Campus de
        Quixadá.
      </p>
      <p class="body-md">
        No momento, estudando desenvolvimento por diversão e para melhor me comunicar com
        desenvolvedores.
      </p>
      <ul class="title-sm">
        <li v-for="(link, index) in socialLinks" :key="index">
          <a :href="link.url" :target="link.target" :aria-label="link.ariaLabel || link.name">{{
            link.name
          }}</a>
        </li>
      </ul>
      <p class="body-md">
        Feito em Vue com ✨ <br />
        <i>(e com o feedback de amigos)</i><br />
        &copy; Fellipe Mayan 2025
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--surface-b);
  align-self: stretch;
}

.footer-content {
  display: flex;
  /* flex-directi1on: column; */
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.footer-content * {
  min-width: 280px;
  flex: 1 0 0;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
}

ul li a:hover {
  color: var(--text-secondary);
  font-weight: 600;
}
</style>
