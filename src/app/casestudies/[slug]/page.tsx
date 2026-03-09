import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies-data";
import { CaseStudyLayout } from "@/components/case-studies/CaseStudyLayout";
import { Consultation } from "@/components/sections/Consultation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies[slug];
    if (!study) return {};
    const description = study.subtitle || study.title;
    const desc = description.length > 155 ? description.slice(0, 152) + "..." : description;
    return {
        title: `${study.title} | DeinRanking Case Study`,
        description: desc,
        alternates: { canonical: `https://dein-ranking.at/casestudies/${slug}` },
        openGraph: {
            title: study.title,
            description: desc,
            url: `https://dein-ranking.at/casestudies/${slug}`,
            siteName: "DeinRanking",
            locale: "de_AT",
            type: "article",
            images: study.image ? [{ url: study.image.startsWith("http") ? study.image : `https://dein-ranking.at${study.image}` }] : [],
        },
    };
}

export async function generateStaticParams() {
    return Object.keys(caseStudies).map((slug) => ({
        slug,
    }));
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies[slug];

    if (!study) {
        notFound();
    }

    return (
        <main>
            <CaseStudyLayout study={study}>
                {study.content}
            </CaseStudyLayout>
            <Consultation />
        </main>
    );
}
