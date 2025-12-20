"use client";

import { siteConfig } from "@/config/site";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
    // Check if testimonials exist in config, fallback to empty array if not
    const testimonials = (siteConfig.content as any).testimonials || { title: "", items: [] };

    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {testimonials.title}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Vertrauen ist gut, Ergebnisse sind besser. Das sagen unsere Partner.
                    </p>
                </div>
            </div>

            <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials.items}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={testimonials.items}
                    direction="left"
                    speed="slow"
                    className="mt-8"
                />
            </div>
        </section>
    );
}
