"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, X, ChevronDown, ChevronRight, Check, History, Layers, Server, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ConsentState = {
    essential: boolean;
    statistics: boolean;
    marketing: boolean;
    external: boolean;
};

type HistoryEntry = {
    timestamp: string;
    action: string;
    settings: ConsentState;
};

interface CookieBannerProps {
    onConsentChange?: (consent: ConsentState) => void;
}

const TABS = [
    { id: "groups", label: "Service-Gruppen", icon: Layers },
    { id: "services", label: "Services", icon: Server },
    { id: "providers", label: "Provider", icon: Globe },
    { id: "history", label: "Einwilligung-Historie", icon: History },
] as const;

export function CookieBanner({ onConsentChange }: CookieBannerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [activeTab, setActiveTab] = useState<typeof TABS[number]["id"]>("groups");

    // Default state: Essential is always true
    const [consent, setConsent] = useState<ConsentState>({
        essential: true,
        statistics: false,
        marketing: false,
        external: false,
    });

    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie-consent-v2");
        const storedHistory = localStorage.getItem("cookie-history");

        if (storedConsent) {
            const parsedConsent = JSON.parse(storedConsent);
            setConsent(parsedConsent);
            if (onConsentChange) onConsentChange(parsedConsent);
        } else {
            // Delay initial show
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }

        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        }
    }, [onConsentChange]);

    const saveConsent = (newConsent: ConsentState, actionLabel: string) => {
        const newHistoryEntry: HistoryEntry = {
            timestamp: new Date().toISOString(),
            action: actionLabel,
            settings: newConsent,
        };

        const updatedHistory = [newHistoryEntry, ...history];

        setConsent(newConsent);
        setHistory(updatedHistory);

        localStorage.setItem("cookie-consent-v2", JSON.stringify(newConsent));
        localStorage.setItem("cookie-history", JSON.stringify(updatedHistory));

        if (onConsentChange) onConsentChange(newConsent);

        setIsVisible(false);
        setShowSettings(false);
    };

    const handleAcceptAll = () => {
        saveConsent({
            essential: true,
            statistics: true,
            marketing: true,
            external: true,
        }, "Alle akzeptiert");
    };

    const handleRejectAll = () => {
        saveConsent({
            essential: true,
            statistics: false,
            marketing: false,
            external: false,
        }, "Alle abgelehnt");
    };

    const handleSaveSettings = () => {
        saveConsent(consent, "Einstellungen gespeichert");
    };

    const toggleCategory = (category: keyof ConsentState) => {
        if (category === "essential") return;
        setConsent(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const toggleExpand = (category: string) => {
        setExpandedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Render content based on active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case "groups":
                return (
                    <div className="space-y-4">
                        <CategoryRow
                            id="essential"
                            label="Essenziell"
                            description="Essenzielle Services ermöglichen grundlegende Funktionen und sind für das ordnungsgemäße Funktionieren der Website erforderlich."
                            checked={consent.essential}
                            disabled={true}
                            expanded={expandedCategories.includes("essential")}
                            onToggleExpand={() => toggleExpand("essential")}
                            onChange={() => { }}
                        />
                        <CategoryRow
                            id="statistics"
                            label="Statistik"
                            description="Statistik-Cookies sammeln Nutzungsdaten, die uns Aufschluss darüber geben, wie unsere Besucher mit unserer Website umgehen."
                            checked={consent.statistics}
                            disabled={false}
                            expanded={expandedCategories.includes("statistics")}
                            onToggleExpand={() => toggleExpand("statistics")}
                            onChange={() => toggleCategory("statistics")}
                        />
                        <CategoryRow
                            id="marketing"
                            label="Marketing"
                            description="Marketing-Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind."
                            checked={consent.marketing}
                            disabled={false}
                            expanded={expandedCategories.includes("marketing")}
                            onToggleExpand={() => toggleExpand("marketing")}
                            onChange={() => toggleCategory("marketing")}
                        />
                        <CategoryRow
                            id="external"
                            label="Externe Medien"
                            description="Inhalte von Videoplattformen und Social-Media-Plattformen werden standardmäßig blockiert. Wenn Cookies von externen Medien akzeptiert werden, bedarf der Zugriff auf diese Inhalte keiner manuellen Einwilligung mehr."
                            checked={consent.external}
                            disabled={false}
                            expanded={expandedCategories.includes("external")}
                            onToggleExpand={() => toggleExpand("external")}
                            onChange={() => toggleCategory("external")}
                        />
                    </div>
                );
            case "services":
                return <div className="text-gray-400 text-center py-8">Detaillierte Service-Liste wird geladen...</div>;
            case "providers":
                return <div className="text-gray-400 text-center py-8">Provider-Informationen werden geladen...</div>;
            case "history":
                return (
                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {history.length === 0 ? (
                            <div className="text-gray-400 text-center py-4">Keine Historie vorhanden.</div>
                        ) : (
                            history.map((entry, idx) => (
                                <div key={idx} className="bg-white/5 p-3 rounded-lg border border-white/5 text-sm">
                                    <div className="flex justify-between text-gray-300 mb-1">
                                        <span className="font-medium">{entry.action}</span>
                                        <span className="text-xs text-gray-500">{new Date(entry.timestamp).toLocaleString()}</span>
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        {Object.entries(entry.settings).map(([key, val]) => (
                                            val && <span key={key} className="text-xs bg-brand-green/20 text-brand-green px-2 py-0.5 rounded capitalize">{key}</span>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                );
        }
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isVisible && !showSettings ? (
                    <motion.div
                        key="simple-banner"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
                    >
                        <div className="bg-deep-navy/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden relative">
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">Privatsphäre-Einstellungen</h3>
                                    </div>
                                    <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                    Wir verwenden Cookies, um Ihr Erlebnis zu verbessern.
                                    <Link href="/datenschutz" className="text-brand-green hover:underline ml-1">Mehr erfahren</Link>
                                </p>

                                <div className="flex flex-col gap-3">
                                    <Button onClick={handleAcceptAll} className="w-full bg-brand-green hover:bg-brand-green/90 text-deep-navy font-bold rounded-lg">
                                        Alle akzeptieren
                                    </Button>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Button onClick={handleRejectAll} variant="outline" className="w-full border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg">
                                            Ablehnen
                                        </Button>
                                        <Button onClick={() => setShowSettings(true)} variant="ghost" className="w-full text-gray-400 hover:text-white">
                                            Einstellungen
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : null}

                {!isVisible && !showSettings && (
                    <motion.button
                        key="trigger"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { setIsVisible(true); setShowSettings(true); }}
                        className="fixed bottom-4 left-4 z-50 p-3 bg-deep-navy/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg text-brand-green hover:bg-brand-green hover:text-deep-navy transition-colors"
                    >
                        <ShieldCheck size={24} />
                    </motion.button>
                )}

                {showSettings && (
                    <motion.div
                        key="settings-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-deep-navy w-full max-w-4xl max-h-[90vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-brand-green" size={28} />
                                    <h2 className="text-2xl font-bold text-white">Datenschutz-Präferenz</h2>
                                </div>
                                <div className="flex gap-4 text-sm text-gray-400">
                                    <Link href="/datenschutz" className="hover:text-white">Datenschutzerklärung</Link>
                                    <Link href="/impressum" className="hover:text-white">Impressum</Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
                                {/* Sidebar Tabs */}
                                <div className="w-full md:w-64 bg-black/20 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-white/10">
                                    {TABS.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                                activeTab === tab.id
                                                    ? "bg-brand-green text-deep-navy shadow-lg shadow-brand-green/20"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                            )}
                                        >
                                            <tab.icon size={18} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Main Panel */}
                                <div className="flex-1 p-6 overflow-y-auto bg-deep-navy">
                                    <div className="mb-6 flex justify-end gap-3">
                                        <Button onClick={handleAcceptAll} size="sm" className="bg-brand-green/20 text-brand-green hover:bg-brand-green hover:text-deep-navy border border-brand-green/20">
                                            Alle auswählen
                                        </Button>
                                        <Button onClick={handleRejectAll} size="sm" variant="outline" className="border-white/10 text-gray-400 hover:text-white">
                                            Alle abwählen
                                        </Button>
                                    </div>

                                    {renderTabContent()}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t border-white/10 bg-black/20 flex flex-col md:flex-row justify-end gap-3">
                                <Button
                                    onClick={handleSaveSettings}
                                    className="bg-brand-green hover:bg-brand-green/90 text-deep-navy font-bold rounded-lg px-8"
                                >
                                    Speichern
                                </Button>
                                <Button
                                    onClick={handleAcceptAll}
                                    className="bg-brand-green hover:bg-brand-green/90 text-deep-navy font-bold rounded-lg px-8"
                                >
                                    Alle akzeptieren
                                </Button>
                                <Button
                                    onClick={handleRejectAll}
                                    className="bg-brand-green hover:bg-brand-green/90 text-deep-navy font-bold rounded-lg px-8"
                                >
                                    Nur essenzielle Cookies akzeptieren
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function CategoryRow({
    id,
    label,
    description,
    checked,
    disabled,
    expanded,
    onToggleExpand,
    onChange
}: {
    id: string;
    label: string;
    description: string;
    checked: boolean;
    disabled: boolean;
    expanded: boolean;
    onToggleExpand: () => void;
    onChange: () => void;
}) {
    return (
        <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-colors hover:border-white/10">
            <div className="p-4 flex items-center justify-between gap-4">
                <div
                    className={cn(
                        "flex items-center gap-4 flex-1 transition-opacity",
                        !disabled ? "cursor-pointer hover:opacity-80" : "opacity-50 cursor-not-allowed"
                    )}
                    onClick={!disabled ? onChange : undefined}
                >
                    <div
                        className={cn(
                            "w-6 h-6 rounded border flex items-center justify-center transition-colors",
                            checked
                                ? "bg-brand-green border-brand-green text-deep-navy"
                                : "border-gray-600 bg-transparent group-hover:border-gray-400"
                        )}
                    >
                        {checked && <Check size={16} strokeWidth={3} />}
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-base">{label}</h4>
                    </div>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleExpand();
                    }}
                    className="text-brand-green text-sm flex items-center gap-1 hover:underline"
                >
                    Informationen anzeigen
                    {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                            {description}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
