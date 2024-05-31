import { site } from './sitemap'

export default function robots() {
	return {
		rules: [
			{
			userAgent: '*',
			Allow: '/api/og/*',
			},
		],
		sitemap: `${site}/sitemap.xml`,
	}
}
