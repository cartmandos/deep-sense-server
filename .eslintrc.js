module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['node'],
  env: {
    node: true,
    es6: true,
  },
  overrides: [],
  rules: {
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/exports-style': ['warn', 'module.exports'],
    'node/prefer-promises/fs': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'key-spacing': ['warn', { afterColon: true }],
    'no-multi-spaces': 'warn',
    'no-undef': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: 'next' }],
    quotes: ['off', 'single'],
    indent: ['off', 2, { SwitchCase: 1, ignoreComments: true }],
  },
};
