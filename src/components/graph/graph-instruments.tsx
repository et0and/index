'use client'

import { ArenaIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { getDataFromSearch, getDataFromURL } from '@/lib/utils/arena'
import { cn } from '@/lib/utils/cn'
import { DownloadIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

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
				<DropdownMenuItem
					onClick={() => {
						window.open('https://www.raphaelsalaja.com', '_blank')
					}}
				>
					Home
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						window.open('https://www.github.com/rafunderscore', '_blank')
					}}
				>
					GitHub
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => {
						window.open('https://www.twitter.com/raphaelsalaja', '_blank')
					}}
				>
					Twitter
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function Loading() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
			className="flex h-full w-full items-center justify-center"
		>
			<ArenaIcon className="h-8 w-8 animate-spin" />
		</motion.div>
	)
}

interface SearchProps {
	state: string
	onDataReceived: (data: any) => void
}

export function Search({ state, onDataReceived }: SearchProps) {
	async function parseSearch(input: string) {
		if (!input) {
			return
		}

		if (new RegExp('https://www.are.na/').test(input)) {
			state = 'loading'
			const data = await getDataFromURL(input)
			onDataReceived(data)
		} else {
			state = 'loading'
			const data = await getDataFromSearch(input)
			onDataReceived(data)
		}
	}

	return (
		<Input
			className={cn('relative flex w-full justify-between rounded-none bg-background p-2 text-sm text-opacity-0 shadow-none md:w-40 lg:w-64')}
			placeholder="Search Are.na..."
			onKeyDown={(e) => {
				if (e.key === 'Escape') {
					e.currentTarget.blur()
				}
				if (e.key === 'Enter') {
					parseSearch(e.currentTarget.value)
					e.currentTarget.blur()
					e.currentTarget.value = ''
				}
			}}
			onSubmit={(e) => {
				parseSearch(e.currentTarget.value)
			}}
		/>
	)
}
