import { Separator } from '@/components/ui/separator'
import { Link } from 'next-view-transitions'

const Projects = ({ projects }: { projects: any[] }) => {
	return (
		<div className='flex flex-col gap-2'>
			<h1>Projects</h1>

			{projects.map((project) => (
				<Link
					key={project.slug}
					href={`projects/${project.slug}`}
					className='-mx-4 flex items-center gap-2 text-nowrap rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50'
				>
					{project.metadata.title}
					<Separator orientation='horizontal' className='shrink' />
					{project.metadata.date}
				</Link>
			))}
		</div>
	)
}

export { Projects }
