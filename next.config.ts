import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: "/keywordrecherche", destination: "/", permanent: true },
      { source: "/seo-betreuung", destination: "/", permanent: true },
      { source: "/seo-analyse", destination: "/", permanent: true },
      { source: "/content-marketing", destination: "/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dein-ranking.at",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
