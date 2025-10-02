import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
				passes: 2,
				unsafe: true,
				unsafe_comps: true,
				unsafe_math: true,
				unsafe_proto: true,
				reduce_vars: true,
				collapse_vars: true,
				hoist_funs: true,
				hoist_vars: true
			},
			mangle: {
				toplevel: true,
				safari10: true
			},
			format: {
				comments: false
			}
		},
		rollupOptions: {
			output: {
				manualChunks: undefined,
				compact: true
			}
		},
		reportCompressedSize: false,
		chunkSizeWarningLimit: 1000
	},
	server: {
		// Server configuration for development
	}
});
