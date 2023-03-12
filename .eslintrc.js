/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'unused-imports', 'react', 'react-hooks', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.json', '.css', '.scss', '.svg', '.png'],
    'import/resolver': {
      'babel-module': {},
    },
  },
  // react See: https://github.com/jsx-eslint/eslint-plugin-react
  // react-hooks See: https://reactjs.org/docs/hooks-rules.html
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/hook-use-state': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-array-index-key': 'warn', // FIXME: enable this when integration
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css', '**/*.scss'],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'builtin',
            pattern: 'react',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '#/**',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: false,
        ignore: ['.svg'],
      },
    ],
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_query'],
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 80,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'newline-before-return': 'error',
    'no-duplicate-imports': 'error',
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'cjs-export',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'if',
        prev: '*',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'always'],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
      },
    ],
    'default-param-last': 'warn',
  },
};

module.exports = config;
