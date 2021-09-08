<template>
  <div class="bg-gray-50">
    <SiteHeader class="bg-white" />
    <main class="max-w-3xl m-auto">
      <Nuxt />
    </main>
    <SiteFooter class="bg-white" />
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
