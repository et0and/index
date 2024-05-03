'use client'

import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
	FontBoldIcon,
	FontItalicIcon,
	Link1Icon,
	QuoteIcon,
	StrikethroughIcon,
	TextAlignCenterIcon,
	TextAlignLeftIcon,
	TextAlignRightIcon,
	UnderlineIcon,
} from '@radix-ui/react-icons'

export default function Bookmarks() {
	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<div className='w-[500px] rounded-lg border p-2 shadow'>
				<div className='flex flex-col gap-4'>
					<div className='flex justify-between'>
						<ToggleGroupBar />
					</div>
				</div>
			</div>
		</div>
	)
}

function ToggleGroupBar() {
	return (
		<ToggleGroup type='multiple' className='gap-2'>
			<ToggleGroupItem value='bold' aria-label='Toggle bold'>
				<FontBoldIcon className='h-4 w-4' />
			</ToggleGroupItem>
			<ToggleGroupItem value='italic' aria-label='Toggle italic'>
				<FontItalicIcon className='h-4 w-4' />
			</ToggleGroupItem>

			<ToggleGroupItem value='underline' aria-label='Toggle underline'>
				<UnderlineIcon className='h-4 w-4' />
			</ToggleGroupItem>

			<ToggleGroupItem
				value='strikethrough'
				aria-label='Toggle strikethrough'
			>
				<StrikethroughIcon className='h-4 w-4' />
			</ToggleGroupItem>

			<ToggleGroupItem value='link' aria-label='Toggle link'>
				<Link1Icon className='h-4 w-4' />
			</ToggleGroupItem>

			<ToggleGroupItem value='quote' aria-label='Toggle quote'>
				<QuoteIcon className='h-4 w-4' />
			</ToggleGroupItem>

			<Separator orientation='vertical' className='h-[50%]' />

			<ToggleGroupItem value='left' aria-label='Toggle left align'>
				<TextAlignLeftIcon className='h-4 w-4' />
			</ToggleGroupItem>
			<ToggleGroupItem value='center' aria-label='Toggle center align'>
				<TextAlignCenterIcon className='h-4 w-4' />
			</ToggleGroupItem>
			<ToggleGroupItem value='right' aria-label='Toggle right align'>
				<TextAlignRightIcon className='h-4 w-4' />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}
