"use client";

import { motion } from "framer-motion";
import { NetworkBackground } from "@/components/ui/network-background";
import { siteConfig } from "@/config/site";
import { BrainCircuit, Code2, Zap } from "lucide-react";

// Reuse the robust SVG workflow animation from CaseStudies
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
                <defs>
                    <linearGradient id="line-gradient-about" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
                        <stop offset="50%" stopColor="rgba(34, 197, 94, 0.4)" />
                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)" />
                    </linearGradient>
                </defs>

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
                </g>

                <path d="M 58 100 C 100 100, 140 95, 180 95" fill="none" stroke="url(#line-gradient-about)" strokeWidth="1" />
                <path d="M 200 95 C 250 95, 290 60, 340 60" fill="none" stroke="url(#line-gradient-about)" strokeWidth="1" />

                <circle r="3" fill="#22c55e" opacity="0.8">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 58 100 C 100 100, 140 95, 180 95" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin={`${delay}s`} />
                    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
                </circle>

                <circle r="3" fill="#3b82f6" opacity="0.8">
                    <animateMotion dur="2.5s" begin={`${delay + 1.5}s`} repeatCount="indefinite" path="M 200 95 C 250 95, 290 60, 340 60" calcMode="linear" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin={`${delay + 1.5}s`} repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    );
};

// Floating Code Snippets Component
const FloatingCode = ({ delay, x, y, code }: { delay: number; x: string; y: string; code: string }) => (
    <motion.div
        className="absolute font-mono text-[10px] md:text-xs text-brand-green/20 pointer-events-none whitespace-pre"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0.4, 0], y: -50 }}
        transition={{ duration: 8, repeat: Infinity, delay, ease: "linear" }}
        style={{ left: x, top: y }}
    >
        {code}
    </motion.div>
);

export function AboutHero() {
    const { about } = siteConfig.content;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Layer 1: Neural Network (Canvas) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <NetworkBackground />
            </div>

            {/* Layer 2: Grid & Gradients */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"
                    style={{
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
                    }}
                />

                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            {/* Layer 3: "Coding the Code" Animation */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <FloatingCode delay={0} x="10%" y="40%" code={`const optimize = async () => {\n  await ai.analyze(data);\n}`} />
                <FloatingCode delay={2} x="80%" y="60%" code={`if (efficiency < 100) {\n  scaleUp();\n}`} />
                <FloatingCode delay={4} x="20%" y="80%" code={`import { future } from\n'@deinranking/ai';`} />
                <FloatingCode delay={1} x="70%" y="20%" code={`// Automating success...`} />
            </div>

            {/* Layer 4: Workflows */}
            <BackgroundWorkflow className="top-[15%] left-[5%] rotate-[-5deg]" opacity={0.3} delay={0} />
            <BackgroundWorkflow className="bottom-[20%] right-[5%] rotate-[5deg]" opacity={0.3} scale={0.8} delay={2} />

            {/* Foreground Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-brand-green mb-8 shadow-2xl"
                >
                    <BrainCircuit size={16} />
                    <span>Unser Versprechen</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none"
                >
                    Zeit gewinnen. Kosten senken. <br />
                    <span className="text-brand-green">
                        Ergebnisse steigern.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
                >
                    Intelligente KI-Systeme & Automatisierungen für messbar mehr Erfolg.
                </motion.p>

                {/* Visual Anchor to content below */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
                >
                    <div className="w-1 h-12 rounded-full border border-white/10 flex justify-center">
                        <div className="w-1 h-3 bg-brand-green rounded-full mt-2" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
