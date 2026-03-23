import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/raide-next',
  assetPrefix: '/raide-next',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
