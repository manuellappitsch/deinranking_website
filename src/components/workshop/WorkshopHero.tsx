"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Map, Target, Cpu, FileJson, Workflow } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-bg";
import { BinaryRain } from "@/components/ui/binary-rain";

export function WorkshopHero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-navy">
            {/* 1. Dramatic Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Deep Gradient */}
                <div className="absolute inset-0 bg-deep-navy" />
                {/* Animated Grid - More perceptible */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 bg-[size:60px_60px]"
                    style={{ maskImage: "linear-gradient(to bottom, transparent, white, transparent)" }} />

                {/* Binary Rain Effect */}
                <BinaryRain />

                {/* 2. Spotlight Beams */}
                <Spotlight className="-top-40 left-0 md:left-[20%] md:-top-20 opacity-40" fill="#76B041" />
                <Spotlight className="top-40 right-0 md:right-[20%] md:-top-20 opacity-40" fill="#8A2BE2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-left"
                    >
                        {/* 3. Glowing Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(118,176,65,0.2)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                            </span>
                            <span className="text-xs font-bold text-brand-green uppercase tracking-widest">KI & Automatisierungs-Workshop</span>
                        </div>

                        {/* 4. Hero Typography - Massive & Tight */}
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
                            VOM CHAOS ZUR <br />
                            <span className="text-brand-green">
                                KLARHEIT.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
                            Schluss mit planlosem Tool-Hopping. Wir entwickeln an einem Tag deine <b className="text-white">komplette KI-Strategie</b>. Maßgeschneidert, sicher und sofort umsetzbar.
                        </p>

                        {/* 5. High-End CTA Area */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                            <Link href="/kontakt">
                                <Button className="h-14 px-8 text-lg bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-full shadow-[0_0_30px_rgba(118,176,65,0.3)] hover:shadow-[0_0_50px_rgba(118,176,65,0.5)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                                    <span className="relative z-10 flex items-center">
                                        Workshop anfragen <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </Link>
                            <Link href="#ablauf">
                                <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-white/10 text-white hover:bg-white/5 hover:border-brand-green/50 transition-all backdrop-blur-sm">
                                    Ablauf ansehen
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: 3D Floating Elements (The "Blueprint" Vibe) */}
                    <div className="relative w-full h-[500px] hidden lg:block">
                        {/* Center "Brain" or "Core" */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/5 border border-brand-green/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        >
                            <div className="w-48 h-48 rounded-full border border-brand-green/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                                <div className="w-4 h-4 bg-brand-green rounded-full shadow-[0_0_20px_#76B041]" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-brand-green font-mono text-xs tracking-[0.5em] opacity-50">STRATEGY_CORE</span>
                            </div>
                        </motion.div>

                        {/* Floating Cards - Re-positioned for the right column */}
                        {[
                            { icon: FileJson, label: "Roadmap.pdf", x: -180, y: -80, delay: 0 },
                            { icon: Workflow, label: "Workflows", x: 180, y: 60, delay: 1 },
                            { icon: Target, label: "ROI Calc", x: -140, y: 120, delay: 2 },
                            { icon: Cpu, label: "Tech Stack", x: 160, y: -100, delay: 1.5 }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                animate={{ opacity: 1, x: item.x, y: item.y }}
                                transition={{ delay: 0.5 + item.delay * 0.2, duration: 1 }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 p-3 rounded-xl bg-deep-navy/80 border border-white/10 shadow-2xl backdrop-blur-md hover:border-brand-green/50 transition-colors cursor-default"
                            >
                                <item.icon className="text-brand-green" size={18} />
                                <span className="text-gray-300 font-mono text-xs">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-deep-navy to-transparent z-20" />
        </section>
    );
}
