"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 200]);
    const y2 = useTransform(scrollY, [0, 800], [0, -200]);
    const waveRef = useRef(null);

    useEffect(() => {
        if (waveRef.current) {
            gsap.to(waveRef.current, {
                x: "-=10%",
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }, []);

    // Letter animations
    const text = "COPIA WATER".split("");

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen pt-40 pb-24 px-6 flex items-center overflow-hidden bg-white"
        >
            {/* Parallax Background Shapes */}
            <motion.div style={{ y: y1 }} className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 will-change-transform" />
            <motion.div style={{ y: y2 }} className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 will-change-transform" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 w-full gap-16">
                {/* Left: Text Content */}
                <div className="flex-1 text-center md:text-left space-y-12 max-w-2xl px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full font-black text-sm tracking-[0.2em] uppercase italic border border-primary/20 shadow-soft"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        100% Purity Guaranteed
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-gray-900 flex flex-wrap justify-center md:justify-start mb-6 drop-shadow-md uppercase italic">
                            {text.map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.1 + i * 0.05,
                                        duration: 1.2,
                                        ease: [0.76, 0, 0.24, 1]
                                    }}
                                    className={char === " " ? "basis-full h-0" : `inline-block ${i >= 6 ? "text-primary" : "text-gray-900"}`}
                                >
                                    {char === " " ? "" : char}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-xl md:text-2xl text-primary font-bold mb-6 tracking-wide"
                        >
                            Pure Water. Pure Life.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 max-w-xl md:mx-0 mx-auto"
                        >
                            Ultra-purified, alkaline-rich, and crisp. Copia provides the hydration you deserve. Modern bottling for a modern life.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-8 justify-center md:justify-start pt-6"
                    >
                        <Link href="/products">
                            <button className="bg-primary hover:bg-black text-white px-8 py-4 rounded-full font-medium text-lg shadow-premium transition-all duration-500 hover:scale-105 active:scale-95 group flex items-center gap-3">
                                ORDER NOW
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-black font-medium text-lg transition-colors border-b border-transparent hover:border-black">
                            Contact Us
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Floating Product */}
                <div className="flex-1 relative flex justify-center items-center w-full min-h-[500px]">
                    {/* Animated Glow behind bottle */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                            rotate: [0, 45, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 100 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                        transition={{
                            duration: 2,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.8
                        }}
                        className="relative w-full max-w-[100px] md:max-w-[140px] lg:max-w-[180px] mx-auto"
                    >
                        <motion.div
                            animate={{
                                y: [0, -30, 0],
                                rotate: [-2, 2, -2],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="drop-shadow-[0_80px_100px_rgba(0,123,255,0.4)] filter brightness-110 contrast-110 will-change-transform"
                        >
                            <Image
                                src="/bottle.png"
                                alt="COPIA WATER Premium Bottle"
                                width={600}
                                height={1200}
                                className="w-full h-auto object-contain select-none"
                                priority
                            />
                        </motion.div>

                        {/* Visual indicator for floating */}
                        <motion.div
                            animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[50px] bg-primary/10 rounded-full blur-2xl -z-10"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[2px] h-24 bg-primary/10 relative overflow-hidden rounded-full">
                    <motion.div
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute w-full h-1/2 bg-primary"
                    />
                </div>
                <span className="text-primary font-black text-xs tracking-[0.3em] uppercase italic opacity-40">Scroll to Explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
