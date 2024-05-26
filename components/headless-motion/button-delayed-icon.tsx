'use client'

import { GlobeIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { useState } from 'react'

const container = {
	show: {
		y: 0,
		opacity: 1,
		scale: 1,
		filter: 'blur(0px)',
		transformOrigin: 'center',
		transition: {
			duration: 0.5,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
	hidden: {
		y: 250,
		opacity: 0,
		scale: 0.3,
		filter: 'blur(64px)',
		transformOrigin: 'center',
		transition: {
			duration: 0.5,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
}

const icon = {
	show: {
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			duration: 0.25,
			delay: 0.1,
		},
	},
	hidden: {
		opacity: 0,
		filter: 'blur(16px)',
		transition: {
			duration: 0.25,
		},
	},
}

export default function ButtonDelayedIcon() {
	const [show, setShow] = useState(false)
	return (
		<div className='flex items-center justify-center'>
			<motion.div
				layout
				variants={container}
				initial='hidden'
				animate='show'
				onAnimationComplete={() => setShow(true)}
				className='border bg-white p-2'
			>
				<div className='text-sm text-gray-500 hover:text-gray-700'>
					<div className='flex items-center gap-2'>
						<motion.h2 layout className='ml-1'>
							Lorem Ipsum
						</motion.h2>
						{show && (
							<motion.div variants={icon} layout className='border p-1'>
								<GlobeIcon />
							</motion.div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	)
}
