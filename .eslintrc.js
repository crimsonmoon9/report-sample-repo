module.exports = {
  env: {
    browser: true
  },
  root: true,
  extends: [
    'plugin:vue/recommended',
    'standard',
    // 'airbnb',
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  ignorePatterns: ['node_module/*']
}
