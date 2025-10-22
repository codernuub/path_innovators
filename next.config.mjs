/** @type {import('next').NextConfig} */

const nextConfig = {
  output:"export",
  reactStrictMode: true,
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        hostname: "api.kisanhit.in",
      },
      {
        hostname: "localhost"
      },
      { 
        hostname: "127.0.0.1"
      }
    ],
  }
};

export default nextConfig;
