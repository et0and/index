'use client'

import { Separator } from '@/components/ui/separator'
import { EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, ShadowInnerIcon, TwitterLogoIcon, VideoIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

const container = {
	initial: {
		y: 24,
	},
	animate: {
		y: 0,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.75,
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
		<div className="mx-auto flex h-screen w-screen max-w-[512px] items-center justify-center p-4">
			<motion.div variants={container} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-8 text-justify">
				<motion.div variants={slide} className="flex flex-col gap-2">
					<span>Raphael Salaja</span>
					<span className="text-muted">
						Genreless Creator
						<span className="italic"> / (ˈʒɑːnrəlɪs krɪˈeɪtər) / noun</span>
					</span>
					<div className="flex flex-row gap-2 text-muted">
						<span>1.</span>
						<span>
							an individual who defies traditional categorisation within creative endeavours, blending diverse influences and mediums to
							produce innovative works.
						</span>
					</div>
					<div className="flex flex-row gap-2 text-muted">
						<span>2.</span>
						<span>a multidisciplinary artist who transcends boundaries, creating without limitations.</span>
					</div>
				</motion.div>

				<motion.div variants={slide} className="flex flex-col gap-2">
					<span>Today</span>
					<span className="text-muted">
						Working on Whim, a new haven for creators. Creating daily explorations on my {''}
						<ParagraphLink icon={<TwitterLogoIcon />} text="Twitter" link="https://twitter.com/raphaelsalaja" />.
					</span>
				</motion.div>

				<motion.div variants={slide} className="flex flex-col gap-2">
					<span>Contact</span>
					<span className="text-muted">
						Reach me at{' '}
						<ParagraphLink icon={<EnvelopeClosedIcon />} text="raphaelsalaja@gmail.com" link="mailto:raphaelsalaja@gmail.com" /> or shoot
						me a messsage on {''}
						<ParagraphLink icon={<TwitterLogoIcon />} text="Twitter" link="https://twitter.com/raphaelsalaja" />. If you want to check out
						my personal side you can see my posts on {''}
						<ParagraphLink icon={<InstagramLogoIcon />} text="Instagram" link="https://instagram.com/raphaelsalaja" /> or watch my
						(future) videos on {''}
						<ParagraphLink icon={<VideoIcon />} text="Youtube" link="https://youtube.com/@raphaelsalaja" />
						.
						<br />
						<br />
						All (or most) of my work is open source and accessible to everyone on {''}
						<ParagraphLink icon={<GitHubLogoIcon />} text="Github" link="https://github.com/rafunderscore" />. Check out my {''}
						<ParagraphLink icon={<Patreon />} text="Patreon" link="https://www.patreon.com/RaphaelSalaja" /> to support me and my work. If
						you are interested in owning a piece of my work, you can check out my pursuits into generative art on {''}
						<ParagraphLink icon={<ShadowInnerIcon />} text="Zora" link="https://zora.co/@raphaelsalaja" />.
					</span>
				</motion.div>

				<motion.div variants={slide} className="flex flex-col gap-2">
					<Separator />
					<span className="text-xs font-light text-muted">
						This is a living document and will be updated as I continue to create and explore new ideas. To see previous works, please
						visit my {''}
						<ParagraphLink text="Bento" link="https://bento.me/raphaelsalaja" />
						{''} page.
					</span>
				</motion.div>
			</motion.div>
		</div>
	)
}

function ParagraphLink({
	icon,
	text,
	link,
}: Readonly<{
	icon?: React.ReactNode
	text: string
	link: string
}>) {
	return !icon ? (
		<a href={link} target="_blank" className="text-primary underline">
			{text}
		</a>
	) : (
		<div className="inline-flex gap-1">
			<a href={link} target="_blank" className="inline-flex size-fit h-[15px] translate-y-[2.5px] items-center gap-1 text-primary  underline">
				{icon}
				{text}
			</a>
		</div>
	)
}

function Patreon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 40" width="15" height="15">
			<path
				fill="currentColor"
				d="M35.975 11.392c0 .312.021.627-.004.937-.03.361-.082.722-.149 1.08a22.535 22.535 0 0 1-.331 1.512 8.59 8.59 0 0 1-.359 1.084c-.313.767-.66 1.518-1.117 2.21-.282.427-.57.849-.864 1.266a4.12 4.12 0 0 1-.37.431c-.225.238-.442.483-.686.695a13.5 13.5 0 0 1-1.123.905c-.356.25-.756.431-1.12.674-.404.268-.866.384-1.296.587-.384.18-.795.24-1.186.38-.498.18-1.021.222-1.531.331-.544.117-1.097.203-1.643.315-.449.09-.894.198-1.34.298-.254.056-.51.098-.756.173-.304.093-.6.214-.896.324-.201.072-.412.126-.604.219-.28.14-.544.315-.823.464-.457.242-.838.585-1.184.96-.292.32-.546.681-.8 1.036-.418.587-.706 1.244-.964 1.916-.254.657-.487 1.322-.725 1.986-.221.625-.43 1.252-.655 1.875-.197.543-.407 1.079-.618 1.615a13.447 13.447 0 0 1-1.12 2.215c-.331.531-.685 1.049-1.142 1.478-.366.343-.72.704-1.17.944-.446.24-.906.448-1.4.557a6.636 6.636 0 0 1-1.807.129c-.229-.012-.455-.075-.684-.117-.137-.026-.276-.047-.409-.089-.112-.035-.215-.097-.322-.151-.302-.147-.624-.264-.9-.448a8.802 8.802 0 0 1-.96-.776c-.554-.492-.97-1.103-1.342-1.74a13.04 13.04 0 0 1-.681-1.319c-.192-.436-.336-.893-.492-1.345a24.916 24.916 0 0 1-.34-1.063c-.092-.317-.165-.641-.243-.963-.073-.298-.15-.594-.212-.895-.112-.536-.215-1.073-.32-1.609a35.827 35.827 0 0 1-.133-.68c-.06-.34-.114-.681-.171-1.022-.044-.254-.092-.506-.13-.76-.044-.28-.08-.56-.124-.839-.036-.242-.078-.483-.112-.725-.032-.226-.06-.452-.089-.678a70.143 70.143 0 0 1-.094-.73c-.03-.236-.055-.471-.082-.707a19421 19421 0 0 1-.096-.818c-.011-.098-.023-.193-.03-.291-.034-.401-.068-.804-.1-1.208-.02-.25-.04-.501-.05-.75-.021-.39-.042-.777-.05-1.166C.01 18.46.001 17.819 0 17.18c0-.378.002-.755.027-1.13.026-.392.08-.784.122-1.176.034-.312.064-.622.105-.934.023-.175.064-.348.1-.52.092-.432.176-.863.281-1.292.076-.31.181-.61.266-.916.157-.571.393-1.11.623-1.653.106-.25.236-.49.368-.725.186-.329.366-.66.576-.97.259-.378.533-.744.823-1.098.275-.336.567-.66.873-.965.24-.24.512-.448.77-.665.254-.212.501-.433.77-.624.412-.296.835-.576 1.263-.849.249-.158.514-.294.774-.434.405-.219.81-.44 1.22-.648.26-.13.527-.244.794-.354.683-.277 1.364-.557 2.055-.816.46-.17.932-.303 1.399-.452.24-.077.475-.161.717-.229.2-.056.402-.086.604-.133.22-.05.434-.119.656-.16.299-.059.603-.1.907-.147.34-.052.679-.105 1.02-.152.139-.019.283-.02.425-.03.47-.026.944-.054 1.414-.077.188-.01.382-.051.565-.019.443.08.889.017 1.332.05.428.03.853.076 1.278.127.306.038.608.103.914.15.268.04.535.065.802.107.215.035.43.081.645.128.46.103.919.196 1.374.317.404.11.797.275 1.204.37.469.113.899.332 1.351.479.462.149.86.424 1.3.608.515.217.96.546 1.418.858.347.238.685.492 1 .77.467.41.92.836 1.356 1.28.258.26.478.564.713.85.38.464.658.993.928 1.523.215.424.393.874.537 1.329.12.373.156.774.245 1.156.098.42.096.844.073 1.27l-.012.008Z"
			></path>
		</svg>
	)
}
