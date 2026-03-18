"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/CTA";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Loader } from "@/components/Loader";
import { SmoothScroll } from "@/components/SmoothScroll";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const products = [
    {
      price: 10,
      title: "Copia Essential",
      description: "Affordable purified drinking water for daily use and family hydration.",
      delay: 0.1
    },
    {
      price: 20,
      title: "Copia Premium",
      description: "Premium purified drinking water for better hydration and performance.",
      delay: 0.3
    }
  ];

  return (
    <SmoothScroll>
      <Loader />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="min-h-screen transition-colors duration-700">
        <Navbar />

        {/* Full Hero Section with Animations */}
        <Hero />

        {/* Dynamic Parallax Depth Section */}
        <ParallaxSection
          title="THE PURITY EXPERTS"
          subtitle="Advanced Technology"
          description="We use the most rigorous filtration processes to ensure every drop of Copia Water is refreshing, safe and delicious."
        />

        {/* Why Choose Copia Premium Grid */}
        <WhyChoose />

        {/* About Short Preview with Animated Depth */}
        <section className="py-12 md:py-20 px-6 relative overflow-hidden transition-colors duration-700">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 w-full"
            >
              <span className="inline-block px-8 py-2 bg-primary/5 rounded-full text-primary font-black text-xs tracking-[0.5em] uppercase italic border border-primary/20 shadow-soft">
                The Brand Story
              </span>
              <div className="flex flex-col mb-6 mt-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-2 uppercase italic leading-none transition-colors duration-700">
                  PURE WATER
                </h2>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary uppercase italic leading-none pt-2">
                  NO COMPROMISE
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl transition-colors duration-700">
                Copia Water provides clean and safe drinking water at affordable prices. We use state-of-the-art tech to ensure every bottle meets our rigorous national standards.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-black text-white px-8 py-4 rounded-full font-medium text-lg shadow-premium transition-all duration-500 flex items-center gap-3"
                >
                  READ MORE
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              className="flex-1 relative aspect-square w-full max-w-[600px] bg-white dark:bg-black/40 rounded-[4rem] shadow-premium overflow-hidden p-8 border border-gray-100 dark:border-white/10 transition-colors duration-700"
            >
              <div className="w-full h-full bg-primary/5 rounded-[3rem] flex items-center justify-center relative overflow-hidden group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px]"
                />
                <div className="relative z-10 text-primary/30 group-hover:scale-125 group-hover:text-primary transition-all duration-1000">
                  <svg className="w-48 h-48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C12 21 7 13 7 9.5C7 6.73858 9.23858 4.5 12 4.5C14.7614 4.5 17 6.73858 17 9.5C17 13 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional Products Showcase with Animated Reveal */}
        <section className="py-12 md:py-20 px-6 transition-colors duration-700 overflow-hidden" id="products">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-8 py-2 bg-primary/5 rounded-full text-primary font-black text-xs tracking-[0.5em] uppercase italic border border-primary/20 shadow-soft"
              >
                Our Hydration Range
              </motion.span>
              <div className="flex flex-col mb-6 mt-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-2 uppercase italic leading-none transition-colors duration-700">
                  ESSENTIAL
                </h2>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary uppercase italic leading-none pt-2">
                  HYDRATION
                </h2>
              </div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 max-w-3xl mx-auto transition-colors duration-700">
                Choose the size that fits your lifestyle. Our pure water is available in convenient packaging for your daily needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto justify-items-center">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Full Impact CTA Area */}
        <CTA />

        <Footer />
      </main>
    </SmoothScroll>
  );
}
