import { ViewProductionButton } from '@/components/view-production-button'
import { getPosts } from '@/lib/mdx-utils'
import { MDX } from '@/mdx-components'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Link } from 'next-view-transitions'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	let posts = getPosts()

	return posts.map((post: { slug: any }) => ({
		slug: post.slug,
	}))
}

export function generateMetadata({ params }: { params: any }) {
	let post = getPosts().find((post) => post.slug === params.slug)

	if (!post) {
		return
	}

	let { title, date: date, summary: description } = post.metadata

	title = `${title} | Catalogue raisonné `

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			date,
			url: `https://index.tom.so/projects/${post.slug}`,
			images: ['https://index.tom.so/api/og?title=' + encodeURIComponent(title)],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: ['https://index.tom.so/api/og?title=' + encodeURIComponent(title)],
		},
	}
}

export default function Blog({ params }: { params: any }) {
	let post = getPosts().find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<div>
			<div className='mb-4 flex flex-col gap-2'>
				<div className='flex justify-between'>
					<Link
						href='/'
						className='flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 md:absolute md:-translate-x-60'
					>
						<ArrowLeftIcon />
						<p className='hover:underline'>Home</p>
					</Link>
					<h1 className='view-transition-project-heading text-sm font-medium md:text-xl'>
						{post.metadata.title}
					</h1>
					<h2>{post.metadata.date}</h2>
				</div>
			</div>

			<MDX source={post.content} />

			{post.metadata.live && <ViewProductionButton href={post.metadata.live} />}
		</div>
	)
}
