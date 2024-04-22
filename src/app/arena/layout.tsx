import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Are.na / Spatial',
	description: 'Explore spatial connections using data from Are.na',
	openGraph: {
		title: 'Are.na / Spatial',
		description: 'Explore spatial connections using data from Are.na',
		url: 'https://raphaelsalaja.com/arena',
		siteName: 'Are.na / Spatial',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Are.na / Spatial',
		images: [{ url: 'https://raphaelsalaja.com/arena-og.png' }],
	},
}

export default function ArenaLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return children
}
