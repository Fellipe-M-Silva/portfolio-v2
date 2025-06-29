<script setup>
// import { onMounted } from 'vue'
import HeaderComponentv2 from '../components/HeaderComponentv2.vue'
import HeroSection from '../components/home/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import CustomCursor from '../components/CustomCursor.vue'
import FooterComponent from '../components/FooterComponent.vue'
import SectionSeparator from '../components/SectionSeparator.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import { inject } from 'vue'

const showToast = inject('showToast')

const projects = [
  {
    title: 'Promptfy',
    year: '2023',
    tags: 'Web Design, UI/UX',
    description: 'Um projeto de exemplo para demonstrar a funcionalidade.',
    imageSrc:
      'https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    projectUrl: 'https://example.com/project1',
  },
  {
    title: 'Meu Garçom',
    year: '2024',
    tags: 'Desenvolvimento, Frontend',
    description: 'Um projeto mais complexo com foco em interatividade.',
    imageSrc:
      'https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    projectUrl: 'https://example.com/project2',
  },
  {
    title: 'Gestruck',
    year: '2024',
    tags: 'Mobile, UI',
    description: 'Um aplicativo mobile de demonstração.',
    imageSrc:
      'https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    projectUrl: 'https://example.com/project3',
  },
  {
    title: 'VáLá',
    year: '2024',
    tags: 'Mobile, UI',
    description: 'Um aplicativo mobile de demonstração.',
    imageSrc:
      'https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    projectUrl: 'https://example.com/project3',
  },
  // ... adicione mais projetos
]
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
        <p class="body-md">
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida, dignissim
          nibh a, semper neque. Integer ac volutpat odio. Integer imperdiet, nunc nec aliquet
          convallis, nisl neque luctus arcu, id porta libero tortor eu enim. Fusce id magna
          molestie, feugiat justo vel, dapibus odio.
        </p>
      </div>

      <div class="container right col zero">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :title="project.title"
          :year="project.year"
          :tags="project.tags"
          :description="project.description"
          :imageSrc="project.imageSrc"
          :projectUrl="project.projectUrl"
          :index="index"
        />
      </div>
    </section>

    <SectionSeparator />

    <section class="section" id="services-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Serviços]</h2>
        <p class="section-intro">O que eu faço</p>
        <p class="body-md">
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida, dignissim
          nibh a, semper neque. Integer ac volutpat odio. Integer imperdiet, nunc nec aliquet
          convallis, nisl neque luctus arcu, id porta libero tortor eu enim. Fusce id magna
          molestie, feugiat justo vel, dapibus odio.
        </p>
      </div>

      <div class="container right col close">
        <h4 class="heading-sm">UX/UI Design</h4>
        <div class="container close indented">
          <hr class="identation" />
          <p class="body-md">
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
        <div class="container close indented">
          <hr class="identation" />
          <p class="body-md">
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
        <p class="body-md">
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida, dignissim
          nibh a, semper neque.
        </p>
        <div class="photo-container">
          <img class="my-photo" id="my-photo" src="../assets/media/photo.png" alt="Foto" />
        </div>
      </div>

      <div class="container right col close">
        <h4 class="heading-sm">Pesquisa</h4>
        <div class="container close indented">
          <hr class="identation" />
          <ul>
            <li class="body-md">Desk Research</li>
            <li class="body-md">Testes de usabilidade</li>
            <li class="body-md">Adobe Illustrator</li>
            <li class="body-md">Adobe InDesign</li>
          </ul>
        </div>

        <h4 class="heading-sm">Estratégia</h4>
        <div class="container close indented">
          <hr class="identation" />
          <ul>
            <li class="body-md">Design Systems</li>
            <li class="body-md">Adobe Photoshop</li>
            <li class="body-md">Adobe Illustrator</li>
            <li class="body-md">Adobe InDesign</li>
          </ul>
        </div>

        <h4 class="heading-sm">Visual</h4>
        <div class="container close indented">
          <hr class="identation" />
          <ul>
            <li class="body-md">Design de interface</li>
            <li class="body-md">Prototipação de alta fidelidade</li>
            <li class="body-md">Guias de estilo</li>
            <li class="body-md">Identidade visual</li>
          </ul>
        </div>

        <h4 class="heading-sm">Ferramentas</h4>
        <div class="container close indented">
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

    <SectionSeparator />

    <section class="section" id="contact-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Contato]</h2>
        <p class="section-intro">Vamos conversar</p>
        <p class="body-md">
          Phasellus vitae scelerisque metus. Morbi vel venenatis arcu. Nullam vitae dictum magna.
          Mauris consequat libero id risus euismod placerat. Mauris ut tortor gravida, dignissim
          nibh a, semper neque. Integer ac volutpat odio. Integer imperdiet, nunc nec aliquet
          convallis, nisl neque luctus arcu, id porta libero tortor eu enim. Fusce id magna
          molestie, feugiat justo vel, dapibus odio.
        </p>
      </div>
      <div class="container right col close">
        <h4 class="heading-sm">Manda uma mensagem</h4>
        <ContactInfo
          content="fellipemsilva.contato@gmail.com"
          @copy-success="(message) => showToast(message, 'success')"
          @copy-error="(message) => showToast(message, 'error')"
        />
        <h4 class="heading-sm">Manda um alô :)</h4>
        <ContactInfo
          content="+88 99221-2586"
          @copy-success="(message) => showToast(message, 'success')"
          @copy-error="(message) => showToast(message, 'error')"
        />
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

#about-section .left {
  height: auto;
}

.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  overflow: hidden;
  border-radius: 0.25rem;
  max-width: calc(50% - 0.5rem);
}

.my-photo {
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}

.my-photo:hover {
  transform: scale(1.05);
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
}

#contact-section .right {
  align-items: flex-start;
}

@media screen and (min-width: 1200px) {
  #about-section .left {
    height: calc(100vh - 9rem);
  }
}
</style>
