import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function createThemeStore() {
	// Initialize with system preference or light as default
	const getInitialTheme = (): Theme => {
		if (!browser) return 'light';
		
		// Check localStorage first
		const stored = localStorage.getItem('theme') as Theme;
		if (stored && (stored === 'light' || stored === 'dark')) {
			return stored;
		}
		
		// Check system preference
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		
		return 'light';
	};

	const { subscribe, set, update } = writable<Theme>(getInitialTheme());

	return {
		subscribe,
		set: (theme: Theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				// Apply theme to document
				if (theme === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
			set(theme);
		},
		toggle: () => {
			update(current => {
				const newTheme = current === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					// Apply theme to document
					if (newTheme === 'dark') {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
				}
				return newTheme;
			});
		},
		init: () => {
			if (browser) {
				const theme = getInitialTheme();
				if (theme === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
				set(theme);
			}
		}
	};
}

export const theme = createThemeStore();