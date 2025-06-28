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

    <section class="section" id="projects-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Projetos]</h2>
        <p class="section-intro">O que eu faço</p>
        <p class="body-md half-width">
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida, dignissim
          nibh a, semper neque. Integer ac volutpat odio. Integer imperdiet, nunc nec aliquet
          convallis, nisl neque luctus arcu, id porta libero tortor eu enim. Fusce id magna
          molestie, feugiat justo vel, dapibus odio.
        </p>
      </div>

      <div class="container right col zero">
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
    </section>

    <SectionSeparator />

    <section class="section" id="services-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Serviços]</h2>
        <p class="section-intro">O que eu faço</p>
        <p class="body-md half-width">
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida, dignissim
          nibh a, semper neque. Integer ac volutpat odio. Integer imperdiet, nunc nec aliquet
          convallis, nisl neque luctus arcu, id porta libero tortor eu enim. Fusce id magna
          molestie, feugiat justo vel, dapibus odio.
        </p>
      </div>

      <div class="container right col close">
        <h4 class="heading-sm">UX/UI Design</h4>
        <div class="container close">
          <hr class="identation" />
          <p class="body-md half-width">
            Curabitur auctor pulvinar leo at blandit. Morbi convallis metus nec pretium feugiat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo mattis turpis.
            Duis mollis diam id ligula tincidunt, porta tempus erat posuere. Aenean sagittis rhoncus
            justo nec accumsan.
          </p>
        </div>

        <ul>
          <li class="list-item">01 Sistemas de identidade visual</li>
          <li class="list-item">02 Manual de marca</li>
          <li class="list-item">03 Testes de usabilidade</li>
        </ul>

        <h4 class="heading-sm">Design gráfico</h4>
        <div class="container close">
          <hr class="identation" />
          <p class="body-md half-width">
            Curabitur auctor pulvinar leo at blandit. Morbi convallis metus nec pretium feugiat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo mattis turpis.
            Duis mollis diam id ligula tincidunt, porta tempus erat posuere. Aenean sagittis rhoncus
            justo nec accumsan.
          </p>
        </div>

        <ul>
          <li class="list-item">01 Sistemas de identidade visual</li>
          <li class="list-item">02 Manual de marca</li>
          <li class="list-item">03 Testes de usabilidade</li>
        </ul>
      </div>
    </section>

    <SectionSeparator />

    <section class="section" id="about-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Sobre]</h2>
        <p class="section-intro">Quem sou eu</p>
        <div class="container close">
          <p class="body-md">
            Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
            Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida, dignissim
            nibh a, semper neque.
          </p>
          <img class="my-photo" id="my-photo" src="../assets/media/photo.png" alt="Foto" />
        </div>
      </div>

      <div class="container right col close">
        <h4 class="heading-sm">Pesquisa</h4>
        <div class="container close">
          <hr class="identation" />
          <ul>
            <li class="body-md">Desk Research</li>
            <li class="body-md">Testes de usabilidade</li>
            <li class="body-md">Adobe Illustrator</li>
            <li class="body-md">Adobe InDesign</li>
          </ul>
        </div>

        <h4 class="heading-sm">Estratégia</h4>
        <div class="container close">
          <hr class="identation" />
          <ul>
            <li class="body-md">Design Systems</li>
            <li class="body-md">Adobe Photoshop</li>
            <li class="body-md">Adobe Illustrator</li>
            <li class="body-md">Adobe InDesign</li>
          </ul>
        </div>

        <h4 class="heading-sm">Visual</h4>
        <div class="container close">
          <hr class="identation" />
          <ul>
            <li class="body-md">Design de interface</li>
            <li class="body-md">Prototipação de alta fidelidade</li>
            <li class="body-md">Guias de estilo</li>
            <li class="body-md">Identidade visual</li>
          </ul>
        </div>

        <h4 class="heading-sm">Ferramentas</h4>
        <div class="container close">
          <hr class="identation" />
          <ul>
            <li class="body-md">Figma</li>
            <li class="body-md">Adobe Photoshop</li>
            <li class="body-md">Adobe Illustrator</li>
            <li class="body-md">Adobe InDesign</li>
          </ul>
        </div>
      </div>
    </section>

    <FooterComponent />

    <CustomCursor />
  </main>
</template>

<style scoped>
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

.list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-start;
  flex: 1 0 0;
}

.list-item {
  padding: 1rem;
  width: 100%;
}

#services-section ul:first-of-type {
  margin-bottom: 2rem;
}

#services-section ul li {
  padding: 1.5rem;
  color: var(--text-strong);
  border-top: 1px solid var(--border-strong);
  flex: 1 0 0;
}

#services-section ul li:last-child {
  color: var(--text-strong);
  border-bottom: 1px solid var(--border-strong);
}

.my-photo {
  width: calc(50% - 0.5rem);
  border-radius: 0.25rem;
  aspect-ratio: 3 / 4;
}

.about-right-container {
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
}

#about-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding-bottom: 2rem;
  /* border-bottom: 1px solid var(--border-strong); */
}
</style>
