import { site } from './sitemap'

export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
			},
		],
		sitemap: `${site}/sitemap.xml`,
	}
}
