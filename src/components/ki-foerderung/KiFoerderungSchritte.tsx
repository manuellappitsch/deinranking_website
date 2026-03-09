"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function KiFoerderungSchritte() {
    const { schritte } = siteConfig.content.kiFoerderung;

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" style={{ backgroundSize: "50px 50px" }} />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep-navy to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-navy to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">So funktioniert es</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        Schritt für Schritt zur Förderung
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Förderungen klingen kompliziert — sind sie aber nicht. Wir begleiten dich durch jeden Schritt.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="max-w-3xl mx-auto">
                    {schritte.map((schritt, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex gap-6 pb-10 last:pb-0"
                        >
                            {/* Connector Line */}
                            {index < schritte.length - 1 && (
                                <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-brand-green/40 to-transparent" />
                            )}

                            {/* Number */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                                <span className="text-brand-green font-bold text-sm">{schritt.nummer}</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2 pb-2">
                                <h3 className="text-white font-semibold text-lg mb-2">{schritt.titel}</h3>
                                <p className="text-gray-300 leading-relaxed">{schritt.beschreibung}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA hint */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-brand-green" />
                        Wir begleiten dich durch alle 5 Schritte — von der Planung bis zur Abrechnung.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
