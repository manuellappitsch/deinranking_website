"use client";

import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { Zap, Brain, BarChart, LucideIcon, MapPin, FileText, Link, Search } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Zap: Zap,
    Brain: Brain,
    BarChart: BarChart,
    MapPin: MapPin,
    FileText: FileText,
    Link: Link,
    Search: Search,
};

export function Features() {
    const { features } = siteConfig.content;

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {features.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Zap;

                        return (
                            <Card key={index} className="flex flex-col items-start p-8 bg-white/5 border-white/10 hover:border-brand-green/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                                <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-green group-hover:text-deep-navy">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
