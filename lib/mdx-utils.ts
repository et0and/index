import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { Metadata } from '@/types/metadata'

function parseFrontmatter(fileContent: string) {
	const { data, content } = matter(fileContent)

	const metadata: Metadata = {
		slug: '',
		title: data.title || '',
		date: data.date || '',
		summary: data.summary || '',
		tags: data.tags || [],
		live: data.live || '',
	}

	return { metadata, content }
}

function getMDXFiles(dir: string) {
	const files = fs.readdirSync(dir)
	return files.filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
	const rawContent = fs.readFileSync(filePath, 'utf-8')
	return parseFrontmatter(rawContent)
}

function getPosts({ folder }: { folder: string } = { folder: 'projects' }) {
	const dir = path.join(process.cwd(), 'app', '(main)', folder, 'posts')

	const mdxFiles = getMDXFiles(dir)

	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file))
		const slug = path.basename(file, path.extname(file))

		return {
			metadata: { ...metadata, slug },
			slug,
			content,
		}
	})
}

export { getPosts }
