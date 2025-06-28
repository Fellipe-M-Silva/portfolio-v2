<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isCursorVisible = ref(false)
const isCursorFilled = ref(false)
const message = ref(' ')
const showMessage = ref(false)
const windowWidth = ref(window.innerWidth)

const MOBILE_BREAKPOINT = 768

const shouldRenderCursor = computed(() => {
  return windowWidth.value > MOBILE_BREAKPOINT
})

let messageClearTimeout = null

const handleMouseMove = (event) => {
  if (!shouldRenderCursor.value) return

  if (isCursorVisible.value) {
    const cursor = document.querySelector('.custom-cursor')
    if (cursor) {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }
  }
}

const handleMouseOver = (event) => {
  const target = event.target

  const hasClass = (el, className) => {
    if (!el) return false
    let current = el
    while (current && current !== document.body) {
      if (current.classList && current.classList.contains(className)) {
        return true
      }
      current = current.parentElement
    }
    return false
  }

  if (messageClearTimeout) {
    clearTimeout(messageClearTimeout)
    messageClearTimeout = null
  }

  let nextMessage = ''
  let nextShowMessage = false
  let nextIsCursorFilled = false
  let nextIsCursorVisible = true

  if (hasClass(target, 'button') || hasClass(target, 'primary') || hasClass(target, 'secondary')) {
    nextIsCursorVisible = false
    nextIsCursorFilled = false
  } else if (hasClass(target, 'social-link')) {
    nextMessage = '↗'
    nextShowMessage = true
    nextIsCursorFilled = true
  } else if (
    target.id === 'my-name' ||
    (target.parentElement && target.parentElement.id === 'my-name') ||
    target.id === 'my-photo' ||
    (target.parentElement && target.parentElement.id === 'my-photo')
  ) {
    nextMessage = 'oi :)'
    nextShowMessage = true
    nextIsCursorFilled = true
  } else if (hasClass(target, 'project-card')) {
    nextMessage = 'ver projeto →'
    nextShowMessage = true
    nextIsCursorFilled = true
  }

  // Aplica as mudanças no estado
  isCursorVisible.value = nextIsCursorVisible
  isCursorFilled.value = nextIsCursorFilled

  // Lógica para a mensagem:
  if (nextShowMessage) {
    message.value = nextMessage
    showMessage.value = true
  } else {
    // Se a mensagem ESTAVA visível e AGORA não deve estar
    if (showMessage.value) {
      showMessage.value = false // Isso aciona a transição CSS de saída
      // Define um timeout para limpar o texto APÓS a transição
      messageClearTimeout = setTimeout(() => {
        message.value = ''
      }, 300) // 200ms é a duração da sua transição CSS para 'transform' e 'opacity'
    } else {
      // Se a mensagem já não estava visível, apenas limpa o valor (redundante, mas seguro)
      message.value = ''
    }
  }
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

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
  if (!shouldRenderCursor.value) {
    handleMouseLeaveDocument()
  }
}

onMounted(() => {
  console.log('CustomCursor component mounted')
  window.removeEventListener('resize', updateWindowWidth)
  window.addEventListener('resize', updateWindowWidth)
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
    v-if="shouldRenderCursor"
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
  background-color: var(--primary);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);
  transition:
    all 0.3s ease-out,
    opacity 0.1s ease-out;
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
  color: var(--text-on-primary);
  max-width: 1rem;
  max-height: 1rem;
  transform: scale(0);
  opacity: 0;
  transition: all 0.5s ease-out;
}

.title-md.show-message {
  max-width: 10rem;
  max-height: 10rem;
  transform: scale(1);
  opacity: 1;
}
</style>
