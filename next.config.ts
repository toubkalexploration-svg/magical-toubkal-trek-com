import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The local sandbox cannot make the server-side HTTPS request used by
    // Next's image optimizer. Let the browser request remote images directly
    // during development while preserving optimization in production.
    unoptimized: process.env.NODE_ENV === "development",
    qualities: [45, 60, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
