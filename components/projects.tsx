import { Link } from 'next-view-transitions'

const Projects = ({ projects }: { projects: any[] }) => {
	return (
		<div className='flex flex-col gap-2'>
			{projects.map((project) => (
				<Link
					key={project.slug}
					href={`projects/${project.slug}`}
					className='-mx-4 flex items-center justify-between gap-8 rounded-lg px-4 py-3 transition-all hover:bg-gray-100/50'
				>
					<div>{project.metadata.title}</div>
					<div>{project.metadata.date}</div>
				</Link>
			))}
		</div>
	)
}

export { Projects }
