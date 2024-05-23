import { getProjects } from '@/lib/mdx-utils'
import { MDX } from '@/mdx-components'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Link } from 'next-view-transitions'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	let posts = getProjects()

	return posts.map((post: { slug: any }) => ({
		slug: post.slug,
	}))
}

export function generateMetadata({ params }: { params: any }) {
	let post = getProjects().find((post) => post.slug === params.slug)

	if (!post) {
		return
	}

	let { title, date: date, summary: description } = post.metadata

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			date,
			url: `https://raphaelsalaja.com/blog/${post.slug}`,
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
		},
	}
}

export default function Blog({ params }: { params: any }) {
	let post = getProjects().find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<div>
			<div className='mb-4 flex flex-col gap-2'>
				<Link
					href='/'
					className='flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 md:absolute md:-translate-x-60 '
				>
					<ArrowLeftIcon />
					<h2>Home</h2>
				</Link>
				<div className='flex justify-between'>
					<h1 className='view-transition-project-heading'>{post.metadata.title}</h1>
					<h2>{post.metadata.date}</h2>
				</div>
			</div>
			<MDX source={post.content} />
		</div>
	)
}
