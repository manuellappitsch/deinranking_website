"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const MotionLink = motion.create(Link);

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

    const toggleItem = (title: string) => {
        setExpandedItems((prev) =>
            prev.includes(title)
                ? prev.filter((item) => item !== title)
                : [...prev, title]
        );
    };

    React.useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-deep-navy/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="relative h-10 w-40 z-50">
                    <Image
                        src="/images/logo.png"
                        alt={siteConfig.name}
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteConfig.content.mainNav.map((item) => (
                        item.items ? (
                            <div key={item.title} className="relative group">
                                <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-brand-green transition-colors py-2">
                                    {item.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-200">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>
                                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-deep-navy/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 w-[600px] grid grid-cols-2 gap-8 shadow-xl">
                                        {item.items.map((section) => (
                                            <div key={section.title}>
                                                <h4 className="font-bold text-white mb-4 border-b border-white/10 pb-2">{section.title}</h4>
                                                <ul className="space-y-2">
                                                    {section.links.map((link) => {
                                                        const isDisabled = "disabled" in link ? link.disabled : false;
                                                        return (
                                                            <li key={link.title}>
                                                                <Link
                                                                    href={link.href}
                                                                    className={`block text-sm transition-colors ${isDisabled
                                                                        ? "text-gray-600 cursor-not-allowed"
                                                                        : "text-gray-400 hover:text-brand-green"
                                                                        }`}
                                                                    onClick={(e) => isDisabled && e.preventDefault()}
                                                                >
                                                                    {link.title}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-all ${item.title === "KI Workshop"
                                        ? "text-brand-green font-bold bg-brand-green/10 px-4 py-2 rounded-full border border-brand-green/50 shadow-[0_0_15px_rgba(118,176,65,0.3)] hover:shadow-[0_0_25px_rgba(118,176,65,0.6)] hover:bg-brand-green/20"
                                        : "text-gray-300 hover:text-brand-green"
                                    }`}
                            >
                                {item.title}
                            </Link>
                        )
                    ))}
                    <Button size="sm" variant="primary" asChild>
                        <MotionLink href="/kontakt">Kontakt</MotionLink>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Overlay Menu - Portaled to escape Header transform */}
                {mounted && createPortal(
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "tween", duration: 0.3 }}
                                className="fixed inset-0 bg-deep-navy z-[9999] flex flex-col pt-24 px-6 overflow-y-auto"
                            >
                                <button
                                    className="absolute top-6 right-4 text-white p-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X size={28} />
                                </button>
                                <nav className="flex flex-col gap-6">
                                    {siteConfig.content.mainNav.map((item) => (
                                        <div key={item.title} className="flex flex-col">
                                            {item.items ? (
                                                <>
                                                    <button
                                                        onClick={() => toggleItem(item.title)}
                                                        className="flex items-center justify-between w-full text-xl font-bold text-white hover:text-brand-green py-2"
                                                    >
                                                        {item.title}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className={`transition-transform duration-200 ${expandedItems.includes(item.title) ? "rotate-180" : ""}`}
                                                        >
                                                            <path d="m6 9 6 6 6-6" />
                                                        </svg>
                                                    </button>
                                                    <AnimatePresence>
                                                        {expandedItems.includes(item.title) && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="grid gap-6 pl-4 border-l border-white/10 ml-1 py-4">
                                                                    {item.items.map((section) => (
                                                                        <div key={section.title} className="flex flex-col gap-2">
                                                                            <h4 className="text-sm font-semibold text-brand-green uppercase tracking-wide">{section.title}</h4>
                                                                            {section.links.map((link) => {
                                                                                const isDisabled = "disabled" in link ? link.disabled : false;
                                                                                return (
                                                                                    <Link
                                                                                        key={link.title}
                                                                                        href={link.href}
                                                                                        onClick={(e) => {
                                                                                            if (isDisabled) e.preventDefault();
                                                                                            else setIsMobileMenuOpen(false);
                                                                                        }}
                                                                                        className={`text-base ${isDisabled ? "text-gray-600" : "text-gray-300 hover:text-white"}`}
                                                                                    >
                                                                                        {link.title}
                                                                                    </Link>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-xl font-bold text-white hover:text-brand-green py-2"
                                                >
                                                    {item.title}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                    <div className="mt-8 pb-10">
                                        <Button size="md" variant="primary" className="w-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                                            <MotionLink href="/kontakt">Kontakt</MotionLink>
                                        </Button>
                                    </div>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </motion.header>
    );
}
