import type { Page } from '@sveltejs/kit';

/**
 * Creates context-aware URLs that respect SEO page contexts
 */
export function createContextAwareUrl(page: Page, path: string): string {
    const currentPath = page.url.pathname;
    const currentLocale = getLocaleFromPath(currentPath);
    
    // Check if we're in a SEO page context (like /climatizacion-managua)
    const seoPageMatches = currentPath.match(/^\/([^\/]+)$/);
    const isSeoPage = seoPageMatches && seoPageMatches[1] !== 'en' && 
                     !['tempblue', 'rheem', 'comfort-star', 'catalogo', 'blog', 'about', 'calculadora-btu'].includes(seoPageMatches[1]);
    
    if (isSeoPage) {
        // We're in a SEO page, maintain the SEO page prefix
        if (path.startsWith('/#')) {
            // For anchor links, append to current path
            return `${currentPath}${path}`;
        }
        return `${currentPath}/${path}`;
    }
    
    // Default behavior: language-aware URLs
    if (currentLocale && currentLocale !== 'es') {
        if (path.startsWith('/#')) {
            return `/${currentLocale}${path}`;
        }
        return `/${currentLocale}/${path}`;
    }
    
    return path.startsWith('/') ? path : `/${path}`;
}

/**
 * Creates a home URL that respects the current context
 */
export function createHomeUrl(page: Page): string {
    const currentPath = page.url.pathname;
    const currentLocale = getLocaleFromPath(currentPath);
    
    // Check if we're in a SEO page context
    const seoPageMatches = currentPath.match(/^\/([^\/]+)$/);
    const isSeoPage = seoPageMatches && seoPageMatches[1] !== 'en' && 
                     !['tempblue', 'rheem', 'comfort-star', 'catalogo', 'blog', 'about', 'calculadora-btu'].includes(seoPageMatches[1]);
    
    if (isSeoPage) {
        // For SEO pages, link to the SEO page itself (not root)
        return currentPath;
    }
    
    // Default behavior: go to language-aware home
    if (currentLocale && currentLocale !== 'es') {
        return `/${currentLocale}`;
    }
    
    return '/';
}

/**
 * Extracts locale from current path
 */
function getLocaleFromPath(pathname: string): string | null {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['en'].includes(segments[0])) {
        return segments[0];
    }
    return null;
}