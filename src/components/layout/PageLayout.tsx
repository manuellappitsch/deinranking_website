import { ReactNode } from "react";

interface PageLayoutProps {
    title: string;
    children: ReactNode;
    showTitle?: boolean;
}

export function PageLayout({ title, children, showTitle = true }: PageLayoutProps) {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4">
                {showTitle && <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">{title}</h1>}
                <div className="prose prose-invert max-w-none">
                    {children}
                </div>
            </div>
        </div>
    );
}
