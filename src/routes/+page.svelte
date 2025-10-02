<script lang="ts">
	import { page } from '$app/stores';
	import SeoPageLayout from '$lib/components/sections/SeoPageLayout.svelte';
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import '$lib/i18n';

	// Set locale to Spanish for root page
	locale.set('es');
</script>

<SeoPageLayout pageKey="home" />
