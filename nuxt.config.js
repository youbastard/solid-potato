export default {
  target: 'static',

  head: {
    title: 'sawtooth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

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
      Rubik: {
        wght: [400, 700],
        ital: [400]
      }
    }
  },

  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text']
  }

};
