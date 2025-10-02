<script lang="ts">
	import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-svelte';

	// AKC Contact information
	const contactInfo = {
		phone: '+1 (786) 940-2775',
		whatsapp: '+1 (786) 940-2775',
		address: '9901 NW 9ST CIR 3, Miami FL, 33172',
		email: 'ecastillo@akcsolutionscorp.com',
		mapUrl: 'https://www.google.com/maps/place/9901+NW+9th+St+Cir,+Doral,+FL+33172'
	};

	// WhatsApp message
	const whatsappMessage = encodeURIComponent('Hola, me interesa obtener más información sobre sus servicios de aire acondicionado.');
</script>

<section id="contacto" class="bg-gray-50 py-20">
	<div class="mx-auto max-w-6xl px-8">
		<!-- Swiss Header -->
		<div class="mb-16 text-center">
			<div class="text-caption mb-4 text-gray-600">06 — CONTACTO</div>
			<h2 class="text-headline mb-6 text-black">¿Cómo Podemos Ayudarte?</h2>
			<p class="text-body mx-auto max-w-2xl text-gray-600">
				Nuestro equipo de expertos está disponible 24/7 para brindarte el mejor servicio de climatización en Miami.
			</p>
		</div>

		<!-- Contact Grid -->
		<div class="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Information -->
			<div class="border border-gray-200 bg-white p-8">
				<h3 class="text-title mb-6 text-black">Información de Contacto</h3>

				<div class="space-y-6">
					<!-- Phone -->
					<div class="flex items-start gap-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gray-100">
							<Phone class="h-5 w-5 text-gray-600" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black">Teléfono</h4>
							<a
								href="tel:17869402775"
								class="text-sm text-gray-600 transition-colors hover:text-primary-600"
							>
								{contactInfo.phone}
							</a>
						</div>
					</div>

					<!-- Email -->
					<div class="flex items-start gap-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gray-100">
							<Mail class="h-5 w-5 text-gray-600" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black">Email</h4>
							<a
								href="mailto:{contactInfo.email}"
								class="text-sm text-gray-600 transition-colors hover:text-primary-600"
							>
								{contactInfo.email}
							</a>
						</div>
					</div>

					<!-- Address -->
					<div class="flex items-start gap-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gray-100">
							<MapPin class="h-5 w-5 text-gray-600" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black">Dirección</h4>
							<a
								href={contactInfo.mapUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm text-gray-600 transition-colors hover:text-primary-600"
							>
								{contactInfo.address}
								<ExternalLink class="ml-1 inline h-3 w-3" />
							</a>
						</div>
					</div>

					<!-- WhatsApp -->
					<div class="flex items-start gap-4">
						<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-green-100">
							<MessageCircle class="h-5 w-5 text-green-600" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black">WhatsApp</h4>
							<a
								href="https://wa.me/17869402775?text={whatsappMessage}"
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm text-green-600 transition-colors hover:text-green-700"
							>
								Enviar mensaje
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Service Areas -->
			<div class="border border-gray-200 bg-white p-8">
				<h3 class="text-title mb-6 text-black">Áreas de Servicio</h3>
				<div class="grid grid-cols-2 gap-4">
					{#each ['Miami', 'Homestead', 'Florida City', 'Coral Gables', 'Hialeah', 'Opa-locka'] as area}
						<div class="rounded bg-gray-50 p-3 text-center">
							<span class="text-sm font-medium text-gray-700">{area}</span>
						</div>
					{/each}
				</div>
				
				<div class="mt-6 rounded bg-primary-50 p-4">
					<h4 class="mb-2 font-medium text-primary-800">Disponibilidad</h4>
					<p class="text-sm text-primary-700">24 horas del día, todos los días</p>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="text-center">
			<a
				href="https://wa.me/17869402775?text={whatsappMessage}"
				target="_blank"
				rel="noopener noreferrer"
				class="swiss-btn-primary inline-flex items-center gap-2 px-8 py-3"
			>
				<MessageCircle class="h-5 w-5" />
				Contactar por WhatsApp
			</a>
		</div>
	</div>
</section>