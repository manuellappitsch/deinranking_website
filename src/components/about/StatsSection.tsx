"use client";

import { motion } from "framer-motion";
import { Zap, Bot, Users } from "lucide-react";

export function StatsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-green/5 rounded-full blur-[120px] opacity-50 z-0" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Intro Headline & Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Erfahrung aus der Praxis</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Wir haben schon viele Firmen betreut aus den verschiedensten Branchen wie zum Beispiel der <span className="text-brand-green">Baubranche</span>, <span className="text-brand-green">Planungsbüros</span>, <span className="text-brand-green">Umzugsfirmen</span>, <span className="text-brand-green">Agenturen</span> und <span className="text-brand-green">Sportstätten</span>.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Stat 1: Automations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:bg-white/10 hover:border-brand-green/30 transition-all duration-500 shadow-xl hover:shadow-brand-green/10"
                    >
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-brand-green/20 to-brand-green/5 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner border border-brand-green/20">
                            <Zap size={36} />
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-green transition-colors duration-300">500+</div>
                        <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">Automatisierungen umgesetzt</div>
                    </motion.div>

                    {/* Stat 2: AI Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-blue-500/10"
                    >
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner border border-blue-500/20">
                            <Bot size={36} />
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">50+</div>
                        <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">KI-Lösungen implementiert</div>
                    </motion.div>

                    {/* Stat 3: Customers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500 shadow-xl hover:shadow-orange-500/10"
                    >
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner border border-orange-500/20">
                            <Users size={36} />
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors duration-300">100+</div>
                        <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">Zufriedene Kunden</div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
