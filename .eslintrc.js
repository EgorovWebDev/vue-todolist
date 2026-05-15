module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'vue/no-v-html': 'warn', // предупреждает об использовании v-html (потенциально небезопасно)
    'vue/require-default-prop': 'error', // требует default для необязательных пропсов
    'vue/attribute-hyphenation': ['error', 'never'], // запрещает дефисы в именах атрибутов
    'vue/component-name-in-template-casing': ['error', 'PascalCase'], // PascalCase в шаблонах
  },
}
