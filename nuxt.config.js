export default {
  target: 'static',

  srcDir: 'src/',

  styleResources: {
    scss: [
      // screen.scss needs to be first becuase
      // the scss plugin module doesn't hoist
      // the "@use" statement
      '@/styles/mixins/screen.scss',
      '@/styles/mixins/box-shadow.scss',
      '@/styles/mixins/corner-radius.scss',
      '@/styles/mixins/headings.scss',
      '@/styles/mixins/label.scss',
      '@/styles/mixins/ring.scss',
      '@/styles/mixins/screen-reader.scss',
      '@/styles/mixins/text-size.scss',
      '@/styles/mixins/tracking.scss',
      '@/styles/mixins/truncate.scss'
    ]
  },

  components: [
    {
      path: '@/components',
      extensions: ['vue']
    }
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-svg-loader',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources'
  ],

  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text']
  }

};
