'use client'

import { Input } from '@/components/ui/input'
import { getDataFromBlockSlug } from '@/lib/utils/arena/block'
import { searchAll } from '@/lib/utils/arena/search'
import { cn } from '@/lib/utils/cn'

interface GraphSearchProps {
	onDataReceived: (data: any) => void
}

export function GraphSearch({ onDataReceived }: GraphSearchProps) {
	async function parseSearch(input: string) {
		if (!input) {
			return
		}

		if (new RegExp('https://www.are.na/').test(input)) {
			const url = new URL(input)
			const slug = url.pathname.split('/').pop() || ''
			const data = await getDataFromBlockSlug(slug)
			console.log(data)
			onDataReceived(data)
		} else {
			const searchData = await searchAll(input)
			onDataReceived(searchData)
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
