"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Network, Cpu, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CodeBackground } from "@/components/ui/code-background";
import { Spotlight } from "@/components/ui/spotlight-bg";

export function LocalAiHero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-navy">
            <CodeBackground snippets={[
                "docker-compose up -d ollama",
                "Model: Llama-3-70b-Instruct",
                "GPU VRAM Usage: 22GB / 24GB",
                "Privacy: OFFLINE",
                "Data Encryption: AES-256",
                "Latency: 45ms",
                "API: OpenAI Compatible",
                "Status: Sovereign"
            ]} />

            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                                <span className="text-sm font-medium text-gray-300">100% Datenschutz & Kontrolle</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                KI-Power. <br />
                                Auf <span className="text-brand-green">deinen Servern.</span>
                            </h1>

                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                                Nutze die Leistung modernster KI-Modelle wie Llama 3 oder Mixtral – ohne dass deine sensiblen Daten jemals das Haus verlassen. DSGVO-konform, offline-fähig und ohne monatliche Lizenzkosten.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <Link href="/kontakt">
                                    <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-full px-8 text-lg h-14 shadow-[0_0_20px_rgba(118,176,65,0.4)] hover:shadow-[0_0_30px_rgba(118,176,65,0.6)] transition-all">
                                        Beratung anfordern <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="#vorteile">
                                    <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-white/10 text-white hover:bg-white/5 hover:text-brand-green transition-colors">
                                        Warum Lokal?
                                    </Button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-green w-5 h-5" />
                                    <span className="text-gray-300">Geheimnisschutz</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-green w-5 h-5" />
                                    <span className="text-gray-300">Keine Abo-Kosten</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-green w-5 h-5" />
                                    <span className="text-gray-300">Unabhängigkeit</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-green w-5 h-5" />
                                    <span className="text-gray-300">Volle Kontrolle</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Animation: Neural Network */}
                    <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-full h-full flex items-center justify-center p-10"
                        >
                            {/* Neural Network Visualization */}
                            <div className="relative w-full h-full">
                                {/* Nodes */}
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-4 h-4 rounded-full bg-brand-green shadow-[0_0_15px_rgba(118,176,65,0.6)] z-10"
                                        initial={{
                                            x: Math.random() * 400 - 200,
                                            y: Math.random() * 400 - 200
                                        }}
                                        animate={{
                                            x: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                                            y: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 10 + Math.random() * 10,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        style={{ left: "50%", top: "50%" }}
                                    >
                                        {/* Connecting Lines (Simulated using pseudo-elements or specific svg lines would be better, but keeping it simple for React generic anim) */}
                                        <div className="absolute inset-0 bg-brand-green rounded-full blur-sm" />
                                    </motion.div>
                                ))}

                                {/* Connectors (SVG Overlay) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="#76B041" strokeWidth="0.5" className="animate-pulse" />
                                    <circle cx="50%" cy="50%" r="250" fill="none" stroke="#76B041" strokeWidth="0.2" className="animate-[spin_20s_linear_infinite]" />
                                </svg>

                                {/* Center Brain/Processor */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="w-32 h-32 bg-deep-navy/90 border border-brand-green rounded-2xl flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(118,176,65,0.2)]">
                                        <Network size={64} className="text-brand-green" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
