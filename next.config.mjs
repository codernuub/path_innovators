/** @type {import('next').NextConfig} */

const nextConfig = {
  output:"export",
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });

    return config;
  },
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
