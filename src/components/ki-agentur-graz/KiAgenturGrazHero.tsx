"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, TrendingUp, Clock, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = { MapPin, TrendingUp, Clock, Users };

export function KiAgenturGrazHero() {
    const { hero, stats } = siteConfig.content.kiAgenturGraz;

    return (
        <section className="relative min-h-[85vh] flex items-center py-24 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" style={{ backgroundSize: "50px 50px" }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 rounded-full px-4 py-2 mb-6"
                    >
                        <MapPin className="w-4 h-4 text-brand-green" />
                        <span className="text-brand-green text-sm font-medium">{hero.badge}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                    >
                        {hero.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-brand-green text-xl font-semibold mb-4"
                    >
                        {hero.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        {hero.description}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Link
                            href={hero.ctaPrimaryHref}
                            className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green/90 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(118,176,65,0.4)]"
                        >
                            {hero.ctaPrimary}
                        </Link>
                        <Link
                            href={hero.ctaSecondaryHref}
                            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
                        >
                            {hero.ctaSecondary}
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-brand-green/20 transition-colors"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-brand-green mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
