import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { MDXComponents } from 'mdx/types'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { Link } from 'next-view-transitions'

import dynamic from 'next/dynamic'
import React from 'react'

const ArenaGraphExample = dynamic(() => import('@/components/graph-example'), {
	ssr: false,
})

const ButtonDelayedIcon = dynamic(
	() => import('@/components/headless-motion/button-delayed-icon'),
	{
		ssr: false,
	}
)

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

	Link: ({ children, href, ...props }) => <Link href={href}>{children}</Link>,
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

	// PROJECTS
	ArenaGraph: () => <ArenaGraphExample />,

	// HEADLESS MOTION
	ComponentContainer: ({ children }) => (
		<div className='my-6 flex flex-col justify-end gap-2'>
			<div
				className='relative overflow-hidden border '
				style={{
					height: '24rem',
				}}
			>
				{/* top right */}

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<div className='absolute right-0 top-0 isolate p-2'>
								<div className='border p-1'>
									<ExternalLinkIcon />
								</div>
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<p>View Source Code</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<div className='flex h-full items-center justify-center'>{children}</div>
			</div>
		</div>
	),
	ButtonDelayed: () => <ButtonDelayedIcon />,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
	return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
	}
}
