<script setup>
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
        Suspendisse lobortis, diam eget pellentesque malesuada, lacus ligula mollis nulla, ac
        venenatis metus ipsum non orci.
      </p>
      <p class="body-md">Curabitur in libero nec enim facilisis tincidunt. Sed at ligula a</p>
      <ul class="title-sm">
        <li><a href="#">Behance</a></li>
        <li><a href="#">Linkedin</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Dribbble</a></li>
      </ul>
      <p class="body-md">
        Feito com ✨ <br />
        Por Fellipe Mayan <br />
        &copy; 2025
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
</style>
