import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'spatial.are.na',
	description: 'Explore spatial connections using data from Are.na',
	openGraph: {
		title: 'spatial.are.na',
		description: 'Explore spatial connections using data from Are.na',
		url: 'https://raphaelsalaja.com/arena',
		siteName: 'spatial.are.na',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'spatial.are.na',
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
