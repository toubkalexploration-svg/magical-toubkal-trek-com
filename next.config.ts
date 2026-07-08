import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site (HTML/CSS/JS) in the `out/` folder so it can be
  // uploaded to Hostinger Business Web Hosting (public_html) without a Node server.
  output: "export",
  // Emit each route as a folder with index.html (clean URLs on Apache/LiteSpeed).
  trailingSlash: true,
  images: {
    // The Next.js Image Optimization API needs a server, which shared hosting
    // does not provide, so serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
