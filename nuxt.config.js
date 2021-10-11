export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sawtooth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/scripts/theme.js' }
    ]
  },

  css: [
    '@/styles/global.css',
    '@/styles/vars/colors.css',
    '@/styles/theme/light.css',
    '@/styles/theme/dark.css',
    '@/styles/links.css',
    '@/styles/markdown.css',
    '@/styles/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // only import .vue files since we are writing the JS for each
  // component in seperate files
  // https://github.com/nuxt/components#extensions
  components: [
    {
      path: '~/components',
      extensions: ['vue']
    }
  ],

  // Modules for dev and build (recommended):
  // https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // import svg as components
    'nuxt-svg-loader',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  googleFonts: {
    families: {
      Spectral: {
        wght: [400, 700],
        ital: [400, 800]
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text']
  }

};
