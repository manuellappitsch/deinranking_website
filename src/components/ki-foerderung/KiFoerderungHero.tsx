"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Euro, TrendingUp, Award, Percent } from "lucide-react";

const statIcons = [Euro, Award, TrendingUp, Percent];

export function KiFoerderungHero() {
    const { hero, stats } = siteConfig.content.kiFoerderung;

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-navy">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-brand-green/20 rounded-full blur-[100px] hidden md:block"
                    animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[100px] hidden md:block"
                    animate={{ x: [0, -50, 0], y: [0, -80, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-50" style={{ backgroundSize: "40px 40px" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/60 to-deep-navy" />
            </div>

            <div className="container mx-auto px-4 relative z-10 py-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-green/20 backdrop-blur-sm shadow-[0_0_15px_rgba(118,176,65,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-sm font-medium text-brand-green">{hero.badge}</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center max-w-4xl mx-auto mb-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                        {hero.title}
                    </h1>
                    <p className="text-2xl text-brand-green font-medium">{hero.subtitle}</p>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {hero.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
                >
                    <Button size="lg" variant="primary" className="shadow-[0_0_20px_rgba(118,176,65,0.3)] hover:shadow-[0_0_30px_rgba(118,176,65,0.5)] transition-shadow duration-300" asChild>
                        <Link href={hero.ctaPrimaryHref}>{hero.ctaPrimary}</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10" asChild>
                        <Link href={hero.ctaSecondaryHref}>{hero.ctaSecondary}</Link>
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                    {stats.map((stat, index) => {
                        const Icon = statIcons[index];
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-brand-green/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mx-auto mb-3">
                                    <Icon className="w-5 h-5 text-brand-green" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
