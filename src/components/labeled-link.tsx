'use client'

import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'
import React from 'react'

export function LabeledLink({
	icon,
	text,
	link,
	color,
}: Readonly<{
	icon?: React.ReactNode
	text: string
	link: string
	color?: string | 'text-primary' | 'text-sky-500' | 'text-muted-foreground'
}>) {
	const [hovered, setHovered] = React.useState(false)

	return !icon ? (
		<a href={link} target="_blank" className="underline">
			{text}
		</a>
	) : (
		<motion.div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="inline-flex gap-1">
			<a
				href={link}
				target="_blank"
				className={cn('inline-flex size-fit h-[15px] translate-y-[3.5px] items-center gap-1', color || 'text-primary')}
			>
				<div>{icon}</div>
				<div>
					<div>{text}</div>
					<motion.div
						animate={{
							opacity: hovered ? 0.5 : 0.2,
							translateY: -2,
							scaleX: hovered ? 1 : 0.0,
							transformOrigin: '50% 50%',
						}}
						transition={{ duration: 0.75, type: 'spring' }}
						className={cn('border-b-2 border-current', color || 'text-primary')}
					/>
				</div>
			</a>
		</motion.div>
	)
}
