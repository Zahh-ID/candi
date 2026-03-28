import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/candi-nusantara", // Uncomment if deploying to username.github.io/repo-name
  allowedDevOrigins: [
    "typically-star-missouri-exceptions.trycloudflare.com",
    "localhost:3000",
  ],
} as any;

export default nextConfig;
