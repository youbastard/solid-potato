<template>
  <section class="post">

    <h1 class="post__title my-8">{{ article.title }}</h1>

    <nuxt-content class="post__article my-8" :document="article" />

  </section>
</template>

<script src="./Post.js" />
<style src="./Post.css" />
