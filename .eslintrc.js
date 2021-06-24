module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'no-var': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'object-curly-spacing': ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
  },
  env: {
    browser: true,
    node: true,
  },
};
