export default {
  name: 'PostPreview',
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
