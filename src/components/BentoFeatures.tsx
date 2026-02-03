"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import { Brain, Zap, Shield, Globe, Cpu, Layers } from "lucide-react";

const features = [
    {
        title: "Neural Architecture",
        description: "Built on a custom neural kernel that adapts to your workflow in real-time.",
        icon: Brain,
        className: "md:col-span-2",
    },
    {
        title: "Instant Latency",
        description: "Sub-millisecond response times for all system actions.",
        icon: Zap,
        className: "md:col-span-1",
    },
    {
        title: "Quantum Security",
        description: "End-to-end encryption with post-quantum algorithms.",
        icon: Shield,
        className: "md:col-span-1",
    },
    {
        title: "Global Mesh",
        description: "Synchronize state across every device instantly via a decentralized mesh network.",
        icon: Globe,
        className: "md:col-span-2",
    },
    {
        title: "Autonomous Agents",
        description: "Native support for LLM-driven agents that can operate system tools.",
        icon: Cpu,
        className: "md:col-span-1",
    },
    {
        title: "Liquid Interface",
        description: "UI elements that flow and adapt based on intent and context.",
        icon: Layers,
        className: "md:col-span-2",
    },
];

export default function BentoFeatures() {
    return (
        <section id="features" className="py-24 bg-slate-950/50">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Designed for Autonomy"
                    subtitle="Every feature is engineered to remove friction between human intent and computer execution."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Card 1: Neural Architecture (Large, Icon Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2"
                    >
                        <GlassCard className="h-full overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] -mr-20 -mt-20 rounded-full" />
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 shrink-0">
                                    <Brain className="w-12 h-12 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">Neural Architecture</h3>
                                    <p className="text-slate-400 leading-relaxed text-lg">
                                        Built on a custom neural kernel that adapts to your workflow in real-time.
                                        The system learns from your patterns to anticipate your next move.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Card 2: Instant Latency (Small, Centered) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <GlassCard className="h-full text-center flex flex-col items-center justify-center py-10">
                            <div className="p-3 rounded-full bg-amber-500/20 mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8 text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Instant Latency</h3>
                            <p className="text-slate-400 text-sm">
                                Sub-millisecond response <br /> across all system actions.
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Card 3: Quantum Security (Small, Top Icon) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="h-full border-b-violet-500/30">
                            <Shield className="w-10 h-10 text-violet-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3 text-white">Quantum Security</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                End-to-end encryption using post-quantum modular lattice algorithms.
                                Unbreakable by design.
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Card 4: Global Mesh (Large, Bottom Content) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2"
                    >
                        <GlassCard className="h-full flex flex-col justify-between group">
                            <div className="flex justify-between items-start mb-12">
                                <Globe className="w-10 h-10 text-blue-400" />
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-white">Global Mesh Network</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Synchronize state across every device instantly via a decentralized autonomous
                                    mesh network. No central servers, no single point of failure.
                                </p>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Card 5: Autonomous Agents (Small, Dark Border) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassCard className="h-full bg-cyan-950/10 hover:bg-cyan-900/20 transition-colors">
                            <Cpu className="w-10 h-10 text-cyan-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3 text-white">Autonomous Agents</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Native support for LLM-driven agents that can operate system tools and perform complex
                                multi-step tasks.
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Card 6: Liquid Interface (Large, Gradient Background) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-2"
                    >
                        <GlassCard className="h-full relative overflow-hidden group">
                            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/10 to-transparent -z-10" />
                            <div className="md:pr-40">
                                <Layers className="w-10 h-10 text-pink-400 mb-6" />
                                <h3 className="text-2xl font-bold mb-3 text-white">Liquid Interface</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    UI elements that flow and adapt based on intent and context.
                                    The interface is never static; it transforms to provide the exact
                                    tools you need at the moment you need them.
                                </p>
                            </div>
                            <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-2">
                                {[1, 0.6, 0.3].map((op, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-xl glass-panel border-white/20 translate-x-4 group-hover:translate-x-0 transition-transform"
                                        style={{ opacity: op, transitionDelay: `${i * 100}ms` }}
                                    />
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

