"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Bot, Server, GraduationCap, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
    Phone,
    Bot,
    Server,
    GraduationCap,
};

export function KiAgenturGrazLeistungen() {
    const { leistungen } = siteConfig.content.kiAgenturGraz;

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep-navy to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-navy to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Was wir machen</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                        KI-Lösungen für Graz
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Von Voice AI bis zu vollständigen Automatisierungsprojekten — alles aus einer Hand und persönlich betreut.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {leistungen.map((item, index) => {
                        const Icon = iconMap[item.icon] ?? Bot;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="group block h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-green/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,176,65,0.1)]"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 border border-brand-green/20 rounded-xl flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                                            <Icon className="w-6 h-6 text-brand-green" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                                                {item.title}
                                                <ArrowRight className="w-4 h-4 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform" />
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
