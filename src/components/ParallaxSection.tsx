"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxSectionProps {
    title: string;
    subtitle: string;
    description: string;
}

export const ParallaxSection = ({ title, subtitle, description }: ParallaxSectionProps) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-32 px-6 flex items-center justify-center overflow-hidden bg-primary-light/10"
        >
            {/* Background Decorative Parallax Elements */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 will-change-transform"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 will-change-transform"
            />

            <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10 w-full px-4">
                <motion.div
                    style={{ opacity, scale }}
                    className="space-y-6"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 bg-white/50 backdrop-blur-xl border border-white/20 rounded-full text-primary font-black text-xs tracking-[0.4em] uppercase italic shadow-soft"
                    >
                        {subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-black text-black leading-tight tracking-tighter uppercase italic"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-3xl text-black/40 font-bold max-w-3xl mx-auto leading-relaxed italic"
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* Floating elements inside parallax */}
                <div className="flex flex-wrap justify-center gap-16 md:gap-32 pt-12">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, delay: i * 0.5 }}
                            className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-premium border border-white/40"
                        >
                            <div className="w-8 h-8 bg-primary rounded-full rounded-tr-none rotate-45 opacity-20" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Extreme Depth Element */}
            <motion.div
                style={{ y: y2 }}
                className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-[800px] bg-primary rounded-full blur-[150px] opacity-20"
            />
        </section>
    );
};
