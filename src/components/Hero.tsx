"use client";

import { motion } from "framer-motion";
import SpotlightButton from "./ui/SpotlightButton";
import Magnetic from "./ui/Magnetic";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-20 pb-10 md:pt-24 md:pb-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        AetherOS v2.0 is now in private beta
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8"
                    >
                        Experience the <br className="hidden md:block" />
                        <span className="text-gradient">Liquid Intelligence.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 md:px-0"
                    >
                        The world's first autonomous AI Operating System designed for the
                        next era of human-computer interaction. Seamless. Fluent. Liquid.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
                    >
                        <Magnetic>
                            <SpotlightButton className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold bg-gradient-to-r from-cyan-600 to-violet-600 border-none shadow-xl shadow-cyan-500/20 tracking-tight">
                                Join the Waitlist
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                            </SpotlightButton>
                        </Magnetic>
                        <button className="text-slate-300 hover:text-white font-medium transition-all hover:translate-x-1 flex items-center gap-2 group py-2">
                            Explore Documentation
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
