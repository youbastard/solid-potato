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
      return this.article.date;
    }
  }
};
