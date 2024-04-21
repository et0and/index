'use client'

import { arena } from './auth'

export function searchAll(query: string) {
	return arena
		.search(query)
		.all()
		.then((res) => {
			console.log(res)
		})
}

export function searchUsers(query: string, params?: any) {
	return arena.search(query).users(params)
}

export function searchChannels(query: string, params?: any) {
	return arena.search(query).channels(params)
}

export function searchBlocks(query: string, params?: any) {
	return arena.search(query).blocks(params)
}
