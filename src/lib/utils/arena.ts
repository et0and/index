import Arena, { BlockType } from 'are.na'

export type Node = {
	id: string
	name: string
	class?: BlockType
	image?: string
	content?: string
	url?: string
}

export type Link = {
	source: string
	target: string
}

export type GraphData = {
	nodes: Node[]
	links: Link[]
}

let arena = new Arena({
	accessToken: 'xUL8AvT4OQE4Yesa8glQdJNoGtTqgD_lOx1blFqXcwE',
})

export async function getDataFromURL(url: string) {
	let data: GraphData = {
		nodes: [],
		links: [],
	}

	console.log(url)

	if (url.includes('/block/')) {
		let slug = url.split('/block/')[1]
		let connections = arena.block(slug).channels()
		let slugs = (await connections).map((connections) => connections.slug)
		let channels = await Promise.all(slugs.map((slug) => arena.channel(slug).get()))

		for (let channel of channels) {
			console.log(channel)
			data.nodes.push({
				id: channel.id.toString(),
				name: channel.title,
			})

			for (let block of channel.contents || []) {
				data.nodes.push({
					id: block.id.toString(),
					name: block.title ?? '',
					class: block.class,
					content: block.content ?? '',
					image: block.image?.thumb.url,
					url: 'https://www.are.na/block/' + block.id.toString(),
				})

				data.links.push({
					source: channel.id.toString(),
					target: block.id.toString(),
				})
			}
		}
	} else {
		let slug = url.split('/').slice(-1)[0]
		let channel = await arena.channel(slug).get()
		data.nodes.push({
			id: channel.id.toString(),
			name: channel.title,
		})

		for (let block of channel.contents || []) {
			data.nodes.push({
				id: block.id.toString(),
				name: block.title ?? '',
				class: block.class,
				content: block.content ?? '',
				image: block.image?.thumb.url,
				url: 'https://www.are.na/block/' + block.id.toString(),
			})

			data.links.push({
				source: channel.id.toString(),
				target: block.id.toString(),
			})
		}
	}

	return data
}

export async function getDataFromSearch(query: string) {
	let data: GraphData = {
		nodes: [],
		links: [],
	}

	let results = await arena.search(query).all()

	let channels = results.channels
	let blocks = results.blocks

	for (let channel of channels ?? []) {
		data.nodes.push({
			id: channel.id.toString(),
			name: channel.title,
		})

		for (let block of channel.contents || []) {
			data.nodes.push({
				id: block.id.toString(),
				name: block.title ?? '',
				class: block.class,
				content: block.content ?? '',
				image: block.image?.thumb.url,
				url: 'https://www.are.na/block/' + block.id.toString(),
			})

			data.links.push({
				source: channel.id.toString(),
				target: block.id.toString(),
			})
		}
	}

	for (let block of blocks ?? []) {
		data.nodes.push({
			id: block.id.toString(),
			name: block.title ?? '',
			class: block.class,
			content: block.content ?? '',
			image: block.image?.thumb.url,
			url: 'https://www.are.na/block/' + block.id.toString(),
		})
	}

	return data
}
