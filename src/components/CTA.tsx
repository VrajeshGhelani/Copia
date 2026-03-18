"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, ChevronRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-12 md:py-20 px-6 bg-black overflow-hidden relative flex items-center justify-center">
            {/* Background Decorative */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
                <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] bg-primary/30 rounded-full blur-[200px]"
                />
            </div>

            <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10 w-full">
                <div className="space-y-8">
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-8 py-3 bg-white/10 rounded-full text-white font-black text-xs tracking-[0.5em] uppercase italic border border-white/20 shadow-soft"
                    >
                        Start Your Journey
                    </motion.span>

                    <div className="flex flex-col space-y-4 py-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[1.1] text-white mb-2 uppercase italic"
                        >
                            Drink pure
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[1.1] text-primary uppercase italic"
                        >
                            stay healthy
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-base md:text-lg leading-relaxed text-gray-400 max-w-4xl mx-auto mb-4"
                    >
                        Join thousands of happy customers who trust Copia Water for their daily hydration needs. Experience the difference of ultra-pure water.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-8 justify-center pt-8"
                >
                    <Link href="/contact">
                        <button className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-3 rounded-full font-medium text-lg shadow-2xl transition-all duration-700 hover:scale-105 active:scale-95 group-btn flex items-center gap-3">
                            CONTACT NOW
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-700" />
                        </button>
                    </Link>
                    <Link href="/products" className="group">
                        <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium text-lg border border-white/20 hover:border-white transition-all duration-700 active:scale-95 flex items-center gap-3">
                            VIEW PRODUCTS
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-700" />
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Floating Elements visual polish */}
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        rotate: [0, 20, 0]
                    }}
                    transition={{ duration: 7 + i, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute w-12 h-12 bg-white/5 rounded-2xl border border-white/10 blur-sm -z-10"
                    style={{
                        top: `${(i * 15) + 10}%`,
                        left: `${(i % 2 === 0 ? 10 : 85) + (i * 2)}%`
                    }}
                />
            ))}
        </section>
    );
};

export default CTA;
