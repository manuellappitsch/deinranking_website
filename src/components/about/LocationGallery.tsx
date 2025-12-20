"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Building, Users, BrainCircuit } from "lucide-react";

import Image from "next/image";

// Binary Rain Animation Component
const BinaryRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = Math.floor(canvas.width / 20);
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 25, 47, 0.1)'; // Deep Navy fade
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#76b041'; // Brand Green
            ctx.font = '14px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = Math.random() > 0.5 ? '1' : '0';
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="opacity-20 w-full h-full" />;
};

export function LocationGallery() {
    return (
        <section className="py-24 relative overflow-hidden bg-deep-navy">
            {/* Background Animation with Fade Mask */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
                <BinaryRain />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Content & Map */}
                    <div className="flex flex-col gap-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-6"
                            >
                                <MapPin size={14} />
                                <span>Unser Standort</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                KI & Automatisierung <br className="hidden md:block" />
                                <span className="text-brand-green">aus Graz.</span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Von unserem Standort in der Steiermark aus entwickeln wir maßgeschneiderte Softwarelösungen und intelligente Prozessautomatisierungen für Unternehmen.
                                Wir verbinden lokale Expertise mit modernster Technologie, um Ihre Abläufe effizienter, skalierbarer und zukunftssicher zu gestalten.
                            </p>
                        </div>

                        {/* Map Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm shadow-2xl h-[300px] relative group"
                        >
                            <iframe
                                src="https://maps.google.com/maps?q=Gradnerstra%C3%9Fe+120%2C+8054+Graz&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            {/* Location Overlay Badge */}
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <div className="bg-deep-navy/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 flex items-center gap-4 shadow-lg group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                                    <div className="p-2.5 rounded-lg bg-brand-green/10 border border-brand-green/20 shrink-0">
                                        <MapPin className="text-brand-green animate-bounce" size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Headquarters</div>
                                        <div className="text-sm font-bold text-white truncate">Gradnerstraße 120, 8054 Graz</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Vertical Image (Reduced Size) */}
                    <div className="flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative h-[500px] lg:h-[600px] w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
                        >
                            <Image
                                src="/images/about/manuel-graz-1.jpg"
                                alt="Manuel in Graz Office"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Subtle gradient overlay for mood, but no text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent opacity-60" />

                            {/* Decorative HUD/Tech elements */}
                            <div className="absolute top-6 right-6 flex flex-col gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                                <div className="w-1 h-12 bg-white/20 rounded-full mx-auto" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
