import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import * as RadixSlider from '@radix-ui/react-slider'
import { MotionValue, animate, motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'

const MAX_OVERFLOW = 48

export default function ZoomSlider() {
	const [volume, setVolume] = useState<number>(50)
	const ref = useRef<HTMLDivElement>(null)

	const clientX = useMotionValue(0)
	const overflow = useMotionValue(0)
	const scale = useMotionValue(1)

	useMotionValueEvent(clientX, 'change', (latest) => {
		if (ref.current) {
			const { left, right } = ref.current.getBoundingClientRect()
			let newValue

			if (latest < left) {
				newValue = left - latest
			} else if (latest > right) {
				newValue = latest - right
			} else {
				newValue = 0
			}

			overflow.set(decay(newValue, MAX_OVERFLOW))
		}
	})

	return (
		<motion.div
			onHoverStart={() => animate(scale, 1.05)}
			onHoverEnd={() => animate(scale, 1)}
			onTouchStart={() => animate(scale, 1.05)}
			onTouchEnd={() => animate(scale, 1)}
			style={{ scale, boxSizing: 'content-box' }}
			className="relative flex w-full touch-none select-none items-center justify-center gap-3"
		>
			<Icons volume={volume} />
			<Slider ref={ref} volume={volume} setVolume={setVolume} clientX={clientX} overflow={overflow} scale={scale} />
		</motion.div>
	)
}

interface IconsProps {
	volume: number
}

function Icons({ volume }: IconsProps) {
	return (
		<div className="pointer-events-none absolute z-10 flex w-full items-center justify-between px-16 mix-blend-difference">
			<motion.div
				animate={{
					scale: 1,
					transition: { duration: 0.25 },
				}}
			>
				<MinusIcon className="translate-x-0 translate-y-0 text-white" />
			</motion.div>

			<div className="text-white">{volume}</div>

			<motion.div
				animate={{
					scale: 1,
					transition: { duration: 0.25 },
				}}
			>
				<PlusIcon className="translate-x-0 translate-y-0 text-white" />
			</motion.div>
		</div>
	)
}

interface SliderProps {
	volume: number
	setVolume: React.Dispatch<React.SetStateAction<number>>
	clientX: MotionValue<number>
	overflow: MotionValue<number>
	scale: MotionValue<number>
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
	const { volume, setVolume, clientX, overflow, scale } = props

	return (
		<RadixSlider.Root
			ref={ref}
			value={[volume]}
			onValueChange={([v]) => setVolume(Math.floor(v))}
			step={0.01}
			className="relative flex w-full max-w-[200px] grow cursor-grab touch-none select-none items-center py-4 active:cursor-grabbing"
			onPointerMove={(e) => {
				if (e.buttons > 0) {
					clientX.set(e.clientX)
				}
			}}
			onLostPointerCapture={() => {
				animate(overflow, 0, { type: 'spring', bounce: 0.5 })
			}}
		>
			<motion.div
				style={{
					transformOrigin: useTransform(() => {
						if (ref && typeof ref !== 'function' && ref.current) {
							const { left, width } = ref.current.getBoundingClientRect()
							return clientX.get() < left + width / 2 ? 'right' : 'left'
						}
					}),
					height: useTransform(scale, [1, 1.2], [48, 56]),
				}}
				className="flex grow"
			>
				<RadixSlider.Track className="inset-shadow-stroke relative isolate h-full grow overflow-hidden rounded-lg bg-black/40">
					<RadixSlider.Range className="absolute h-full bg-black/40" />
				</RadixSlider.Track>
			</motion.div>
			<RadixSlider.Thumb />
		</RadixSlider.Root>
	)
})

function decay(value: number, max: number): number {
	if (max === 0) {
		return 0
	}

	const entry = value / max
	const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5)

	return sigmoid * max
}
