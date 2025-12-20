"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic, Calendar, Database, Filter, Check, X, Phone } from "lucide-react";
import { Consultation } from "@/components/sections/Consultation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function PhoneAssistantPage() {
    const { phoneAssistant } = siteConfig.content;

    return (
        <main className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" style={{ backgroundSize: '40px 40px' }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6 border border-brand-green/20"
                            >
                                {phoneAssistant.hero.badge}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                            >
                                {phoneAssistant.hero.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
                            >
                                {phoneAssistant.hero.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button size="lg" variant="primary">
                                    {phoneAssistant.hero.ctaPrimary}
                                </Button>
                                <Button size="lg" variant="outline">
                                    {phoneAssistant.hero.ctaSecondary}
                                </Button>
                            </motion.div>
                        </div>

                        {/* Visual Placeholder for Phone Demo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative"
                        >
                            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">KI-Assistent</h3>
                                            <p className="text-brand-green text-sm">Anruf aktiv • 00:24</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                                        <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse delay-75" />
                                        <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse delay-150" />
                                    </div>
                                </div>

                                {/* Chat/Voice Visualization */}
                                <div className="space-y-4 mb-8">
                                    <div className="bg-white/5 rounded-lg p-4 rounded-tl-none border border-white/5">
                                        <p className="text-gray-300 text-sm">"Hallo! Hier ist der digitale Assistent von DeinRanking. Wie kann ich Ihnen helfen?"</p>
                                    </div>
                                    <div className="bg-brand-green/10 rounded-lg p-4 rounded-tr-none border border-brand-green/10 ml-auto max-w-[80%]">
                                        <p className="text-white text-sm">"Ich würde gerne einen Termin für eine Beratung vereinbaren."</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4 rounded-tl-none border border-white/5">
                                        <p className="text-gray-300 text-sm">"Gerne! Ich habe am Dienstag um 14:00 Uhr noch etwas frei. Passt das?"</p>
                                    </div>
                                </div>

                                <div className="w-full bg-white/5 rounded-full h-12 flex items-center justify-center text-gray-400 text-sm border border-white/10">
                                    <Mic size={16} className="mr-2" />
                                    Sprechen Sie jetzt...
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {phoneAssistant.features.map((feature, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
                                    {/* Icon Mapping would go here, simplified for now */}
                                    <Check size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{phoneAssistant.useCases.title}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">{phoneAssistant.useCases.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {phoneAssistant.useCases.items.map((item, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                                    {/* Icon placeholder - using Check for now as icons are dynamic strings */}
                                    <Check size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                                <div className="bg-brand-green/5 border border-brand-green/10 rounded-lg p-4">
                                    <p className="text-brand-green text-sm font-medium italic">"{item.example}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-deep-navy/30 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{phoneAssistant.comparison.title}</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full max-w-4xl mx-auto border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-6 px-4 text-left text-gray-400 font-medium">Feature</th>
                                    <th className="py-6 px-4 text-left text-gray-400 font-medium">Menschlicher Mitarbeiter</th>
                                    <th className="py-6 px-4 text-left text-gray-400 font-medium">Anrufbeantworter</th>
                                    <th className="py-6 px-4 text-left text-brand-green font-bold bg-brand-green/5 rounded-t-xl">KI-Assistent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {phoneAssistant.comparison.items.map((item, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-6 px-4 text-white font-medium">{item.feature}</td>
                                        <td className="py-6 px-4 text-gray-400">{item.human}</td>
                                        <td className="py-6 px-4 text-gray-400">{item.voicemail}</td>
                                        <td className="py-6 px-4 text-brand-green font-bold bg-brand-green/5">{item.ai}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Häufige Fragen</h2>
                    <div className="space-y-6">
                        {phoneAssistant.faq.map((item, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Consultation />
        </main>
    );
}
