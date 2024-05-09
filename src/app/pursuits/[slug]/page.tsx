import { baseUrl } from '@/app/sitemap'
import { CustomMDX } from '@/components/mdx'
import { getPosts } from '@/lib/mdx-utils'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	let posts = getPosts('pursuits')

	return posts.map((post: { slug: any }) => ({
		slug: post.slug,
	}))
}

export function generateMetadata({ params }: { params: any }) {
	let post = getPosts('pursuits').find((post) => post.slug === params.slug)

	if (!post) {
		return
	}

	let { title, publishedAt: publishedTime, summary: description, image } = post.metadata
	let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${baseUrl}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function Blog({ params }: { params: any }) {
	let post = getPosts('pursuits').find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<section>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `${baseUrl}${post.metadata.image}`
							: `/og?title=${encodeURIComponent(post.metadata.title)}`,
						url: `${baseUrl}/blog/${post.slug}`,
						author: {
							'@type': 'Person',
							name: 'My Portfolio',
						},
					}),
				}}
			/>
			<h1 className='title text-2xl font-semibold tracking-tighter'>{post.metadata.title}</h1>
			<div className='mb-8 mt-2 flex items-center justify-between text-sm'>
				<p className='text-sm text-neutral-600 dark:text-neutral-400'>
					{post.metadata.date}
				</p>
			</div>
			<article className='prose'>
				<CustomMDX source={post.content} />
			</article>
		</section>
	)
}
