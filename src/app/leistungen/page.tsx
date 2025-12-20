"use client";

import { siteConfig } from "@/config/site";
import { Spotlight } from "@/components/ui/spotlight";
import { NetworkBackground } from "@/components/ui/network-background";
import { Server, MessageSquareCode, Bot, Workflow, Code2, Phone, MessageCircle, Building2, LucideIcon, Zap } from "lucide-react";
import { Consultation } from "@/components/sections/Consultation";
import { motion } from "framer-motion";

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

export default function ServicesPage() {
    const { services } = siteConfig.content;

    return (
        <main className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <NetworkBackground />
                    {/* Gradients */}
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        {services.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        {services.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.items.map((item, index) => {
                            const Icon = iconMap[item.icon] || Zap;
                            return (
                                <Spotlight key={index} className="flex flex-col items-start p-8 hover:border-brand-green/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 h-full bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="h-14 w-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-green group-hover:text-deep-navy">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.description}
                                    </p>
                                </Spotlight>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Consultation />
        </main>
    );
}
