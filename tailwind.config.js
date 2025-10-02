/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#dbeafe',
					800: '#1e40af',
					600: '#2563eb',
					700: '#1d4ed8'
				},
				secondary: {
					100: '#f3f4f6',
					800: '#374151',
					600: '#6b7280',
					700: '#4b5563'
				},
				success: {
					100: '#d1fae5',
					800: '#065f46',
					600: '#059669',
					700: '#047857'
				}
			}
		}
	},
	plugins: []
};