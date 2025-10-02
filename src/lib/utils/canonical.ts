/**
 * Utility functions for generating canonical URLs
 */

export const SITE_URL = 'https://alaska-cool.com';

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
	// Remove trailing slash unless it's the root path
	const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
	
	// Remove language prefix for canonical (use primary domain)
	const canonicalPath = cleanPath.replace(/^\/[a-z]{2}(?=\/|$)/, '');
	
	return `${SITE_URL}${canonicalPath}`;
}

/**
 * Get current page path from URL
 */
export function getCurrentPath(url: URL): string {
	return url.pathname;
}