"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Lead Architect at Cyberdyne",
        content: "AetherOS has fundamentally changed how we handle system orchestration. The neural kernel is unlike anything I've seen.",
        avatar: "SC",
    },
    {
        name: "Marcus Thorne",
        role: "Senior Ops Engineer",
        content: "The autonomous execution pipeline reduced our deployment latency by 94%. It's not just an OS; it's a collaborator.",
        avatar: "MT",
    },
    {
        name: "Elena Rodriguez",
        role: "Head of Product",
        content: "Seamless, fluent, and incredibly powerful. The 3D UI isn't just eye candy; it makes complex systems intuitive.",
        avatar: "ER",
    },
    {
        name: "David Park",
        role: "Security Researcher",
        content: "The zero-trust neural architecture built into the kernel provides a level of security that was previously impossible.",
        avatar: "DP",
    }
];

export default function TestimonialsConstellation() {
    return (
        <section className="py-24 relative overflow-hidden">
            <SectionHeading
                title="Neural Feedback"
                subtitle="Voices from the frontier of human-computer collaboration."
            />

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <GlassCard className="h-full border-white/5 hover:border-cyan-500/30 group transition-all duration-500">
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white transition-colors group-hover:text-cyan-400">{t.name}</h4>
                                            <p className="text-slate-500 text-xs">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-400 italic leading-relaxed relative z-10">
                                    "{t.content}"
                                </p>
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21V10C14.017 8.89543 14.9124 8 16.017 8H19.017C20.1216 8 21.017 8.89543 21.017 10V18C21.017 19.1046 20.1216 20 19.017 20H16.017C14.9124 20 14.017 19.1046 14.017 18M3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 21V10C3 8.89543 3.89543 8 5 8H8C9.10457 8 10 8.89543 10 10V18C10 19.1046 9.10457 20 8 20H5C3.89543 20 3 19.1046 3 18" />
                                    </svg>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
