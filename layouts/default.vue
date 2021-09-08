<template>
  <div class="layout">
    <SiteHeader class="layout__header" />
    <main class="layout__main"><Nuxt /></main>
    <SiteFooter class="layout__footer" />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter/SiteFooter.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;

    @apply bg-gray-50;
  }

  .layout__header,
  .layout__footer {
    @apply bg-white;
  }

  .layout__main {
    @apply max-w-3xl m-auto;
  }
</style>
