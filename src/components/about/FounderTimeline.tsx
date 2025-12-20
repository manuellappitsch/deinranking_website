"use client";

import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, UserCheck, Layout, Megaphone, Bot } from "lucide-react";
import Image from "next/image";

// Reuse the robust SVG workflow animation locally to ensure self-containment or could import if exported. 
// Defining locally for specific tweaking if needed, matching AboutHero style.
const BackgroundWorkflow = ({
    className,
    delay = 0,
    scale = 1,
    opacity = 0.4 // Increased default opacity
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
                    <linearGradient id="line-gradient-timeline" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
                        <stop offset="50%" stopColor="rgba(34, 197, 94, 0.5)" />
                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)" />
                    </linearGradient>
                </defs>

                <g>
                    <circle cx="50" cy="100" r="8" className="fill-brand-green/20 stroke-brand-green/50" strokeWidth="2">
                        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin={`${delay}s`} />
                        <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" begin={`${delay}s`} />
                    </circle>
                    <rect x="180" y="85" width="20" height="20" rx="4" className="fill-blue-500/20 stroke-blue-500/50" strokeWidth="2">
                        <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" begin={`${delay + 0.5}s`} />
                    </rect>
                    <circle cx="340" cy="60" r="6" className="fill-orange-500/20 stroke-orange-500/50" strokeWidth="2">
                        <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" begin={`${delay + 1}s`} />
                    </circle>
                </g>

                <path d="M 58 100 C 100 100, 140 95, 180 95" fill="none" stroke="url(#line-gradient-timeline)" strokeWidth="1.5" />
                <path d="M 200 95 C 250 95, 290 60, 340 60" fill="none" stroke="url(#line-gradient-timeline)" strokeWidth="1.5" />

                <circle r="4" fill="#22c55e" opacity="0.9">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 58 100 C 100 100, 140 95, 180 95" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin={`${delay}s`} />
                    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
                </circle>

                <circle r="4" fill="#3b82f6" opacity="0.9">
                    <animateMotion dur="2.5s" begin={`${delay + 1.5}s`} repeatCount="indefinite" path="M 200 95 C 250 95, 290 60, 340 60" calcMode="linear" />
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin={`${delay + 1.5}s`} repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    );
};

// Floating Code Snippets (Matrix Style)
const FloatingCode = ({ delay, x, y, code, duration = 10 }: { delay: number; x: string; y: string; code: string; duration?: number }) => (
    <motion.div
        className="absolute font-mono text-[10px] md:text-sm text-brand-green/20 font-bold pointer-events-none whitespace-pre z-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0.8, 0], y: -80 }}
        transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
        style={{ left: x, top: y }}
    >
        {code}
    </motion.div>
);

// Binary Stream Animation
const BinaryStream = ({ delay, x, speed = 15 }: { delay: number; x: string; speed?: number }) => (
    <motion.div
        className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-brand-green/20 to-transparent pointer-events-none z-0"
        style={{ left: x }}
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        transition={{ duration: speed, repeat: Infinity, delay, ease: "linear" }}
    />
);

