<script setup>
import { onMounted } from 'vue'
import HeaderComponentv2 from '../components/HeaderComponentv2.vue'
import ProjectCard from '@/components/ProjectCard.vue'
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
    <div class="hero-section section">
      <div class="social-link" id="email">
        <a class="title-sm" href="#" target="_blank">E-mail</a>
      </div>
      <div class="social-link" id="linkedin">
        <a class="title-sm" href="#" target="_blank">LinkedIn</a>
      </div>
      <div class="social-link" id="behance">
        <a class="title-sm" href="#" target="_blank">Behance</a>
      </div>
      <div class="social-link" id="dribbble">
        <a class="title-sm" href="#" target="_blank">Dribbble</a>
      </div>

      <h1 style="text-transform: uppercase">
        Proin vel scelerisque mauris. Praesent blandit lectus vitae tortor sagittis
      </h1>

      <div class="hero-welcome-separator"><hr /></div>
      <div class="welcome-message">
        <p class="body-md">
          Proin vel scelerisque mauris. Praesent blandit lectus vitae tortor sagittis, nec dignissim
          sem sollicitudin. Proin vel scelerisque mauris. Praesent blandit lectus vitae tortor
          sagittis, nec dignissim sem sollicitudin.
        </p>
        <p class="title-md">Em Quixadá, CE às <span id="current-time"></span></p>
        <button class="scroll-down title-sm">Veja mais ↓</button>
      </div>
    </div>

    <div id="projects-section section" class="projects-section">
      <div class="project-list-container">
        <div class="left-container">
          <h4 style="color: var(--text-muted)">[Projetos selecionados]</h4>
          <h2>
            Proin vel scelerisque mauris. Praesent blandit lectus vitae tortor sagittis, nec
            dignissim sem sollicitudin.
          </h2>
        </div>
        <div class="project-list">
          <ProjectCard
            title="Projeto 1"
            year="2024"
            tags="Tag 1, Tag 2"
            description="Descrição curta do projeto, com informações básicas em até três linhas"
            imageSrc="../assets/media/placeholder.png"
          />
          <ProjectCard
            title="Projeto 2"
            year="2024"
            tags="Tag 1, Tag 2"
            description="Descrição curta do projeto, com informações básicas em até três linhas"
            imageSrc="../assets/media/placeholder.png"
          />

          <ProjectCard
            title="Projeto 3"
            year="2024"
            tags="Tag 1, Tag 2"
            description="Descrição curta do projeto, com informações básicas em até três linhas"
            imageSrc="../assets/media/placeholder.png"
          />
          <ProjectCard
            title="Projeto 4"
            year="2024"
            tags="Tag 1, Tag 2"
            description="Descrição curta do projeto, com informações básicas em até três linhas"
            imageSrc="../assets/media/placeholder.png"
          />
          <ProjectCard
            title="Projeto 5"
            year="2024"
            tags="Tag 1, Tag 2"
            description="Descrição curta do projeto, com informações básicas em até três linhas"
            imageSrc="../assets/media/placeholder.png"
          />
          <ProjectCard
            title="Projeto 6"
            year="2024"
            tags="Tag 1, Tag 2"
            description="Descrição curta do projeto, com informações básicas em até três linhas"
            imageSrc="../assets/media/placeholder.png"
          />
        </div>
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
  background-color: var(--surface-a);
}

.hero-section {
  height: 100vh;
  background-color: var(--surface-a);

  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  flex-shrink: 0;
  align-self: stretch;
  grid-template-rows: repeat(8, minmax(0, 1fr));
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.hero-section h1 {
  color: var(--text-strong);
  grid-row: 5 / span 4;
  grid-column: 1 / span 6;
  justify-self: min;
}

.welcome-message {
  grid-row: 5 / span 2;
  grid-column: 9 / span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.hero-welcome-separator {
  grid-row: 5 / span 2;
  grid-column: 7 / span 2;
  margin-top: 0.75rem;
}

.hero-welcome-separator hr {
  border: none;
  border-top: 1px solid var(--border-strong);
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
  background-color: var(--primary);
  color: var(--text-on-primary);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.hero-section a {
  color: var(--text-strong);
  display: flex;
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  transform: translate(-0.5rem, -0.5rem);
  transition:
    color 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}
.hero-section a:hover {
  color: var(--text-strong);
  background-color: var(--surface-a-hover);
}

#email,
#linkedin,
#behance,
#dribbble {
  display: inline-flex;
  align-items: center;
}
#email {
  grid-row: 3 / span 1;
  grid-column: 9 / span 1;
}
#linkedin {
  grid-row: 4 / span 1;
  grid-column: 10 / span 1;
}
#behance {
  grid-row: 3 / span 1;
  grid-column: 11 / span 1;
}
#dribbble {
  grid-row: 2 / span 1;
  grid-column: 12 / span 1;
}

.projects-section {
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
}

.project-list-container {
  display: flex;
  align-items: center;
  align-items: flex-start;
  gap: 1rem;
  border-top: 1px solid var(--border-strong);
  padding-top: 2rem;
}

.left-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  position: sticky;
  top: 7rem;
  flex: 1 0 0;
}

.project-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  /* gap: 2rem 1rem; */
  /* align-self: stretch; */
  flex: 1 0 0;
}
/*
.project-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
} */

/* .project-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
} */

@media screen and (max-width: 480px) {
  .hero-section {
    grid-template-rows: repeat(12, minmax(0, 1fr));
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .hero-section h1 {
    grid-row: 5 / span 4;
    grid-column: 1 / span 4;
  }

  .welcome-message {
    grid-row: 9 / span 2;
    grid-column: 2 / span 3;
  }

  .hero-welcome-separator {
    grid-row: 9 / span 1;
    grid-column: 1 / span 1;
    margin-top: 0.75rem;
  }

  #email {
    grid-row: 3 / span 1;
    grid-column: 1 / span 1;
  }
  #linkedin {
    grid-row: 4 / span 1;
    grid-column: 2 / span 1;
  }
  #behance {
    grid-row: 3 / span 1;
    grid-column: 3 / span 1;
  }
  #dribbble {
    grid-row: 2 / span 1;
    grid-column: 4 / span 1;
  }
}
</style>
