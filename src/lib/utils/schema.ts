/**
 * Schema.org structured data utilities for Alaska Cool
 */

export interface BusinessInfo {
	name: string;
	description: string;
	url: string;
	telephone: string;
	email?: string;
	address: {
		streetAddress: string;
		addressLocality: string;
		addressCountry: string;
	};
	openingHours?: string[];
	socialLinks?: string[];
}

export interface Product {
	name: string;
	description: string;
	brand: string;
	model?: string;
	category: string;
	url: string;
	image?: string;
	offers?: {
		price?: string;
		currency?: string;
		availability: string;
	};
}

export interface BlogPost {
	title: string;
	description: string;
	url: string;
	datePublished: string;
	dateModified?: string;
	author: {
		name: string;
		type: 'Person' | 'Organization';
	};
	image?: string;
}

export interface Service {
	name: string;
	description: string;
	serviceType: string;
	url: string;
	areaServed?: string;
	provider?: string;
}

export interface BlogListing {
	name: string;
	description: string;
	url: string;
	inLanguage: string;
	posts: Array<{
		title: string;
		excerpt: string;
		slug: string;
		published_at: string;
		updated_at: string;
		authors: Array<{ name: string }>;
		feature_image?: string;
	}>;
}

/**
 * Generate LocalBusiness schema for Alaska Cool
 */
export function generateLocalBusinessSchema(businessInfo: BusinessInfo): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${businessInfo.url}#business`,
		name: businessInfo.name,
		description: businessInfo.description,
		url: businessInfo.url,
		telephone: businessInfo.telephone,
		email: businessInfo.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: businessInfo.address.streetAddress,
			addressLocality: businessInfo.address.addressLocality,
			addressCountry: businessInfo.address.addressCountry
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 12.1364, // Managua coordinates
			longitude: -86.2514
		},
		openingHours: businessInfo.openingHours || ['Mo-Fr 08:00-17:00', 'Sa 08:00-12:00'],
		priceRange: '$$',
		currenciesAccepted: 'NIO,USD',
		paymentAccepted: 'Cash, Credit Card, Bank Transfer',
		areaServed: {
			'@type': 'Country',
			name: 'Nicaragua'
		},
		serviceArea: {
			'@type': 'GeoCircle',
			geoMidpoint: {
				'@type': 'GeoCoordinates',
				latitude: 12.1364,
				longitude: -86.2514
			},
			geoRadius: '100000' // 100km radius
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Catálogo de Servicios HVAC',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Instalación y Mantenimiento HVAC',
						serviceType: 'HVAC Services',
						description:
							'Instalación profesional y mantenimiento especializado de sistemas de climatización'
					}
				}
			]
		},
		sameAs: businessInfo.socialLinks || []
	};
}

/**
 * Generate Product schema with AggregateOffer for quote-based pricing
 */
export function generateProductSchema(product: Product): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.name,
		description: product.description,
		brand: {
			'@type': 'Brand',
			name: product.brand
		},
		model: product.model,
		category: product.category,
		url: product.url,
		image: product.image,
		manufacturer: {
			'@type': 'Organization',
			name: product.brand
		},
		offers: {
			'@type': 'AggregateOffer',
			priceCurrency: 'USD',
			lowPrice: '0',
			highPrice: '0',
			offerCount: '1',
			availability: 'https://schema.org/InStock',
			description: 'Cotización gratuita disponible. Servicio de instalación profesional disponible.',
			shippingDetails: {
				'@type': 'OfferShippingDetails',
				shippingDestination: [
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Managua',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'León',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Granada',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Masaya',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Chinandega',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Estelí',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Matagalpa',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Jinotega',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Nueva Segovia',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Madriz',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Boaco',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Chontales',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Rivas',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Carazo',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'Río San Juan',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'RACCS',
						addressCountry: 'Nicaragua'
					},
					{
						'@type': 'DefinedRegion',
						addressLocality: 'RACCN',
						addressCountry: 'Nicaragua'
					}
				],
				deliveryTime: {
					'@type': 'ShippingDeliveryTime',
					handlingTime: {
						'@type': 'QuantitativeValue',
						minValue: 0,
						maxValue: 1,
						unitCode: 'DAY'
					},
					transitTime: {
						'@type': 'QuantitativeValue',
						minValue: 0,
						maxValue: 1,
						unitCode: 'DAY'
					}
				}
			}
		}
	};
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(service: Service, businessInfo: BusinessInfo): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: service.name,
		description: service.description,
		serviceType: service.serviceType,
		url: service.url,
		provider: {
			'@type': 'LocalBusiness',
			name: service.provider || businessInfo.name,
			address: {
				'@type': 'PostalAddress',
				addressLocality: businessInfo.address.addressLocality,
				addressCountry: businessInfo.address.addressCountry
			},
			telephone: businessInfo.telephone,
			url: businessInfo.url
		},
		areaServed: {
			'@type': 'Place',
			name: service.areaServed || 'Nicaragua'
		}
	};
}

