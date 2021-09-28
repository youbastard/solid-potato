<template>
  <section class="post">

    <h1 class="post__title my-8">{{ article.title }}</h1>

    <nuxt-content class="post__article my-8" :document="article" />

    <div class="post__date">
      <h3>Post Date:</h3>
      <div>{{ articleDate }}</div>
    </div>

    <div class="post__tags">
      <h3>Tagged:</h3>
      <ul class="post__tag-list">
        <li v-for="tag in article.tags" :key="tag" class="post__tag-item">
          <nuxt-link :to="`/tagged/${tag}`">{{ tag }}</nuxt-link>
        </li>
      </ul>
    </div>

  </section>
</template>

<script src="./Post.js" />
<style src="./Post.css" />
