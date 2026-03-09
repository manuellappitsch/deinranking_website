"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Building2, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
    MapPin,
    Star,
    Building2,
    Zap,
};

export function KiAgenturGrazVorteile() {
    const { vorteile } = siteConfig.content.kiAgenturGraz;

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" style={{ backgroundSize: "50px 50px" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Warum lokal</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                        Grazer Agentur statt Remote-Anbieter
                    </h2>
                    <p className="text-gray-400 text-lg">
                        KI-Projekte funktionieren besser, wenn jemand dein Unternehmen wirklich kennt.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {vorteile.map((item, index) => {
                        const Icon = iconMap[item.icon] ?? MapPin;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-green/20 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-11 h-11 bg-brand-green/10 border border-brand-green/20 rounded-xl flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-brand-green" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Address card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 max-w-4xl mx-auto"
                >
                    <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-brand-green flex-shrink-0" />
                            <div>
                                <p className="text-white font-semibold">DeinRanking GmbH</p>
                                <p className="text-gray-400 text-sm">Gradnerstraße 120, 8054 Graz, Österreich</p>
                            </div>
                        </div>
                        <a
                            href="https://maps.google.com/?q=Gradnerstraße+120+8054+Graz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-green text-sm font-medium hover:text-white transition-colors whitespace-nowrap"
                        >
                            In Maps öffnen →
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
