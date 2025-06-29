<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true, // O título é importante para acessibilidade
  },
  year: String,
  tags: String,
  description: String,
  imageSrc: String,
  projectUrl: {
    // Adicione a prop para a URL do projeto
    type: String,
    default: '#', // Forneça um default, mas use URLs reais na prática
  },
  index: {
    // Nova prop para o índice
    type: Number,
    required: true, // O índice é necessário para o número do projeto
  },
})

const formattedProjectNumber = computed(() => {
  // Adiciona um zero à esquerda se o número for menor que 10
  const num = props.index + 1 // Índices geralmente começam em 0, então adicione 1
  return num < 10 ? `[0${num}]` : `[${num}]`
})
</script>

<template>
  <a
    :href="projectUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="project-card-link"
    :aria-label="`Ver projeto ${formattedProjectNumber}: ${title}`"
  >
    <article class="project-card">
      <p class="project-number">{{ formattedProjectNumber }}</p>
      <div class="project-image">
        <img :src="imageSrc" :alt="`Imagem do projeto ${title}`" />
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
  </a>
</template>

<style scoped>
.project-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-self: stretch;
  flex: 1 1 10rem;
}

/* article {
  width: 100%;
  height: 100%;
} */

.project-card-link:hover .overlay,
.project-card-link:focus .overlay {
  transform: translateY(0);
  opacity: 1;
}

article.project-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;

  background-color: var(--surface-a);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-medium);
  padding: 1rem;
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
}

.project-number {
  text-align: left;
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
  /* flex: 1 0 0; */
}

h3 {
  min-height: 4rem;
  text-overflow: ellipsis;
  white-space: normal;
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

@media screen and (min-width: 480px) {
  article.project-card {
    flex-direction: row;
  }

  .project-image {
    flex: 0 0 10rem;
    max-height: 12rem;
  }

  h3.project-number {
    text-align: left;
    flex: 0 0 auto;
  }

  .project-image {
    flex: 0 0 auto;
  }

  .project-image img {
    height: 100%;
  }

  .project-data {
    flex: 1;
  }
}
</style>
