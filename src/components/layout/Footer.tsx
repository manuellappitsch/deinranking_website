"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

// Custom TikTok Icon to match Lucide style
const TikTok = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export function Footer() {
    const { footer } = siteConfig.content;

    return (
        <footer className="bg-deep-navy border-t border-white/10 py-16 mt-20 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <Link href="/" className="relative block h-10 w-40 mb-4">
                                <Image
                                    src="/images/logo.png"
                                    alt={siteConfig.name}
                                    fill
                                    className="object-contain object-left"
                                />
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {siteConfig.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href={footer.social.linkedin} className="text-brand-green hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </Link>
                            <Link href={footer.social.facebook} className="text-brand-green hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <Facebook size={20} />
                            </Link>
                            <Link href={footer.social.instagram} className="text-brand-green hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} />
                            </Link>
                            <Link href={footer.social.tiktok} className="text-brand-green hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <TikTok size={20} />
                            </Link>
                            <Link href={footer.social.youtube} className="text-brand-green hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                <Youtube size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{footer.columns.services.title}</h4>
                        <ul className="flex flex-col gap-3">
                            {footer.columns.services.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm transition-all ${link.label === "KI Workshop"
                                            ? "inline-block text-brand-green font-bold bg-brand-green/10 px-4 py-2 rounded-full border border-brand-green/50 shadow-[0_0_15px_rgba(118,176,65,0.3)] hover:shadow-[0_0_25px_rgba(118,176,65,0.6)] hover:bg-brand-green/20"
                                            : "text-gray-400 hover:text-brand-green"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">{footer.columns.company.title}</h4>
                        <ul className="flex flex-col gap-3">
                            {footer.columns.company.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-green text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">{footer.columns.legal.title}</h4>
                        <ul className="flex flex-col gap-3">
                            {footer.columns.legal.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-green text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">{footer.columns.ressourcen.title}</h4>
                        <ul className="flex flex-col gap-3">
                            {footer.columns.ressourcen.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-green text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>{footer.copyright}</p>
                    <button
                        onClick={() => typeof window !== 'undefined' && (window as any).Cookiebot?.renew()}
                        className="hover:text-brand-green transition-colors"
                    >
                        Cookie-Einstellungen
                    </button>
                </div>
            </div>
        </footer>
    );
}
