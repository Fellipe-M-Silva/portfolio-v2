<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isCursorVisible = ref(false)
const isCursorFilled = ref(false)
const message = ref(' ')
const showMessage = ref(false)

const handleMouseMove = (event) => {
  if (isCursorVisible.value) {
    const cursor = document.querySelector('.custom-cursor')
    if (cursor) {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }
  }
}

const handleMouseOver = (event) => {
  const photoContainer = document.getElementById('photo-container')
  const projectCard = document.querySelector('.project-card')
  if (photoContainer && photoContainer.contains(event.target)) {
    console.log('Mouse over photo container')
    message.value = 'oi :)'
    showMessage.value = true
    isCursorFilled.value = true
    return
  }

  if (projectCard && projectCard.contains(event.target)) {
    message.value = 'ver projeto →'
    showMessage.value = true
    isCursorFilled.value = true
    return
  }

  showMessage.value = false
  isCursorFilled.value = false
  message.value = ''
}

const handleMouseEnterDocument = () => {
  isCursorVisible.value = true
}

const handleMouseLeaveDocument = () => {
  isCursorVisible.value = false
  message.value = ''
  showMessage.value = false
  isCursorFilled.value = false
}

onMounted(() => {
  console.log('CustomCursor component mounted')
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseenter', handleMouseEnterDocument)
  document.addEventListener('mouseleave', handleMouseLeaveDocument)
})

onUnmounted(() => {
  console.log('CustomCursor component unmounted')
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseenter', handleMouseEnterDocument)
  document.removeEventListener('mouseleave', handleMouseLeaveDocument)
})
</script>

<template>
  <div
    class="custom-cursor"
    :class="{ 'cursor-filled': isCursorFilled, 'hide-cursor': !isCursorVisible }"
    @mousemove="handleMouseMove"
    @mouseover="handleMouseOver"
  >
    <p class="title-md" :class="{ 'show-message': showMessage }">{{ message }}</p>
  </div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: -100px;
  left: -100px;
  display: flex;
  min-width: 1rem;
  min-height: 1rem;
  border-radius: 0.5rem;
  pointer-events: none;
  cursor: none;
  opacity: 1;
  background-color: #ffc91f;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
}

.custom-cursor.hide-cursor {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}

.custom-cursor.cursor-filled {
  min-width: auto;
  min-height: auto;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
}

.title-md {
  white-space: nowrap;
  color: black;
  transition:
    transform 0.2s ease-out,
    opacity 0.2s ease-out;
  transform: scale(0);
  opacity: 0;
}

.title-md.show-message {
  transform: scale(1);
  opacity: 1;
}
</style>
