"use client";

import { siteConfig } from "@/config/site";
import { Spotlight } from "@/components/ui/spotlight";
import { NetworkBackground } from "@/components/ui/network-background";
import { Server, MessageSquareCode, Bot, Workflow, Code2, Phone, MessageCircle, Building2, LucideIcon, Zap } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Server: Server,
    MessageSquareCode: MessageSquareCode,
    Bot: Bot,
    Workflow: Workflow,
    Code2: Code2,
    Phone: Phone,
    MessageCircle: MessageCircle,
    Building2: Building2,
};

export function Services() {
    const { services } = siteConfig.content;

    return (
        <section className="py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" style={{ backgroundSize: '40px 40px' }} />

                {/* Gradient Blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

                {/* Network Animation */}
                <NetworkBackground />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {services.title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Zap;

                        return (
                            <Spotlight key={index} className="flex flex-col items-start p-6 hover:border-brand-green/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 h-full">
                                <div className="h-12 w-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-green group-hover:text-deep-navy">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                </p>
                            </Spotlight>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
