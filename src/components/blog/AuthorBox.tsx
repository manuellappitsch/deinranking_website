import Image from "next/image";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

interface AuthorBoxProps {
    author: string;
    role?: string;
    image?: string;
}

export function AuthorBox({ author, role = "SEO & Automation Expert", image }: AuthorBoxProps) {
    // Fallback to site config image if none provided, or a placeholder
    const authorImage = image || siteConfig.content.about.image || "/images/placeholder-author.jpg";

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Autor</h3>
            <Card className="p-6 bg-white/5 border-white/10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10">
                        {/* Using a generic placeholder if the specific image is missing to avoid broken images */}
                        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-xs text-gray-400">
                            {author.charAt(0)}
                        </div>
                        {/* Uncomment when real images are available
                        <Image
                            src={authorImage}
                            alt={author}
                            fill
                            className="object-cover"
                        />
                        */}
                    </div>
                    <div>
                        <div className="font-bold text-white">{author}</div>
                        <div className="text-xs text-brand-green">{role}</div>
                    </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Manuel Lappitsch ist Experte für SEO und Prozessautomatisierung. Er hilft Unternehmen dabei, durch intelligente Workflows Zeit zu sparen und online sichtbar zu werden.
                </p>
            </Card>
        </div>
    );
}
