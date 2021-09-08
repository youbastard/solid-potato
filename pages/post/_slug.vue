<template>
  <section class="post">
    <div class="post__date">{{ articleDate }}</div>
    <nuxt-content :document="article" />
    <tags class="post__tags" :tags="article.tags" />
  </section>
</template>

<script>

export default {
  async asyncData ({ $content, params }) {
    const { slug } = params;
    const article = await $content('articles', slug).fetch();
    console.log(article);
    return {
      article,
      slug
    };
  },
  data () {
    return {
      article: () => ({}),
      slug: null
    };
  },
  computed: {
    articleDate () {
      return this.article.date;
    }
  }
};
</script>
