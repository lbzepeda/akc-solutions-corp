<script lang="ts">
	import '../app.css';
	import '$lib/i18n';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/layout/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<Navbar />
	{@render children?.()}
</div>
