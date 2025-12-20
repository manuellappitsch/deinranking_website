import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
    const { footer } = siteConfig.content;

    return (
        <footer className="bg-deep-navy border-t border-white/10 py-16 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                        <div className="flex gap-4">
                            <Link href={footer.social.twitter} className="text-brand-green hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href={footer.social.linkedin} className="text-brand-green hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href={footer.social.instagram} className="text-brand-green hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href={footer.social.github} className="text-brand-green hover:text-white transition-colors">
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{footer.columns.services.title}</h4>
                        <ul className="flex flex-col gap-3">
                            {footer.columns.services.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-green text-sm transition-colors">
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
                                <li key={link.href}>
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
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-green text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
                    {footer.copyright}
                </div>
            </div>
        </footer>
    );
}
