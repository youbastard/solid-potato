<template>
  <main class="post">

    <h1 class="post__title my-8">{{ article.title }}</h1>

    <nuxt-content class="post__article my-8" :document="article" />

    <div class="post__date">
      <h3>Post Date:</h3>
      <div class="post__date my-8">{{ articleDate }}</div>
    </div>

    <div class="post__tags">
      <h3>Tagged:</h3>
      <ul class="post__tag-list">
        <li v-for="tag in article.tags" :key="tag" class="tags__item">
          <nuxt-link class="tags__link" :to="`/tagged/${tag}`">{{ tag }}</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="post__previous">
      <h3>Previous Post:</h3>
      <nuxt-link v-if="next" class="post__more-button" :to="next.slug" data-dir="next">{{ next.title }}</nuxt-link>
    </div>

  </main>
</template>

<script src="./post.js" />
<style src="./post.css" scoped>
