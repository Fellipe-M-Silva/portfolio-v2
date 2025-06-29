<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: '',
  },
})

const emit = defineEmits(['copy-success', 'copy-error'])

const copyToClipboard = (event) => {
  const textToCopy = event.target.textContent

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log('Texto copiado para a área de transferência:', textToCopy)
      // Dispara um evento de sucesso
      emit('copy-success', 'Copiado!')
    })
    .catch((err) => {
      console.error('Falha ao copiar o texto: ', err)
      // Dispara um evento de erro
      emit('copy-error', 'Erro ao copiar!')
    })
}
</script>

<template>
  <p class="contact-info body-md" @click="copyToClipboard">
    {{ props.content }}
  </p>
</template>

<style scoped>
.contact-info {
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--text-strong);
  background-color: var(--surface-a);
  transform: translateX(-0.5rem);
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

.contact-info:hover {
  color: var(--text-strong);
  background-color: var(--primary-hover);
}

@media screen and (min-width: 768px) {
  .contact-info {
    font-size: 1.5rem;
    line-height: 2rem;
    transform: translateX(-1rem);
    padding: 0.5rem 1rem;
  }
}
</style>
