<template>
  <section class="post">
    <h1 class="post__title">{{ article.title }}</h1>
    <nuxt-content class="post__article" :document="article" />
    <a :href="article.url"> Read more about {{ article.title }} on Wikipedia</a>
  </section>
</template>

<script src="./Post.js" />
<style src="./Post.scss" lang="scss" />
