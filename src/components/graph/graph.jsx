import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import * as d3 from 'd3'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ForceGraph3D } from 'react-force-graph'
import RelativeTime from 'react-relative-time'
import RelativeTimeFormat from 'relative-time-format'
import en from 'relative-time-format/locale/en'
import { Mesh, Sprite, SpriteMaterial, TextureLoader } from 'three'
import SpriteText from 'three-spritetext'

export const ArenaForceGraph = ({ data }) => {
	const reference = useRef()
	const [isSelected, setIsSelected] = useState(false)
	const [selectedNode, setSelectedNode] = useState()

	RelativeTimeFormat.addLocale(en)

	useEffect(() => {
		if (reference.current && reference.current.d3Force) {
			const collide = d3.forceCollide().radius(10)
			reference.current.d3Force('charge').strength(-100).distanceMax(300)
			reference.current.d3Force('collide', collide)
			reference.current.d3Force('link').distance(100)
		}
	}, [reference])

	const handleClick = useCallback(
		(node) => {
			const distance = 100
			const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z)

			if (reference.current) {
				reference.current.cameraPosition(
					{
						x: node.x * distRatio,
						y: node.y * distRatio,
						z: node.z * distRatio,
					},
					node,
					3000
				)
			}

			console.log(node)
			setSelectedNode(node)
			setIsSelected(true)
		},
		[reference]
	)

	const channel = (node) => {
		const spriteText = new SpriteText()
		spriteText.text = node.name ?? ''
		spriteText.textHeight = 0.5
		spriteText.padding = 0.5
		spriteText.borderWidth = 0.5
		spriteText.borderColor = 'rgba(0,0,0,0.2)'
		spriteText.color = 'black'
		spriteText.backgroundColor = 'white'
		return spriteText
	}

	const block = (node) => {
		const mesh = new Mesh()
		const sprite = new Sprite()
		const texture = new TextureLoader().load(node.image ?? '', (tex) => {
			tex.needsUpdate = true
			sprite.scale.set(tex.image.width / 75, tex.image.height / 75, 1)
		})
		sprite.material = new SpriteMaterial({
			map: texture,
			transparent: true,
		})
		mesh.add(sprite)
		return mesh
	}

	const text = (node) => {
		const spriteText = new SpriteText()
		spriteText.text = node.content ?? ''
		spriteText.textHeight = 0.5
		spriteText.color = 'black'
		spriteText.backgroundColor = 'white'
		return spriteText
	}

	const memoizedForceGraph = useMemo(
		() => (
			<ForceGraph3D
				ref={reference}
				graphData={data}
				showNavInfo={false}
				linkColor={() => 'rgba(0,0,0,1)'}
				backgroundColor={'rgba(0,0,0,0)'}
				onNodeClick={handleClick}
				nodeThreeObject={(node) => {
					switch (node.class) {
						case 'Text':
							return text(node)
						case 'Image':
						case 'Media':
						case 'Link':
						case 'Attachment':
							return block(node)
						default:
							return channel(node)
					}
				}}
				width={window.innerWidth}
				height={window.innerHeight}
			/>
		),
		[data, handleClick]
	)

	return (
		<div className="relative h-full w-full overflow-hidden">
			<AnimatePresence>
				{isSelected && (
					<motion.div
						initial={{
							filter: 'blur(4px)',
							y: 100,
							opacity: 0,
						}}
						animate={{
							filter: 'blur(0)',
							y: 0,
							opacity: 1,
						}}
						exit={{
							filter: 'blur(4px)',
							y: 100,
							opacity: 0,
						}}
						transition={{
							type: 'spring',
							duration: 0.75,
						}}
						className="absolute bottom-0 left-0 z-10 w-96 p-4"
					>
						<Card className="overflow-hidden rounded-none">
							<CardHeader className="flex flex-row items-start bg-muted/50">
								<div className="grid gap-0.5">
									<CardTitle className="group flex items-center gap-2 text-lg">
										{selectedNode.information.title ? selectedNode.information.title : selectedNode.information.generated_title}
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="flex-col space-y-8 p-6 text-sm">
								<div className="grid gap-3">
									<ul className="grid gap-3">
										<li className="flex items-center justify-between">
											<span className="text-muted-foreground">Added</span>
											<span>
												{selectedNode.information.connected_at ? (
													<RelativeTime value={new Date(selectedNode.information.connected_at)} />
												) : (
													<RelativeTime value={new Date(selectedNode.information.owner.created_at)} />
												)}
											</span>
										</li>
										<li className="flex items-center justify-between">
											<span className="text-muted-foreground">Modified</span>
											<span>
												<RelativeTime value={new Date(selectedNode.information.updated_at)} />
											</span>
										</li>
										<li className="flex items-center justify-between">
											<span className="text-muted-foreground">By</span>
											<span>
												<span>{selectedNode.information.user.full_name}</span>
											</span>
										</li>
									</ul>
								</div>
								<Button
									variant="outline"
									className="w-full rounded-none"
									onClick={() => {
										window.open(selectedNode.url, '_blank')
									}}
								>
									View
								</Button>
							</CardContent>
						</Card>
					</motion.div>
				)}
			</AnimatePresence>

			{memoizedForceGraph}
		</div>
	)
}
