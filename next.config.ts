import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/candi" : "",
  assetPrefix: isProd ? "/candi/" : "",
  allowedDevOrigins: [
    "typically-star-missouri-exceptions.trycloudflare.com",
    "localhost:3000",
  ],
} as any;

export default nextConfig;
