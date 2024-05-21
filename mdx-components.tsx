import { cn } from '@/lib/utils'
import { MDXComponents } from 'mdx/types'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { JSX } from 'react'

import ArenaGraphExample from './components/projects/arena'

const components: MDXComponents = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className={cn('mb-2 mt-6', className)}
			{...props}
			style={{ margin: '1.5rem 0rem 0.5rem 0rem' }}
		/>
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className={cn('mb-4', className)} {...props} />
	),
	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
		<a
			className={cn('underline underline-offset-4', className)}
			style={{
				color: '#5EB1EF',
			}}
			{...props}
		/>
	),
	Showcase: ({ children, caption }) => (
		<div className='my-6 flex flex-col justify-end gap-2'>
			<div
				className='overflow-hidden border'
				style={{
					height: '24rem',
				}}
			>
				<div className='h-full'>{children}</div>
			</div>
			{caption && <p className='text-center text-xs text-gray-500'>{caption}</p>}
		</div>
	),
	ArenaGraph: () => <ArenaGraphExample />,
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
	return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}
