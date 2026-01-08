/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization enabled by default
  // Add remote patterns if you need to load external images:
  // images: {
  //   remotePatterns: [
  //     { protocol: 'https', hostname: 'example.com' },
  //   ],
  // },
  
  // Redirect /favicon.ico to /icon.ico for Google favicon compatibility
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/icon.ico',
      },
    ]
  },
}

export default nextConfig
