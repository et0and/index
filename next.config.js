/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        mdxRs: true,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tom.so',
                port: '',
            },
        ],
    },
}

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();
const withMDX = require('@next/mdx')()

module.exports = withVercelToolbar(withMDX(nextConfig))
