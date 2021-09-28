<template>
  <main class="post">

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

    <div class="post__previous">
      <h3>Previous Post:</h3>
      <div>
        <nuxt-link v-if="next" :to="next.slug">{{ next.title }}</nuxt-link>
      </div>
    </div>

  </main>
</template>

<script>
import PostArticle from '@/components/Post/Post.vue';

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
