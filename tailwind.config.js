/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					600: '#2563eb',
					700: '#1d4ed8'
				},
				secondary: {
					600: '#6b7280',
					700: '#4b5563'
				},
				success: {
					600: '#059669',
					700: '#047857'
				},
				warning: {
					600: '#d97706',
					700: '#b45309'
				},
				error: {
					600: '#dc2626',
					700: '#b91c1c'
				}
			}
		}
	},
	plugins: []
};