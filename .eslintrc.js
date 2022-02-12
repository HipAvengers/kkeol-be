module.exports = {
  root: true, // project level eslintrc only
  env: {
    es2020: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['import', 'simple-import-sort', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    'import/prefer-default-export': 'off', // https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module
    'import/no-self-import': 'error',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }, // allow single line member
    ],
    eqeqeq: ['error', 'smart'],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-useless-constructor': 'off',
    'eol-last': ['error', 'always'],
    'jest/expect-expect': 'off',
    'no-unused-vars': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-node-protocol': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  ignorePatterns: ['.eslintrc.js', 'jest.config.ts', '.babel.config.jest'],
};