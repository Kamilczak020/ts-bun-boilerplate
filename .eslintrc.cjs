const prettierOptions = require('./.prettierrc.cjs');

module.exports = {
  plugins: ['@typescript-eslint', 'eslint-comments', 'prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  env: {
    node: true,
    browser: true,
    jest: false
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
  },
  rules: {
    'no-await-in-loop': 'off',
    // allows continue in for loops
    'no-continue': 'off',
    // Do not allow function expressions and with statements
    'no-restricted-syntax': ['error', 'WithStatement'],
    // Stupid rule, forcing `this` into any class methods
    'class-methods-use-this': 'off',
    // this rule is very annoying if you're in the middle of writing the component and it changes
    'arrow-body-style': 'off',
    // TODO: We should think of preventing dependency cycles, but for now we have plenty of them
    'import/no-cycle': 'off',
    // It's not accurate in the monorepo style
    'import/no-extraneous-dependencies': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    // bullshit rule
    'max-classes-per-file': 'off',
    // we do it a lot in reducers
    'no-param-reassign': 'off',
    // used a lot in for loops
    'no-plusplus': 'off',
    // env variables
    'no-underscore-dangle': 'off',
    // Allow f.e. 2 < x && x < 4
    'yoda': ['error', 'never', { 'onlyEquality': true }],
    'prefer-destructuring': [1],
    'prettier/prettier': [2, prettierOptions],
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // we prefer using arrow functions for components
    'react/function-component-definition': 'off',
    // we do use spreading props a lot and it's a great pattern when making generic components
    'react/jsx-props-no-spreading': 'off',
    // breakes for forwardRef :(
    'react/no-unused-prop-types': 'off',
    // prop validation is irrelevant for typescript
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // Seems bugged, reports on almost every math operation
    '@typescript-eslint/restrict-plus-operands': 'off',
    // Allow us to use ts-ignore
    '@typescript-eslint/ban-ts-comment': 'off',
    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // we usually have class fields one after another without linebreal
    '@typescript-eslint/lines-between-class-members': 'off',
    // TODO: Temporarily filter our env variable names. A solution for that would be to introduce common service that encapsulates them with proper names
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'variable',
      format: null,
      filter: {
        regex: '__.*__',
        match: true
      }
    }],
    // dispatch returns promise which we often do not await since they are handled by redux thunks
    '@typescript-eslint/no-floating-promises': 'off',
    // it screams when we assign async function as React prop which is very common
    '@typescript-eslint/no-misused-promises': 'off',
    // for some reason it shows up for every method related with redux toolkit
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    // breakes for 'style' objects from css module
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // we're not that strict with typing
    '@typescript-eslint/no-unsafe-return': 'off',
    // we're taking advantage of hoisting so that rule is kind of irrelevant
    '@typescript-eslint/no-use-before-define': 'off',
    // throws an error when we want to e.g log "object?.value"
    '@typescript-eslint/restrict-template-expressions': 'off',
    // allow explicit any
    '@typescript-eslint/no-explicit-any': 'off',
    // ensure that there is at least one 'expect' call made in test - Cypress doesn't use expect
    'jest/expect-expect': 'off'
  }
};


