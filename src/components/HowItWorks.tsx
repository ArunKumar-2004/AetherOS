"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import { MessageSquare, Cpu, Rocket } from "lucide-react";

const steps = [
    {
        title: "Intent Capture",
        description: "AetherOS bridges the gap between thought and command, translating natural language into actionable system parameters.",
        icon: MessageSquare,
        side: "left",
    },
    {
        title: "Neural Orchestration",
        description: "Multiple autonomous agents collaborate in real-time to decompose complex tasks into executable sub-routines.",
        icon: Cpu,
        side: "right",
    },
    {
        title: "Autonomous Execution",
        description: "The system executes actions across local and cloud environments with zero-latency synchronization.",
        icon: Rocket,
        side: "left",
    },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-12 md:py-24 relative overflow-hidden">
            <SectionHeading
                title="The Autonomous Pipeline"
                subtitle="Witness how AetherOS transforms intent into reality through three neural layers."
            />

            <div className="max-w-4xl mx-auto relative px-4">
                {/* Central Liquid Line - Responsive Positioning */}
                <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-px bg-white/10 md:-translate-x-1/2" />
                <motion.div
                    style={{ scaleY: pathLength, originY: 0 }}
                    className="absolute left-6 md:left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-cyan-500 to-violet-500 md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                />

                <div className="space-y-12 md:space-y-24 pl-12 md:pl-0">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full">
                                <motion.div
                                    initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : (step.side === 'left' ? -50 : 50) }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <GlassCard className="group hover:border-cyan-500/30 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                                                <step.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{step.title}</h3>
                                                <p className="text-slate-400 leading-relaxed text-sm">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            </div>

                            {/* Center Dot - Hidden on Mobile to save space */}
                            <div className="relative z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full glass-panel border-white/20 bg-slate-900 group">
                                <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]" />
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full border border-cyan-500/50"
                                />
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
