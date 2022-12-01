/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        forceSwcTransforms: true,
    },
    images: {
      domains: ["img.29cm.co.kr", ] 
    }
};

module.exports = nextConfig;
