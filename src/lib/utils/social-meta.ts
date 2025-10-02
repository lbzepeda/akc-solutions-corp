/**
 * Social media meta tags utilities for Open Graph and Twitter Cards
 */

export interface SocialMetaConfig {
	title: string;
	description: string;
	url: string;
	image: string;
	imageAlt?: string;
	type?: 'website' | 'article' | 'product';
	siteName?: string;
	locale?: string;
	// Twitter specific
	twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
	twitterSite?: string;
	twitterCreator?: string;
	// Article specific
	author?: string;
	publishTime?: string;
	modifiedTime?: string;
	// Product specific
	price?: string;
	currency?: string;
	availability?: string;
}

/**
 * Default configuration for Alaska Cool
 */
export const DEFAULT_SOCIAL_META: Partial<SocialMetaConfig> = {
	siteName: 'Alaska Cool Nicaragua',
	locale: 'es_NI',
	type: 'website',
	twitterCard: 'summary_large_image',
	twitterSite: '@alaskacool',
	image: 'https://alaska-cool.com/brands/imagen-social-default.webp',
	imageAlt: 'Aires Acondicionados TempBlue - Alaska Cool Nicaragua'
};

/**
 * Generate Open Graph meta tags
 */
export function generateOpenGraphTags(config: SocialMetaConfig): Record<string, string> {
	return {
		'og:title': config.title,
		'og:description': config.description,
		'og:url': config.url,
		'og:image': config.image,
		'og:image:alt': config.imageAlt || config.title,
		'og:type': config.type || 'website',
		'og:site_name': config.siteName || DEFAULT_SOCIAL_META.siteName!,
		'og:locale': config.locale || DEFAULT_SOCIAL_META.locale!,
		// Article specific
		...(config.type === 'article' && config.author && { 'article:author': config.author }),
		...(config.type === 'article' && config.publishTime && { 'article:published_time': config.publishTime }),
		...(config.type === 'article' && config.modifiedTime && { 'article:modified_time': config.modifiedTime }),
		// Product specific
		...(config.type === 'product' && config.price && { 'product:price:amount': config.price }),
		...(config.type === 'product' && config.currency && { 'product:price:currency': config.currency }),
		...(config.type === 'product' && config.availability && { 'product:availability': config.availability })
	};
}

/**
 * Generate Twitter Card meta tags
 */
export function generateTwitterTags(config: SocialMetaConfig): Record<string, string> {
	return {
		'twitter:card': config.twitterCard || DEFAULT_SOCIAL_META.twitterCard!,
		'twitter:site': config.twitterSite || DEFAULT_SOCIAL_META.twitterSite!,
		'twitter:title': config.title,
		'twitter:description': config.description,
		'twitter:image': config.image,
		'twitter:image:alt': config.imageAlt || config.title,
		...(config.twitterCreator && { 'twitter:creator': config.twitterCreator })
	};
}

/**
 * Generate all social meta tags (Open Graph + Twitter)
 */
export function generateSocialMetaTags(config: SocialMetaConfig): Record<string, string> {
	return {
		...generateOpenGraphTags(config),
		...generateTwitterTags(config)
	};
}

/**
 * Default meta configuration for homepage
 */
export function getHomepageSocialMeta(): SocialMetaConfig {
	return {
		title: 'Aires Acondicionados Nicaragua | Alaska Cool',
		description: 'Alaska Cool Nicaragua - Aires acondicionados de confianza. Instalación profesional, mantenimiento especializado. Frescura garantizada.',
		url: 'https://alaska-cool.com',
		image: 'https://alaska-cool.com/brands/imagen-social-default.webp',
		imageAlt: 'Aires Acondicionados TempBlue en ambiente moderno - Alaska Cool Nicaragua',
		type: 'website',
		siteName: 'Alaska Cool Nicaragua',
		locale: 'es_NI',
		twitterCard: 'summary_large_image',
		twitterSite: '@alaskacool'
	};
}

/**
 * Generate meta configuration for product pages
 */
export function getProductSocialMeta(product: {
	name: string;
	description: string;
	image?: string;
	price?: string;
	currency?: string;
	url: string;
}): SocialMetaConfig {
	return {
		title: `${product.name} | Alaska Cool Nicaragua`,
		description: product.description,
		url: product.url,
		image: product.image || 'https://alaska-cool.com/brands/imagen-social-default.webp',
		imageAlt: `${product.name} - Alaska Cool Nicaragua`,
		type: 'product',
		siteName: 'Alaska Cool Nicaragua',
		locale: 'es_NI',
		twitterCard: 'summary_large_image',
		twitterSite: '@alaskacool',
		price: product.price,
		currency: product.currency || 'NIO',
		availability: 'in stock'
	};
}

/**
 * Generate meta configuration for blog/article pages
 */
export function getArticleSocialMeta(article: {
	title: string;
	description: string;
	image?: string;
	author?: string;
	publishTime?: string;
	modifiedTime?: string;
	url: string;
}): SocialMetaConfig {
	return {
		title: `${article.title} | Alaska Cool Blog`,
		description: article.description,
		url: article.url,
		image: article.image || 'https://alaska-cool.com/brands/imagen-social-default.webp',
		imageAlt: `${article.title} - Alaska Cool Blog`,
		type: 'article',
		siteName: 'Alaska Cool Nicaragua',
		locale: 'es_NI',
		twitterCard: 'summary_large_image',
		twitterSite: '@alaskacool',
		author: article.author,
		publishTime: article.publishTime,
		modifiedTime: article.modifiedTime
	};
}