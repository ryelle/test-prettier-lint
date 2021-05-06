module.exports = {
	extends: 'plugin:@wordpress/eslint-plugin/recommended',
	root: true,
	rules: {
		'max-len': [
			'error',
			{
				code: 115,
				ignoreUrls: true,
				ignoreTrailingComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
	},
	overrides: [],
};
