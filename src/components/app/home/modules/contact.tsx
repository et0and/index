import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { UnderlinedLink } from '@/components/underlined-link'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false)

	return (
		<div className='flex flex-col gap-2'>
			<div>Contact</div>
			<div className='text-muted-foreground'>
				If you would like to schedule a meeting, feel free to book an
				<UnderlinedLink
					text='appointment'
					link='https://calendar.app.google/tdrzpsrV8xySGbJ96'
					space='lr'
				/>
				with me or send me an email at
				<Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
					<PopoverTrigger
						onMouseLeave={() => setPopoverOpen(false)}
						onClick={() => {
							navigator.clipboard.writeText('raphaelsalaja@gmail.com')
							setPopoverOpen(true)
						}}
					>
						<UnderlinedLink text='raphaelsalaja@gmail.com' space='l' />
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
				.
				<br />
				<br />
				Follow me on
				<UnderlinedLink
					text='Twitter'
					link='https://twitter.com/raphaelsalaja'
					space='lr'
				/>{' '}
				or if you want to check out my personal side you can see my posts on
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
				<UnderlinedLink text='Github' link='https://github.com/rafunderscore' space='l' />
				. Check out my
				<UnderlinedLink
					text='Patreon'
					link='https://www.patreon.com/RaphaelSalaja'
					space='lr'
				/>
				to support me and my work and gain exclusive content.
				<br />
				<br />
				If you want a piece of my work, you can check out my art on
				<UnderlinedLink text='Zora' link='https://zora.co/@raphaelsalaja' space='l' />
				. I am stil in the process of moving all my work here, if you want to see them, you
				can check out my old
				<UnderlinedLink text='Bento' link='https://bento.me/raphaelsalaja' space='lr' />
				page.
			</div>
		</div>
	)
}

export { Contact }
