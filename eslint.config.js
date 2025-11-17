import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'off', // This project often has unused variables for demonstration purposes, so we disable this rule
      'no-irregular-whitespace': [
        'error',
        // Allow irregular whitespace in strings and comments
        { skipStrings: true, skipComments: true },
      ],
    },
  },
])
