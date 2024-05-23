import { getProjects } from '@/lib/mdx-utils'

export const site = 'https://raphaelsalaja.com'

export default async function sitemap() {
	let projects = getProjects().map((post) => ({
		url: `${site}/projects/${post.slug}`,
	}))

	let routes = ['', '/projects'].map((route) => ({
		url: `${site}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}))

	return [...routes, ...projects]
}
