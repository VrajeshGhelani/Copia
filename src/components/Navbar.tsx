"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-700 ease-in-out border-b border-white/0",
                scrolled ? "bg-white/70 backdrop-blur-2xl py-4 border-white-300 shadow-premium" : "bg-transparent py-8"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Copia Water"
                        className="w-28 md:w-32 h-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-12 items-center font-bold tracking-tight">
                    {navLinks.map((link, idx) => (
                        <Link key={link.name} href={link.href} className="relative group">
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                className="text-gray-700 hover:text-gray-900 transition-colors text-base font-medium tracking-normal"
                            >
                                {link.name}
                            </motion.span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                        </Link>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="ml-6 flex items-center gap-4"
                    >
                        <ThemeToggle />
                        <button className="bg-primary hover:bg-black text-white px-6 py-2.5 rounded-full font-medium shadow-md transition-all duration-300 scale-100 active:scale-95 group flex items-center gap-2">
                            Order Now
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black bg-white/40 p-2 rounded-xl backdrop-blur-md">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                        className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-[-1] flex flex-col justify-center items-center text-center p-6"
                    >
                        <div className="flex flex-col gap-6 font-semibold text-2xl tracking-normal text-gray-900">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-900 hover:text-primary transition-colors"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-primary hover:bg-black text-white px-8 py-3 rounded-full font-medium text-lg shadow-md mt-4 transition-all"
                            >
                                Order Now
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
