import { UnderlinedLink } from '@/components/underlined-link'

const Today = () => {
	return (
		<div className='flex flex-col gap-2'>
			<h1>Today</h1>
			<span className='text-muted-foreground'>
				Creating (almost) daily explorations on my
				<UnderlinedLink text='Twitter' link='https://twitter.com/raphaelsalaja' space='l' />
				. Working on Whim, a new haven for creators.
			</span>
		</div>
	)
}

export { Today }
