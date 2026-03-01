"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Loader } from "@/components/Loader";

const AboutPage = () => {
    return (
        <SmoothScroll>
            <Loader />
            <main className="min-h-screen bg-white">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-12 md:pb-20 px-6 bg-primary-light/10 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-8 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6"
                        >
                            The Brand Journey
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6"
                        >
                            Our Story
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4"
                        >
                            Founded with a mission to redefine pure hydration, Copia Water is more than just a brand—it's a commitment to health and excellence.
                        </motion.p>
                    </div>
                </section>

                <section className="py-12 md:py-20 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary p-8 md:p-12 rounded-[2rem] shadow-premium relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                                <div className="w-24 h-24 bg-white rounded-full" />
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">Our Mission</h3>
                            <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                To provide clean, safe, and ultra-purified drinking water to everyone while maintaining the highest precision in filtration and bottling technology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black p-8 md:p-12 rounded-[2rem] shadow-premium relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-1000 text-primary">
                                <div className="w-24 h-24 bg-primary rounded-full" />
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">Our Vision</h3>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                To become the global leader in hydration, setting an unbreakable standard for purity, sustainability, and trust for generations to come.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Story Content with Depth */}
                <section className="py-12 md:py-20 px-6 bg-white overflow-hidden relative">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900 text-center mb-12">
                                Purity <span className="text-primary italic">perfected</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Copia Water began with a simple but revolutionary idea: that nature's most vital resource deserves the world's most advanced care.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Our journey has been one of relentless innovation. From multi-stage reverse osmosis to specialized ozone treatment, we ensure that every bottle of Copia Water is more than just water—it's a masterpiece of purity.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Today, Copia stands as a symbol of trust for millions. Our state-of-the-art bottling facilities are designed to mirror the cleanliness of a laboratory, ensuring zero contamination from source to consumer.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <CTA />
                <Footer />
            </main>
        </SmoothScroll>
    );
};

export default AboutPage;
