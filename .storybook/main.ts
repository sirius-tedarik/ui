import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
	stories: ['../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		{
			name: 'storybook-addon-sass-postcss',
			options: {
				loadSassAfterPostCSS: true,
			},
		},
	],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
}
export default config
