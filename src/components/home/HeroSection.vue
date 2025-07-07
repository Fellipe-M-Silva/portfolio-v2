<script setup>
import { computed, onMounted } from 'vue'
import { socialLinks } from '@/constants/sociallinks'

const resumeUrl =
  'https://drive.google.com/file/d/1e-abCFjrhKcuhujPkA3x8KinsLcd3pVp/view?usp=sharing'

const openResume = () => {
  window.open(resumeUrl, '_blank')
}

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

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects-section')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const filteredSocialLinks = computed(() => {
  return socialLinks.filter((link) => link.name !== 'GitHub')
})

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<template>
  <section class="hero-section section" id="hero-section">
    <div
      v-for="(link, index) in filteredSocialLinks"
      :key="link.name"
      :id="`link-${index + 1}`"
      class="social-link"
    >
      <a
        :href="link.url"
        :target="link.target"
        class="title-sm"
        :aria-label="link.ariaLabel || link.name"
        >{{ link.name }}</a
      >
    </div>

    <h1>Interações e experiências com estratégia e olhar apurado ✦</h1>

    <div class="hero-welcome-separator"><hr /></div>

    <div class="container col far welcome-message">
      <p class="body-md">
        Designer digital em graduação com 5 anos de experiência em design de interfaces, experiência
        do usuário e identidade visual, movido pela organização e atenção a cada detalhe.
      </p>
      <p class="title-md">Em Quixadá, CE às <span id="current-time"></span></p>
      <div class="container col closest">
        <button class="secondary title-md" id="resume-button" @click="openResume">
          Currículo ↗
        </button>
        <button class="primary scroll-down title-md" @click="scrollToProjects">Veja mais ↓</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: var(--surface-a);

  display: grid;
  row-gap: var(--grid-gap);
  column-gap: var(--grid-gap);
  grid-template-rows: repeat(12, minmax(0, 1fr));
  grid-template-columns: repeat(4, minmax(0, 1fr));

  min-height: calc(100vh - 4rem);
  align-self: stretch;
  flex: 1 0 0;
}

h1 {
  color: var(--text-strong);
  text-transform: uppercase;

  grid-row: 2 / span 3;
  grid-column: 1 / span 3;
}

.welcome-message {
  grid-row: 7 / span 4;
  grid-column: 2 / span 3;
}

.hero-welcome-separator {
  grid-row: 7 / span 1;
  grid-column: 1 / span 1;
  margin-top: 0.75rem;
}

.hero-welcome-separator hr {
  border: none;
  border-top: 1px solid var(--border-medium);
}

.hero-section a {
  color: var(--text-strong);
  display: flex;
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  transform: translate(-0.5rem, -0.5rem);
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

.hero-section a:hover {
  color: var(--text-strong);
  background-color: var(--surface-a-hover);
}

#link-1,
#link-2,
#link-3,
#link-4 {
  display: inline-flex;
  align-items: center;
}

#link-1 {
  grid-row: 2 / span 1;
  grid-column: 4 / span 1;
}

#link-2 {
  grid-row: 3 / span 1;
  grid-column: 4 / span 1;
}

#link-3 {
  grid-row: 4 / span 1;
  grid-column: 4 / span 1;
}

#link-4 {
  grid-row: 5 / span 1;
  grid-column: 4 / span 1;
}

@media screen and (min-width: 480px) {
  .hero-section {
    grid-template-rows: repeat(8, minmax(0, 1fr));
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  h1 {
    grid-row: 5 / span 2;
    grid-column: 1 / span 6;
  }

  .welcome-message {
    grid-row: 7 / span 2;
    grid-column: 3 / span 4;
  }

  .hero-welcome-separator {
    grid-row: 7 / span 1;
    grid-column: 1 / span 2;
  }

  #link-1 {
    grid-row: 3 / span 1;
    grid-column: 3 / span 1;
  }

  #link-2 {
    grid-row: 4 / span 1;
    grid-column: 4 / span 1;
  }

  #link-3 {
    grid-row: 3 / span 1;
    grid-column: 5 / span 1;
  }

  #link-4 {
    grid-row: 2 / span 1;
    grid-column: 6 / span 1;
  }
}

@media screen and (min-width: 768px) {
  .hero-section {
    grid-template-rows: repeat(8, minmax(0, 1fr));
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  h1 {
    grid-row: 5 / span 4;
    grid-column: 1 / span 6;
  }

  .welcome-message {
    grid-row: 7 / span 2;
    grid-column: 3 / span 4;
  }

  .hero-welcome-separator {
    grid-row: 7 / span 1;
    grid-column: 1 / span 2;
  }

  .welcome-message .container.col {
    flex-direction: column;
    align-items: flex-start;
  }
  #link-1 {
    grid-row: 3 / span 1;
    grid-column: 3 / span 1;
  }

  #link-2 {
    grid-row: 4 / span 1;
    grid-column: 4 / span 1;
  }

  #link-3 {
    grid-row: 3 / span 1;
    grid-column: 5 / span 1;
  }

  #link-4 {
    grid-row: 2 / span 1;
    grid-column: 6 / span 1;
  }
}

@media screen and (min-width: 1024px) {
  .hero-section {
    min-height: 100vh;
    grid-template-rows: repeat(8, minmax(0, 1fr));
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  h1 {
    grid-row: 5 / span 4;
    grid-column: 1 / span 6;
  }

  .welcome-message {
    grid-row: 5 / span 2;
    grid-column: 9 / span 4;
  }

  .hero-welcome-separator {
    grid-row: 5 / span 2;
    grid-column: 7 / span 2;
  }

  #link-1 {
    grid-row: 3 / span 1;
    grid-column: 9 / span 1;
  }

  #link-2 {
    grid-row: 4 / span 1;
    grid-column: 10 / span 1;
  }

  #link-3 {
    grid-row: 3 / span 1;
    grid-column: 11 / span 1;
  }

  #link-4 {
    grid-row: 2 / span 1;
    grid-column: 12 / span 1;
  }
}
</style>
