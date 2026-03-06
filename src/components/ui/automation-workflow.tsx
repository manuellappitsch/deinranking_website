"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, Mail, Database, MessageSquare, FileText, Check, Loader2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const nodes = [
    { id: 1, x: 15, y: 30, icon: Zap, label: "Webhook", subLabel: "New Lead", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
    { id: 2, x: 35, y: 60, icon: MessageSquare, label: "OpenAI", subLabel: "Analyze Intent", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { id: 3, x: 55, y: 30, icon: Database, label: "Pipedrive", subLabel: "Create Deal", color: "text-brand-green", bg: "bg-brand-green/10", border: "border-brand-green/20" },
    { id: 4, x: 75, y: 60, icon: FileText, label: "Google Docs", subLabel: "Draft Offer", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
    { id: 5, x: 90, y: 30, icon: Mail, label: "Gmail", subLabel: "Send Email", color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20" },
];

const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
];

export function AutomationWorkflow() {
    const [activeStep, setActiveStep] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % (nodes.length + 2)); // +2 for pause at end
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    // Mobile-specific layout configuration
    const getCoordinates = (node: any) => {
        if (!isMobile) return { x: node.x, y: node.y };

        // Compact scattered layout for mobile
        const positions = {
            1: { x: 25, y: 15 }, // Webhook (Top Left - Moved down/left to prevent clipping)
            2: { x: 70, y: 25 }, // OpenAI (Right)
            3: { x: 30, y: 45 }, // Pipedrive (Left)
            4: { x: 70, y: 60 }, // Google Docs (Right)
            5: { x: 50, y: 80 }  // Gmail (Bottom Center)
        };
        // @ts-ignore
        return positions[node.id] || { x: node.x, y: node.y };
    };

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <svg className="absolute inset-0 w-full h-full">
                {connections.map((conn, i) => {
                    const startNode = nodes.find(n => n.id === conn.from);
                    const endNode = nodes.find(n => n.id === conn.to);
                    if (!startNode || !endNode) return null;

                    const start = getCoordinates(startNode);
                    const end = getCoordinates(endNode);

                    const isActive = activeStep > i;
                    const isNext = activeStep === i + 1;

                    // Adjust control points based on orientation
                    const isVertical = isMobile;
                    const controlPoint1 = isVertical
                        ? `${start.x}% ${start.y + 10}%`
                        : `${start.x + 10}% ${start.y}%`;
                    const controlPoint2 = isVertical
                        ? `${end.x}% ${end.y - 10}%`
                        : `${end.x - 10}% ${end.y}%`;

                    const pathd = `M ${start.x}% ${start.y}% C ${controlPoint1}, ${controlPoint2}, ${end.x}% ${end.y}%`;

                    return (
                        <g key={i}>
                            {/* Base Line */}
                            <path
                                d={pathd}
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeWidth="2"
                            />

                            {/* Active Line Animation */}
                            <motion.path
                                d={pathd}
                                fill="none"
                                stroke={isActive ? "#76B041" : "rgba(255, 255, 255, 0.1)"}
                                strokeWidth="2"
                                strokeDasharray="10 5"
                                animate={{
                                    strokeDashoffset: [0, -20],
                                    opacity: isActive ? 1 : 0.3
                                }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Data Packet */}
                            {isNext && (
                                <motion.circle r="4" fill="#fff" filter="url(#glow)">
                                    <animateMotion
                                        dur="1s"
                                        repeatCount="1"
                                        path={pathd}
                                        fill="freeze"
                                    />
                                </motion.circle>
                            )}
                        </g>
                    );
                })}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {nodes.map((node, i) => {
                const isActive = activeStep === i;
                const isCompleted = activeStep > i;
                const pos = getCoordinates(node);

                return (
                    <motion.div
                        key={node.id}
                        className={`absolute flex flex-col gap-1 p-3 rounded-xl border backdrop-blur-md transition-all duration-500
                            ${isActive ? 'bg-white/10 border-brand-green shadow-[0_0_20px_rgba(118,176,65,0.3)] scale-110 z-10' : 'bg-deep-navy/40 border-white/10 scale-100 z-0'}
                            ${isCompleted ? 'border-brand-green/50' : ''}
                        `}
                        style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)', width: isMobile ? '140px' : 'auto' }}
                    >
                        {/* Header Line */}
                        <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg ${node.bg}`}>
                                <node.icon className={`w-4 h-4 ${node.color}`} />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                    {node.label}
                                </span>
                                <span className="text-[10px] text-gray-500 hidden md:block">{node.subLabel}</span>
                            </div>

                            {/* Status Indicator */}
                            <div className="ml-2">
                                {isActive && <Loader2 className="w-3 h-3 text-brand-green animate-spin" />}
                                {isCompleted && <Check className="w-3 h-3 text-brand-green" />}
                            </div>
                        </div>

                        {/* Active Progress Bar at bottom of node */}
                        {isActive && (
                            <motion.div
                                className="h-0.5 bg-brand-green rounded-full w-full mt-1"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5 }}
                            />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}
