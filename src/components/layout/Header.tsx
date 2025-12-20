"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-deep-navy/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="relative h-10 w-40">
                    <Image
                        src="/images/logo.png"
                        alt={siteConfig.name}
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

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
                                                        // Fix TS error: Property 'disabled' does not exist on type...
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
                                className="text-sm font-medium text-gray-300 hover:text-brand-green transition-colors"
                            >
                                {item.title}
                            </Link>
                        )
                    ))}
                    <Button size="sm" variant="primary" asChild>
                        <MotionLink href="/kontakt">Kontakt</MotionLink>
                    </Button>
                </nav>
            </div>
        </motion.header>
    );
}
