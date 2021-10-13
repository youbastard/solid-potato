<template>
  <main>
    <post-preview v-for="post in posts" :key="post.id" class="my-4 block" v-bind="post" />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('articles')
      .only(['title', 'subtitle', 'cover', 'tags', 'slug'])
      .sortBy('date', 'desc')
      .fetch();
    return {
      posts
    };
  },
  data () {
    return {
      posts: []
    };
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    };
  }
};
</script>
