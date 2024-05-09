'use client'

import { motion } from 'framer-motion'
import { Contact } from './modules/contact'
import Profile from './modules/profile'
import { Pursuits } from './modules/pursuits'
import { Section } from './modules/section'
import { Today } from './modules/today'

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

function Home({ posts }: { posts: any[] }) {
	return (
		<>
			<motion.article
				variants={container}
				initial='hidden'
				animate='show'
				className='flex flex-col gap-8'
			>
				<Section variants={section}>
					<Profile />
				</Section>
				<Section variants={section}>
					<Today />
				</Section>
				<Section variants={section}>
					<Pursuits posts={posts} />
				</Section>
				<Section variants={section}>
					<Contact />
				</Section>
			</motion.article>
		</>
	)
}

export { Home }
