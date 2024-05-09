import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const Pursuits = ({ posts }: { posts: any[] }) => {
	return (
		<div className='flex flex-col gap-2'>
			<span>Pursuits</span>
			{posts.map((post) => (
				<Link key={post.slug} href={`https://www.raphaelsalaja.com/arena`} passHref>
					<span className='-mx-4 flex items-center gap-2 rounded-lg px-4 py-3 text-muted-foreground transition-all hover:bg-gray-100/50'>
						<div>{post.metadata.title}</div>
						<Separator
							orientation='horizontal'
							className='shrink text-muted-foreground'
						/>
						{post.metadata.date}
					</span>
				</Link>
			))}
		</div>
	)
}

export { Pursuits }
