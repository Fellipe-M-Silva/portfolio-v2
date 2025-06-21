<script setup>
import { onMounted } from 'vue'
import HeaderComponentv2 from '../components/HeaderComponentv2.vue'
import CustomCursor from '../components/CustomCursor.vue'
console.log('HomeView loaded')

const updateTime = () => {
  const now = new Date() // Pega a data e hora do sistema do usuário
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'America/Fortaleza',
  }
  const timeString = now.toLocaleTimeString('pt-BR', options)

  const currentTimeElement = document.getElementById('current-time')
  if (currentTimeElement) {
    currentTimeElement.innerText = timeString
  }
}

onMounted(() => {
  console.log('HomeView mounted')
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<template>
  <main>
    <HeaderComponentv2 />
    <div class="hero-section">
      <h1>Proin vel scelerisque mauris. Praesent blandit lectus vitae tortor sagittis</h1>
      <div class="date-description">
        <p class="title-md">Em Quixadá, CE às <span id="current-time"></span></p>
        <p class="body-md">
          Proin vel scelerisque mauris. Praesent blandit lectus vitae tortor sagittis, nec dignissim
          sem sollicitudin.
        </p>
      </div>
      <div class="button-container">
        <button class="scroll-down title-sm">Veja mais ↓</button>
      </div>
    </div>

    <div id="projects-section" class="projects-section">
      <h4>[Projetos selecionados]</h4>
      <div class="project-list">
        <article class="project-card">
          <img src="../assets/media/placeholder.png" alt="Projeto 1" />
          <div class="project-card-header">
            <a>
              <h3 class="title-lg">Título do projeto</h3>
            </a>
            <p class="title-lg">2024</p>
          </div>
          <p class="body-md">Tag 1, Tag 2</p>
        </article>

        <article class="project-card">
          <img src="../assets/media/placeholder.png" alt="Projeto 1" />
          <div class="project-card-header">
            <h3 class="title-lg">Título do projeto</h3>
            <p class="title-lg">2024</p>
          </div>
          <p class="body-md">Tag 1, Tag 2</p>
        </article>

        <article class="project-card">
          <img src="../assets/media/placeholder.png" alt="Projeto 1" />
          <div class="project-card-header">
            <h3 class="title-lg">Título do projeto</h3>
            <p class="title-lg">2024</p>
          </div>
          <p class="body-md">Tag 1, Tag 2</p>
        </article>

        <article class="project-card">
          <img src="../assets/media/placeholder.png" alt="Projeto 1" />
          <div class="project-card-header">
            <h3 class="title-lg">Título do projeto</h3>
            <p class="title-lg">2024</p>
          </div>
          <p class="body-md">Tag 1, Tag 2</p>
        </article>

        <article class="project-card">
          <img src="../assets/media/placeholder.png" alt="Projeto 1" />
          <div class="project-card-header">
            <h3 class="title-lg">Título do projeto</h3>
            <p class="title-lg">2024</p>
          </div>
          <p class="body-md">Tag 1, Tag 2</p>
        </article>

        <article class="project-card">
          <img src="../assets/media/placeholder.png" alt="Projeto 1" />
          <div class="project-card-header">
            <h3 class="title-lg">Título do projeto</h3>
            <p class="title-lg">2024</p>
          </div>
          <p class="body-md">Tag 1, Tag 2</p>
        </article>
      </div>
    </div>

    <CustomCursor />
  </main>
</template>

<style scoped>
main {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
}

.hero-section {
  height: 100vh;
  background-color: var(--color-background);

  display: grid;
  padding: 2rem;
  row-gap: 1rem;
  column-gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  grid-template-rows: repeat(8, minmax(0, 1fr));
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.hero-section h1 {
  grid-row: 4 / span 2;
  grid-column: 1 / span 8;
}

.date-description {
  grid-row: 7 / span 2;
  grid-column: 1 / span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  gap: 0.5rem;
}

.button-container {
  grid-row: 8 / span 1;
  grid-column: 11 / span 2;
  display: flex;
  align-items: end;
  justify-content: end;
}
.scroll-down {
  grid-row: 8 / span 1;
  grid-column: 11 / span 3;
  border: none;
  background-color: var(--color-background);
  color: var(--color-text-strong);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.projects-section {
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
}

.project-list {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 2rem 1rem;
  align-self: stretch;
  flex-wrap: wrap;
}

.project-card {
  min-width: 20.5rem;
  /* max-width: 100rem; */
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 1.5rem;
}

.project-card:hover {
  background-color: var(--color-background-hover);
  color: var(--color-text-strong);
}

.project-card h3:hover {
  text-decoration: underline;
}

.project-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.project-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}
</style>
