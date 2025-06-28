<script setup>
// import { onMounted } from 'vue'
import HeaderComponentv2 from '../components/HeaderComponentv2.vue'
import HeroSection from '../components/home/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CustomCursor from '../components/CustomCursor.vue'
import FooterComponent from '../components/FooterComponent.vue'
import SectionSeparator from '../components/SectionSeparator.vue'

</script>

<template>
  <main>
    <HeaderComponentv2 />

    <HeroSection />

    <SectionSeparator />

    <div class="section" id="projects-section">
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

    <SectionSeparator />

    <div class="section" id="services-section">
      <div class="service-container-list">
        <h4 style="color: var(--text-muted)">[Serviços]</h4>
        <div class="service-container">
          <div class="left-container"><h2>UX/UI Design</h2></div>
          <div class="right-container">
            <p class="body-md">
              Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum
              magna. Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida,
              dignissim nibh a, semper neque. Integer ac volutpat odio. Integer imperdiet, nunc nec
              aliquet convallis, nisl neque luctus arcu, id porta libero tortor eu enim. Fusce id
              magna molestie, feugiat justo vel, dapibus odio.
            </p>

            <ul>
              <li class="list-item">01 Pesquisa de usuário</li>
              <li class="list-item">02 Wireframes e protótipos</li>
              <li class="list-item">03 Design responsivo</li>
            </ul>
          </div>
        </div>

        <div class="service-container">
          <div class="left-container"><h2>Branding/Identidade visual</h2></div>
          <div class="right-container">
            <p class="body-md">
              Curabitur auctor pulvinar leo at blandit. Morbi convallis metus nec pretium feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo mattis
              turpis. Duis mollis diam id ligula tincidunt, porta tempus erat posuere. Aenean
              sagittis rhoncus justo nec accumsan.
            </p>

            <ul>
              <li class="list-item">01 Sistemas de identidade visual</li>
              <li class="list-item">02 Manual de marca</li>
              <li class="list-item">03 Testes de usabilidade</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SectionSeparator />

    <div class="section" id="about-section">
      <div class="about-left-container">
        <h4 style="color: var(--text-muted)">[Sobre]</h4>
        <p>
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat. <br />
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat.
        </p>
        <img id="my-photo" src="../assets/media/photo.png" alt="Foto" />
      </div>
      <div class="about-right-container">
        <h4 class="title-md">Pesquisa</h4>
        <ul>
          <li class="body-md">Desk Research</li>
          <li class="body-md">Testes de usabilidade</li>
          <li class="body-md">Adobe Illustrator</li>
          <li class="body-md">Adobe InDesign</li>
        </ul>

        <h4 class="title-md">Estratégia</h4>
        <ul>
          <li class="body-md">Design Systems</li>
          <li class="body-md">Adobe Photoshop</li>
          <li class="body-md">Adobe Illustrator</li>
          <li class="body-md">Adobe InDesign</li>
        </ul>

        <h4 class="title-md">Visual</h4>
        <ul>
          <li class="body-md">Design de interface</li>
          <li class="body-md">Prototipação de alta fidelidade</li>
          <li class="body-md">Guias de estilo</li>
          <li class="body-md">Identidade visual</li>
        </ul>

        <h4 class="title-md">Ferramentas</h4>
        <ul>
          <li class="body-md">Figma</li>
          <li class="body-md">Adobe Photoshop</li>
          <li class="body-md">Adobe Illustrator</li>
          <li class="body-md">Adobe InDesign</li>
        </ul>
      </div>
    </div>

    <FooterComponent />

    <CustomCursor />
  </main>
</template>

<style scoped>
/* .hero-section {
  max-height: 100vh;
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
} */

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

#services-section h4 {
  position: sticky;
  top: 7rem;
}

#services-section .right-container {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-items: flex-start;
  gap: 2rem;
}

#services-section .left-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
  top: 11rem;
}

#services-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
}

#services-section ul li {
  padding: 1.5rem;
  color: var(--text-strong);
  border-top: 1px solid var(--border-strong);
  flex: 1 0 0;
  width: 100%;
}

#services-section ul li:last-child {
  color: var(--text-strong);
  border-bottom: 1px solid var(--border-strong);
}

.service-container-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}

.service-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  padding-bottom: 2rem;
}

#about-section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  height: 100%;
}

.about-left-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
  position: sticky;
  top: 7rem;
}

.about-left-container h4 {
  color: var(--text-muted);
}

.about-left-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.about-left-container p {
  color: var(--text-strong);
}

.about-left-container img {
  max-width: 200px;
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.about-right-container {
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
}

.about-right-container h4 {
  color: var(--text-muted);
}

.about-right-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-strong);
}

/* @media screen and (max-width: 480px) {
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

  #services-section h4 {
    position: inherit;
  }

  .project-list-container {
    flex-direction: column;
    align-items: center;
  }

  .service-container-list {
    background-color: var(--surface-a);
    z-index: 30;
  }
  .service-container {
    flex-direction: column;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    position: inherit;
    flex: 1 0 0;
  }

  #about-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: auto;
  }

  .about-left-container {
    display: flex;
    flex-direction: column;
    position: inherit;
    height: auto;
  }

  .about-right-container {
    padding-top: 2rem;
    flex-direction: column;
    align-self: stretch;
    flex: 1 0 0;
  }

  .about-right-container :last-child {
    border-bottom: none;
  }
}

@media screen and (min-width: 480px) and (max-width: 1200px) {
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
} */
</style>
