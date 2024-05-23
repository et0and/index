export type OpenGraphMetadata = {
	title: { default: string; template: string }
	description: string
	keywords: string[]
	authors: { name: string; url: string }[]
	creator: string
	themeColor: { media: string; color: string }[]
	openGraph: {
		type: string
		locale: string
		url: string
		title: string
		description: string
		siteName: string
	}
	twitter: {
		card: string
		title: string
		description: string
		images: string[]
		creator: string
	}
	icons: {
		icon: string
		shortcut: string
		apple: string
	}
	url: string
	links: {
		twitter: string
		github: string
	}
}

export const og: OpenGraphMetadata = {
	title: {
		default: 'Raphael Salaja',
		template: '%s',
	},
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
	authors: [
		{
			name: 'shadcn',
			url: 'https://shadcn.com',
		},
	],
	creator: 'shadcn',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://raphaelsalaja.com',
		title: 'Raphael Salaja',
		description:
			'An individual who defies traditional categorisation within creative endeavors, blending diverse influences and mediums to produce innovative works. Also a multidisciplinary artist who transcends boundaries, creating without limitations.',
		siteName: 'Raphael Salaja',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Raphael Salaja',
		description:
			'An individual who defies traditional categorisation within creative endeavors, blending diverse influences and mediums to produce innovative works. Also a multidisciplinary artist who transcends boundaries, creating without limitations.',
		images: ['https://raphaelsalaja.com/api/og'],
		creator: '@raphaelsalaja',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	url: 'https://raphaelsalaja.com',
	links: {
		twitter: 'https://twitter.com/raphaelsalaja',
		github: 'https://github.com/rafunderscore',
	},
}
