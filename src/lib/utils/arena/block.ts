'use client'

import { GraphData } from './arena'
import { arena } from './auth'

export async function getDataFromBlockSlug(slug: string) {
	let data: GraphData = {
		nodes: [],
		links: [],
	}

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

	return data
}
