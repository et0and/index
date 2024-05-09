import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import './globals.css'

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
		<html lang='en' className={GeistSans.className}>
			<body>
				<div className='md:flex md:flex-row md:justify-center'>
					<div className='md:w-full md:min-w-[512px] md:max-w-xl'>
						<div className='flex max-w-xl flex-col justify-start px-8 py-12'>
							{children}
							<Analytics />
							<SpeedInsights />
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
