import { BlockType } from 'are.na'

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
