const withMDX = require('@next/mdx')()
const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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