"use client";

import { motion } from "framer-motion";
import { Search, X, BookOpen, BrainCircuit, Zap, FileText, Send, ScrollText } from "lucide-react";
import { siteConfig } from "@/config/site";
import { NetworkBackground } from "@/components/ui/network-background";
import { cn } from "@/lib/utils";

// Scattered Automations Component (Placed around text)
const ScatteredAutomations = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Top Left - Trigger Flow */}
            <motion.div
                className="absolute top-[10%] left-[5%] md:left-[10%] opacity-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-lg bg-gray-900 border border-brand-green/30">
                        <Zap className="text-brand-green w-5 h-5" />
                    </div>
                    <div className="h-0.5 w-8 bg-brand-green/20" />
                    <div className="p-3 rounded-lg bg-gray-900 border border-brand-green/30">
                        <FileText className="text-brand-green w-5 h-5" />
                    </div>
                </div>
            </motion.div>

            {/* Top Right - AI Processing */}
            <motion.div
                className="absolute top-[15%] right-[5%] md:right-[10%] opacity-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="p-4 rounded-xl bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_-5px_rgba(168,85,247,0.3)]">
                    <BrainCircuit className="text-purple-500 w-8 h-8" />
                </div>
            </motion.div>

            {/* Bottom Left - Sending Action */}
            <motion.div
                className="absolute bottom-[20%] left-[8%] md:left-[15%] opacity-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gray-900 border border-blue-500/30">
                        <Send className="text-blue-500 w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-mono text-blue-500/50">SENDING...</div>
                </div>
            </motion.div>

            {/* Bottom Right - Data/Knowledge */}
            <motion.div
                className="absolute bottom-[25%] right-[8%] md:right-[15%] opacity-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="p-3 rounded-lg bg-gray-900 border border-orange-500/30 flex gap-2 items-center">
                    <ScrollText className="text-orange-500 w-6 h-6" />
                    <div className="w-2 h-2 rounded-full bg-orange-500/50 animate-pulse" />
                </div>
            </motion.div>
        </div>
    )
}

interface RatgeberHeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export function RatgeberHero({ searchQuery, setSearchQuery }: RatgeberHeroProps) {
    const { blog } = siteConfig.content;

    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-deep-navy">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* 1. Base Network */}
                <div className="opacity-30">
                    <NetworkBackground />
                </div>

                {/* 2. Grid Pattern with fade */}
                <div
                    className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"
                    style={{
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
                    }}
                />

                {/* 3. Scattered Automations (Around text) */}
                <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
                    <ScatteredAutomations />
                </div>

                {/* 4. Glow Orbs */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px]" />
                <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            {/* Foreground Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-8"
                    >
                        <BookOpen size={16} />
                        <span>Wissen für die Praxis</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        {blog.title}
                    </motion.h1>

                    {/* Subline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        {blog.subtitle}
                    </motion.p>

                    {/* Search Bar (Centered & Prominent) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/30 to-blue-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-deep-navy/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center px-6 py-4 focus-within:border-brand-green/50 focus-within:bg-deep-navy transition-all shadow-2xl">
                            <Search className="text-gray-400 mr-4 shrink-0" size={24} />
                            <input
                                type="text"
                                placeholder="Thema suchen (z.B. 'Prozessautomatisierung', 'KI-Tools')..."
                                className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 text-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="text-gray-400 hover:text-white transition-colors p-1"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Gradient Fade for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent pointer-events-none z-0" />
        </section>
    );
}
