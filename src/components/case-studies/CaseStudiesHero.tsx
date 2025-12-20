"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Search, X, TrendingUp, Clock, BrainCircuit, Euro } from "lucide-react";
import { useState, useEffect } from "react";

// Sub-component for a single background workflow
const BackgroundWorkflow = ({
    className,
    delay = 0,
    scale = 1,
    opacity = 0.2
}: {
    className?: string;
    delay?: number;
    scale?: number;
    opacity?: number;
}) => {
    return (
        <div className={`absolute pointer-events-none select-none ${className}`} style={{ opacity, transform: `scale(${scale})` }}>
            <svg width="400" height="200" viewBox="0 0 400 200" className="overflow-visible">
                {/* Defs for gradients */}
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
                        <stop offset="50%" stopColor="rgba(34, 197, 94, 0.4)" />
                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)" />
                    </linearGradient>
                </defs>

                {/* Nodes with pulse */}
                <g>
                    <circle cx="50" cy="100" r="8" className="fill-brand-green/20 stroke-brand-green/40" strokeWidth="2">
                        <animate attributeName="r" values="8;9;8" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
                        <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
                    </circle>
                    <rect x="180" y="85" width="20" height="20" rx="4" className="fill-blue-500/20 stroke-blue-500/40" strokeWidth="2">
                        <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" begin={`${delay + 1}s`} />
                    </rect>
                    <rect x="340" y="50" width="20" height="20" rx="4" className="fill-orange-500/20 stroke-orange-500/40" strokeWidth="2">
                        <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" begin={`${delay + 2}s`} />
                    </rect>
                    <rect x="340" y="150" width="20" height="20" rx="4" className="fill-purple-500/20 stroke-purple-500/40" strokeWidth="2">
                        <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" begin={`${delay + 2.5}s`} />
                    </rect>
                </g>

                {/* Connections (Bezier Curves) */}
                <path d="M 58 100 C 100 100, 140 95, 180 95" fill="none" stroke="url(#line-gradient)" strokeWidth="1" />
                <path d="M 200 95 C 250 95, 290 60, 340 60" fill="none" stroke="url(#line-gradient)" strokeWidth="1" />
                <path d="M 200 95 C 250 95, 290 160, 340 160" fill="none" stroke="url(#line-gradient)" strokeWidth="1" />

                {/* Animated Packets using native SVG animateMotion */}
                {/* Packet 1: Start -> Middle */}
                <circle r="3" fill="#22c55e" opacity="0.8">
                    <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M 58 100 C 100 100, 140 95, 180 95"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                        begin={`${delay}s`}
                    />
                    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
                </circle>

                {/* Packet 2: Middle -> Top */}
                <circle r="3" fill="#3b82f6" opacity="0.8">
                    <animateMotion
                        dur="2.5s"
                        begin={`${delay + 1.5}s`}
                        repeatCount="indefinite"
                        path="M 200 95 C 250 95, 290 60, 340 60"
                        calcMode="linear"
                    />
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin={`${delay + 1.5}s`} repeatCount="indefinite" />
                </circle>

                {/* Packet 3: Middle -> Bottom */}
                <circle r="3" fill="#f97316" opacity="0.8">
                    <animateMotion
                        dur="2.5s"
                        begin={`${delay + 1.7}s`}
                        repeatCount="indefinite"
                        path="M 200 95 C 250 95, 290 160, 340 160"
                        calcMode="linear"
                    />
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin={`${delay + 1.7}s`} repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    );
};

