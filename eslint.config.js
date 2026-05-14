import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      eslintConfigPrettier,
    ],

    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y,
      prettier: eslintPluginPrettier,
    },

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      /* General JavaScript Rules */
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'prefer-const': 'error',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-debugger': 'warn',

      /* Unused Imports & Variables */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',

      /* Import Rules */
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      /* React Rules */
      'react/jsx-key': 'error',
      'react/self-closing-comp': [
        'warn',
        {
          component: true,
          html: true,
        },
      ],
      'react/no-array-index-key': 'warn',
      'react/button-has-type': 'error',
      'react/no-danger': 'warn',
      'react/no-unknown-property': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/display-name': 'off',

      /* React Hooks */
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      /* Accessibility */
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',

      /* Prettier */
      'prettier/prettier': 'warn',
    },
  },
])
