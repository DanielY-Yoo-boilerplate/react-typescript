module.exports = {
  env: {
    browser: true,
    es2020: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  "overrides": [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        es2020: true,
        es6: true,
        node: true
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 11,
        sourceType: "module",
        project: "./tsconfig.json"
      },
      plugins: ["react", "@typescript-eslint"]
    }
  ]
};
