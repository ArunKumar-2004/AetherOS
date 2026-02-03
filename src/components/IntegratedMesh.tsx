"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Github, Slack, Database, Cloud, Mail, Terminal, Shield, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

const integrations = [
    { icon: Github, name: "GitHub", color: "text-white" },
    { icon: Slack, name: "Slack", color: "text-[#4A154B]" },
    { icon: Database, name: "Supabase", color: "text-emerald-500" },
    { icon: Cloud, name: "AWS", color: "text-orange-400" },
    { icon: Mail, name: "Resend", color: "text-white" },
    { icon: Terminal, name: "Vercel", color: "text-white" },
    { icon: Shield, name: "Stripe", color: "text-blue-500" },
    { icon: Share2, name: "Linear", color: "text-violet-500" },
];

export default function IntegratedMesh() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="py-12 md:py-24 relative overflow-hidden">
            <SectionHeading
                title="The Integrated Mesh"
                subtitle="AetherOS orchestrates your entire stack through dynamic neural bridges."
            />

            <div className="max-w-4xl mx-auto px-4 relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                {/* Desktop/Tablet Orbit View */}
                {!isMobile && (
                    <div className="relative flex items-center justify-center w-full h-[300px] md:h-[400px]">
                        {/* Central Core */}
                        <div className="relative z-20">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    boxShadow: [
                                        "0 0 20px rgba(6, 182, 212, 0.2)",
                                        "0 0 50px rgba(6, 182, 212, 0.5)",
                                        "0 0 20px rgba(6, 182, 212, 0.2)"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-bold text-2xl md:text-3xl shadow-2xl relative"
                            >
                                Æ
                                <div className="absolute inset-0 rounded-3xl bg-white/10 blur-xl -z-10" />
                            </motion.div>
                        </div>

                        {/* Orbiting Icons */}
                        {integrations.map((item, i) => {
                            const angle = (i / integrations.length) * Math.PI * 2;
                            const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 120 : 160;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    animate={{
                                        x: [x, x + (Math.random() - 0.5) * 15, x],
                                        y: [y, y + (Math.random() - 0.5) * 15, y],
                                    }}
                                    transition={{
                                        x: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                                        y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                                        delay: i * 0.1,
                                        type: "spring"
                                    }}
                                    className="absolute z-10 p-3 md:p-4 rounded-xl md:rounded-2xl glass-panel border-white/10 flex items-center justify-center group hover:border-cyan-500/50 transition-colors"
                                    style={{
                                        left: `calc(50% + ${x}px - 24px)`,
                                        top: `calc(50% + ${y}px - 24px)`
                                    }}
                                >
                                    <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color} group-hover:scale-110 transition-transform`} />

                                    <div className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-cyan-500/20 to-transparent origin-left -rotate-180 -z-20 pointer-events-none group-hover:from-cyan-500/40"
                                        style={{
                                            transform: `rotate(${angle + Math.PI}rad)`,
                                            width: `${radius}px`,
                                            transformOrigin: '0 0'
                                        }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Mobile Grid View */}
                {isMobile && (
                    <div className="grid grid-cols-2 gap-3 w-full pb-8">
                        {integrations.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-panel p-4 rounded-xl flex items-center gap-3 border-white/5 bg-white/[0.02]"
                            >
                                <item.icon className={`w-5 h-5 ${item.color}`} />
                                <span className="text-sm font-medium text-slate-300">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-500/5 blur-[60px] md:blur-[100px] -z-10 rounded-full" />
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-white/5 rounded-full -z-10" />
            </div>
        </section>
    );
}
