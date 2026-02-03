"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface ThreeDLayerSectionProps {
    children: ReactNode;
    className?: string;
    index: number;
    isFirst?: boolean;
    id?: string;
}

export default function ThreeDLayerSection({ children, className, index, isFirst = false, id }: ThreeDLayerSectionProps) {
    const containerRef = useRef<HTMLElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: isFirst ? ["start start", "end start"] : ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Responsive 3D Layering Logic:
    const scaleValue = isMobile ? 1 : 0.97;
    const rotateValue = isMobile ? 5 : 8;
    const zValue = isMobile ? -30 : -75;
    const yValue = isMobile ? 20 : 30;

    const scale = useTransform(smoothProgress, [0, 0.45, 0.55, 1], isFirst ? [1, 1, 1, scaleValue] : [scaleValue, 1, 1, scaleValue]);
    const rotateX = useTransform(smoothProgress, [0, 0.45, 0.55, 1], isFirst ? [0, 0, 0, -rotateValue] : [rotateValue, 0, 0, -rotateValue]);
    const translateZ = useTransform(smoothProgress, [0, 0.45, 0.55, 1], isFirst ? [0, 0, 0, zValue] : [zValue, 0, 0, zValue]);
    const y = useTransform(smoothProgress, [0, 0.45, 0.55, 1], isFirst ? [0, 0, 0, -yValue] : [yValue, 0, 0, -yValue]);
    const opacity = useTransform(smoothProgress, [0, 0.08, 0.92, 1], isFirst ? [1, 1, 1, 0] : [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            id={id}
            className={`relative min-h-[50vh] md:min-h-[60vh] w-full flex items-center justify-center perspective-2000 py-4 md:py-8 ${className}`}
            style={{
                zIndex: 10 - index,
            }}
        >
            <motion.div
                style={{
                    scale,
                    rotateX,
                    z: translateZ,
                    y,
                    opacity,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full will-change-transform"
            >
                {children}
            </motion.div>
        </section>
    );
}
