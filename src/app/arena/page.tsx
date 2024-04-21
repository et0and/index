'use client'

import { ArenaForceGraph } from '@/components/arena/graph'
import { GraphSearch } from '@/components/arena/instruments/graph-search'
import { ArenaIcon } from '@/components/svgs/arena'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DownloadIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export type ArenaGraphState = 'idle' | 'loading' | 'connections'

export default function ArenaGraph() {
	const [state, setState] = useState<ArenaGraphState>('idle')
	const [searchData, setSearchData] = useState<any>(null)

	const handleDataReceived = (data: any) => {
		setSearchData(data)
		setState('connections')
	}

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className="flex h-screen w-full flex-col"
			>
				<div className="relative h-full w-full">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className="absolute left-0 top-0 z-50 w-full p-4"
					>
						<div className="flex justify-between">
							<div className="flex gap-2">
								<Home />
								<GraphSearch onDataReceived={handleDataReceived} />
							</div>
							<div className="flex gap-2">
								<Download />
								<Dropdown />
							</div>
						</div>
					</motion.div>

					<div className="absolute inset-0 z-40 flex h-full w-full items-center justify-center">
						{(() => {
							switch (state) {
								case 'idle':
									return (
										<div>
											<div className=" flex aspect-square w-[300px] flex-col gap-2 border p-4 text-justify">
												<div className="flex flex-row gap-2">
													<div>Spatial</div>
													<div>/</div>
													<div>speɪʃl</div>
													<div>/</div>
													<div>adjective</div>
												</div>
												<div className="flex flex-col gap-2 ">
													<div>relating to or occupying space</div>
													<div>"the spatial distribution of population"</div>
													<div>To begin, paste a link to an Are.na block or channel, or search for anything above.</div>
													<div>
														Note, this is a work in progress and may not work as expected. Please report any issues you
														find or any suggestions you would like to see added.
													</div>
												</div>
											</div>
											<div className="flex w-full flex-col items-center justify-center  gap-2 p-2 text-xs text-muted-foreground">
												<div className="flex flex-row gap-2">
													<div>Are.na</div>
													<div>/</div>
													<div>Spatial</div>
												</div>
											</div>
										</div>
									)
								case 'connections':
									return (
										<div className="h-full w-full">
											<ArenaForceGraph data={searchData} />
										</div>
									)
								default:
									return null
							}
						})()}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export function Home() {
	return (
		<Button variant="outline" size="icon" className="rounded-none">
			<ArenaIcon className="h-5 w-5" />
		</Button>
	)
}

export function Download() {
	return (
		<Button type="submit" variant="outline" size="icon" className="rounded-none">
			<DownloadIcon />
		</Button>
	)
}

export function Dropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="rounded-none">
					<HamburgerMenuIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" sideOffset={8} className="rounded-none">
				<DropdownMenuItem>GitHub</DropdownMenuItem>
				<DropdownMenuItem>Twitter</DropdownMenuItem>
				<DropdownMenuItem>Support Me</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function Version() {
	return (
		<Button variant="outline" size="icon" className="rounded-none">
			<div className="flex items-center opacity-50">
				<span className="text-xs font-medium italic">v1.0</span>
			</div>
		</Button>
	)
}
