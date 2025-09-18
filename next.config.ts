import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'vannellen.com',
    '*.vannellen.com',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
};

export default nextConfig;
