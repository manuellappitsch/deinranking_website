"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp, Smile, ArrowRight, Zap, Clock, BarChart3, Workflow, Code2, Database, User, Mail, MessageSquare, FileText, DollarSign, UserPlus, Truck, PenTool, Share2, Cpu, CheckCircle, Server, Megaphone, Package, Settings } from "lucide-react";
import { Consultation } from "@/components/sections/Consultation";
import { NetworkBackground } from "@/components/ui/network-background";
import { Spotlight } from "@/components/ui/spotlight";
import { MiniWorkflow } from "@/components/ui/mini-workflow";
import { useRef, useEffect, useState } from "react";

// Simple Animated Counter Component
const Counter = ({ value, label }: { value: string, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Extract number and suffix (e.g., "12.500+" -> 12500, "+")
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');

    return (
        <div ref={ref} className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400 mb-2 drop-shadow-lg">
                {isInView ? value : "0"}
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">{label}</div>
        </div>
    );
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "KI-Automatisierung für Unternehmen",
    description: "KI-gestützte Prozessautomatisierung für Unternehmen im DACH-Raum – von Workflow-Automatisierung bis zu intelligenten KI-Agenten.",
    provider: {
        "@type": "Organization",
        name: "DeinRanking",
        url: "https://dein-ranking.at",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Graz",
            addressCountry: "AT",
        },
    },
    areaServed: { "@type": "Country", name: "Austria" },
    url: "https://dein-ranking.at/ki-automatisierung",
};

