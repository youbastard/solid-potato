<template>
  <section class="tags">
    Tagged:
    <ul class="tags__list">
      <li v-for="tag in tags" :key="tag" class="tags__item">
        <nuxt-link class="tags__link" :to="`/tagged/${tag}`">{{ tag }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script src="./Tags.js" />
<style src="./Tags.css" />
