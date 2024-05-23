import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
	try {
		// URL
		const { searchParams } = new URL(request.url)
		const hasTitle = searchParams.has('title')
		const title = searchParams.get('title')

		// FONT
		const geist = await fetch(
			new URL('/assets/fonts/geist/static/Geist-SemiBold.ttf', import.meta.url)
		).then((res) => res.arrayBuffer())

		return new ImageResponse(
			(
				<div tw='h-full w-full flex flex-col justify-end items-start bg-white p-20 relative'>
					{hasTitle ? (
						<div tw='flex flex-col items-baseline'>
							<p tw='text-4xl tracking-tighter opacity-20 mb-0'>Raphael Salaja</p>
							<p tw='text-4xl tracking-tighter mb-0'>{title}</p>
						</div>
					) : (
						<p tw='text-4xl tracking-tighter mr-4 mb-0'>Raphael Salaja</p>
					)}
				</div>
			),
			{
				fonts: [
					{
						name: 'Geist',
						data: geist,
						style: 'normal',
					},
				],
			}
		)
	} catch (e: any) {
		console.log(`${e.message}`)
		return new Response(`Failed to generate the image`, {
			status: 500,
		})
	}
}
