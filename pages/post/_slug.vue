<template>
  <section class="post">

    <div class="post__date my-8">{{ articleDate }}</div>
    <nuxt-content class="post__article" :document="article" />
    <tags class="post__tags my-8" :tags="article.tags" />

    <div class="post__more-links my-8">
      Next Up:
      <nuxt-link v-if="next" class="post__more-button" :to="next.slug" data-dir="next">{{ next.title }}</nuxt-link>
    </div>

  </section>
</template>

<script src="./post.js" />
<style src="./post.css" scoped>
