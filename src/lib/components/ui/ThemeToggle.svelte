<script lang="ts">
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';

	let mounted = false;

	onMount(() => {
		// Initialize theme on mount
		theme.init();
		mounted = true;
	});

	function toggleTheme() {
		theme.toggle();
	}
</script>

<button
	type="button"
	on:click={toggleTheme}
	class="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-400"
	aria-label={$theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
	title={$theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
>
	{#if mounted}
		{#if $theme === 'light'}
			<Moon class="h-5 w-5" />
		{:else}
			<Sun class="h-5 w-5" />
		{/if}
	{:else}
		<!-- Fallback while mounting -->
		<Sun class="h-5 w-5" />
	{/if}
</button>