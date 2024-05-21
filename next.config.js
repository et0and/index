/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
    reactStrictMode: true,
    swcMinify: true,
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

module.exports = withMDX(nextConfig)
