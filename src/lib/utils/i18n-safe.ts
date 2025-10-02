import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';

/**
 * Safe i18n translation function that provides fallbacks during SSR
 * Prevents 500 errors when translations aren't loaded yet
 */
export function safeTranslate(key: string, options?: { values?: Record<string, any> }): string {
	try {
		const $_ = get(_);
		if (!$_ || typeof $_ !== 'function') {
			// Translation function not loaded yet, return empty string
			return '';
		}
		
		const result = $_(key, options);
		return result || '';
	} catch (error) {
		console.warn(`Translation error for key "${key}":`, error);
		return '';
	}
}

/**
 * Safe i18n translation with fallback
 */
export function safeTranslateWithFallback(key: string, fallback: string, options?: { values?: Record<string, any> }): string {
	try {
		const $_ = get(_);
		if (!$_ || typeof $_ !== 'function') {
			return fallback;
		}
		
		const result = $_(key, options);
		return result || fallback;
	} catch (error) {
		console.warn(`Translation error for key "${key}":`, error);
		return fallback;
	}
}