<template>
  <div class="separator section"><hr class="divider" /></div>
</template>

<style scoped>
.separator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
}

.divider {
  background-color: var(--border-muted);
  border: none;
  height: 1px;
  width: 100%;
}

@media screen and (min-width: 480px) {
  .separator {
    padding: 2rem;
  }
}

@media screen and (min-width: 768px) {
  .separator {
    padding: 3rem;
  }
}
</style>
