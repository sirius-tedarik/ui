
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/ui/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#00A8F0',
			},
		},
	},
	plugins: [],
}
