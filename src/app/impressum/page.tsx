"use client";

import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";

export default function ImpressumPage() {
    const { impressum } = siteConfig.content;

    return (
        <main className="min-h-screen bg-deep-navy selection:bg-brand-green selection:text-white">
            <Header />

            <section className="pt-40 pb-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">{impressum.title}</h1>

                    <div className="space-y-12 text-gray-300">
                        {/* Company Address */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                            <p className="leading-relaxed">
                                {impressum.company.name}<br />
                                {impressum.company.address}<br />
                                {impressum.company.city}
                            </p>
                        </div>

                        {/* Represented By */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Vertreten durch</h2>
                            <p className="leading-relaxed">
                                {impressum.representedBy.map((person, index) => (
                                    <span key={index} className="block">{person}</span>
                                ))}
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
                            <p className="leading-relaxed">
                                Telefon: <a href={`tel:${impressum.contact.phone}`} className="hover:text-brand-green transition-colors">{impressum.contact.phone}</a><br />
                                E-Mail: <a href={`mailto:${impressum.contact.email}`} className="hover:text-brand-green transition-colors">{impressum.contact.email}</a>
                            </p>
                        </div>

                        {/* VAT ID */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
                            <p className="leading-relaxed">
                                {impressum.vatId.label}<br />
                                {impressum.vatId.number}
                            </p>
                        </div>

                        {/* Editorial */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Redaktionell verantwortlich</h2>
                            <p className="leading-relaxed">
                                {impressum.editorial}
                            </p>
                        </div>

                        {/* Dispute Resolution */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                            <p className="leading-relaxed">
                                {impressum.disputeResolution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