export function FounderTimeline() {
    const steps = [
        {
            year: "2020",
            title: "Der Start im E-Commerce",
            description: "Erste Schritte im Online-Marketing mit dem Verkauf physischer Produkte auf Amazon (FBA). Über 60.000€ Umsatz im ersten Jahr und tiefer Einstieg in die Mechanismen des digitalen Handels.",
            icon: ShoppingCart,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20"
        },
        {
            year: "2021",
            title: "Marketing-Leitung Coaching",
            description: "Partnerschaft im Online-Coaching-Bereich. Verantwortung für das gesamte Marketing, Funnel-Aufbau und Lead-Generierung. Hier wurde das Fundament für verkaufspsychologisches Verständnis gelegt.",
            icon: UserCheck,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20"
        },
        {
            year: "2022",
            title: "Gründung Webdesign & SEO Agentur",
            description: "Der Schritt in die Selbstständigkeit mit eigener Agentur. Fokus auf technisches SEO und leistungsstarke Websites. Hunderte Rankings verbessert und digitale Sichtbarkeit für KMUs aufgebaut.",
            icon: Layout,
            color: "text-orange-400",
            bg: "bg-orange-400/10",
            border: "border-orange-400/20"
        },
        {
            year: "2023",
            title: "Expansion in Paid Advertising",
            description: "Erweiterung des Portfolios um Social Media Marketing (Meta Ads) und Social Recruiting. Erfolgreiche Kampagnen-Steuerung für diverse Kundenbranchen.",
            icon: Megaphone,
            color: "text-pink-400",
            bg: "bg-pink-400/10",
            border: "border-pink-400/20"
        },
        {
            year: "Dez 2024",
            title: "Die KI-Transformation",
            description: "Der entscheidende Pivot. Voller Fokus auf KI-Automatisierung und AI Agents. Ziel: Geschäftsprozesse revolutionieren, Kosten senken und Mitarbeitern den Rücken freihalten. Die Geburtsstunde von 'Dein Ranking' als Automatisierungs-Partner.",
            icon: Bot,
            highlight: true,
            color: "text-brand-green",
            bg: "bg-brand-green/10",
            border: "border-brand-green/20"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effects - Intensified */}
            <div className="absolute inset-0 z-0">
                {/* Visible Grid Pattern */}
                <div
                    className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30"
                    style={{ backgroundSize: '40px 40px' }}
                />

                {/* Intense Code Decoration Layer */}
                <FloatingCode delay={0} x="5%" y="20%" code={`// E-Commerce Start\ninit(amazon_fba);`} duration={8} />
                <FloatingCode delay={2} x="85%" y="10%" code={`const scale = true;\noptimize_funnel();`} duration={12} />
                <FloatingCode delay={4} x="10%" y="40%" code={`import { SEO } from\n'google-core';`} duration={9} />
                <FloatingCode delay={1} x="75%" y="60%" code={`await ai.revolution();`} duration={7} />
                <FloatingCode delay={3} x="15%" y="80%" code={`function automate() {\n  return success;\n}`} duration={11} />
                <FloatingCode delay={5} x="90%" y="30%" code={`// Legacy removed\nconst future = true;`} duration={10} />

                <FloatingCode delay={0.5} x="25%" y="10%" code={`01010101`} duration={15} />
                <FloatingCode delay={2.5} x="65%" y="90%" code={`10100111`} duration={13} />

                {/* Active Workflows in Background */}
                <BackgroundWorkflow className="top-[10%] left-[-5%] rotate-12 scale-110" opacity={0.5} delay={0} />
                <BackgroundWorkflow className="bottom-[10%] right-[-5%] -rotate-12 scale-125" opacity={0.5} delay={2} />
                <BackgroundWorkflow className="top-[40%] right-[20%] rotate-45 scale-75" opacity={0.3} delay={4} />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">

                {/* Intro */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full border-[6px] border-white/10 mb-10 relative group overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-brand-green/20 blur-xl group-hover:bg-brand-green/40 transition-colors animate-pulse z-0" />

                        {/* Founder Image */}
                        <Image
                            src="/images/about/manuel-desk.jpg"
                            alt="Manuel Lappitsch - Founder"
                            fill
                            className="object-cover object-[50%_25%] relative z-10 hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Der Werdegang
                    </motion.h2>
                    <p className="text-gray-400">Vom Amazon-Seller zum Automatisierungs-Experten.</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
                    {/* Animated Gradient on Line - Brighter */}
                    <motion.div
                        className="absolute left-[20px] md:left-1/2 top-0 w-[2px] h-[300px] bg-gradient-to-b from-transparent via-brand-green to-transparent md:-translate-x-1/2 blur-[1px]"
                        animate={{ top: ["-20%", "120%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node */}
                                <div className={`absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-deep-navy shadow-xl flex items-center justify-center z-10 md:-translate-x-1/2 ${step.highlight ? 'bg-brand-green scale-125 shadow-[0_0_30px_rgba(34,197,94,0.6)]' : 'bg-deep-navy border-brand-green/50'}`}>
                                    <step.icon size={step.highlight ? 20 : 16} className={step.highlight ? 'text-black' : 'text-brand-green'} />
                                </div>

                                {/* Content Box - More opacity on hover */}
                                <div className="ml-16 md:ml-0 md:w-[45%]">
                                    <div className={`p-6 rounded-2xl border ${step.highlight ? 'border-brand-green/50 bg-brand-green/10' : 'border-white/10 bg-white/5'} hover:border-brand-green/30 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative group overflow-hidden`}>
                                        {/* Subtle scanline effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />

                                        {step.highlight && (
                                            <div className="absolute -top-3 -right-3 bg-brand-green text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg z-10">
                                                GAME CHANGER
                                            </div>
                                        )}
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${step.bg} ${step.color} border ${step.border} group-hover:bg-brand-green/20 transition-colors`}>
                                            {step.year}
                                        </span>
                                        <h3 className={`text-xl font-bold mb-2 ${step.highlight ? 'text-brand-green' : 'text-white'} group-hover:text-brand-green transition-colors`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty side for spacing on desktop */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
