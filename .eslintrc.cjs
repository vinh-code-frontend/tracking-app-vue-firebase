/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-unused-components': 'warn',
    'vue/no-mutating-props': 'error',
    'vue/require-default-prop': 'warn',
    'vue/multi-word-component-names': 'warn',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off'
  }
};
