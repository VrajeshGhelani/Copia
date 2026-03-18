"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, Plus, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    price: number;
    title: string;
    description: string;
    delay?: number;
}

const ProductCard = ({ price, title, description, delay = 0 }: ProductCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
            whileHover={{ y: -15 }}
            className="group relative w-full max-w-[450px] bg-white dark:bg-black/40 rounded-[3rem] p-12 transition-all duration-700 hover:shadow-premium border border-primary/5 dark:border-white/5 hover:border-primary/20 dark:hover:border-white/20"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-700 rounded-[3rem] -z-10" />

            {/* Best Seller Badge */}
            <div className="absolute top-8 right-8">
                <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary hover:bg-black text-white px-3 py-1 rounded-full font-bold text-xs tracking-wider uppercase shadow-sm transition-colors"
                >
                    Best Seller
                </motion.span>
            </div>

            {/* Product Image Showcase */}
            <div className="relative w-full aspect-[2/3] max-h-[260px] mx-auto mb-8 flex items-center justify-center">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full relative"
                >
                    <div className="absolute inset-x-0 bottom-0 w-[200px] h-[30px] bg-black/5 rounded-full blur-xl mx-auto -z-10 group-hover:scale-125 group-hover:opacity-20 transition-all" />
                    <Image
                        src="/bottle.png"
                        alt={title}
                        fill
                        className="object-contain filter brightness-105 contrast-110 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight uppercase transition-colors duration-700">{title}</h3>
                    <div className="text-2xl font-bold text-primary leading-tight">₹{price}</div>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed pr-6 mb-6 transition-colors duration-700">
                    {description}
                </p>

                <div className="flex gap-4 pt-4">
                    <Link href="/contact" className="flex-1">
                        <button className="w-full bg-primary text-white py-4 rounded-2xl font-medium text-base shadow-md hover:bg-black transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group-btn">
                            Contact Us
                            <Plus className="w-5 h-5 group-btn-hover:rotate-180 transition-transform duration-500" />
                        </button>
                    </Link>
                    <button className="w-14 h-14 bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 rounded-2xl flex items-center justify-center transition-all duration-300 scale-100 active:scale-95 group-btn">
                        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Extreme Visual Polish */}
            <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
        </motion.div>
    );
};

export default ProductCard;
