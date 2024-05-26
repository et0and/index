import { getPosts } from '@/lib/mdx-utils'
import Link from 'next/link'

export function Projects() {
	let posts = getPosts()

	return (
		<div>
			{posts
				.sort((a, b) => {
					if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
						return -1
					}
					return 1
				})
				.map((post) => (
					<Link
						key={post.slug}
						className='mb-4 flex flex-col space-y-1'
						href={`/lab/${post.slug}`}
					>
						<div className='flex w-full flex-col space-x-0 md:flex-row md:space-x-2'>
							<p className='w-[100px] tabular-nums text-neutral-600 dark:text-neutral-400'>
								{post.metadata.date}
							</p>
							<p className='tracking-tight text-neutral-900 dark:text-neutral-100'>
								{post.metadata.title}
							</p>
						</div>
					</Link>
				))}
		</div>
	)
}
