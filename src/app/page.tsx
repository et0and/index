'use client'

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { UnderlinedLink } from '@/components/underlined-link'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function Home() {
	const [popoverOpen, setPopoverOpen] = React.useState(false)

	return (
		<div className='relative h-screen w-screen'>
			<div className='m-auto flex h-full w-full max-w-[512px] p-4 py-12 text-justify'>
				<motion.article
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className='flex flex-col gap-8'
				>
					<section className='flex flex-col gap-2'>
						<span>Raphael Salaja</span>
						<span className='text-muted-foreground'>
							Genreless Creator
							<span className='italic'>
								{' '}
								/ (ˈʒɑːnrəlɪs krɪˈeɪtər) / noun
							</span>
						</span>
						<div className='flex flex-row gap-2 text-muted-foreground'>
							<span>1.</span>
							<span>
								an individual who defies traditional
								categorisation within creative endeavours,
								blending diverse influences and mediums to
								produce innovative works.
							</span>
						</div>
						<div className='flex flex-row gap-2 text-muted-foreground'>
							<span>2.</span>
							<span>
								a multidisciplinary artist who transcends
								boundaries, creating without limitations.
							</span>
						</div>
					</section>

					<section className='flex flex-col gap-2'>
						<span>Today</span>
						<span className='text-muted-foreground'>
							Creating (almost) daily explorations on my
							<UnderlinedLink
								text='Twitter'
								link='https://twitter.com/raphaelsalaja'
								space='l'
							/>
							. Working on Whim, a new haven for creators.
						</span>
					</section>

					<section className='flex flex-col gap-2'>
						<div>Projects</div>
						<Link
							href='/arena'
							className='-mx-4 flex items-center gap-2 rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50'
						>
							<div>spatial.are.na</div>
							<Separator
								orientation='horizontal'
								className='shrink'
							/>
							<div className='text-muted-foreground'>04/2024</div>
						</Link>
					</section>

					<section className='flex flex-col gap-2'>
						<div>Contact</div>
						<div className='text-muted-foreground'>
							Connect with me on my
							<UnderlinedLink
								text='Twitter'
								link='https://twitter.com/raphaelsalaja'
								space='lr'
							/>
							or email
							<Popover
								open={popoverOpen}
								onOpenChange={setPopoverOpen}
							>
								<PopoverTrigger
									onMouseLeave={() => setPopoverOpen(false)}
									onClick={() => {
										navigator.clipboard.writeText(
											'raphaelsalaja@gmail.com'
										)
										setPopoverOpen(true)
									}}
								>
									<UnderlinedLink
										text='raphaelsalaja@gmail.com'
										space='l'
									/>
								</PopoverTrigger>
								<PopoverContent
									side='top'
									className='size-fit rounded-lg border px-2 py-1 shadow-none'
								>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 1 }}
										className='flex items-center gap-1'
									>
										<CheckCircledIcon />
										<div>Copied</div>
									</motion.div>
								</PopoverContent>
							</Popover>
							. If you want to check out my personal side you can
							see my posts on
							<UnderlinedLink
								text='Instagram'
								link='https://instagram.com/raphaelsalaja'
								space='lr'
							/>
							or watch my videos on
							<UnderlinedLink
								text='Youtube'
								link='https://youtube.com/@raphaelsalaja'
								space='l'
							/>
							.
							<br />
							<br />
							All (or most) of my work is open source on
							<UnderlinedLink
								text='Github'
								link='https://github.com/rafunderscore'
								space='l'
							/>
							. Check out my
							<UnderlinedLink
								text='Patreon'
								link='https://www.patreon.com/RaphaelSalaja'
								space='lr'
							/>
							to support me and my work and gain exclusive
							content. If you are interested in owning a piece of
							my work, you can check out my pursuits into art on
							<UnderlinedLink
								text='Zora'
								link='https://zora.co/@raphaelsalaja'
								space='l'
							/>
							.
						</div>
					</section>

					<section className='flex flex-col gap-2'>
						<Separator />
						<span className='text-xs font-light text-muted-foreground'>
							This is a living document and will be updated as I
							continue to create and explore new ideas. To see
							previous works, please visit my{' '}
							<a
								href='https://bento.me/raphaelsalaja'
								target='_blank'
								className='underline'
							>
								Bento
							</a>
							.
						</span>
					</section>
				</motion.article>
			</div>
		</div>
	)
}
