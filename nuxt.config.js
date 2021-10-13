export default {
  target: 'static',

  srcDir: 'src/',

  css: [
    '@/styles/global.css',
    '@/styles/theme/dark.css',
    '@/styles/links.css',
    '@/styles/markdown.css',
    '@/styles/fonts.css'
  ],

  components: [
    {
      path: '@/components',
      extensions: ['vue']
    }
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-svg-loader',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxt/content'
  ],

  googleFonts: {
    families: {
      Quicksand: {
        wght: [400, 700],
        ital: [400]
      }
    }
  },

  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text']
  }

};
