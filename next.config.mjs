/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGES_SRC_URL,
      },
    ],
  },
}

export default nextConfig
