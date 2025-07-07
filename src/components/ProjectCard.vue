<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  year: Number,
  tags: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Object, // { url: string, alt: string }
    required: true,
    validator: (value) => typeof value.url === 'string' && typeof value.alt === 'string',
  },
  projectId: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

const formattedProjectNumber = computed(() => {
  const num = props.index + 1
  return num < 10 ? `[0${num}]` : `[${num}]`
})

const formattedTags = computed(() => {
  return props.tags.join(', ')
})

const assetFullUrl = computed(() => {
  return import.meta.env.BASE_URL + props.image.url
})
</script>

<template>
  <router-link
    v-if="props.projectId"
    :to="{ name: 'projeto', params: { id: props.projectId } }"
    class="project-card-link"
    :aria-label="`Ver projeto ${formattedProjectNumber}: ${props.name}`"
  >
    <article class="project-card">
      <div class="project-image">
        <img :src="assetFullUrl" :alt="props.image.alt" />
      </div>
      <div class="project-data">
        <div class="project-data-header">
          <h3 class="title-lg">{{ formattedProjectNumber }} {{ props.name }}</h3>
          <p class="title-lg">{{ props.year }}</p>
        </div>
        <p class="body-md">{{ props.title }}</p>
        <p class="title-sm">{{ formattedTags }}</p>
      </div>
      <div class="overlay"></div>
    </article>
  </router-link>
</template>

<style scoped>
.project-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-self: stretch;
}

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
  z-index: 30;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
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
    flex: 1;
  }
  .project-data {
    width: calc(50% - 0.5rem);
  }
}
</style>
