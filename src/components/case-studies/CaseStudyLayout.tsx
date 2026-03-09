"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NetworkBackground } from "@/components/ui/network-background";
import { Calendar, Tag, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CaseStudyLayoutProps {
    study: {
        title: string;
        subtitle?: string;
        date: string;
        category: string;
        client: string;
        image: string;
        toc: { title: string; id: string; level: number }[];
    };
    children: ReactNode;
}

export function CaseStudyLayout({ study, children }: CaseStudyLayoutProps) {
    const pathname = usePathname();
    const canonicalUrl = `https://dein-ranking.at${pathname}`;
    const caseStudySchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@subtype": "CaseStudy",
        headline: study.title,
        description: study.subtitle ?? study.title,
        author: {
            "@type": "Organization",
            name: "DeinRanking",
            url: "https://dein-ranking.at",
        },
        publisher: {
            "@type": "Organization",
            name: "DeinRanking",
            url: "https://dein-ranking.at",
        },
        image: study.image.startsWith("http") ? study.image : `https://dein-ranking.at${study.image}`,
        url: canonicalUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    };

    return (
        <div className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
            />
            {/* Hero Section (Half Screen) */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <NetworkBackground />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/50 via-deep-navy/80 to-deep-navy" />
                    {/* Background Image with Overlay */}
                    {study.image && (
                        <div className="absolute inset-0 opacity-20">
                            <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 text-sm font-medium flex items-center gap-2">
                            <Tag size={14} />
                            {study.category}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center gap-2">
                            <Calendar size={14} />
                            {study.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {study.title}
                    </h1>

                    {study.subtitle && (
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            {study.subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Sidebar: TOC (Hidden on mobile) */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32">
                            <TableOfContents items={study.toc} />
                        </div>
                    </aside>

                    {/* Center: Content */}
                    <article className="lg:col-span-6 max-w-[750px] mx-auto w-full">
                        <div className="prose prose-invert prose-lg max-w-none 
                            prose-headings:text-white prose-headings:font-bold 
                            prose-p:text-gray-300 prose-p:leading-relaxed
                            prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-white
                            prose-ul:text-gray-300 prose-li:marker:text-brand-green
                            prose-img:rounded-xl prose-img:border prose-img:border-white/10
                            prose-blockquote:border-l-brand-green prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
                        ">
                            {children}
                        </div>
                    </article>

                    {/* Right Sidebar: Client Info */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-4">
                            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Kunde</h3>
                            <Card className="p-6 bg-white/5 border-white/10">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
                                        <Building2 size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{study.client}</div>
                                        <div className="text-xs text-brand-green">Referenzprojekt</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
