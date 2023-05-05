module.exports = {
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	overrides: [
		{
			files: "**/*.test.*",
			rules: {
				"@typescript-eslint/no-unsafe-any": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	root: true,
};
