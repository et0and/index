import { getPosts } from '@/lib/mdx-utils'

import { Home } from '@/components/home'

export default function Page() {
	return <Home projects={getPosts()} headless={getPosts({ folder: 'headless-motion' })} />
}
