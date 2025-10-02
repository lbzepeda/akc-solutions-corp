<script lang="ts">
	import comfortStarLogo from '$lib/assets/brands/comfort_star_logo.webp';
	import rheemLogo from '$lib/assets/brands/rheem/rheem_logo.webp';
	import tempblueLogo from '$lib/assets/brands/tempblue_logo.webp';
	import { _, locale } from 'svelte-i18n';
	import { safeTranslateWithFallback } from '$lib/utils/i18n-safe';
	import { page } from '$app/stores';
	import { createContextAwareUrl } from '$lib/utils/navigation';

	// Accept data props for customization
	let { data = null }: { data?: any } = $props();

	// Use provided data or fallback to i18n keys with safe translation
	let brandData = $derived(data || {
		header: safeTranslateWithFallback('brands.header', 'MARCAS'),
		title: safeTranslateWithFallback('brands.title', 'Nuestras Marcas'),
		description: safeTranslateWithFallback('brands.description', 'Representamos las marcas más reconocidas en climatización a nivel mundial.')
	});

	const additionalBrands = [
		{
			name: 'Tempblue',
			logo: tempblueLogo,
			url: 'tempblue'
		},
		{
			name: 'Rheem',
			logo: rheemLogo,
			url: 'rheem'
		},
		{
			name: 'Comfort Star',
			logo: comfortStarLogo,
			url: 'comfort-star'
		}
	];

	// Create context-aware URLs using the helper function
	const createUrl = (path: string) => createContextAwareUrl($page, path);
</script>

<section id="marcas" class="bg-white dark:bg-gray-800 py-16">
	<div class="mx-auto max-w-6xl px-8">
		<!-- Swiss Typography Layout -->
		<div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
			<div>
				<div class="text-caption mb-4 text-gray-600 dark:text-gray-400">{brandData.header}</div>
				<h2 class="mb-6 text-4xl font-bold leading-tight text-black dark:text-white">
					{@html brandData.title}
				</h2>
				<p class="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
					{brandData.description}
				</p>
			</div>

			<div class="space-y-2">
				{#each additionalBrands as brand}
					<a
						href={createUrl(brand.url)}
						class="group block border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 p-5 transition-all duration-200 hover:shadow-sm dark:hover:shadow-gray-700/20"
					>
						<div class="flex h-10 items-center justify-between">
							<div class="flex flex-1 items-center justify-center">
								<img
									src={brand.logo}
									alt={brand.name}
									width="112"
									height="28"
									class="h-7 object-contain transition-opacity group-hover:opacity-90 dark:brightness-0 dark:invert"
									loading="lazy"
								/>
							</div>
							<div class="text-sm text-gray-600 dark:text-gray-400 transition-colors group-hover:text-black dark:group-hover:text-white">→</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>