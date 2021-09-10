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

<script>
export default {
  async asyncData ({ $content, params }) {
    const { slug } = params;
    const article = await $content('articles', slug).fetch();

    // eslint-disable-next-line no-unused-vars
    const [prev, next] = await $content('articles')
      .only(['title', 'path'])
      .sortBy('date')
      .surround(slug)
      .fetch();

    return {
      article,
      slug,
      next
    };
  },
  data () {
    return {
      article: () => ({}),
      next: () => ({}),
      slug: null
    };
  },
  computed: {
    articleDate () {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(this.article.createdAt);
      return date.toLocaleDateString('en-US', options);
    }
  }
};
</script>

<style>
.post {
  position: relative;
}

.post__title {
  @apply text-4xl font-black tracking-wider;
}

.post__title::first-letter {
  color: var(--accent-red);
}

.post__more-links {
  border-top: 1px solid var(--text-secondary);
  @apply flex justify-between py-8;
}

.post__more-button {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  @apply rounded p-2 text-sm;
  &:hover {
    background: var(--bg-tertiary);
  }
}
</style>
