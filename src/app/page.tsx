'use client'

import { PatreonIcon } from '@/components/icons'
import { LabeledLink } from '@/components/labeled-link'
import { Separator } from '@/components/ui/separator'
import { EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, ShadowInnerIcon, TwitterLogoIcon, VideoIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const container = {
	initial: {
		y: 24,
	},
	animate: {
		y: 0,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
			type: 'spring',
		},
	},
	exit: {
		y: 24,
		transition: {
			staggerChildren: 0.1,
			type: 'spring',
		},
	},
}

const slide = {
	initial: {
		opacity: 0,
		y: 24,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: 24,
	},
}

export default function Home() {
	return (
		<AnimatePresence>
			<div className="relative h-screen w-screen">
				<div className="mx-auto flex h-screen w-screen max-w-[512px] items-center justify-center p-4">
					<motion.div variants={container} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-8 text-justify">
						<motion.div variants={slide} className="flex flex-col gap-2">
							<span>Raphael Salaja</span>
							<span className="text-muted-foreground">
								Genreless Creator
								<span className="italic"> / (ˈʒɑːnrəlɪs krɪˈeɪtər) / noun</span>
							</span>
							<div className="flex flex-row gap-2 text-muted-foreground">
								<span>1.</span>
								<span>
									an individual who defies traditional categorisation within creative endeavours, blending diverse influences and
									mediums to produce innovative works.
								</span>
							</div>
							<div className="flex flex-row gap-2 text-muted-foreground">
								<span>2.</span>
								<span>a multidisciplinary artist who transcends boundaries, creating without limitations.</span>
							</div>
						</motion.div>

						<motion.div variants={slide} className="flex flex-col gap-2">
							<span>Today</span>
							<span className="text-muted-foreground">
								Working on Whim, a new haven for creators. Creating daily explorations on my {''}
								<LabeledLink
									icon={<TwitterLogoIcon />}
									text="Twitter"
									link="https://twitter.com/raphaelsalaja"
									color="text-sky-500"
								/>
								.
							</span>
						</motion.div>

						<motion.div variants={slide} className="flex flex-col gap-2">
							<span>Projects</span>
							<Link href="/arena" className="-mx-4 flex items-center gap-2 rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50">
								<div>spatial.are.na</div>
								<Separator orientation="horizontal" className="shrink" />
								<div className="text-muted-foreground">04/2024</div>
							</Link>
						</motion.div>

						<motion.div variants={slide} className="flex flex-col gap-2">
							<span>Contact</span>
							<span className="text-muted-foreground">
								Reach me at{' '}
								<LabeledLink
									icon={<EnvelopeClosedIcon />}
									text="raphaelsalaja@gmail.com"
									link="mailto:raphaelsalaja@gmail.com"
									color="text-lime-500"
								/>{' '}
								or shoot me a messsage on {''}
								<LabeledLink
									icon={<TwitterLogoIcon />}
									text="Twitter"
									link="https://twitter.com/raphaelsalaja"
									color="text-sky-500"
								/>
								. If you want to check out my personal side you can see my posts on {''}
								<LabeledLink
									icon={<InstagramLogoIcon />}
									text="Instagram"
									link="https://instagram.com/raphaelsalaja"
									color="text-pink-500"
								/>{' '}
								or watch my (future) videos on {''}
								<LabeledLink icon={<VideoIcon />} text="Youtube" link="https://youtube.com/@raphaelsalaja" color="text-rose-500" />
								.
								<br />
								<br />
								All (or most) of my work is open source and accessible to everyone on {''}
								<LabeledLink
									icon={<GitHubLogoIcon />}
									text="Github"
									link="https://github.com/rafunderscore"
									color="text-purple-500"
								/>
								. Check out my {''}
								<LabeledLink
									icon={<PatreonIcon />}
									text="Patreon"
									link="https://www.patreon.com/RaphaelSalaja"
									color="text-orange-500"
								/>{' '}
								to support me and my work. If you are interested in owning a piece of my work, you can check out my pursuits into
								generative art on {''}
								<LabeledLink icon={<ShadowInnerIcon />} text="Zora" link="https://zora.co/@raphaelsalaja" color="text-violet-500" />.
							</span>
						</motion.div>

						<motion.div variants={slide} className="flex flex-col gap-2">
							<Separator />
							<span className="text-xs font-light text-muted-foreground">
								This is a living document and will be updated as I continue to create and explore new ideas. To see previous works,
								please visit my {''}
								<LabeledLink text="Bento" link="https://bento.me/raphaelsalaja" />
								{''} page.
							</span>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</AnimatePresence>
	)
}
