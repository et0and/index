import Arena from 'are.na'
import { GraphData } from './graph'

let arena = new Arena({
	accessToken: 'xUL8AvT4OQE4Yesa8glQdJNoGtTqgD_lOx1blFqXcwE',
})

export async function getDataFromURL(url: string) {
	let data: GraphData = {
		nodes: [],
		links: [],
	}

	if (url.includes('/block/')) {
		let slug = url.split('/block/')[1]
		let connections = arena.block(slug).channels()
		let slugs = (await connections).map((connections) => connections.slug)
		let channels = await Promise.all(
			slugs.map((slug) => arena.channel(slug).get())
		)

		for (let channel of channels) {
			data.nodes.push({
				id: channel.id.toString(),
				arena: channel,
			})

			for (let block of channel.contents || []) {
				data.nodes.push({
					id: block.id.toString(),
					arena: block,
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
			arena: channel,
		})
		for (let block of channel.contents || []) {
			data.nodes.push({
				id: block.id.toString(),
				arena: block,
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
			arena: channel,
		})

		for (let block of channel.contents || []) {
			data.nodes.push({
				id: block.id.toString(),
				arena: block,
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
			arena: block,
		})
	}

	return data
}
