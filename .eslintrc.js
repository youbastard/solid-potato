const isDev = (process.env.NODE_ENV !== 'production');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'no-console': [((isDev ? 'off' : 'error')), { allow: ['warn', 'error'] }],
    semi: [2, 'always'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0
  }
};
