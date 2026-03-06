"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mic, Activity, Smartphone, Voicemail, AudioLines, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Spotlight } from "@/components/ui/spotlight-bg";

const floatingIcons = [
    { Icon: Phone, color: "text-brand-green", delay: 0, x: -100, y: -100 },
    { Icon: Smartphone, color: "text-blue-400", delay: 2, x: 150, y: -150 },
    { Icon: Mic, color: "text-purple-400", delay: 4, x: -200, y: 100 },
    { Icon: Voicemail, color: "text-pink-400", delay: 1, x: 200, y: 50 },
    { Icon: AudioLines, color: "text-yellow-400", delay: 3, x: -50, y: 150 },
    { Icon: MessageCircle, color: "text-cyan-400", delay: 5, x: 100, y: 200 },
];

export function PhoneHero() {
    const { hero } = siteConfig.content.phoneAssistant;

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-navy">
            {/* Background Animations: Floating Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingIcons.map((item, index) => {
                    const Icon = item.Icon;
                    return (
                        <motion.div
                            key={index}
                            className={`absolute left-1/2 top-1/2 opacity-20 ${item.color}`}
                            initial={{ x: item.x, y: item.y, scale: 0.5, opacity: 0 }}
                            animate={{
                                x: [item.x, item.x + (Math.random() * 50 - 25), item.x],
                                y: [item.y, item.y + (Math.random() * 50 - 25), item.y],
                                opacity: [0.1, 0.2, 0.1],
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 8 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: item.delay
                            }}
                        >
                            <Icon size={64 + Math.random() * 32} />
                        </motion.div>
                    );
                })}
            </div>

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
                                <span className="text-sm font-medium text-gray-300">{hero.badge}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                {hero.title}
                            </h1>

                            <h2 className="text-2xl text-brand-green mb-6 font-medium">
                                {hero.subtitle}
                            </h2>

                            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                                {hero.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <Link href={hero.ctaPrimaryHref}>
                                    <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white font-bold rounded-full px-8 text-lg h-14 shadow-[0_0_20px_rgba(118,176,65,0.4)] hover:shadow-[0_0_30px_rgba(118,176,65,0.6)] transition-all">
                                        {hero.ctaPrimary} <Mic className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href={hero.ctaSecondaryHref}>
                                    <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-white/10 text-white hover:bg-white/5 hover:text-brand-green transition-colors">
                                        {hero.ctaSecondary}
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Animation: Active Call Interface */}
                    <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            {/* Phone Frame */}
                            <div className="relative w-80 h-[500px] bg-deep-navy/80 border border-white/10 rounded-[3rem] backdrop-blur-xl shadow-2xl flex flex-col items-center pt-12 overflow-hidden z-20">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl" />

                                {/* Caller Info */}
                                <div className="flex flex-col items-center mb-12">
                                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-4 relative">
                                        <Phone size={40} className="text-brand-green" />
                                        <div className="absolute inset-0 border border-brand-green/50 rounded-full animate-ping" />
                                    </div>
                                    <h3 className="text-white text-2xl font-bold">Unbekannt</h3>
                                    <p className="text-brand-green animate-pulse">00:24 • Live Transkription</p>
                                </div>

                                {/* Waveform Visual */}
                                <div className="w-full px-8 flex justify-center items-center gap-1 h-12 mb-12">
                                    {[...Array(12)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 bg-brand-green rounded-full"
                                            animate={{ height: [10, 40, 10] }}
                                            transition={{
                                                duration: 0.8 + Math.random() * 0.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.1
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="w-full mt-auto bg-white/5 p-8 grid grid-cols-3 gap-4">
                                    <div className="bg-white/10 rounded-full h-12 flex items-center justify-center"><Mic size={20} className="text-white" /></div>
                                    <div className="bg-white/10 rounded-full h-12 flex items-center justify-center"><Activity size={20} className="text-white" /></div>
                                    <div className="bg-red-500/80 rounded-full h-12 flex items-center justify-center"><Phone size={20} className="text-white rotate-[135deg]" /></div>
                                </div>
                            </div>

                            {/* Floating Blobs (Subtle backing) */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/20 rounded-full blur-[80px]" />
                            <div className="absolute top-1/2 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
