"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

export function KiAgenturGrazTestimonials() {
    const { testimonials } = siteConfig.content.kiAgenturGraz;

    return (
        <section id="referenzen" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep-navy to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-navy to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-brand-green text-sm font-medium uppercase tracking-wider">Referenzen</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
                        Was Grazer Unternehmen sagen
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Echte Kunden aus Graz und der Steiermark. Keine Fake-Reviews.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white/5 border border-white/10 rounded-2xl p-6 relative ${
                                index === testimonials.length - 1 && testimonials.length % 2 !== 0
                                    ? "md:col-span-2 md:max-w-lg md:mx-auto"
                                    : ""
                            }`}
                        >
                            <Quote className="w-8 h-8 text-brand-green/30 mb-4" />
                            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                &ldquo;{item.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-green font-bold text-sm">
                                        {item.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{item.name}</p>
                                    <p className="text-gray-500 text-xs">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
