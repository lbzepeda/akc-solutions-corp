<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Menu, X } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let scrolled = false;
	let activeSection = '';

	// AKC Navigation structure
	const navItems = [
		{
			label: 'Inicio',
			href: '#home',
			section: 'home'
		},
		{
			label: 'Servicios',
			href: '#servicios',
			section: 'servicios'
		},
		{
			label: 'Proyectos',
			href: '#proyectos',
			section: 'proyectos'
		},
		{
			label: 'Nosotros',
			href: '#nosotros',
			section: 'nosotros'
		},
		{
			label: 'Contacto',
			href: '#contacto',
			section: 'contacto'
		}
	];

	// AKC Contact information
	const phoneNumber = '+1 (786) 940-2775';
	const whatsappMessage = encodeURIComponent('Hola, me interesa obtener más información sobre sus servicios de aire acondicionado.');

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleNavigation(event: Event, href: string) {
		if (href.startsWith('#')) {
			event.preventDefault();
			const targetId = href.substring(1);
			const targetElement = document.getElementById(targetId);

			if ($page.url.pathname === '/' && targetElement) {
				closeMenu();
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			} else {
				closeMenu();
				goto(`/${href}`);
			}
		} else {
			closeMenu();
		}
	}

	onMount(() => {
		let scrollTimeout: NodeJS.Timeout;
		
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
			
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				if ($page.url.pathname === '/') {
					const sectionIds = ['home', 'servicios', 'proyectos', 'nosotros', 'contacto'];
					const currentScrollY = window.scrollY + 150;
					let newActiveSection = 'home';
					
					for (let i = sectionIds.length - 1; i >= 0; i--) {
						const element = document.getElementById(sectionIds[i]);
						if (element && element.offsetTop <= currentScrollY) {
							newActiveSection = sectionIds[i];
							break;
						}
					}
					
					if (activeSection !== newActiveSection) {
						activeSection = newActiveSection;
					}
				}
			}, 10);
		};

		window.addEventListener('scroll', handleScroll);

		setTimeout(() => {
			handleScroll();
		}, 200);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(scrollTimeout);
		};
	});
</script>

<header
	class={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${scrolled ? 'border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95' : 'bg-white dark:bg-gray-900'}`}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<nav class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex-shrink-0" on:click={closeMenu}>
				<div class="flex items-center">
					<img
						src="/src/lib/assets/logos/logo-white-bg.webp"
						alt="AKC Solutions Corp"
						width="160"
						height="40"
						class="h-10 w-auto"
						loading="eager"
					/>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-6 md:flex">
				{#each navItems as item}
					<div class="relative">
						<a
							href={item.href}
							class="text-sm font-medium transition-colors duration-150 cursor-pointer {activeSection === item.section ? 'text-primary-600 dark:text-primary-400 font-medium' : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'}"
							on:click={(e) => handleNavigation(e, item.href)}
						>
							{item.label}
						</a>
						<!-- Active indicator bar -->
						{#if activeSection === item.section}
							<div 
								class="absolute -bottom-3 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 ease-out"
							></div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Right Side - Contact Actions -->
			<div class="hidden items-center space-x-4 md:flex">
				<a
					href="https://wa.me/17869402775?text={whatsappMessage}"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center justify-center gap-2 border border-green-700 px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"
						/>
					</svg>
					WhatsApp
				</a>
				<a
					href="tel:17869402775"
					class="swiss-btn-primary px-5 py-2 text-sm"
				>
					Llamar Ahora
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<div class="flex items-center md:hidden">
				<button
					type="button"
					class="p-2 text-gray-600 transition-colors duration-150 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
					on:click={toggleMenu}
					aria-expanded={isMenuOpen}
					aria-label="Toggle menu"
				>
					{#if isMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</nav>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div
				class="border-t border-gray-200 bg-white md:hidden dark:border-gray-700 dark:bg-gray-900"
			>
				<div class="space-y-4 px-4 py-4">
					{#each navItems as item}
						<div class="relative">
							<a
								href={item.href}
								class="block text-base font-medium transition-colors duration-150 cursor-pointer {activeSection === item.section ? 'text-primary-600 dark:text-primary-400 font-medium' : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'}"
								on:click={(e) => handleNavigation(e, item.href)}
							>
								{item.label}
							</a>
							<!-- Active indicator bar for mobile -->
							{#if activeSection === item.section}
								<div 
									class="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 ease-out"
								></div>
							{/if}
						</div>
					{/each}

					<!-- Mobile Contact Actions -->
					<div class="mt-6 border-t border-gray-200 pt-4 dark:border-gray-700">
						<div class="flex flex-col space-y-3">
							<a
								href="https://wa.me/17869402775?text={whatsappMessage}"
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-center gap-2 border border-green-700 px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black"
								on:click={closeMenu}
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"
									/>
								</svg>
								WhatsApp
							</a>
							<a
								href="tel:17869402775"
								class="swiss-btn-primary px-5 py-2.5 text-sm text-center"
								on:click={closeMenu}
							>
								Llamar Ahora
							</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>

<!-- Spacer to prevent content from hiding behind fixed navbar -->
<div class="h-16"></div>