import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel auto-handles Next.js output; standalone is only needed for self-hosted Docker deploys */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
