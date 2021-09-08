<template>
  <section>
    <post-preview v-for="post in posts" :key="post.id" class="my-4 block" v-bind="post" />
  </section>
</template>

<script>
import PostPreview from '@/components/PostPreview/PostPreview.vue';

export default {
  components: {
    PostPreview
  },
  async asyncData ({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'image', 'tags', 'slug'])
      .sortBy('createdAt', 'asc')
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
