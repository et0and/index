'use client'

import { getDataFromURL } from '@/lib/arena'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArenaForceGraph } from '../app/arena/arena-graph'
import { Loading } from '../app/arena/arena-graph-instruments'

export type ArenaGraphState = 'idle' | 'loading' | 'connections'

export default function ArenaGraphExample() {
	const [state, setState] = useState<ArenaGraphState>('loading')
	const [searchData, setSearchData] = useState<any>(null)

	useEffect(() => {
		async function fetchData() {
			setSearchData(
				await getDataFromURL('https://www.are.na/g-a-v-i-n/we-keep-it-to-a-minimum')
			)
		}
		fetchData()
	}, [])

	useEffect(() => {
		if (searchData) {
			setState('connections')
		}
	}, [searchData])

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className='h-full w-full'
			>
				{(() => {
					switch (state) {
						case 'loading':
							return <Loading />
						case 'connections':
							return <ArenaForceGraph data={searchData} />
					}
				})()}
			</motion.div>
		</AnimatePresence>
	)
}
