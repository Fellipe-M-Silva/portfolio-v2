<script setup>
import { RouterView } from 'vue-router'
import ToastMessage from './components/ToastMessage.vue'
import HeaderComponentv2 from './components/HeaderComponentv2.vue'
import { ref } from 'vue'
import { provide } from 'vue'
import CustomCursor from './components/CustomCursor.vue'

const currentToastMessage = ref('')
const isToastVisible = ref(false)
const toastType = ref('info')

const showToast = (message, type = 'info', duration = 3000) => {
  currentToastMessage.value = message
  toastType.value = type
  isToastVisible.value = true
}

provide('showToast', showToast)
</script>

<template>
  <HeaderComponentv2 />
  <RouterView />

  <CustomCursor />

  <ToastMessage v-model="isToastVisible" :message="currentToastMessage" :type="toastType" />
</template>

<style scoped></style>
