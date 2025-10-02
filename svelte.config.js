import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.error(`Prerender error on ${path}:`, message);
				if (referrer) {
					console.error(`Referrer: ${referrer}`);
				}
			},
			handleUnseenRoutes: 'ignore'
		}
	}
};

export default config;
