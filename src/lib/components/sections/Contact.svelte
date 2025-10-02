<script lang="ts">
	import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-svelte';
	import { _ } from 'svelte-i18n';

	// Contact info migrated from legacy
	const contactInfo = {
		phone: '+505 2224 3811',
		secondPhone: '+505 2252 0858',
		whatsapp: '+505 7772 6999',
		address:
			'Praderas del Doral IV etapa. 2da entrada 2c al sur 1c al este. Casa esquinera dos pisos # 662',
		emails: ['ventas@alaska-cool.com', 'info@alaska-cool.com'],
		mapUrl:
			"https://www.google.com/maps/place/12%C2%B007'50.0%22N+86%C2%B011'18.3%22W/@12.130547,-86.188416,17z/data=!3m1!4b1!4m6!3m5!1s0x8f73fb8c7e8e8e8f:0x0!7e2!8m2!3d12.130547!4d-86.188416"
	};

	// Reactive WhatsApp message based on current language
	$: whatsappMessage = encodeURIComponent($_('contact.whatsappMessage'));
</script>

<section id="contact" class="bg-gray-50 py-20 dark:bg-black">
	<div class="mx-auto max-w-6xl px-8">
		<!-- Swiss Header -->
		<div class="mb-16 text-center">
			<div class="text-caption mb-4 text-gray-600 dark:text-gray-400">{$_('contact.header')}</div>
			<h2 class="text-headline mb-6 text-black dark:text-white">{$_('contact.helpYou')}</h2>
			<p class="text-body mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
				{$_('contact.expertTeam')}
			</p>
		</div>

		<!-- Contact Grid -->
		<div class="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Information -->
			<div class="border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
				<h3 class="text-title mb-6 text-black dark:text-white">{$_('contact.contactInfo')}</h3>

				<div class="space-y-6">
					<!-- Phone -->
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gray-100 dark:bg-gray-800"
						>
							<Phone class="h-5 w-5 text-gray-600 dark:text-gray-400" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black dark:text-white">{$_('contact.phones')}</h4>
							<div class="space-y-2">
								<a
									href={`tel:${contactInfo.phone.replace(/\s|\+/g, '')}`}
									class="block flex min-h-[48px] items-center px-1 py-2 text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
								>
									{contactInfo.phone}
								</a>
								<a
									href={`tel:${contactInfo.secondPhone.replace(/\s|\+/g, '')}`}
									class="block flex min-h-[48px] items-center px-1 py-2 text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
								>
									{contactInfo.secondPhone}
								</a>
							</div>
						</div>
					</div>

					<!-- WhatsApp -->
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gray-100 dark:bg-gray-800"
						>
							<MessageCircle class="h-5 w-5 text-gray-600 dark:text-gray-400" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black dark:text-white">{$_('contact.whatsapp')}</h4>
							<a
								href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|\+/g, '')}?text=${whatsappMessage}`}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-600 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
							>
								{contactInfo.whatsapp}
							</a>
						</div>
					</div>

					<!-- Email -->
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gray-100 dark:bg-gray-800"
						>
							<Mail class="h-5 w-5 text-gray-600 dark:text-gray-400" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black dark:text-white">{$_('contact.emails')}</h4>
							<div class="space-y-2">
								{#each contactInfo.emails as email}
									<a
										href={`mailto:${email}`}
										class="block flex min-h-[48px] items-center px-1 py-2 text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
									>
										{email}
									</a>
								{/each}
							</div>
						</div>
					</div>

					<!-- Address -->
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-gray-100 dark:bg-gray-800"
						>
							<MapPin class="h-5 w-5 text-gray-600 dark:text-gray-400" />
						</div>
						<div>
							<h4 class="mb-1 font-medium text-black dark:text-white">{$_('contact.location')}</h4>
							<p class="mb-2 leading-relaxed text-gray-600 dark:text-gray-300">
								{contactInfo.address}
							</p>
							<a
								href={contactInfo.mapUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-sm text-black transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
							>
								<ExternalLink class="h-4 w-4" />
								{$_('contact.viewOnMaps')}
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Map -->
			<div
				class="group relative cursor-pointer overflow-hidden border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
			>
				<a
					href={contactInfo.mapUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
				>
					<div
						class="bg-white/90 px-4 py-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 dark:bg-gray-800/90"
					>
						<span class="flex items-center gap-2 text-sm font-medium text-black dark:text-white">
							<ExternalLink class="h-4 w-4" />
							{$_('contact.openOnMaps')}
						</span>
					</div>
				</a>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.82522712918!2d-86.2738210851868!3d12.124581791415058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fe0b5a6c6a1b%3A0x8e5b4b1a7b4b2c1f!2sAlaska%20Cool!5e0!3m2!1ses-419!2sni!4v1690000000000!5m2!1ses-419!2sni"
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="pointer-events-none h-full min-h-[400px]"
					title="Ubicación de Alaska Cool Nicaragua"
				>
				</iframe>
			</div>
		</div>

		<!-- Swiss Action Section -->
		<div class="border-t border-gray-200 pt-12 dark:border-gray-700">
			<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<div class="text-caption mb-1 text-gray-600 dark:text-gray-400">
						{$_('contact.quickContact')}
					</div>
					<div class="text-title mb-2 text-black dark:text-white">{$_('contact.needHelp')}</div>
					<div class="text-small max-w-md text-gray-600 dark:text-gray-300">
						{$_('contact.teamReady')}
					</div>
				</div>
				<div class="text-left sm:text-right">
					<div class="text-caption mb-2 text-gray-600 dark:text-gray-400">
						{$_('contact.actions')}
					</div>
					<div class="flex flex-col gap-3 sm:flex-row">
						<a
							href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|\+/g, '')}?text=${whatsappMessage}`}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 border border-green-700 px-5 py-2.5 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black"
						>
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"
								/>
							</svg>
							{$_('contact.whatsapp')}
						</a>
						<a
							href={`tel:${contactInfo.phone.replace(/\s|\+/g, '')}`}
							class="flex items-center justify-center gap-2 border border-gray-200 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:border-black dark:border-gray-600 dark:text-white dark:hover:border-white"
						>
							<Phone class="h-4 w-4" />
							{$_('contact.call')}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
