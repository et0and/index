import { Projects } from '@/components/app/home/modules/projects'
import { getProjects } from '@/lib/mdx-utils'

export default function Page() {
	return <Projects projects={getProjects()} />
}
