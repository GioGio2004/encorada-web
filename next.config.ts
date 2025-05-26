import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
    ENCORADA_SECRET_KEY: process.env.ENCORADA_SECRET_KEY,
  },
};

export default nextConfig;
