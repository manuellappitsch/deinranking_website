import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // === WordPress Blog Migration ===
      { source: "/blog/:slug*", destination: "/ratgeber/:slug*", permanent: true },
      { source: "/blog", destination: "/ratgeber", permanent: true },

      // === WordPress Page Migration ===
      { source: "/ueber-uns", destination: "/ueber-deinranking", permanent: true },
      { source: "/feed", destination: "/ratgeber", permanent: true },

      // === Old Service Pages (were redirecting to / — now point to correct pages) ===
      { source: "/keywordrecherche", destination: "/leistungen", permanent: true },
      { source: "/seo-betreuung", destination: "/leistungen", permanent: true },
      { source: "/seo-analyse", destination: "/leistungen", permanent: true },
      { source: "/content-marketing", destination: "/leistungen", permanent: true },

      // === Old Blog Posts (from GSC — had impressions, now 404) ===
      { source: "/seo-ratgeber", destination: "/ratgeber", permanent: true },
      { source: "/google-sge", destination: "/ratgeber", permanent: true },
      { source: "/featured-snippets", destination: "/ratgeber", permanent: true },
      { source: "/make-com", destination: "/ratgeber/make-com", permanent: true },

      // === WordPress Artifacts (redirect to homepage) ===
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-page-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },

      // === Category/Tag Pages (WordPress) ===
      { source: "/category/:slug*", destination: "/ratgeber", permanent: true },
      { source: "/tag/:slug*", destination: "/ratgeber", permanent: true },
      { source: "/author/:slug*", destination: "/ueber-deinranking", permanent: true },
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
