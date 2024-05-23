import { Home } from '@/components/home'
import { getProjects } from '@/lib/mdx-utils'

export default function Page() {
	return <Home projects={getProjects()} />
}
