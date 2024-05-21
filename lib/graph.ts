export type Node = {
	id: string
	arena?: any
	lastfm?: any
}

export type Link = {
	source: string
	target: string
}

export type GraphData = {
	nodes: Node[]
	links: Link[]
}
