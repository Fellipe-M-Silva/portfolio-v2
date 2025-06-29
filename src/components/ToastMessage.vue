<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)
let timeoutId = null

watch(
  () => props.modelValue,
  (newVal) => {
    visible.value = newVal
    if (newVal) {
      startTimer()
    } else {
      clearTimeout(timeoutId)
    }
  },
)

const startTimer = () => {
  clearTimeout(timeoutId)
  if (props.duration > 0) {
    timeoutId = setTimeout(() => {
      visible.value = false
      emit('update:modelValue', false)
    }, props.duration)
  }
}

onMounted(() => {
  if (visible.value) {
    startTimer()
  }
})

onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>

<template>
  <transition name="toast">
    <div v-if="visible" class="toast-message" :class="type" role="status" aria-live="polite">
      {{ message }}
    </div>
  </transition>
</template>

<style scoped>
.toast-message {
  position: fixed;
  top: 7rem;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: var(--surface-b);
  color: var(--text-strong);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  z-index: 100;
  white-space: nowrap;
}

.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%);
}
</style>
