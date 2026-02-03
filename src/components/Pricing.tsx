"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import SpotlightButton from "./ui/SpotlightButton";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
    {
        name: "Nebula",
        price: "$0",
        description: "Perfect for exploring the liquid interface.",
        features: ["Single Node access", "Standard neural kernel", "Community support", "Basic mesh sync"],
        cta: "Start for Free",
        popular: false,
    },
    {
        name: "Aether Pro",
        price: "$29",
        description: "Unlock the full potential of autonomous agents.",
        features: ["Unlimited Nodes", "Pro neural kernel (2x faster)", "Priority mesh network", "Advanced system tools", "24/7 Neuron support"],
        cta: "Join Pro Beta",
        popular: true,
    },
    {
        name: "Quantum",
        price: "$99",
        description: "The ultimate edge for enterprise-grade automation.",
        features: ["Custom mesh architecture", "Dedicated GPU clusters", "On-prem availability", "Quantum-safe encryption", "Dedicated architect"],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Scale Your Intelligence"
                    subtitle="Simple, transparent pricing for the next generation of computing."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <GlassCard
                                className={cn(
                                    "h-full flex flex-col p-8 border-white/5",
                                    tier.popular && "bg-white/10 border-white/20 scale-105 hover:scale-[1.07] transition-transform duration-300 shadow-xl shadow-cyan-500/10"
                                )}

                            >


                                {tier.popular && (
                                    <div className="mb-6 flex justify-between items-start">
                                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    <span className="text-slate-500">/month</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-8">{tier.description}</p>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {tier.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="shrink-0 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-cyan-400" />
                                            </div>
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <SpotlightButton
                                    className={cn(
                                        "w-full py-3",
                                        tier.popular ? "bg-gradient-to-r from-cyan-600 to-violet-600 border-none font-bold" : "bg-white/5"
                                    )}
                                >
                                    {tier.cta}
                                </SpotlightButton>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
