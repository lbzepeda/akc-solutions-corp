<script lang="ts">
	import logoWhite from '$lib/assets/logos/logo-white-bg.webp';

	// Accept data props for customization
	let { data = null }: { data?: any } = $props();

	// Use provided data or fallback to default AKC data
	let brandData = $derived(data || {
		header: '02 — ¿POR QUÉ ELEGIRNOS?',
		title: '10 Años de Experiencia en Climatización',
		description: 'AKC Solutions trae más de una década de experiencia desde Nicaragua al mercado norteamericano. Nos especializamos en brindar soluciones de aire acondicionado de calidad, confiables y eficientes en energía para Miami y sus alrededores.'
	});

	// AKC Values/Benefits
	const benefits = [
		{
			title: 'Experiencia Comprobada',
			description: '10 años de experiencia en el mercado nicaragüense'
		},
		{
			title: 'Disponibilidad 24/7',
			description: 'Servicio disponible las 24 horas del día, todos los días'
		},
		{
			title: 'Técnicos Especializados',
			description: 'Equipo de profesionales certificados'
		},
		{
			title: 'Precios Competitivos',
			description: 'Precios transparentes y justos'
		}
	];
</script>

<section id="nosotros" class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-8">
		<!-- Swiss Typography Layout -->
		<div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
			<div>
				<div class="text-caption mb-4 text-gray-600">{brandData.header}</div>
				<h2 class="mb-6 text-4xl font-bold leading-tight text-black">
					{brandData.title}
				</h2>
				<p class="mb-8 leading-relaxed text-gray-600">
					{brandData.description}
				</p>
				<div class="flex justify-center lg:justify-start">
					<img
						src={logoWhite}
						alt="AKC Solutions Corp Logo"
						class="h-16 object-contain"
						loading="lazy"
					/>
				</div>
			</div>

			<div class="space-y-4">
				{#each benefits as benefit}
					<div class="border border-gray-200 bg-gray-50 p-6 transition-all hover:shadow-sm">
						<h3 class="text-title mb-2 text-gray-900">{benefit.title}</h3>
						<p class="text-small text-gray-600">{benefit.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>