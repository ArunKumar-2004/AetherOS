"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DashboardPreview() {
    return (
        <div className="relative max-w-6xl mx-auto px-4">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-violet-500/20 blur-[100px] -z-10 rounded-full opacity-50" />

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-panel rounded-3xl overflow-hidden border-white/20 p-2 shadow-2xl"
            >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                    <Image
                        src="/dashboard-preview.png"
                        alt="AetherOS Dashboard Preview"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full -z-10"
            />
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full -z-10"
            />
        </div>
    );
}
