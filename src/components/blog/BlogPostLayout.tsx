"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TableOfContents } from "./TableOfContents";
import { AuthorBox } from "./AuthorBox";
import { NetworkBackground } from "@/components/ui/network-background";
import { Calendar, Tag } from "lucide-react";

interface BlogPostLayoutProps {
    post: {
        title: string;
        subtitle?: string;
        date: string;
        category: string;
        author: string;
        image: string;
        toc: { title: string; id: string; level: number }[];
    };
    children: ReactNode;
}

function parseGermanDate(dateStr: string): string {
  const months: Record<string, string> = {
    "Januar": "01", "Februar": "02", "März": "03", "April": "04",
    "Mai": "05", "Juni": "06", "Juli": "07", "August": "08",
    "September": "09", "Oktober": "10", "November": "11", "Dezember": "12",
    "Jän": "01", "Feb": "02", "Mär": "03", "Apr": "04",
    "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09",
    "Okt": "10", "Nov": "11", "Dez": "12",
  };
  const parts = dateStr.replace(".", "").split(" ").filter(Boolean);
  if (parts.length >= 3) {
    const day = parts[0].padStart(2, "0");
    const month = months[parts[1]] ?? "01";
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return new Date().toISOString().split("T")[0];
}

export function BlogPostLayout({ post, children }: BlogPostLayoutProps) {
    const pathname = usePathname();
    const canonicalUrl = `https://dein-ranking.at${pathname}`;
    const isoDate = parseGermanDate(post.date);
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.subtitle ?? post.title,
        datePublished: isoDate,
        dateModified: isoDate,
        author: {
            "@type": "Person",
            name: post.author,
            url: "https://dein-ranking.at/ueber-deinranking",
        },
        publisher: {
            "@type": "Organization",
            name: "DeinRanking GmbH",
            url: "https://dein-ranking.at",
            logo: {
                "@type": "ImageObject",
                url: "https://dein-ranking.at/images/logo.png",
            },
        },
        image: post.image.startsWith("http") ? post.image : `https://dein-ranking.at${post.image}`,
        url: canonicalUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    };

    return (
        <div className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {/* Hero Section (Half Screen) */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <NetworkBackground />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/50 via-deep-navy/80 to-deep-navy" />
                    {/* Background Image with Overlay */}
                    {post.image && (
                        <div className="absolute inset-0 opacity-20">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 text-sm font-medium flex items-center gap-2">
                            <Tag size={14} />
                            {post.category}
                        </span>
                        <span className="text-gray-400 text-sm flex items-center gap-2">
                            <Calendar size={14} />
                            {post.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {post.subtitle && (
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            {post.subtitle}
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
                            <TableOfContents items={post.toc} />
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

                    {/* Right Sidebar: Author (Hidden on mobile, maybe move to bottom?) */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32">
                            <AuthorBox author={post.author} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
