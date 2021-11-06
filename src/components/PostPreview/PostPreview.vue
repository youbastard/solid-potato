<template>
  <article class="post-preview">
    <nuxt-link :to="`/post/${slug}`">
      <h3>{{ title }}</h3>
    </nuxt-link>
  </article>
</template>

<script src="./PostPreview.js" />
<style src="./PostPreview.css" />
