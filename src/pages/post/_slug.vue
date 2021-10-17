<template>
  <main class="post">
    <post :article="article" />
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