export function CaseStudiesHero({
    searchQuery,
    setSearchQuery
}: {
    searchQuery: string;
    setSearchQuery: (q: string) => void;
}) {
    const { caseStudies } = siteConfig.content;

    // Animation variants for the graph lines
    const drawLine = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.5 },
                opacity: { duration: 0.5, delay: i * 0.5 }
            }
        }) as any
    };

    const drawPoint = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: { type: "spring", duration: 0.5, delay: 1.5 + (i * 0.5) }
        }) as any
    };

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-deep-navy">
            {/* Background Integration - Seamless Grid */}
            <div className="absolute inset-0 z-0">
                {/* Main Grid pattern with fade out at bottom for seamless transition */}
                <div
                    className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30"
                    style={{
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
                    }}
                />

                {/* Glow Effects */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />

                {/* Workflow Animations - Placed strategically in open spaces */}
                {/* 1. Top Left - High up, distinct */}
                <BackgroundWorkflow
                    className="top-[10%] left-[5%] rotate-[-5deg]"
                    opacity={0.15}
                    delay={0}
                />

                {/* 2. Bottom Right - Below the graph area */}
                <BackgroundWorkflow
                    className="bottom-[15%] right-[5%] rotate-[5deg]"
                    opacity={0.1}
                    scale={0.8}
                    delay={2}
                />

                {/* 3. Center Left/Bottom - Below text area */}
                <BackgroundWorkflow
                    className="bottom-[20%] left-[10%] rotate-3"
                    opacity={0.08}
                    scale={0.7}
                    delay={4}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text & Search */}
                    <div className="text-left relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-6"
                        >
                            <TrendingUp size={14} />
                            <span>Nachweisbare Ergebnisse</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            {caseStudies.title}
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Entdecke eine Auswahl unserer erfolgreichsten Kundenprojekte der letzten Jahre. Von der intelligenten Prozess-Automatisierung bis hin zu maßgeschneiderten KI-Lösungen – hier siehst du, was möglich ist.
                        </motion.p>

                        {/* Logo Slider / Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">Technologien & Partner</p>
                            <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Simple Text/Icon Placeholders for functionality, can be replaced with real SVGs */}
                                <div className="text-xl font-bold text-white flex items-center gap-2"><BrainCircuit size={20} /> OpenAI</div>
                                <div className="text-xl font-bold text-white flex items-center gap-2">Make</div>
                                <div className="text-xl font-bold text-white flex items-center gap-2">Next.js</div>
                                <div className="text-xl font-bold text-white flex items-center gap-2">Supabase</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Success Graph Animation */}
                    <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
                        {/* Glass Panel Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm transform rotate-y-[-5deg] shadow-2xl">

                            {/* Graph Container */}
                            <div className="absolute inset-8 flex items-end justify-between px-4 pb-8">

                                {/* Background Grid Lines for Graph */}
                                <div className="absolute inset-0 border-b border-l border-white/10 m-8 z-0">
                                    <div className="h-full w-full grid grid-rows-4">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="border-t border-white/5 w-full" />
                                        ))}
                                    </div>
                                </div>

                                <svg className="absolute inset-8 overflow-visible z-10" preserveAspectRatio="none">
                                    {/* Line 1: Efficiency/Time (Green) - Exponential Growth */}
                                    <motion.path
                                        d="M 0 400 C 100 380, 200 300, 450 50"
                                        fill="none"
                                        stroke="#22c55e"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        variants={drawLine}
                                        custom={0}
                                        initial="hidden"
                                        animate="visible"
                                        style={{ filter: "drop-shadow(0 0 8px rgba(34,197,94,0.5))" }}
                                    />

                                    {/* Line 2: Cost/Profit (Blue) - Steady Growth */}
                                    <motion.path
                                        d="M 0 350 C 100 340, 300 200, 450 120"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeDasharray="8 8"
                                        variants={drawLine}
                                        custom={1}
                                        initial="hidden"
                                        animate="visible"
                                    />

                                    {/* Line 3: Manual Effort (Red/Orange -> Down) */}
                                    <motion.path
                                        d="M 0 50 C 150 50, 250 350, 450 380"
                                        fill="none"
                                        stroke="#f97316"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        variants={drawLine}
                                        custom={2}
                                        initial="hidden"
                                        animate="visible"
                                        style={{ opacity: 0.7 }}
                                    />
                                </svg>

                                {/* Floating Metric Cards */}

                                {/* Card 1: Time Savings */}
                                <motion.div
                                    className="absolute top-[10%] right-[0%] bg-deep-navy/90 border border-brand-green/30 p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(34,197,94,0.3)] backdrop-blur-md"
                                    variants={drawPoint}
                                    custom={0}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-brand-green/20 rounded-lg text-brand-green">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-brand-green uppercase font-bold tracking-wider">Zeit</div>
                                            <div className="text-xl font-bold text-white">+ 25h<span className="text-xs font-normal text-gray-400">/Woche</span></div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 2: ROI */}
                                <motion.div
                                    className="absolute top-[30%] right-[20%] bg-deep-navy/90 border border-blue-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md"
                                    variants={drawPoint}
                                    custom={1}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-500">
                                            <Euro size={18} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-blue-400 uppercase font-bold">Kosten</div>
                                            <div className="text-lg font-bold text-white">- 30%</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 3: Mental Load */}
                                <motion.div
                                    className="absolute bottom-[10%] right-[5%] bg-deep-navy/90 border border-orange-500/30 p-3 rounded-xl shadow-lg backdrop-blur-md"
                                    variants={drawPoint}
                                    custom={2}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
                                            <BrainCircuit size={18} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-orange-400 uppercase font-bold">Mental Load</div>
                                            <div className="text-lg font-bold text-white">Minimum</div>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>

                            {/* Decorative Code Snippets fading in background of graph */}
                            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                                <div className="font-mono text-[10px] text-brand-green p-8 leading-relaxed">
                                    {`while(optimization) {
  efficiency++;
  costs--;
  manualWork.reduce();
  deployAI(model: "GPT-4");
}`}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
