import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/candi",
  // Remove assetPrefix as basePath handles it in modern Next.js export
  allowedDevOrigins: [
    "typically-star-missouri-exceptions.trycloudflare.com",
    "localhost:3000",
  ],
} as any;

export default nextConfig;
