import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { Metadata } from '@/lib/classes/metadata'

function parseFrontmatter(fileContent: string) {
	const { data, content } = matter(fileContent)

	const metadata: Metadata = {
		slug: '',
		title: data.title || '',
		date: data.date || '',
		summary: data.summary || '',
		tags: data.tags || [],
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

function getProjects() {
	const dir = path.join(process.cwd(), 'app', '(main)', 'projects', 'posts')

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

export { getProjects }
