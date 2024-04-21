import Arena from 'are.na'

const arena = new Arena()

export function determineType(url: string): 'block' | 'channel' | 'unknown' {
	if (url.includes('block')) {
		return 'block'
	}
	if (url.includes('channel')) {
		return 'channel'
	}
	return 'unknown'
}

export function getBlockSlug(url: string): string {
	return url.split('/').pop() || ''
}

export function createBlockUrl(slug: string): string {
	return `https://www.are.na/block/${slug}`
}

export async function getBlockConnections(url: string) {
	try {
		const blockSlug = getBlockSlug(url)
		const channels = await arena.block(blockSlug).channels()

		const nodes: {
			id: string
			name: string
			image?: string
		}[] = []

		const links: {
			source: string
			target: string
		}[] = []

		for (const channel of channels) {
			const blocks = await getChannelBlocks(channel.slug)

			nodes.push({
				id: String(channel.id),
				name: String(channel.title),
			})

			for (const block of blocks) {
				if (block.image) {
					links.push({
						source: String(channel.id),
						target: String(block.id),
					})

					nodes.push({
						id: String(block.id),
						name: String(block.title),
						content: String(block.content),
						image: String(block.image?.display.url),
					})
				}
			}
		}

		return {
			nodes,
			links,
		}
	} catch (error) {
		console.error('Error fetching block connections:', error)
		throw error
	}
}

export async function getChannelBlocks(slug: string) {
	try {
		const channel = await arena.channel(slug).contents()
		return channel
	} catch (error) {
		console.error('Error fetching channel blocks:', error)
		throw error
	}
}
