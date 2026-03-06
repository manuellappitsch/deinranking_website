"use client";

import { siteConfig } from "@/config/site";
import { Consultation } from "@/components/sections/Consultation";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { NetworkBackground } from "@/components/ui/network-background";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, Search, X, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function CaseStudiesPage() {
  const { caseStudies } = siteConfig.content;
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on category and search query
  // Filter and sort items based on search query and creation date (newest first)
  const filteredItems = useMemo(() => {
    return caseStudies.items
      .filter(item => {
        const matchesCategory = selectedCategory === "Alle" || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      // Sort by createdAt descending (newest first)
      .sort((a, b) => {
        // @ts-ignore
        const dateA = new Date(a.createdAt || a.date).getTime();
        // @ts-ignore
        const dateB = new Date(b.createdAt || b.date).getTime();
        return dateB - dateA;
      });
  }, [selectedCategory, searchQuery, caseStudies.items]);

  return (
    <main className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white">
      {/* Hero Section */}
      <CaseStudiesHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Search Bar Section */}
      <section className="relative mt-12 md:-mt-8 z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 to-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-deep-navy border border-white/10 rounded-full flex items-center px-6 py-4 focus-within:border-brand-green/50 focus-within:bg-deep-navy/80 transition-all shadow-xl">
              <Search className="text-gray-400 mr-4" size={24} />
              <input
                type="text"
                placeholder="Suche nach Case Studies (z.B. 'Logistik', 'Voicebot')..."
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="pt-12 pb-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudies.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  selectedCategory === category
                    ? "bg-brand-green text-deep-navy border-brand-green shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 relative z-10 min-h-[600px]">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredItems.map((study) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={study.slug}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-green/5 group flex flex-col h-full relative"
                  >
                    {/* Image Placeholder */}
                    <div className="h-48 w-full relative overflow-hidden bg-deep-navy/50">
                      {study.image.startsWith("http") || study.image.startsWith("/") ? (
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`absolute inset-0 ${study.image} flex items-center justify-center`}>
                          <BarChart3 size={48} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-deep-navy/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-brand-green uppercase tracking-wider z-10">
                        {study.category}
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <Calendar size={14} />
                        {study.date}
                        <span className="mx-2">•</span>
                        <span className="text-brand-green/80">{study.client}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors line-clamp-2">
                        <Link href={study.slug} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          {study.title}
                        </Link>
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-6 flex-grow line-clamp-3">
                        {study.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-brand-green font-medium group-hover:gap-3 transition-all mt-auto">
                        Case Study lesen
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">Keine Case Studies gefunden.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("Alle"); }}
                className="mt-4 text-brand-green hover:underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </section>

      <Consultation />
    </main>
  );
}
