import { useCallback, useRef, useState } from 'react'
import { ForceGraph3D } from 'react-force-graph'
import { Mesh, Sprite, SpriteMaterial, TextureLoader } from 'three'
import SpriteText from 'three-spritetext'

export const ArenaForceGraph = ({ data }) => {
	const reference = useRef()
	const [selectedNode, setSelectedNode] = useState()

	useEffect(() => {
		if (reference.current && reference.current.d3Force) {
			reference.current.d3Force('charge').strength(-50).distanceMax(100)
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
					1000,
					'easeInOut'
				)
			}

			if (selectedNode === node.id) {
				window.open(node.url, '_blank')
			} else {
				setSelectedNode(node.id)
			}

			console.log(node)
			console.log(selectedNode)
		},
		[reference, selectedNode]
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

	return (
		<ForceGraph3D
			onBackgroundRightClick={() => console.log('background right click')}
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
			warmupTicks={60}
		/>
	)
}
