module.exports = {
	globals: {
		React: 'readonly',
		JSX: 'readonly',
		Proxy: 'readonly',
		module: 'readonly',
		require: 'readonly',
		process: 'readonly',
		jest: 'readonly',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@components', './src/components'],
                    ['@components/*', './src/components/*'],
					['@contexts', './src/contexts'],
					['@contexts/*', './src/contexts/*'],
					['@types', './src/types'],
                    ['@types/*', './src/types/*'],
                    ['@pages', './src/pages'],
				],
				extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
			},
		},
	},
	extends: [
		'plugin:react/recommended', 
        'plugin:import/recommended', 
        'plugin:import/typescript'
	],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-implicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'jest/valid-title': 'off',
		'sonarjs/no-gratuitous-expressions': 'off',
		'@typescript-eslint/no-extra-semi': ['off'],
	},
	overrides: [
	],
}
