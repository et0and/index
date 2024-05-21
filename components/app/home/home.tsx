'use client'

import { motion } from 'framer-motion'
import { Contact } from './modules/contact'
import { Profile } from './modules/profile'
import { Projects } from './modules/projects'
import { Today } from './modules/today'

const article = {
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
			type: 'spring',
			duration: 0.5,
			damping: 10,
			mass: 0.75,
			stiffness: 100,
		},
	},
}

function Home({ projects }: { projects: any[] }) {
	return (
		<motion.article
			className='flex flex-col gap-8'
			variants={article}
			initial='hidden'
			animate='show'
		>
			<motion.section variants={section} className='flex flex-col gap-2'>
				<Profile />
			</motion.section>
			<motion.section variants={section} className='flex flex-col gap-2'>
				<Today />
			</motion.section>
			<motion.section variants={section} className='flex flex-col gap-2'>
				<Projects projects={projects} />
			</motion.section>
			<motion.section variants={section} className='flex flex-col gap-2'>
				<Contact />
			</motion.section>
		</motion.article>
	)
}

export { Home }
