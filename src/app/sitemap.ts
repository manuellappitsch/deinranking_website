import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { caseStudies } from "@/lib/case-studies-data";

const BASE_URL = "https://dein-ranking.at";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date("2026-04-06"), changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE_URL}/ki-telefonassistent`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/ki-automatisierung`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/lokale-ki-systeme`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/ki-agentur-graz`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE_URL}/ki-foerderung-oesterreich`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/ki-workshop`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/leistungen`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/ratgeber`, lastModified: new Date("2026-04-06"), changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/casestudies`, lastModified: new Date("2026-04-06"), changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/ueber-deinranking`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/kontakt`, lastModified: new Date("2026-04-06"), changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/impressum`, lastModified: new Date("2026-04-06"), changeFrequency: "yearly", priority: 0.3 },
        { url: `${BASE_URL}/datenschutz`, lastModified: new Date("2026-04-06"), changeFrequency: "yearly", priority: 0.3 },
        { url: `${BASE_URL}/agbs`, lastModified: new Date("2026-04-06"), changeFrequency: "yearly", priority: 0.3 },
    ];

    const blogRoutes: MetadataRoute.Sitemap = Object.entries(blogPosts).map(([slug, post]) => ({
        url: `${BASE_URL}/ratgeber/${slug}`,
        lastModified: new Date("2026-04-06"),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const caseStudyRoutes: MetadataRoute.Sitemap = Object.entries(caseStudies).map(([slug, study]) => ({
        url: `${BASE_URL}/casestudies/${slug}`,
        lastModified: new Date("2026-04-06"),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
