<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import FooterComponent from '../components/FooterComponent.vue'
import SectionSeparator from '../components/SectionSeparator.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import { inject, onMounted, ref } from 'vue'
import projetos from '../data/projects.json'

const showToast = inject('showToast')

const projects = ref([])

onMounted(() => {
  projects.value = projetos
  console.log('Projetos carregados:', projects.value)
})
</script>

<template>
  <main>
    <HeroSection />

    <SectionSeparator />

    <section class="section" id="projects-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Projetos]</h2>
        <p class="section-intro">Resultados que vão além do produto</p>
        <p class="body-md">
          A atenção ao detalhe e a organização entregam valor que vai além do esperado. Cada
          trabalho busca não apenas criar ou melhorar produtos, mas também integrar clientes,
          desenvolvedores e stakeholders com clareza.
        </p>

        <p class="body-md">
          Desmistificando o design, é possível garantir que o processo seja tão eficaz quanto o
          resultado, gerando impacto duradouro para todos.
        </p>
      </div>

      <div class="container right col zero">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :name="project.name"
          :year="project.year"
          :tags="project.tags"
          :title="project.title"
          :image="project.coverImage"
          :projectId="project.id"
          :index="index"
        />
      </div>
    </section>

    <SectionSeparator />

    <section class="section" id="services-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Serviços]</h2>
        <p class="section-intro">Onde um designer digital atua</p>
        <p class="body-md">
          Embora seja apaixonado por projetar para experiências marcantes, minha atuação não para
          por aí. Pense em mim como um <em>canivete-suíço:</em> conectando as pontas desde a
          estratégia inicial do produto até a garantia da sua usabilidade e acessibilidade.
        </p>
        <p class="body-md">
          Meu trabalho envolve entender o negócio e o usuário, colaborar com desenvolvedores e
          traduzir para clientes e stakeholders como o que fazemos vai <em>gerar valor</em> para seu
          produto.
        </p>
      </div>

      <div class="container right col close">
        <h4 class="heading-sm">Design de interface (UI)</h4>
        <div class="container close indented">
          <hr class="identation" />
          <p class="body-md">
            Funcionalidade e estética são essenciais para que o usuário final tenha uma boa
            experiência de uso; ainda assim, também é importante considerar a facilidade de
            implementação e a manutenção do produto. Além de um modelo da interface, é necessário
            garantir um bom
            <em>alicerce</em> que permita que o produto seja desenvolvido, mantido – e eventualmente
            expandido – de forma eficiente.
          </p>
        </div>

        <ul>
          <li class="list-item">01 Guias de estilo e Design Systems</li>
          <li class="list-item">02 Design responsivo</li>
          <li class="list-item">03 Prototipação e testes visuais</li>
        </ul>

        <h4 class="heading-sm">Experiência de Usuário (UX)</h4>
        <div class="container close indented">
          <hr class="identation" />
          <p class="body-md">
            Um produto bonito e que funciona bem de nada serve se quem vai usá-lo não consegue
            entender como ele funciona ou decide que não gosta dele. Projetar para uma boa
            experiência do usuário permite que o usuário final interaja com o produto de forma
            eficiente e satisfatória, garantindo que ele atinja seus objetivos sem frustrações.
          </p>
        </div>

        <ul>
          <li class="list-item">01 Pesquisa e análise de usuários</li>
          <li class="list-item">02 Mapeamento de jornada do usuário</li>
          <li class="list-item">03 Arquitetura da Informação</li>
        </ul>

        <h4 class="heading-sm">Identidade Visual</h4>
        <div class="container close indented">
          <hr class="identation" />
          <p class="body-md">
            A identidade visual é a <em>alma</em> do seu produto, a primeira impressão que fica e a
            forma como ele se comunica com o mundo. Não se trata apenas de um logotipo, cores e
            letras bonitas, mas de uma linguagem visual que reflete os valores e a essência da sua
            marca. É o que torna seu produto reconhecível e memorável.
          </p>
        </div>

        <ul>
          <li class="list-item">01 Sistemas de identidade visual</li>
          <li class="list-item">02 Manual de marca</li>
          <li class="list-item">03 Materiais de apoio e comunicação</li>
        </ul>
      </div>
    </section>

    <SectionSeparator />

    <section class="section" id="about-section">
      <div class="container left col far">
        <h2 class="heading-sm">[Sobre]</h2>
        <p class="section-intro">Cabeça nas nuvens, pés no chão</p>
        <p class="body-md">
          Gosto de criar de tudo. O ato criativo, para mim, é indissociável de tudo o que eu faço.
          Mas claro, criatividade sem organização não leva a lugar nenhum. Para mim, todo esforço
          criativo precisa estar na interseção entre o incrível e o factível.
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
            <li class="body-md">Questionários</li>
            <li class="body-md">Entrevistas com usuário</li>
            <li class="body-md">Avaliação de usabilidade</li>
          </ul>
        </div>

        <h4 class="heading-sm">Estratégia</h4>
        <div class="container close indented">
          <hr class="identation" />
          <ul>
            <li class="body-md">Planejamento de produto</li>
            <li class="body-md">Design Systems</li>
            <li class="body-md">Design Sprints</li>
            <li class="body-md">Gestão de Projeto</li>
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
            <li class="body-md">Figma Design</li>
            <li class="body-md">Figma Slides</li>
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
        <p class="section-intro">Oi :)</p>
        <p class="body-md">
          Tem uma ideia borbulhando? Precisa de ajuda para traduzir um desafio de design em uma
          solução mais clara? Ou talvez só queira conversar um pouco sobre produtos digitais? Seja
          qual for o motivo, adoraria te ouvir. Minha caixa de entrada está sempre aberta para
          conversas que geram valor!
        </p>
      </div>
      <div class="container right col close">
        <h4 class="heading-sm">Mande uma mensagem:</h4>
        <ContactInfo
          content="fellipemsilva.contato@gmail.com"
          @copy-success="(message) => showToast(message, 'success')"
          @copy-error="(message) => showToast(message, 'error')"
        />
        <h4 class="heading-sm">Mande um alô:</h4>
        <ContactInfo
          content="+88 99221-2586"
          @copy-success="(message) => showToast(message, 'success')"
          @copy-error="(message) => showToast(message, 'error')"
        />
      </div>
    </section>

    <FooterComponent />
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

#services-section ul {
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
