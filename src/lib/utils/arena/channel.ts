'use client'

import { arena } from './auth'

export function getChannelBySlug(slug: string) {
	return arena
		.channel(slug)
		.get()
		.catch((error) => {})
		.then((channel) => {
			console.log(channel)
			return channel
		})
}

export function getChannelByName(name: string) {
	return arena.channel(name).get()
}

export function getChannelConnections(channel: any) {
	return channel.connections()
}

export function getChannelContents(channel: any) {
	return channel.contents()
}
