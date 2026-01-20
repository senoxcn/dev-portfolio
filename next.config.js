/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [75, 95],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig
