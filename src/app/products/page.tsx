"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/CTA";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Loader } from "@/components/Loader";

const ProductsPage = () => {
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
                            The Essential Collection
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6"
                        >
                            Hydration Range
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                        >
                            Tailored for your lifestyle. Discover our premium bottled water collection designed for absolute purity.
                        </motion.p>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-12 md:py-20 px-6 bg-white overflow-hidden relative">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
                        {products.map((product) => (
                            <ProductCard key={product.title} {...product} />
                        ))}
                    </div>
                </section>

                <CTA />
                <Footer />
            </main>
        </SmoothScroll>
    );
};

export default ProductsPage;
