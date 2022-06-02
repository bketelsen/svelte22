const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './svelte.config.js'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['winter']
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),

		require('@tailwindcss/typography'),
		require('daisyui')
	]
};

module.exports = config;
