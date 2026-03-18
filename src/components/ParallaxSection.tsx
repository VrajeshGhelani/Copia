"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Filter, Sun, Sparkles, CheckCircle2 } from "lucide-react";

interface ParallaxSectionProps {
    title: string;
    subtitle: string;
    description: string;
}

const Card = ({ icon: Icon, title, description, delay = 0, i }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? 2 : -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
        whileHover={{ y: -20, scale: 1.02 }}
        className="relative group bg-white dark:bg-black/40 p-6 md:p-8 rounded-[2rem] shadow-soft hover:shadow-premium transition-all duration-700 border border-gray-100 dark:border-white/10 overflow-hidden flex flex-col items-center text-center max-w-sm mx-auto w-full"
    >
        {/* Gradient Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-1000 -z-10 blur-xl" />

        <div className="w-24 h-24 bg-white dark:bg-black/40 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-premium border border-primary/10 group-hover:scale-[1.15] scale-100 group-hover:rotate-[-12deg] relative z-10">
            <Icon size={48} strokeWidth={2.5} />
        </div>

        <div className="space-y-4 relative z-10 w-full flex-1 flex flex-col justify-center mt-6 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-700">{title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-700">
                {description}
            </p>
        </div>

        <div className="absolute bottom-6 right-6 p-2 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-700 shadow-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 shadow-lg">
            <CheckCircle2 size={24} />
        </div>
    </motion.div>
);

export const ParallaxSection = ({ title, subtitle, description }: ParallaxSectionProps) => {
    const containerRef = useRef(null);

    const processes = [
        {
            icon: Filter,
            title: "Reverse Osmosis",
            description: "Advanced filtration removing 99.9% of dissolved solids and chemical contaminants from the source."
        },
        {
            icon: Sun,
            title: "UV Sterilization",
            description: "360-degree ultraviolet light exposure to instantly destroy any floating biological pathogens."
        },
        {
            icon: Sparkles,
            title: "Ozonation Phase",
            description: "Ozone injection providing a zero-residue purification cycle extending the water's natural shelf life."
        }
    ];

    return (
        <section
            ref={containerRef}
            className="py-12 md:py-20 px-6 transition-colors duration-700 overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-8 py-2 bg-primary/5 rounded-full text-primary font-black text-xs tracking-[0.5em] uppercase italic border border-primary/20 shadow-soft"
                    >
                        {subtitle}
                    </motion.span>
                    <div className="flex flex-col mb-6 mt-6">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-2 uppercase italic leading-none transition-colors duration-700">
                            THE PURITY
                        </h2>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary uppercase italic leading-none pt-2">
                            EXPERTS
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-700"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch relative z-10">
                    {processes.map((process, idx) => (
                        <Card
                            key={process.title}
                            {...process}
                            delay={idx * 0.1}
                            i={idx}
                        />
                    ))}
                </div>
            </div>

            {/* Visual Depth Background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/10 rounded-full blur-[250px] -z-10"
            />
        </section>
    );
};
