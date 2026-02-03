"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "./ui/SectionHeading";

const logLines = [
    "INITIALIZING AETHER KERNEL V2.0.4...",
    "MOUNTING NEURAL VOLUMES [OK]",
    "ESTABLISHING SYNESTHETIC LINK... [CONNECTED]",
    "CORE ORCHESTRATOR: ONLINE",
    "DECODING INTENT PACKETS...",
    "MAPPING AUTONOMOUS NODES...",
    "THREAT VECTOR SCAN: 0 VULNERABILITIES FOUND",
    "OPTIMIZING LIQUID INTERFACE...",
    "READY FOR OPERATOR COMMAND.",
    "SYNCING WITH GLOBAL MESH...",
    "MEM_ALLOC: 4.2TB NEURAL_SHARDS",
    "KERN_STABILITY: 100.00%",
    "ENCRYPTING BACKEND TUNNEL... [SECURE]",
];

export default function KernelLogs() {
    const [visibleLines, setVisibleLines] = useState<string[]>([]);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        let currentLine = 0;
        setVisibleLines([]);

        const interval = setInterval(() => {
            if (currentLine < logLines.length) {
                setVisibleLines(prev => [...prev, logLines[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
                // Pause at the end, then reset
                setTimeout(() => {
                    setTick(t => t + 1); // Trigger re-run
                }, 4000);
            }
        }, 600);

        return () => clearInterval(interval);
    }, [tick]);

    return (
        <section className="py-12 md:py-24 relative overflow-hidden">
            <SectionHeading
                title="Low-Level Kernel"
                subtitle="High-level intelligence meets low-level performance. The raw truth behind the interface."
            />

            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel rounded-2xl border-white/10 overflow-hidden shadow-2xl relative"
                >
                    {/* Terminal Header */}
                    <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                            Aether_Kernel_System_v2.0.4
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 md:p-6 font-mono text-[10px] md:text-sm h-[280px] md:h-[320px] overflow-hidden bg-slate-950/40 section-scrollbar overflow-y-auto">
                        <div className="space-y-1 md:space-y-1.5">
                            {visibleLines.map((line, i) => (
                                <motion.div
                                    key={i + tick * 100}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex gap-2 md:gap-3"
                                >
                                    <span className="text-slate-600 shrink-0">[{new Date().toLocaleTimeString('en-US', { hour12: false })}]</span>
                                    <span className={line && (line.includes('[OK]') || line.includes('[CONNECTED]') || line.includes('ONLINE')) ? "text-cyan-400 font-bold" : "text-slate-300"}>
                                        {line}
                                    </span>
                                </motion.div>
                            ))}
                            <motion.div
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-1.5 md:w-2 h-3 md:h-4 bg-cyan-500 inline-block ml-1"
                            />
                        </div>
                    </div>

                    {/* Ambient scanlines effect */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20" />
                </motion.div>
            </div>
        </section>
    );
}
