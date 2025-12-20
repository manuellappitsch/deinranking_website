"use client";

import { siteConfig } from "@/config/site";
import { Consultation } from "@/components/sections/Consultation";
import { NetworkBackground } from "@/components/ui/network-background";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  // Reusing the case studies from the AI Automation section for now
  // In a real scenario, we might have a dedicated global case studies list
  const { caseStudies } = siteConfig.content.aiAutomation;

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
            Erfolgsgeschichten
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Wie wir Unternehmen transformieren und echte Ergebnisse liefern.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-brand-green/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-green/5 group"
              >
                <div className="p-8 flex-grow relative">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BarChart3 size={120} />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-1 bg-brand-green rounded-full" />
                    <h3 className="text-2xl font-bold text-white">{study.client}</h3>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                      <div className="text-gray-500 text-xs uppercase mb-2 font-bold tracking-wider flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        Herausforderung
                      </div>
                      <p className="text-gray-300 font-medium leading-relaxed">{study.problem}</p>
                    </div>

                    <div className="pl-4 border-l-2 border-brand-green/20">
                      <div className="text-gray-500 text-xs uppercase mb-2 font-bold tracking-wider flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        Lösung
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-brand-green/20 to-brand-green/5 p-6 border-t border-brand-green/20">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-brand-green rounded-lg text-deep-navy shadow-lg shadow-brand-green/20">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-brand-green text-xs font-bold uppercase tracking-wider mb-1">Ergebnis</div>
                      <div className="text-white font-bold text-lg">{study.result}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Consultation />
    </main>
  );
}
