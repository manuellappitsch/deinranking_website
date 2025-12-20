import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies-data";
import { CaseStudyLayout } from "@/components/case-studies/CaseStudyLayout";
import { Consultation } from "@/components/sections/Consultation";

interface PageProps {
    params: Promise<{ slug: string }>;
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
