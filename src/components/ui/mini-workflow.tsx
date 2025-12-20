"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WorkflowNode {
    icon: LucideIcon;
    label: string;
    color: string;
}

interface MiniWorkflowProps {
    nodes: WorkflowNode[];
    className?: string;
    delay?: number;
}

export function MiniWorkflow({ nodes, className = "", delay = 0 }: MiniWorkflowProps) {
    return (
        <div className={`flex items-center gap-2 p-3 rounded-xl bg-deep-navy/80 border border-white/10 backdrop-blur-md shadow-xl ${className}`}>
            {nodes.map((node, i) => (
                <div key={i} className="flex items-center">
                    {/* Node */}
                    <div className="flex flex-col items-center gap-1 relative z-10">
                        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${node.color}`}>
                            <node.icon size={16} />
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">{node.label}</span>
                    </div>

                    {/* Connection Line (if not last) */}
                    {i < nodes.length - 1 && (
                        <div className="w-8 h-[2px] bg-white/10 relative mx-1 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-brand-green"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: delay + i * 0.5, // Stagger packet flow
                                    repeatDelay: 1
                                }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