/**
 * Generate Blog listing schema
 */
export function generateBlogSchema(
	blog: BlogListing,
	businessInfo: BusinessInfo,
	baseUrl: string
): object {
	// Validate inputs
	if (!blog || !businessInfo || !baseUrl) {
		return {};
	}

	// Helper function to safely construct URLs
	const safeUrl = (base: string, path: string): string => {
		if (!base || !path) return base || path || '';
		const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
		const cleanPath = path.startsWith('/') ? path : `/${path}`;
		return `${cleanBase}${cleanPath}`;
	};

	// Helper function to get safe string value
	const safeString = (value: any, fallback: string = ''): string => {
		return (typeof value === 'string' && value.trim().length > 0) ? value.trim() : fallback;
	};

	return {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: safeString(blog.name, 'Blog | Alaska Cool'),
		description: safeString(blog.description, 'Blog sobre aires acondicionados y climatización'),
		url: safeString(blog.url, `${baseUrl}/blog`),
		inLanguage: safeString(blog.inLanguage, 'es-ES'),
		publisher: {
			'@type': 'Organization',
			name: safeString(businessInfo.name, 'Alaska Cool Nicaragua'),
			logo: {
				'@type': 'ImageObject',
				url: `${baseUrl}/images/alaska-cool-logo.png`
			}
		},
		blogPost: blog.posts
			?.filter(post => post && post.title && post.slug) // Only include valid posts
			?.map((post) => ({
				'@type': 'BlogPosting',
				headline: safeString(post.title),
				description: safeString(post.excerpt, post.title),
				url: safeUrl(blog.url, post.slug),
				datePublished: post.published_at || new Date().toISOString(),
				dateModified: post.updated_at || post.published_at || new Date().toISOString(),
				author: {
					'@type': 'Person',
					name: safeString(
						post.authors?.length > 0 ? post.authors[0].name : businessInfo.name,
						'Alaska Cool Nicaragua'
					)
				},
				image: safeString(
					post.feature_image, 
					`${baseUrl}/images/alaska-cool-logo.png`
				)
			})) || []
	};
}

/**
 * Generate Article schema for blog posts - flexible version
 */
