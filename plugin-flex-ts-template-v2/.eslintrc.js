module.exports = {
  root: true,
  extends: ['twilio-ts'],
  ignorePatterns: ['/*', '!/src', '*.test.ts', '*.test.tsx', './**/__mocks__/*.ts', './**/__mocks__/*.tsx'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    camelcase: 'off',
    complexity: 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-unresolved': 'off',
    'import/no-unused-modules': 'off',
    'multiline-comment-style': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-duplicate-imports': 'off',
    'no-nested-ternary': 'off',
    'prefer-destructuring': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-duplicate-string': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
  },
};
