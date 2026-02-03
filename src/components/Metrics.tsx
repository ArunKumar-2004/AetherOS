"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { label: "Active Nodes", value: 12400, suffix: "+" },
    { label: "Neural Latency", value: 0.45, suffix: "ms", decimals: 2 },
    { label: "Daily Tasks", value: 2.8, suffix: "M" },
    { label: "Safety Rating", value: 99.9, suffix: "%" },
];

function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const steps = 60;
            const increment = end / steps;
            const stepTime = duration / steps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setDisplayValue(end);
                    clearInterval(timer);
                } else {
                    setDisplayValue(start);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{displayValue.toFixed(decimals)}</span>;
}

export default function Metrics() {
    return (
        <section className="py-24 border-y border-white/5 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                                <CountUp value={stat.value} decimals={stat.decimals} />
                                <span className="text-cyan-500 font-light">{stat.suffix}</span>
                            </div>
                            <div className="text-slate-500 font-medium tracking-wide uppercase text-xs md:text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
