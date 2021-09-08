export default {
  name: 'PostImage',
  props: {
    src: { type: String, default: null },
    alt: { type: String, default: null },
    fallback: { type: String, default: null }
  }
};
