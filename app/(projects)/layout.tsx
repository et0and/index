import type { Metadata } from 'next'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { ViewTransitions } from 'next-view-transitions'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import '@/styles/globals.css'

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang='en' className={GeistSans.variable + ' ' + GeistMono.variable}>
				<body>
					<div>{children}</div>
				</body>
				<Analytics />
				<SpeedInsights />
			</html>
		</ViewTransitions>
	)
}
