import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) return {};
    const description = post.subtitle || post.title;
    const desc = description.length > 155 ? description.slice(0, 152) + "..." : description;
    return {
        title: `${post.title} | DeinRanking`,
        description: desc,
        authors: [{ name: post.author }],
        alternates: { canonical: `https://dein-ranking.at/ratgeber/${slug}` },
        openGraph: {
            title: post.title,
            description: desc,
            url: `https://dein-ranking.at/ratgeber/${slug}`,
            siteName: "DeinRanking",
            locale: "de_AT",
            type: "article",
            authors: [post.author],
            images: post.image ? [{ url: `https://dein-ranking.at${post.image}` }] : [],
        },
    };
}

export async function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({
        slug,
    }));
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    return (
        <BlogPostLayout post={post}>
            {post.content}
        </BlogPostLayout>
    );
}
