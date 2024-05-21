'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const container = {
	show: {
		transition: {
			staggerChildren: 0.25,
			delayChildren: 0.5,
		},
	},
}

const section = {
	hidden: {
		opacity: 0,
		y: 24,
		filter: 'blur(12px)',
	},
	show: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			duration: 0.5,
		},
	},
}

function Projects({ projects }: { projects: any[] }) {
	return (
		<motion.article
			variants={container}
			initial='hidden'
			animate='show'
			className='flex flex-col gap-8'
		>
			<div>
				{projects
					.sort((a, b) => {
						if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
							return -1
						}
						return 1
					})
					.map((post) => (
						<Link
							key={post.slug}
							className='mb-4 flex flex-col space-y-1'
							href={`/lab/${post.slug}`}
						>
							<div className='flex w-full flex-col space-x-0 md:flex-row md:space-x-2'>
								<p className='w-[100px] tabular-nums text-neutral-600 dark:text-neutral-400'>
									{post.metadata.date}
								</p>
								<p className='tracking-tight text-neutral-900 dark:text-neutral-100'>
									{post.metadata.title}
								</p>
							</div>
						</Link>
					))}
			</div>
		</motion.article>
	)
}

export { Projects }
