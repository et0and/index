import { LastClient } from '@musicorum/lastfm'

import {
	LastfmUserRecentTracksParams,
	LastfmUserTopAlbumsParams,
	UserTopArtists,
	UserTopTracks,
} from '@musicorum/lastfm/dist/types/packages/user'
import { generateUUID } from 'three/src/math/MathUtils.js'
import { GraphData } from './graph'

const client = new LastClient('b8c959b999c29ad40cdee99a6fe0658f')

const fallbacks = {
	user: 'ItAintGucci',
	parameters: {
		recentTracks: {
			limit: 50,
			page: 1,
		},
		topArtists: {
			period: 'overall',
			limit: 50,
			page: 1,
		},
		topAlbums: {
			period: 'overall',
			limit: 50,
			page: 1,
		},
		topTracks: {
			period: 'overall',
			limit: 50,
			page: 1,
		},
	},
}

async function getUserInfo(user: string = fallbacks.user) {
	return await client.user.getInfo(user)
}

async function getRecentTracks(
	user: string = fallbacks.user,
	parameters?: LastfmUserRecentTracksParams
) {
	return await client.user.getRecentTracks(user, parameters)
}

async function getRecentTracksPaginated(
	user: string = fallbacks.user,
	parameters?: LastfmUserRecentTracksParams
) {
	return await client.user.getRecentTracksPaginated(user, parameters)
}

async function getTopArtists(
	user: string = fallbacks.user,
	parameters?: UserTopArtists.Params
) {
	return await client.user.getTopArtists(user, parameters)
}

async function getTopTracks(
	user: string = fallbacks.user,
	parameters?: UserTopTracks.Params
) {
	let data: GraphData = {
		nodes: [],
		links: [],
	}

	let response = await client.user.getTopTracks(user, parameters)

	response.tracks.map((track) => {
		data.nodes.push({
			id: generateUUID(),
			lastfm: track,
		})
	})

	data.nodes.map((node, index) => {
		if (index < data.nodes.length - 1) {
			data.links.push({
				source: node.id,
				target: data.nodes[index + 1].id,
			})
		}
	})

	const username: string = 'ItAintGucci'

	console.log(data)

	return data
}

async function getTopAlbums(
	user: string = fallbacks.user,
	parameters?: LastfmUserTopAlbumsParams
) {
	return await client.user.getTopAlbums(user, parameters)
}

export const lastfm = {
	getUserInfo,
	getRecentTracks,
	getRecentTracksPaginated,
	getTopArtists,
	getTopTracks,
	getTopAlbums,
}
