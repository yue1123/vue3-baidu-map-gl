module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/valid-template-root': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-comment': 0
  },
  overrides: [
    {
      files: ['*.ts', '*.vue', '*.tsx'],
      rules: {
        'no-undef': 0,
        '@typescript-eslint/triple-slash-reference': 0
      }
    },
    {
      files: '*',
      globals: {
        BMapGL: 'readonly'
      }
    }
  ]
}
