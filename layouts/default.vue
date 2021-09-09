<template>
  <div>
    <SiteHeader class="layout__header" />
    <Nuxt class="layout__main" />
    <!-- <SiteFooter class="layout__footer" /> -->
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-primary);
    color: var(--text-primary);

    @apply min-h-screen;
  }

  .layout__header,
  .layout__footer {
    background-color: var(--bg-secondary);
  }

  .layout__main {
    @apply max-w-xl m-auto flex-grow;
  }
</style>
