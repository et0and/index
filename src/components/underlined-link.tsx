'use client'

import { cn } from '@/lib/cn'
import { motion } from 'framer-motion'
import React from 'react'

interface UnderlinedLinkProps {
	text: string
	link?: string
	space?: string
}

export function UnderlinedLink({ text, link, space }: UnderlinedLinkProps) {
	const [hovered, setHovered] = React.useState(false)

	return (
		<div className={cn('inline-flex items-center')}>
			{space === 'l' || space === 'lr' ? <p>&nbsp;</p> : null}
			<motion.div
				onHoverStart={() => setHovered(true)}
				onHoverEnd={() => setHovered(false)}
				style={{ color: '#5EB1EF', position: 'relative', display: 'inline-block' }}
			>
				<a
					className="relative max-w-max"
					href={link}
					target={link ? '_blank' : '_self'}
					rel="noopener noreferrer"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					{text}
					<motion.div
						animate={{
							opacity: hovered ? 0.6 : 0.2,
							backgroundColor: '#5EB1EF',
							height: 2,
							width: '100%',
						}}
						transition={{ duration: 0.2 }}
						style={{
							position: 'absolute',
							bottom: -3,
							left: 0,
							right: 0,
						}}
					/>
				</a>
			</motion.div>
			{space === 'r' || space === 'lr' ? <p>&nbsp;</p> : null}
		</div>
	)
}
