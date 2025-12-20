import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";

interface PageProps {
    params: Promise<{ slug: string }>;
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
