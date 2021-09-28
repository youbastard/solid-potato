export default {
  props: {
    article: { type: Object, default: () => ({}) }
  },
  computed: {
    articleDate () {
      return '';
    }
  }
};
