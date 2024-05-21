import type { Metadata } from 'next'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { ViewTransitions } from 'next-view-transitions'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import '@/styles/globals.css'

export const metadata: Metadata = {
	authors: [{ name: 'Raphael Salaja', url: 'https://twitter.com/raphaelsalaja' }],
	category: 'Genreless Creator',
	creator: 'Raphael Salaja',
	description:
		'An individual who defies traditional categorisation within creative endeavors, blending diverse influences and mediums to produce innovative works. Also a multidisciplinary artist who transcends boundaries, creating without limitations.',
	keywords: [
		'Raphael Salaja',
		'Genreless Creator',
		'Creative Endeavors',
		'Multidisciplinary Artist',
		'Innovative Works',
		'Open Source',
		'Generative Art',
		'GitHub',
		'Patreon',
		'Instagram',
		'YouTube',
		'Twitter',
	],
	openGraph: {
		description:
			'An individual who defies traditional categorisation within creative endeavors, blending diverse influences and mediums to produce innovative works.',
		locale: 'en_US',
		siteName: 'Raphael Salaja',
		title: 'Raphael Salaja',
		type: 'website',
		url: 'https://raphaelsalaja.com',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@raphaelsalaja',
		title: 'Raphael Salaja',
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
				<body className='flex items-center justify-center text-justify'>
					<div className='flex w-full max-w-[640px] flex-col justify-start gap-8 px-8 py-16'>
						{children}
						<Analytics />
						<SpeedInsights />
					</div>
				</body>
			</html>
		</ViewTransitions>
	)
}