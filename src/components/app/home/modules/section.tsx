import { motion } from 'framer-motion'

const Section = ({ variants, children }: { variants: any; children: React.ReactNode }) => {
	return (
		<motion.section
			variants={variants}
			initial='hidden'
			animate='show'
			className='flex flex-col gap-2'
		>
			{children}
		</motion.section>
	)
}

export { Section }
