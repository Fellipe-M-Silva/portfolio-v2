<script setup>
import { RouterView } from 'vue-router'
import ToastMessage from './components/ToastMessage.vue';
import { ref } from 'vue';
import { provide } from 'vue';

const currentToastMessage = ref('');
const isToastVisible = ref(false);
const toastType = ref('info');

const showToast = (message, type = 'info', duration = 3000) => {
  currentToastMessage.value = message;
  toastType.value = type;
  isToastVisible.value = true;
};

provide('showToast', showToast);
</script>

<template>
  <RouterView />

  <ToastMessage
      v-model="isToastVisible" 
      :message="currentToastMessage" 
      :type="toastType" 
    />
</template>

<style scoped>
</style>
