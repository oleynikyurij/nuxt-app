module.exports = {
  "root": true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-plusplus': 'off',
    'max-len': ['error', { ignorePattern: '([\\s\\S]*?)' }],
    'no-alert': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vue/multi-word-component-names': 'off',
    'global-require': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'vuejs-accessibility/media-has-caption': 0,
  },
};
