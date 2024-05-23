import { Projects } from '@/components/projects'
import { getProjects } from '@/lib/mdx-utils'

export default function Page() {
	return <Projects projects={getProjects()} />
}
