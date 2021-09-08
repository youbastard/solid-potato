import Tags from '@/components/Tags/Tags.vue';

export default {
  name: 'PostPreview',
  components: {
    Tags
  },
  computed: {
    hasTags () {
      return this.tags.length > 0;
    }
  },
  props: {
    title: { type: String },
    image: { type: String },
    tags: { type: Array, default: () => ([]) },
    slug: { type: String }
  }
};
