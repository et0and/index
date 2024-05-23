import type { Metadata } from 'next'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { ViewTransitions } from 'next-view-transitions'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { VercelToolbar } from '@vercel/toolbar/next'

import { og } from '@/config/site'
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
				<body className='flex items-center justify-center text-justify'>
					<div className='flex w-full max-w-[640px] flex-col justify-start gap-8 px-8 py-16'>
						{children}
					</div>
					{shouldInjectToolbar && <VercelToolbar />}
					<Analytics />
					<SpeedInsights />
				</body>
			</html>
		</ViewTransitions>
	)
}
