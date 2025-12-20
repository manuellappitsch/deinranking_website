"use client";

import { siteConfig } from "@/config/site";
import { Consultation } from "@/components/sections/Consultation";
import { NetworkBackground } from "@/components/ui/network-background";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

export default function AboutPage() {
  const { about } = siteConfig.content;

  const values = [
    {
      title: "Pragmatismus",
      description: "Keine theoretischen Konzepte, sondern funktionierende Lösungen. Wir bauen, was gebraucht wird.",
      icon: Zap,
    },
    {
      title: "Transparenz",
      description: "Keine versteckten Kosten, kein Fachchinesisch. Wir kommunizieren offen und auf Augenhöhe.",
      icon: Shield,
    },
    {
      title: "Partnerschaft",
      description: "Wir sind kein externer Dienstleister, sondern dein technischer Partner für Wachstum.",
      icon: Users,
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
            {about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-green font-medium max-w-2xl mx-auto"
          >
            {about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-green/10">
                {/* Placeholder for actual image if not found, or use the configured one */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600">
                  <span className="text-lg">Manuel Lappitsch</span>
                </div>
                {/* If we had a real image URL that works, we'd use Image component here. 
                                    For now, relying on the div placeholder or we can try to use the config image if it exists locally.
                                    Since I don't know if /images/robin-sumzuege.png exists, I'll keep the placeholder logic safe.
                                */}
                {/* <Image src={about.image} alt="Manuel Lappitsch" fill className="object-cover" /> */}
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-green/20 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Unsere Mission</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                {about.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">500+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Automatisierungen</span>
                </div>
                <div className="w-px h-12 bg-white/10 mx-4" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">100%</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Fokus</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Unsere Werte</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Das Fundament unserer Arbeit.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-deep-navy border border-white/10 p-8 rounded-2xl hover:border-brand-green/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Consultation />
    </main>
  );
}
