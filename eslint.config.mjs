// eslint.config.mjs
import { Linter } from 'eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginSecurity from 'eslint-plugin-security';

/** @type {Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      'node_modules',
      '.next',
      'out',
      'build',
      'coverage',
      '*.pem',
      '.vercel',
      '*.tsbuildinfo',
      'next-env.d.ts',
      '*.env',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: eslintPluginReact,
      '@typescript-eslint': await import('@typescript-eslint/eslint-plugin').then(module => module.default),
      security: eslintPluginSecurity,
    },
    rules: {
      // Your rules here...
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: await import('@typescript-eslint/parser').then(module => module.default),
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
