import { Home } from '@/components/app/home/home'
import { getPosts } from '../lib/mdx-utils'

export default function Page() {
	return <Home posts={getPosts('pursuits')} />
}
