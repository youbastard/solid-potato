<template>
  <nuxt-link :to="`/post/${slug}`">
    <article class="post-preview">
      <div>{{ title }}</div>
      <tags v-if="hasTags" :tags="tags" />
    </article>
  </nuxt-link>
</template>

<script src="./PostPreview.js" />
<style src="./PostPreview.css" />
