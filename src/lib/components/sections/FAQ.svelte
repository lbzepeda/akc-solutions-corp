<script lang="ts">
	import { _, json } from 'svelte-i18n';
	import { safeTranslateWithFallback } from '$lib/utils/i18n-safe';
	import { onMount } from 'svelte';
	import { ChevronDown } from 'lucide-svelte';

	// Accept data props for customization
	let { data = null, sectionNumber = '05' }: { data?: any; sectionNumber?: string } = $props();

	// Use provided data or fallback to default AKC data
	let faqData = $derived(data || {
		header: '05 — PREGUNTAS FRECUENTES',
		title: 'Respuestas a tus Dudas sobre Climatización',
		subtitle: 'Todo lo que necesitas saber sobre nuestros servicios',
		contactWhatsApp: 'Contactar por WhatsApp',
		items: [
			{
				question: '¿Cubren toda el área de Miami?',
				answer: 'Sí, brindamos servicio en Miami, Homestead, Florida City, Coral Gables, Hialeah y Opa-locka con instalación, mantenimiento y reparación de aires acondicionados.',
				hasContactButton: false
			},
			{
				question: '¿Cuánto tiempo toma la instalación?',
				answer: 'La instalación de aires acondicionados residenciales toma entre 2-4 horas. Para proyectos comerciales e industriales, coordinamos según las necesidades específicas.',
				hasContactButton: false
			},
			{
				question: '¿Tienen servicio técnico disponible?',
				answer: 'Contamos con técnicos especializados disponibles 24/7 con repuestos para todas las marcas que manejamos.',
				hasContactButton: true
			},
			{
				question: '¿Ofrecen asesoría energética?',
				answer: 'Sí, ayudamos a optimizar el uso de aire acondicionado para mejorar el confort y reducir el consumo energético.',
				hasContactButton: false
			}
		]
	});

	// WhatsApp message
	const whatsappMessage = $derived(encodeURIComponent('Hola, me interesa obtener más información sobre sus servicios de aire acondicionado.'));

	let openIndex = $state(-1);

	function toggleFAQ(index: number) {
		openIndex = openIndex === index ? -1 : index;
	}

	onMount(() => {
		// Initialize with first FAQ open
		openIndex = 0;
	});
</script>

<section id="faq" class="py-20 bg-white dark:bg-gray-900">
	<div class="max-w-6xl mx-auto px-8">
		<!-- Swiss Header -->
		<div class="mb-16 text-center">
			<div class="text-caption mb-4 text-gray-600 dark:text-gray-400">{sectionNumber} — {faqData.header.replace(/^\d+\s*—\s*/, '')}</div>
			<h2 class="text-headline mb-6 text-black dark:text-white">
				{faqData.title}
			</h2>
			<p class="text-body text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				{faqData.subtitle}
			</p>
		</div>
		
		<!-- FAQ Items -->
		<div class="max-w-4xl mx-auto space-y-4">
			{#each faqData.items as item, index}
				<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600">
					<button
						class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white dark:hover:bg-gray-700 transition-colors"
						onclick={() => toggleFAQ(index)}
						aria-expanded={openIndex === index}
					>
						<span class="text-lg font-medium text-black dark:text-white pr-8">
							{item.question}
						</span>
						<ChevronDown 
							class={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 flex-shrink-0 ${
								openIndex === index ? 'rotate-180' : ''
							}`}
						/>
					</button>
					
					<div class={`overflow-hidden transition-all duration-300 ease-in-out ${
						openIndex === index ? 'max-h-96' : 'max-h-0'
					}`}>
						<div class="px-6 pb-5 pt-2 bg-white dark:bg-gray-700">
							<p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
								{item.answer}
							</p>
							{#if item.hasContactButton}
								<a 
									href={`https://wa.me/50577726999?text=${whatsappMessage}`}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-center gap-2 border border-green-700 px-4 py-2.5 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black"
								>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
									</svg>
									{faqData.contactWhatsApp}
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>