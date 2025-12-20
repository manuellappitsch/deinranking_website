"use client";

import { siteConfig } from "@/config/site";
import { Consultation } from "@/components/sections/Consultation";
import { NetworkBackground } from "@/components/ui/network-background";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <NetworkBackground />
                    {/* Gradients */}
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Kontakt aufnehmen
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Wir freuen uns darauf, von dir zu hören.
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