export function generateArticleSchema(post: BlogPost, businessInfo: BusinessInfo): object;
export function generateArticleSchema(
	articleData: any,
	businessInfo: BusinessInfo,
	baseUrl: string
): object;
export function generateArticleSchema(
	postOrData: any,
	businessInfo: BusinessInfo,
	baseUrl?: string
): object {
	// Validate inputs
	if (!postOrData || !businessInfo) {
		return {};
	}

	// Helper function to get safe string value
	const safeString = (value: any, fallback: string = ''): string => {
		return (typeof value === 'string' && value.trim().length > 0) ? value.trim() : fallback;
	};

	// Helper function to get safe URL
	const safeUrl = (url: any, fallback: string = ''): string => {
		if (typeof url === 'string' && url.trim().length > 0) {
			const cleanUrl = url.trim();
			return cleanUrl.startsWith('http') ? cleanUrl : fallback;
		}
		return fallback;
	};

	// Handle both old BlogPost interface and new flexible data
	const isOldInterface = postOrData.datePublished && postOrData.author?.type;

	if (isOldInterface) {
		// Original implementation for backward compatibility
		return {
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: safeString(postOrData.title, 'Article | Alaska Cool'),
			description: safeString(postOrData.description, postOrData.title),
			url: safeUrl(postOrData.url, `${businessInfo.url}/blog`),
			datePublished: postOrData.datePublished || new Date().toISOString(),
			dateModified: postOrData.dateModified || postOrData.datePublished || new Date().toISOString(),
			author: {
				'@type': postOrData.author?.type || 'Person',
				name: safeString(postOrData.author?.name, businessInfo.name)
			},
			publisher: {
				'@type': 'Organization',
				name: safeString(businessInfo.name, 'Alaska Cool Nicaragua'),
				url: safeString(businessInfo.url, 'https://alaska-cool.com')
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': safeUrl(postOrData.url, `${businessInfo.url}/blog`)
			},
			image: safeUrl(postOrData.image, `${baseUrl || businessInfo.url}/images/alaska-cool-logo.png`),
			articleSection: 'HVAC, Aires Acondicionados, Climatización'
		};
	}

	// New flexible implementation
	const post = postOrData;
	const defaultBaseUrl = baseUrl || businessInfo.url || 'https://alaska-cool.com';
	
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: safeString(post.meta_title || post.title, 'Article | Alaska Cool'),
		description: safeString(post.meta_description || post.excerpt || post.title, 'Artículo sobre aires acondicionados'),
		image: safeUrl(
			post.og_image || post.feature_image, 
			`${defaultBaseUrl}/images/alaska-cool-logo.png`
		),
		author: {
			'@type': 'Person',
			name: safeString(
				post.authors?.length > 0 ? post.authors[0].name : businessInfo.name,
				'Alaska Cool Nicaragua'
			),
			url: safeString(businessInfo.url, 'https://alaska-cool.com')
		},
		publisher: {
			'@type': 'Organization',
			name: safeString(businessInfo.name, 'Alaska Cool Nicaragua'),
			logo: {
				'@type': 'ImageObject',
				url: `${defaultBaseUrl}/images/alaska-cool-logo.png`
			}
		},
		datePublished: post.published_at || new Date().toISOString(),
		dateModified: post.updated_at || post.published_at || new Date().toISOString(),
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': safeUrl(post.url, `${businessInfo.url}/blog/${post.slug || ''}`)
		},
		keywords: post.tags?.map((tag: any) => tag.name).join(', ') || 'aires acondicionados, HVAC, climatización',
		articleSection: 'HVAC',
		inLanguage: safeString(post.inLanguage, 'es-ES')
	};
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(businessInfo: BusinessInfo): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${businessInfo.url}#organization`,
		name: businessInfo.name,
		description: businessInfo.description,
		url: businessInfo.url,
		logo: `${businessInfo.url}/favicon/apple-touch-icon.png`,
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: businessInfo.telephone,
			contactType: 'customer service',
			availableLanguage: ['Spanish', 'English']
		},
		address: {
			'@type': 'PostalAddress',
			streetAddress: businessInfo.address.streetAddress,
			addressLocality: businessInfo.address.addressLocality,
			addressCountry: businessInfo.address.addressCountry
		},
		sameAs: businessInfo.socialLinks || []
	};
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(businessInfo: BusinessInfo): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${businessInfo.url}#website`,
		name: businessInfo.name,
		description: businessInfo.description,
		url: businessInfo.url,
		publisher: {
			'@type': 'Organization',
			'@id': `${businessInfo.url}#organization`
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${businessInfo.url}/?buscar={search_term_string}`
			},
			'query-input': 'required name=search_term_string'
		}
	};
}

/**
 * Default business information for Alaska Cool
 */
export const ALASKA_COOL_BUSINESS: BusinessInfo = {
	name: 'Alaska Cool Nicaragua',
	description:
		'Especialistas en aires acondicionados y sistemas de climatización en Nicaragua. Distribuidores autorizados de marcas premium con instalación y mantenimiento profesional.',
	url: 'https://alaska-cool.com',
	telephone: '+505-7772-6999',
	email: 'info@alaska-cool.com',
	address: {
		streetAddress: 'Managua',
		addressLocality: 'Managua',
		addressCountry: 'Nicaragua'
	},
	openingHours: ['Mo-Fr 08:00-17:00', 'Sa 08:00-12:00'],
	socialLinks: ['https://www.tiktok.com/@alaskacool']
};
