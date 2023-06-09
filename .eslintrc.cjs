module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	overrides: [
		{
			files: "**/*.test.*",
			rules: {
				"@typescript-eslint/no-unsafe-any": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ["@typescript-eslint"],
	root: true,
};
