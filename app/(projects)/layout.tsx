import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { og } from '@/config/site'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'

import '@/styles/globals.css'

export const metadata: Metadata = {
	title: og.title,
	description: og.description,
	keywords: og.keywords,
	authors: og.authors,
	creator: og.creator,
	openGraph: og.openGraph,
	twitter: og.twitter,
	icons: og.icons,
	metadataBase: new URL(og.url),
	manifest: `${og.url}/site.webmanifest`,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const shouldInjectToolbar = process.env.NODE_ENV === 'development'
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
