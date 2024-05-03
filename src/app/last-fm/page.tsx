'use client'

import { Dropdown, Home, Search } from '@/components/arena/graph-instruments'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'

export type ArenaGraphState = 'idle' | 'loading' | 'connections'

export default function ArenaGraph() {
	const [state, setState] = useState<ArenaGraphState>('idle')
	const [searchData, setSearchData] = useState<any>(null)

	const handleDataReceived = (data: any) => {
		setSearchData(data)
		setState('connections')
	}

	const LastFMForceGraph = dynamic(
		() =>
			import('@/components/last-fm/graph').then(
				(module) => module.LastFMForceGraph
			),
		{
			ssr: true,
		}
	)

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className='flex h-screen w-full flex-col'
			>
				<div className='relative h-full w-full'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className='absolute left-0 top-0 z-50 w-full p-4'
					>
						<div className='flex justify-between'>
							<div className='flex gap-2'>
								<Home />
								<Search
									state={state}
									onDataReceived={handleDataReceived}
								/>
							</div>
							<div className='flex gap-2'>
								<Dropdown />
							</div>
						</div>
					</motion.div>

					<div className='absolute inset-0 z-40 flex h-full w-full items-center justify-center'>
						<div className='h-full w-full'>
							<LastFMForceGraph data={searchData} />
						</div>
						{/* {(() => {
							switch (state) {
								case 'idle':
									return (
										<div>
											<div className=' flex aspect-square w-[300px] flex-col gap-2 border p-4 text-justify'>
												<div className='flex flex-row gap-2'>
													<div>Spatial</div>
													<div>/</div>
													<div>speɪʃl</div>
													<div>/</div>
													<div>adjective</div>
												</div>
												<div className='flex flex-col gap-2 '>
													<div>
														relating to or occupying
														space
													</div>
													<div>
														To begin, paste a link
														to an Are.na block or
														channel, or search for
														anything above.
													</div>
													<div>
														Note, this is a work in
														progress and may not
														work as expected. Please
														report any issues you
														find or any suggestions
														you would like to see
														added.
													</div>
												</div>
											</div>
											<div className='flex w-full flex-col items-center justify-center  gap-2 p-2 text-xs text-muted-foreground'>
												<div className='flex flex-row gap-2'>
													<div>Are.na</div>
													<div>/</div>
													<div>Spatial</div>
												</div>
											</div>
										</div>
									)
								case 'loading':
									return <Loading />
								case 'connections':
									return (
										<div className='h-full w-full'>
											<LastFMForceGraph
												data={searchData}
											/>
										</div>
									)
								default:
									return null
							}
						})()} */}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}
