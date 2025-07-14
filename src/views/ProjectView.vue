<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import projetos from '../data/projects.json'

const route = useRoute()
const project = ref(null)

const assetBaseUrl = computed(() => {
  return import.meta.env.BASE_URL
})

const fetchProject = (projectId) => {
  project.value = projetos.find((p) => p.id === projectId)
  if (!project.value) {
    console.warn(`Projeto com ID ${projectId} não encontrado.`)
    // TODO: Redirecionar para uma página 404 ou exibir uma mensagem de erro
  }
}

onMounted(() => {
  const projectId = route.params.id
  fetchProject(projectId)
})

const formattedTags = computed(() => {
  return project.value && project.value.tags ? project.value.tags.join(', ') : ''
})

const formattedTechniquesAndTools = computed(() => {
  return project.value && project.value.techniquesAndTools
    ? project.value.techniquesAndTools.join(', ')
    : ''
})
</script>

<template>
  <main>
    <section class="section">
      <div class="container col left far">
        <div class="container col close" id="project-title">
          <h2>{{ project ? project.name : 'Carregando...' }}</h2>
          <p class="body-md">
            {{ project ? project.caption : '...' }}
          </p>
        </div>

        <div class="container col zero project-info">
          <div class="container close project-metadata">
            <p class="title-md">Ano</p>
            <p class="body-md">{{ project ? project.year : '...' }}</p>
          </div>
          <div class="container close project-metadata">
            <p class="title-md">Meu papel</p>
            <p class="body-md">{{ project ? project.myRole : '...' }}</p>
          </div>
          <div class="container close project-metadata">
            <p class="title-md">Tags</p>
            <p class="body-md">{{ formattedTags }}</p>
          </div>
          <div class="container close project-metadata">
            <p class="title-md">Ferramentas</p>
            <p class="body-md">{{ formattedTechniquesAndTools }}</p>
          </div>
        </div>
      </div>

      <div class="container col right far">
        <img
          v-if="project && project.coverImage"
          :src="assetBaseUrl + project.coverImage.url"
          :alt="project.coverImage.alt"
        />

        <template v-if="project && project.content && project.content.length">
          <template v-for="(block, index) in project.content" :key="index">
            <h2 v-if="block.type === 'heading' && block.level === 2" class="title-md">
              {{ block.text }}
            </h2>
            <h3 v-else-if="block.type === 'heading' && block.level === 3" class="title-md">
              {{ block.text }}
            </h3>
            <h4 v-else-if="block.type === 'heading' && block.level === 4" class="title-md">
              {{ block.text }}
            </h4>

            <div class="container close indented-project" v-else-if="block.type === 'text'">
              <hr class="identation" />
              <div class="container col close text">
                <p class="body-md" v-html="block.paragraph"></p>
              </div>
            </div>

            <!-- <figure v-else-if="block.type === 'image'">
              <img :src="assetBaseUrl + block.url" :alt="block.alt" />
              <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
            </figure> -->

            <img
              v-else-if="block.type === 'image'"
              :src="assetBaseUrl + block.url"
              :alt="block.alt"
              :aria-label="`Imagem: ${block.alt}`"
            />
          </template>
        </template>
        <p v-else-if="project">Nenhum conteúdo detalhado disponível para este projeto.</p>
        <p v-else>Carregando conteúdo do projeto...</p>
      </div>
    </section>

    <FooterComponent />
  </main>
</template>

<style scoped>
.right {
  padding-top: 1rem;
  align-items: flex-start;
}

.summary {
  display: none;
}

.project-info {
  border-bottom: 1px solid var(--border-muted);
}

.project-info div {
  border-top: 1px solid var(--border-muted);
  padding: 0.5rem;
}

#back {
  transform: translateX(-0.5rem);
}

.indented-project .identation {
  width: calc(100% * (1 / 4) - 0.5rem);
}

.project-metadata {
  flex-direction: column;
}

section {
  padding-top: 7rem;
}

img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 0.25rem;
}

.project-link {
  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-decoration-thickness: 0.25rem;
  text-decoration-style: wavy;
}

@media screen and (min-width: 480px) {
  .indented-project .identation {
    width: calc(100% * (1 / 3) - 0.5rem);
  }
  .indented-project .text {
    width: calc(100% * (1 / 2) - 0.5rem);
  }

  .project-metadata {
    flex-direction: row;
  }

  .project-metadata :first-child {
    width: calc(100% * (1 / 2) - 0.5rem);
  }
}

@media screen and (min-width: 768px) {
  .right {
    padding-top: 1.5rem;
  }
  .project-title p {
    width: calc(100% * (1 / 2) - 0.5rem);
  }

  .project-metadata :first-child {
    width: calc(100% * (1 / 3) - 0.5rem);
  }
}

@media screen and (min-width: 1024px) {
  .right {
    padding-top: 0;
  }

  #back {
    transform: translateX(-1rem);
  }

  .project-title p {
    width: calc(100% * (1 / 2) - 0.5rem);
  }

  .project-metadata :first-child {
    width: calc(100% * (1 / 2) - 0.5rem);
  }

  .summary {
    display: flex;
    width: calc(25% - 0.5rem);
  }

  .content {
    width: calc(55% - 0.5rem);
  }

  .indented-project .identation {
    width: calc(100% * (1 / 3) - 0.5rem);
  }
  .indented-project .text {
    width: calc(100% * (2 / 3) - 0.5rem);
  }
}
</style>
