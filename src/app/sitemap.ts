import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { caseStudies } from "@/lib/case-studies-data";

const BASE_URL = "https://dein-ranking.at";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE_URL}/ki-telefonassistent`, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/ki-automatisierung`, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/lokale-ki-systeme`, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/ki-agentur-graz`, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/ki-foerderung-oesterreich`, changeFrequency: "monthly", priority: 0.8 },
{ url: `${BASE_URL}/ki-workshop`, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/ratgeber`, changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/casestudies`, changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/ueber-deinranking`, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/kontakt`, changeFrequency: "monthly", priority: 0.6 },
    ];

    const blogRoutes: MetadataRoute.Sitemap = Object.keys(blogPosts).map((slug) => ({
        url: `${BASE_URL}/ratgeber/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const caseStudyRoutes: MetadataRoute.Sitemap = Object.keys(caseStudies).map((slug) => ({
        url: `${BASE_URL}/casestudies/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
