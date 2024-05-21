'use client'

import { faker } from '@faker-js/faker'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import millify from 'millify'
import Image from 'next/image'
import {
	TwitterBookmarkIcon,
	TwitterChatBubbleIcon,
	TwitterHeartIcon,
	TwitterMenuIcon,
	TwitterRetweetIcon,
} from '../../../../components/icons'
import { Button } from '../../../../components/ui/button'
import { Separator } from '../../../../components/ui/separator'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../../../../components/ui/tooltip'

interface User {
	id: string
	avatar: string
	name: string
	username: string
	bio: string
	time: Date
	tweet: string
	image: string
	comments: number
	retweets: number
	likes: number
	views: number
	bookmarks: number
}

function createRandomUser(): User {
	const firstName = faker.person.firstName('male')
	const lastName = faker.person.lastName('male')
	const id = faker.string.uuid()
	const avatar = faker.image.avatar()
	const name = firstName + ' ' + lastName
	const username = faker.internet.userName({ firstName: firstName, lastName: lastName })
	const bio = faker.person.bio()
	const time = faker.date.recent()
	const tweet = faker.lorem.sentence({ min: 2, max: 3 })
	const image = faker.image.urlPicsumPhotos()
	const comments = faker.number.int({ min: 0, max: 100000 })
	const retweets = faker.number.int({ min: 0, max: 100000 })
	const likes = faker.number.int({ min: 0, max: 100000 })
	const views = faker.number.int({ min: 0, max: 100000 })
	const bookmarks = faker.number.int({ min: 0, max: 100000 })

	return {
		id,
		avatar,
		name,
		username,
		bio,
		time,
		tweet,
		image,
		comments,
		retweets,
		likes,
		views,
		bookmarks,
	}
}

const USERS: User[] = faker.helpers.multiple(createRandomUser, {
	count: 5,
})

export default function Bookmarks() {
	faker.seed(2)

	const time = faker.date.recent()
	const views = faker.number.int({ min: 0, max: 1000000 })
	const comments = faker.number.int({ min: 0, max: 1000000 })
	const retweets = faker.number.int({ min: 0, max: 1000000 })
	const likes = faker.number.int({ min: 0, max: 1000000 })
	const bookmarks = faker.number.int({ min: 0, max: 100000 })

	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className='w-[500px] rounded-[24px] border p-[24px] shadow'>
				<div className='flex flex-col gap-4'>
					<div className='flex justify-between'>
						<div className='flex items-center gap-2'>
							<Image
								width={40}
								height={40}
								src='https://pbs.twimg.com/profile_images/1714714622081617920/WhSFE2ZB_400x400.jpg'
								alt='daily-loud'
								className='rounded-full'
							/>
							<div className='flex flex-col gap-1 leading-[14px]'>
								<span className='font-bold'>Daily Loud</span>
								<span className='text-muted-foreground'>@DailyLoud</span>
							</div>
						</div>

						<TwitterMenuIcon className='h-6 w-6 fill-gray-500' />
					</div>

					<div>Fans are disgusted that Ice Spice has an android phone.</div>

					<Image
						width={516}
						height={516}
						src='https://pbs.twimg.com/media/GL9qRXIXUAAa1CD?format=jpg&name=large'
						alt='ice-spice'
						className='object-fit w-full rounded-[16px] border'
					/>

					<div className='flex gap-1 text-muted-foreground'>
						<div>{format(time, 'HH:mm a')}</div>
						<div>⋅</div>
						<div>{format(time, 'MMM d yyyy')}</div>
						<div>⋅</div>
						<div>
							<span className='font-bold text-black'>
								{millify(views, { precision: 1, lowercase: true })}
							</span>{' '}
							Views
						</div>
					</div>

					<Separator />

					<div className='flex justify-between fill-gray-500 text-muted-foreground'>
						<div className='flex items-center gap-2 '>
							<TwitterChatBubbleIcon className='h-6 w-6 ' />
							{millify(comments, {
								precision: 1,
								lowercase: true,
							})}
						</div>
						<div className='flex items-center gap-2'>
							<TwitterRetweetIcon className='h-6 w-6' />
							{millify(retweets, {
								precision: 1,
								lowercase: true,
							})}
						</div>
						<div className='flex items-center gap-2'>
							<TwitterHeartIcon className='h-6 w-6' />
							{millify(likes, {
								precision: 1,
								lowercase: true,
							})}
						</div>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<motion.div
										whileHover={{
											fill: '#1DA1F2',
											scale: 1.1,
											color: '#1DA1F2',
											transition: {
												duration: 0.2,
												type: 'spring',
											},
										}}
										className='flex items-center gap-2'
									>
										<TwitterBookmarkIcon className='h-6 w-6' />
										{millify(bookmarks, {
											precision: 1,
											lowercase: true,
										})}
									</motion.div>
								</TooltipTrigger>
								<TooltipContent
									sideOffset={8}
									className='flex  flex-col gap-6 rounded-[24px] border bg-white p-4 align-top shadow'
								>
									{USERS.map((user) => (
										<div key={user.id} className='flex gap-2 align-top'>
											<Image
												width={40}
												height={40}
												src={user.avatar}
												alt={user.username}
												className='h-10 w-10 rounded-full'
											/>

											<div className='flex w-full flex-col justify-between gap-1 text-sm leading-[16px]'>
												<div className='flex w-full justify-between'>
													<div className='flex flex-col gap-1'>
														<span className='font-bold text-black'>
															{user.name}
														</span>
														<span className='text-muted-foreground'>
															@{user.username}
														</span>
													</div>
												</div>

												<span className='text-black'>{user.bio}</span>
											</div>
										</div>
									))}
									<Button variant='default' className='rounded-full shadow-none'>
										View All
									</Button>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>
			</div>
		</div>
	)
}
