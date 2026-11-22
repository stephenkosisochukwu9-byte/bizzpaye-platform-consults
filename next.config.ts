import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.bizzpayeconsults.online",
          },
        ],
        destination: "https://bizzpayeconsults.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
