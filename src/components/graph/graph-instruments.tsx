'use client'

import { ArenaIcon } from '@/components/icons/arena'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getDataFromURL } from '@/lib/utils/arena'
import { cn } from '@/lib/utils/cn'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DownloadIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'

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

interface SearchProps {
	onDataReceived: (data: any) => void
}

export function Search({ onDataReceived }: SearchProps) {
	async function parseSearch(input: string) {
		if (!input) {
			return
		}

		if (new RegExp('https://www.are.na/').test(input)) {
			const data = await getDataFromURL(input)
			onDataReceived(data)
		} else {
			const data = await getDataFromURL(input)
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
