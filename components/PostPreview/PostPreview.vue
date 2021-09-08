<template>
  <article class="post-preview">
    <nuxt-link :to="`/post/${slug}`">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
    </nuxt-link>
    <tags v-if="hasTags" :tags="tags" />
  </article>
</template>

<script src="./PostPreview.js" />
<style src="./PostPreview.css" />
