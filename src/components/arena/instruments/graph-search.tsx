'use client'

import { Input } from '@/components/ui/input'
import { getDataFromURL } from '@/lib/utils/arena'
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
