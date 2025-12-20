"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MiniWorkflow } from "@/components/ui/mini-workflow";
import { Mail, Bot, Database, MessageSquare, FileText, Zap, Globe } from "lucide-react";

export function About() {
    const { about } = siteConfig.content;

    return (
        <section className="py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" style={{ backgroundSize: '40px 40px' }} />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-green/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative">
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 z-10">
                            <Image
                                src={about.image}
                                alt="Manuel Lappitsch - DeinRanking"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Workflows */}
                        <motion.div
                            className="absolute -top-8 -right-8 z-20 hidden md:block"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <MiniWorkflow
                                nodes={[
                                    { icon: Mail, label: "Email", color: "text-blue-400" },
                                    { icon: Bot, label: "AI", color: "text-brand-green" },
                                    { icon: Database, label: "CRM", color: "text-purple-400" },
                                ]}
                                delay={0}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-6 -left-4 z-20 hidden md:block"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <MiniWorkflow
                                nodes={[
                                    { icon: Zap, label: "Trigger", color: "text-yellow-400" },
                                    { icon: FileText, label: "Draft", color: "text-gray-400" },
                                    { icon: Mail, label: "Send", color: "text-pink-400" },
                                ]}
                                delay={1}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute bottom-12 -right-12 z-20 hidden lg:block"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <MiniWorkflow
                                nodes={[
                                    { icon: Globe, label: "Web", color: "text-cyan-400" },
                                    { icon: MessageSquare, label: "Chat", color: "text-green-400" },
                                ]}
                                delay={2}
                            />
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {about.title}
                            </h2>
                            <p className="text-brand-green font-medium mb-6">{about.subtitle}</p>

                            <div className="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
                                {about.description}
                            </div>

                            <Button variant="primary">
                                Mehr über uns
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
