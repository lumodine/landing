import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  useFileSystemPublicRoutes: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.lumodine.com",
      },
      {
        hostname: "cdn.buymeacoffee.com",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
