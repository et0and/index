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
		default: 'Catalogue raisonné | Index',
		template: '%s',
	},
	description: 'Catalog of works. 2014 to present.',
	keywords: ['Tom Hackshaw', 'Index', 'Catalog'],
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
		locale: 'en_NZ',
		url: 'https://index.tom.so',
		title: 'Catalogue raisonné | Index',
		description: 'Catalog of works. 2014 to present.',
		siteName: 'Catalogue raisonné | Index',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Catalogue raisonné | Index',
		description: 'Catalog of works. 2014 to present.',
		images: ['https://index.to.so/api/og'],
		creator: '@tomhackshaw',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	url: 'https://index.tom.so',
	links: {
		twitter: 'https://twitter.com/tomhackshaw',
		github: 'https://github.com/et0and',
	},
}
