<template>
  <main class="page-tagged">
    <post-preview v-for="post in posts" :key="post.id" class="my-4 block" v-bind="post" />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const { tag } = params;

    const posts = await $content('articles')
      .only(['title', 'subtitle', 'cover', 'tags', 'slug'])
      .sortBy('date', 'asc')
      .where({ tags: { $containsAny: [tag] } })
      .fetch();

    return {
      posts
    };
  },
  data () {
    return {
      posts: []
    };
  }
};

</script>
