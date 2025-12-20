"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AutomationWorkflow } from "@/components/ui/automation-workflow";

export function Hero() {
    const { hero } = siteConfig.content;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">

                {/* Green Blob - Darker & Subtler */}
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-brand-green/20 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Blue Blob - Darker & Subtler */}
                <motion.div
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Grid Pattern Overlay - Increased Opacity */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-50" style={{ backgroundSize: '40px 40px' }} />

                {/* Radial Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/60 to-deep-navy" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-brand-green text-sm font-medium mb-6 border border-brand-green/20 shadow-[0_0_15px_rgba(118,176,65,0.2)]">
                                {hero.badge}
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Automatisierung & <br className="hidden lg:block" />
                            <span className="text-white">
                                KI-Lösungen für dein Business
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {hero.description}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Button size="lg" variant="primary" className="shadow-[0_0_20px_rgba(118,176,65,0.3)] hover:shadow-[0_0_30px_rgba(118,176,65,0.5)] transition-shadow duration-300">
                                {hero.ctaPrimary}
                            </Button>
                            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10">
                                {hero.ctaSecondary}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Column: Animation */}
                    <div className="relative h-[400px] md:h-[500px] w-full hidden lg:block">
                        <AutomationWorkflow />
                    </div>
                </div>
            </div>
        </section>
    );
}
