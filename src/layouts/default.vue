<template>
  <div class="layout">
    <header class="layout__header">
      <nuxt-link to="/" class="layout__title" title="Sawtooth">Sawtooth</nuxt-link>
    </header>
    <Nuxt class="layout__main" />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-base);
}

.layout__header,
.layout__footer {
  background-color: var(--bg-secondary);
}

.layout__main {
  margin: 0 auto;
  flex-grow: 1;
}

.layout__title {
  font-size: 2rem;
  letter-spacing: 1px;
  text-transform: lowercase;
}
</style>
