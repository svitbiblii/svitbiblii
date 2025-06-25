import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import { FlatCompat } from '@eslint/eslintrc';

// Initialize FlatCompat for legacy config support
const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default [
	// Base JavaScript configuration
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			...js.configs.recommended.rules,
		},
	},

	// TypeScript configuration
	...tseslint.configs.recommended.map((config) => ({
		...config,
		files: ['**/*.{ts,tsx}'],
	})),
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'prefer-const': 'error',
		},
	},

	// React configuration
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'react': reactPlugin,
			'react-hooks': reactHooksPlugin,
			'unused-imports': unusedImportsPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: 'detect', // Automatically detect React version
			},
		},
		rules: {
			// React rules
			...reactPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off', // Not needed in Next.js 13+
			'react/prop-types': 'off', // Using TypeScript for prop validation
			'react/no-unescaped-entities': 'off',
			'react/jsx-uses-react': 'off', // Not needed in React 17+
			'react/jsx-uses-vars': 'error',
			'react/jsx-key': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-undef': 'error',
			'react/no-children-prop': 'error',
			'react/no-danger-with-children': 'error',
			'react/no-deprecated': 'error',
			'react/no-direct-mutation-state': 'error',
			'react/no-find-dom-node': 'error',
			'react/no-is-mounted': 'error',
			'react/no-render-return-value': 'error',
			'react/no-string-refs': 'error',
			'react/no-unknown-property': 'error',
			'react/require-render-return': 'error',

			// React Hooks rules
			...reactHooksPlugin.configs.recommended.rules,
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// Unused imports cleanup
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
		},
	},

	// Next.js configuration using compat
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		rules: {
			'@next/next/no-page-custom-font': 'off',
			'@next/next/no-img-element': 'warn', // Prefer Next.js Image component
		},
	},

	// Prettier configuration (must be last to override other formatting rules)
	prettierConfig,

	// Custom project rules
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		rules: {
			'no-console': 'warn',
			'prefer-const': 'error',
			'no-var': 'error',
		},
	},

	// Ignore patterns
	{
		ignores: [
			'.next/**',
			'.idea/**',
			'node_modules/**',
			'dist/**',
			'build/**',
			'*.config.js',
			'*.config.mjs',
		],
	},
];
