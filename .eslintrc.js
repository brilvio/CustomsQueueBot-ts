module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',

    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'no-restricted-syntax': 'off',
    'import/no-unresolved': 0, // Turn off "Unable to resolve path to module ..." error
    'import/extensions': 0, // Turn off "Missing file extension for ..." error
  },
};
