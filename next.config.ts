import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        WEBHOOK_URL: process.env.WEBHOOK_URL
    },
    reactStrictMode: true
};

export default nextConfig;
