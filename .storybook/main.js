module.exports = {
	stories: ['../stories/**/*.stories.tsx'],
	addons: [{
		name: '@storybook/addon-essentials',
		options: {
			actions: false
		}
	}],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
};
