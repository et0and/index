/** @type {import('next').NextConfig} */



const nextConfig = {
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        mdxRs: true,
    },
    images: {
        domains: [
            'avatar.vercel.sh',
            'cloudflare-ipfs.com',
            'avatars.githubusercontent.com',
            'picsum.photos',
            'pbs.twimg.com'
        ],
    }
}

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();
const withMDX = require('@next/mdx')()

module.exports = withVercelToolbar(withMDX(nextConfig))