export default function AutomationPage() {
    const { aiAutomation } = siteConfig.content;

    // Workflow Configurations for Use Cases
    const workflows = [
        [ // Marketing
            { icon: PenTool, label: "Content", color: "text-purple-400" },
            { icon: Cpu, label: "AI Gen", color: "text-brand-green" },
            { icon: Share2, label: "Socials", color: "text-blue-400" },
        ],
        [ // Sales
            { icon: User, label: "Lead", color: "text-blue-400" },
            { icon: Mail, label: "Outreach", color: "text-yellow-400" },
            { icon: Database, label: "CRM", color: "text-purple-400" },
        ],
        [ // Onboarding
            { icon: UserPlus, label: "Sign", color: "text-pink-400" },
            { icon: Server, label: "Accounts", color: "text-blue-400" },
            { icon: Smile, label: "Welcome", color: "text-green-400" },
        ],
        [ // Fulfillment
            { icon: Package, label: "Order", color: "text-orange-400" },
            { icon: FileText, label: "Label", color: "text-gray-400" },
            { icon: Truck, label: "Ship", color: "text-blue-400" },
        ],
        [ // Backoffice
            { icon: FileText, label: "Invoice", color: "text-yellow-400" },
            { icon: Zap, label: "OCR", color: "text-brand-green" },
            { icon: DollarSign, label: "Pay", color: "text-emerald-400" },
        ]
    ];

    return (
        <main className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <NetworkBackground />
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/50 to-deep-navy" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6 border border-brand-green/20 backdrop-blur-sm"
                        >
                            {aiAutomation.hero.badge}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            {aiAutomation.hero.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            {aiAutomation.hero.description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button size="lg" variant="primary">
                                {aiAutomation.hero.ctaPrimary}
                            </Button>
                            <Button size="lg" variant="outline">
                                {aiAutomation.hero.ctaSecondary}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Abstract Flow Animation Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 relative max-w-5xl mx-auto h-[300px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center backdrop-blur-sm shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-grid-white/5" />

                        {/* Simulated Nodes */}
                        <div className="flex items-center gap-8 md:gap-16 relative z-10">
                            <div className="w-20 h-20 bg-blue-500/20 rounded-xl border border-blue-500/50 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                <Database size={32} />
                            </div>
                            <div className="h-1 w-16 bg-white/10 relative overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-brand-green/80 w-1/2 animate-[shimmer_2s_infinite]" />
                            </div>
                            <div className="w-24 h-24 bg-brand-green/20 rounded-xl border border-brand-green/50 flex items-center justify-center text-brand-green shadow-[0_0_40px_rgba(34,197,94,0.3)] animate-pulse">
                                <Workflow size={40} />
                            </div>
                            <div className="h-1 w-16 bg-white/10 relative overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-brand-green/80 w-1/2 animate-[shimmer_2s_infinite]" />
                            </div>
                            <div className="w-20 h-20 bg-purple-500/20 rounded-xl border border-purple-500/50 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                                <Zap size={32} />
                            </div>
                        </div>
                        <p className="absolute bottom-4 text-gray-500 text-sm font-mono">Automatisierter Datenfluss v1.0</p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-32 bg-deep-navy relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {aiAutomation.benefits.map((benefit, index) => (
                            <Spotlight key={index} className="h-full">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full hover:bg-white/10 transition-colors relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 shadow-inner shadow-brand-green/20">
                                        {index === 0 ? <Target size={28} /> : index === 1 ? <TrendingUp size={28} /> : <Smile size={28} />}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </Spotlight>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact / Stats Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-brand-green/5 to-deep-navy" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                        <Counter value={aiAutomation.stats.automationsBuilt} label="Automatisierungen gebaut" />
                        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto" />
                        <Counter value={aiAutomation.stats.hoursSaved} label="Stunden gespart" />
                        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto" />
                        <Counter value={aiAutomation.stats.roi} label="Durchschnittlicher ROI" />
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                {aiAutomation.useCases.title}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {aiAutomation.useCases.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {aiAutomation.useCases.categories.map((category, index) => (
                            <div key={index} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-green/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="p-8 relative z-10 h-full flex flex-col">
                                    <div className="mb-8">
                                        <MiniWorkflow nodes={workflows[index]} delay={index * 0.2} />
                                    </div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform duration-300">
                                            {/* Dynamic Icon Mapping */}
                                            {category.icon === "Megaphone" && <Megaphone size={20} />}
                                            {category.icon === "Target" && <Target size={20} />}
                                            {category.icon === "UserPlus" && <UserPlus size={20} />}
                                            {category.icon === "Package" && <Package size={20} />}
                                            {category.icon === "Settings" && <Settings size={20} />}
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">{category.title}</h3>
                                    </div>

                                    <ul className="space-y-3 flex-grow">
                                        {category.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green/50 group-hover:bg-brand-green transition-colors" />
                                                <span className="text-sm leading-relaxed">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-32 bg-deep-navy/30 relative">
                <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">Ergebnisse aus der Praxis</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {aiAutomation.caseStudies.map((study, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-green/10 group">
                                <div className="p-8 flex-grow relative">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <BarChart3 size={64} />
                                    </div>
                                    <div className="text-brand-green text-sm font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-4 inline-block">{study.client}</div>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-gray-500 text-xs uppercase mb-2 font-semibold">Problem</div>
                                            <p className="text-white font-medium leading-relaxed">{study.problem}</p>
                                        </div>
                                        <div>
                                            <div className="text-gray-500 text-xs uppercase mb-2 font-semibold">Lösung</div>
                                            <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-brand-green/10 to-brand-green/5 p-6 border-t border-brand-green/10">
                                    <div className="text-brand-green font-bold flex items-center gap-3">
                                        <div className="p-1 bg-brand-green/20 rounded-full">
                                            <TrendingUp size={16} />
                                        </div>
                                        {study.result}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools / Tech Stack Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{aiAutomation.tools.title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">{aiAutomation.tools.description}</p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {aiAutomation.tools.items.map((tool, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium hover:bg-white/10 hover:text-white hover:border-brand-green/50 hover:shadow-lg hover:shadow-brand-green/20 transition-all cursor-default backdrop-blur-sm"
                            >
                                {tool}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Consultation />
        </main>
    );
}
