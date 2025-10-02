<script lang="ts">
	import { _, json } from 'svelte-i18n';
	import Hero from './Hero.svelte';
	import Brand from './Brand.svelte';
	import FAQ from './FAQ.svelte';
	import Contact from './Contact.svelte';

	// Page key for i18n lookups
	let { pageKey }: { pageKey: string } = $props();

	// Simple page data
	let pageData = $derived({
		meta: {
			title: ($_ && $_(`pages.${pageKey}.meta.title`)) || 'AKC Solutions Corp - Especialistas en Aire Acondicionado Miami',
			description: ($_ && $_(`pages.${pageKey}.meta.description`)) || 'Servicios profesionales de aire acondicionado en Miami'
		},
		hero: ($json && $json(`pages.${pageKey}.hero`)) || {},
		brand: ($json && $json(`pages.${pageKey}.brand`)) || {},
		faq: ($json && $json(`pages.${pageKey}.faq`)) || {}
	});
</script>

<svelte:head>
	<title>{pageData.meta.title}</title>
	<meta name="description" content={pageData.meta.description} />
</svelte:head>

<Hero data={pageData.hero} />
<Brand data={pageData.brand} />
<FAQ data={pageData.faq} />
<Contact />