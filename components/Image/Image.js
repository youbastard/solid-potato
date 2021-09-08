export default {
  name: 'Image',
  props: {
    src: { type: String, default: null },
    alt: { type: String, default: null },
    fallback: { type: String, default: null }
  }
};
