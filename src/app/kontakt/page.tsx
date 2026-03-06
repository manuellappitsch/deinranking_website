"use client";

import { siteConfig } from "@/config/site";
import { Consultation } from "@/components/sections/Consultation";
import { NetworkBackground } from "@/components/ui/network-background";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Send, Zap, Bot } from "lucide-react";

export default function ContactPage() {
    const { impressum } = siteConfig.content;

    const contactMethods = [
        {
            icon: Mail,
            title: "E-Mail",
            value: impressum.contact.email,
            href: `mailto:${impressum.contact.email}`,
            description: "Schreib uns eine Nachricht.",
        },
        {
            icon: Phone,
            title: "Telefon",
            value: impressum.contact.phone,
            href: `tel:${impressum.contact.phone}`,
            description: "Ruf uns direkt an.",
        },
        {
            icon: MapPin,
            title: "Standort",
            value: `${impressum.company.address}, ${impressum.company.city}`,
            href: "https://maps.google.com/?q=Gradnerstraße+120,+8054+Graz", // Simple Maps link
            description: "Besuch uns im Büro.",
        },
    ];

    return (
        <main className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden min-h-[85vh] flex items-center justify-center perspective-[1000px]">
                <div className="absolute inset-0 z-0 bg-deep-navy">
                    {/* Gradients - Top Corners Only for Clean Bottom Transition */}
                    <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />
                    <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[8000ms]" />

                    {/* Retro/Coding Grid Animation */}
                    <div className="absolute inset-0 overflow-hidden transform-gpu perspective-1000">
                        <motion.div
                            className="absolute inset-[-100%] w-[300%] h-[300%] origin-top bg-[linear-gradient(to_right,rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent_20%,black_60%,transparent_100%)]"
                            initial={{ y: 0, rotateX: 60 }}
                            animate={{ y: 64 }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear"
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        />
                    </div>

                    {/* Floating Contact Elements - Expanded & Brighter */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Mail Icon - Top Left - Brighter */}
                        <motion.div
                            className="absolute top-[15%] left-[5%] md:left-[10%] text-brand-green/40"
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Mail size={64} strokeWidth={1} />
                        </motion.div>

                        {/* Phone Icon - Bottom Right - Brighter */}
                        <motion.div
                            className="absolute bottom-[20%] right-[5%] md:right-[10%] text-blue-500/40"
                            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <Phone size={80} strokeWidth={1} />
                        </motion.div>

                        {/* Chat Icon - Top Right - Medium Distance */}
                        <motion.div
                            className="absolute top-[20%] right-[15%] text-purple-500/30"
                            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        >
                            <MessageSquare size={48} strokeWidth={1} />
                        </motion.div>

                        {/* Send Icon - Bottom Left - Brighter */}
                        <motion.div
                            className="absolute bottom-[25%] left-[15%] text-brand-green/30"
                            animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <Send size={40} strokeWidth={1} />
                        </motion.div>

                        {/* Bot Icon - Top Center Left - Subtle */}
                        <motion.div
                            className="absolute top-[10%] left-[25%] text-blue-400/20"
                            animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <Bot size={32} strokeWidth={1} />
                        </motion.div>

                        {/* Zap Icon - Top Center Right - Accent */}
                        <motion.div
                            className="absolute top-[30%] right-[25%] text-yellow-500/30"
                            animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                        >
                            <Zap size={36} strokeWidth={1} />
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-medium"
                    >
                        Zeit & Kosten sparen durch Automation
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        Lass uns deine Prozesse <br />
                        <span className="text-brand-green">
                            digitalisieren & skalieren.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Verschwende keine Zeit mehr mit manuellen Aufgaben.
                        Wir helfen dir, durch intelligente KI-Lösungen und smarte Automatisierung mehr Freiraum für dein Kerngeschäft zu schaffen.
                    </motion.p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.href}
                                target={method.icon === MapPin ? "_blank" : undefined}
                                rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-green/50 hover:bg-white/10 transition-all group flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                                    <method.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                                <p className="text-gray-400 mb-6">{method.description}</p>
                                <div className="mt-auto text-brand-green font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                    {method.value}
                                    <ArrowRight size={16} />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <Consultation />
        </main>
    );
}
