<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <main>
    <section class="section">
      <div class="container col left far">
        <div class="container col close" id="project-title">
          <h2>VáLá App</h2>
          <p class="body-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia animi quos
            cupiditate, at libero minima consectetur praesentium quidem officiis rem laborum
            architecto doloribus? Iste odio fuga ut quam at!.
          </p>
        </div>

        <div class="container col zero project-info">
          <div class="container close project-metadata">
            <p class="title-md">Ano</p>
            <p class="body-md">2024</p>
          </div>
          <div class="container close project-metadata">
            <p class="title-md">Meu papel</p>
            <p class="body-md">Designer</p>
          </div>
          <div class="container close project-metadata">
            <p class="title-md">Descrição</p>
            <p class="body-md">Um projeto de exemplo usando Vue.js.</p>
          </div>
          <div class="container close project-metadata">
            <p class="title-md">Tags</p>
            <p class="body-md">UI, Arquitetura da informação</p>
          </div>
        </div>
      </div>

      <div class="container col right far">
        <img
          src="https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <img
          src="https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <h2 class="title-md">Visão geral</h2>

        <div class="container close indented-project">
          <hr class="identation" />
          <div class="container col close text">
            <h3>/O desafio</h3>
            <p class="body-md">
              Curabitur auctor pulvinar leo at blandit. Morbi convallis metus nec pretium feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo mattis
              turpis. Duis mollis diam id ligula tincidunt, porta tempus erat posuere. Aenean
              sagittis rhoncus justo nec accumsan.
            </p>
          </div>
        </div>

        <div class="container close indented-project">
          <hr class="identation" />
          <div class="container col close text">
            <h3>/A abordagem</h3>
            <p class="body-md">
              Curabitur auctor pulvinar leo at blandit. Morbi convallis metus nec pretium feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo mattis
              turpis. Duis mollis diam id ligula tincidunt, porta tempus erat posuere. Aenean
              sagittis rhoncus justo nec accumsan.
            </p>
          </div>
        </div>

        <h2 class="title-md">Interface</h2>
        <div class="container close indented-project">
          <hr class="identation" />
          <div class="container col close text">
            <h3>/Preparando o terreno</h3>
            <p class="body-md">
              Curabitur auctor pulvinar leo at blandit. Morbi convallis metus nec pretium feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo mattis
              turpis. Duis mollis diam id ligula tincidunt, porta tempus erat posuere. Aenean
              sagittis rhoncus justo nec accumsan.
            </p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <img
          src="https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <h2 class="title-md">Resultados</h2>
        <div class="container close indented-project">
          <hr class="identation" />
          <div class="container col close text">
            <h3>/Ajustes finais</h3>
            <p class="body-md">
              Curabitur auctor pulvinar leo at blandit. Morbi convallis metus nec pretium feugiat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo mattis
              turpis. Duis mollis diam id ligula tincidunt, porta tempus erat posuere. Aenean
              sagittis rhoncus justo nec accumsan.
            </p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <img
          src="https://images.unsplash.com/photo-1571456653714-a8db063a3e91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>

    <FooterComponent />
  </main>
</template>

<style scoped>
.right {
  padding-top: 0;
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
/* .indented-project .container {
  width: calc(100% * (3 / 4) - 0.5rem);
} */

.project-metadata :first-child {
  width: calc(100% * (1 / 4) - 0.5rem);
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

@media screen and (min-width: 480px) {
  .indented-project .identation {
    width: calc(100% * (1 / 2) - 0.5rem);
  }
  .indented-project .text {
    width: calc(100% * (1 / 2) - 0.5rem);
  }

  .project-metadata :first-child {
    width: calc(100% * (1 / 2) - 0.5rem);
  }
}

@media screen and (min-width: 768px) {
  .project-title p {
    width: calc(100% * (1 / 2) - 0.5rem);
  }

  .project-metadata :first-child {
    width: calc(100% * (1 / 3) - 0.5rem);
  }
}

@media screen and (min-width: 1024px) {
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
