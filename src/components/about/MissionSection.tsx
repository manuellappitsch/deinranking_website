"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

export function MissionSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div
                className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 pointer-events-none"
                style={{
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)'
                }}
            />
            <div className="absolute top-[15%] right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-6"
                    >
                        <TrendingUp size={14} />
                        <span>Unsere Mission</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Mehr Ergebnis mit <span className="text-brand-green">gleichen Ressourcen.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        In der heutigen Zeit ist es entscheidender denn je, effizient zu wirtschaften.
                        Der Mittelstand spürt den Druck: Kosten steigen, Fachkräfte fehlen.
                        Genau hier setzen wir an. Wir arbeiten mit Unternehmen, die keine Angst vor der Zukunft haben,
                        sondern sie aktiv gestalten wollen.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Efficiency */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-green/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-green/20 transition-colors" />
                        <Clock className="text-brand-green mb-6 relative z-10" size={32} />
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">Zeit gewinnen</h3>
                        <p className="text-gray-400 relative z-10">
                            Wir automatisieren repetitive Prozesse, damit dein Team sich auf wertschöpfende Aufgaben konzentrieren kann.
                        </p>
                    </motion.div>

                    {/* Card 2: Cost Savings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors" />
                        <Zap className="text-blue-500 mb-6 relative z-10" size={32} />
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">Kosten senken</h3>
                        <p className="text-gray-400 relative z-10">
                            Durch intelligente KI-Lösungen reduzieren wir manuelle Eingriffe und minimieren kostspielige Fehlerquellen.
                        </p>
                    </motion.div>

                    {/* Card 3: Growth */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-colors" />
                        <Users className="text-orange-500 mb-6 relative z-10" size={32} />
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">Skalierung</h3>
                        <p className="text-gray-400 relative z-10">
                            Mit gleicher Mannschaft mehr erreichen. Wir bauen Systeme, die mit deinem Erfolg mitwachsen.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
