<script setup>
import { ref } from 'vue'

const title = ref('Título do projeto')
const year = ref('2024')
const tags = ref('Tag 1, Tag 2')
const description = ref('Descrição curta do projeto, com informações básicas em até três linhas')
</script>

<template>
  <article class="project-card">
    <p class="project-number">[01]</p>
    <div class="project-image">
      <img src="../assets/media/placeholder.png" alt="Project Image" />
    </div>
    <div class="project-data">
      <div class="project-data-header">
        <h3 class="title-lg">{{ title }}</h3>
        <p class="title-lg">{{ year }}</p>
      </div>
      <p class="body-md">{{ tags }}</p>
      <p class="body-md">{{ description }}</p>
    </div>
    <div class="overlay"></div>
  </article>
</template>

<style scoped>
article.project-card {
  display: flex;
  background-color: var(--surface-a);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-medium);
  gap: 1rem;
  padding: 1rem;
  flex: 1 1 15rem;
  width: 100%;
  /* align-self: stretch; */

  position: relative;
  overflow: hidden;
}

article.project-card:hover {
  cursor: pointer;
}

.project-number {
  text-align: right;
  text-wrap: cap;
  font-family: 'Geist Mono';
  font-size: 2rem;
  font-style: normal;
  font-weight: 200;
  color: var(--text-muted);
  z-index: 30;
}

.project-image {
  aspect-ratio: 4 / 3;
  flex: 1 0 auto;
  z-index: 30;
}

.project-image img {
  width: 100%;
  height: 100%;
  flex: 1 0 auto;
  border-radius: 0.25rem;
  object-fit: cover;
}

.project-data {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 30;
}

.project-data-header {
  display: flex;
  gap: 1rem;
  flex: 1 0 0;
}

h3 {
  min-height: 4rem; /* Garante espaço para 2 linhas */
  overflow: hidden;
  display: -webkit-box; /* Para WebKit */
  -webkit-line-clamp: 2; /* Limita a 2 linhas */
  -webkit-box-orient: vertical; /* Direção da caixa */
  text-overflow: ellipsis; /* Adiciona '...' */
  white-space: normal; /* Permite que o texto quebre linhas */
  flex: 1 0 0;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: var(--surface-a-hover);
  transform: translateY(100%);
  z-index: 10;
  transition: all 0.3s ease-in-out;
}

article.project-card:hover .overlay {
  transform: translateY(0);
  opacity: 1;
}

@media screen and (max-width: 768px) {
  article.project-card {
    width: 100%;
  }

  article.project-card * {
    align-self: stretch;
  }

  .project-image {
    width: 100%;
    height: auto;
  }

  h3.project-number {
    text-align: left;
    flex: 0 0 auto;
  }

  .project-image {
    flex: 0 0 auto;
  }

  .project-data {
    flex: 1;
  }
}
</style>
