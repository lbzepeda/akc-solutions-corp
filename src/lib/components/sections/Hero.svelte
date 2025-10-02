<script lang="ts">
	import { page } from '$app/stores';
	// Placeholder images - will be replaced with actual AKC service images
	const residentialPreview = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&auto=format';
	const commercialPreview = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&auto=format';
	const industrialPreview = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format';
	const maintenancePreview = 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&h=600&fit=crop&auto=format';
	import { safeTranslateWithFallback } from '$lib/utils/i18n-safe';
	import { createContextAwareUrl } from '$lib/utils/navigation';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	// Accept data props for customization
	let { data = null }: { data?: any } = $props();

	// Use provided data or fallback to default AKC data
	let heroData = $derived(
		data || {
			header: '01 — CLIMATIZACIÓN PROFESIONAL',
			heroTitle: 'Especialistas en Aire Acondicionado que Cuidan tu Hogar y Potencian tu Empresa',
			innovation: 'Su satisfacción es nuestra prioridad',
			residential: {
				title: 'Residencial',
				description: 'Sistemas de climatización para tu hogar'
			},
			commercial: {
				title: 'Comercial',
				description: 'Soluciones HVAC para empresas'
			},
			industrial: {
				title: 'Industrial',
				description: 'Climatización industrial profesional'
			},
			maintenance: {
				title: 'Mantenimiento',
				description: 'Servicios preventivos especializados'
			},
			status: 'SERVICIO',
			available: 'DISPONIBLE 24/7',
			productsTitle: 'Frescura y Confort Garantizados para tu Familia y tu Negocio',
			subtitle: 'Servicios profesionales de climatización en Miami con garantía completa',
			description: 'Más de 10 años de experiencia brindando soluciones de aire acondicionado confiables y eficientes',
			actions: 'SERVICIOS',
			cta: 'Ver Servicios'
		}
	);

	// Reactive WhatsApp message
	let whatsappMessage = $derived(
		encodeURIComponent(
			'Hola, me interesa obtener más información sobre sus servicios de aire acondicionado.'
		)
	);

	// Video URLs - using placeholders for now, can be configured later
	const VIDEO_URLS = {
		residential: '',
		industrial: '',
		fan: ''
	};

	const serviceCategories = [
		{
			id: 'residential',
			image: residentialPreview,
			titleKey: 'residential'
		},
		{
			id: 'commercial',
			image: commercialPreview,
			titleKey: 'commercial'
		},
		{
			id: 'industrial',
			image: industrialPreview,
			titleKey: 'industrial'
		},
		{
			id: 'maintenance',
			image: maintenancePreview,
			titleKey: 'maintenance'
		}
	];

</script>

<!-- Preload critical images -->
<svelte:head>
	<link rel="preload" as="image" href={residentialPreview} />
	<link rel="preload" as="image" href={commercialPreview} />
	<link rel="preload" as="image" href={industrialPreview} />
	<link rel="preload" as="image" href={maintenancePreview} />
</svelte:head>

<section id="home" class="min-h-screen bg-gray-50 pb-20 pt-12 dark:bg-black">
	<div class="mx-auto max-w-6xl px-6">
		<!-- Hero Swiss Layout -->
		<div class="mb-16 text-center">
			<div class="text-caption mb-3 text-gray-600 dark:text-gray-400">{heroData.header}</div>
			<h1 class="text-headline mx-auto mb-4 max-w-3xl text-black dark:text-white">
				{heroData.heroTitle}
			</h1>
			<p class="text-body mx-auto mb-6 max-w-xl text-gray-600 dark:text-gray-300">
				{heroData.innovation}
			</p>
		</div>

		<!-- Service Categories Grid -->
		<div class="mb-16 grid grid-cols-1 gap-1 bg-gray-200 dark:bg-gray-800 md:grid-cols-2 lg:grid-cols-4">
			{#each serviceCategories as category, index}
				<a
					href="#servicios"
					class="swiss-card group relative block aspect-[4/3] overflow-hidden transition-colors hover:border-primary-600"
				>
					<!-- Background Image -->
					<img
						src={category.image}
						alt={heroData[category.titleKey].title}
						class="absolute inset-0 h-full w-full object-cover"
						loading={index === 0 ? 'eager' : 'lazy'}
					/>

					<!-- Swiss Content Overlay -->
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-all hover:from-black/60 hover:to-black/10"
					>
						<div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
							<div>
								<div class="text-title mb-2">{heroData[category.titleKey].title}</div>
								<div class="text-small mb-3 leading-snug text-white/90">
									{heroData[category.titleKey].description}
								</div>
								<div class="flex items-end justify-between">
									<div class="text-small">
										<div class="mb-1 text-white/60">{heroData.status}</div>
										<div class="font-medium">{heroData.available}</div>
									</div>
									<div class="text-small group-hover:text-primary-600 transition-colors">→</div>
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<!-- Swiss Info Section -->
		<div class="border-t border-gray-200 pt-8 dark:border-gray-700">
			<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<div class="text-caption mb-1 text-gray-600 dark:text-gray-400">
						{heroData.productsTitle}
					</div>
					<div class="text-title mb-2 text-black dark:text-white">
						{heroData.subtitle}
					</div>
					<div class="text-small max-w-md text-gray-600 dark:text-gray-300">
						{heroData.description}
					</div>
				</div>
				<div class="text-left sm:text-right">
					<div class="text-caption mb-2 text-gray-600 dark:text-gray-400">{heroData.actions}</div>
					<div class="flex flex-col gap-3 sm:flex-row">
						<a
							href="#servicios"
							class="swiss-btn-primary px-5 py-2 text-sm"
						>
							{heroData.cta}
						</a>
						<a
							href="https://wa.me/17869402775?text={whatsappMessage}"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 border border-green-700 px-5 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white"
						>
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"
								/>
							</svg>
							WhatsApp
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
