'use client'

import { arena } from './auth'

export function getUser(id: string) {
	return arena.user(id).get()
}

export function getUserChannels(id: string) {
	return arena.user(id).channels()
}

export function getUserFollowing(id: string) {
	return arena.user(id).following()
}

export function getUserFollowers(id: string) {
	return arena.user(id).followers()
}
