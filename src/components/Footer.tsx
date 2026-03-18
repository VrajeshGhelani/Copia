"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
    const socialStyles = "w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-700 hover:scale-110 hover:rotate-12";

    return (
        <footer className="bg-black pt-20 pb-10 px-6 relative overflow-hidden">
            {/* Background Depth Effects */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -z-0"
            />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
                    {/* Brand Info */}
                    <div className="space-y-10">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <img
                                src="/logo.png"
                                alt="Copia Water"
                                className="w-32 md:w-40 h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-base text-gray-400 leading-relaxed pr-8">
                            Pure Water. Pure Life. <br />
                            Experience the pinnacle of hydration with Copia. Delivered fresh, bottled with perfection.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className={socialStyles}><Instagram size={28} /></Link>
                            <Link href="#" className={socialStyles}><Facebook size={28} /></Link>
                            <Link href="#" className={socialStyles}><MessageCircle size={28} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Discover</h4>
                        <ul className="space-y-4 text-base">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">Home <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">About Us <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">Products <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">Contact <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Get Help</h4>
                        <ul className="space-y-6 text-base">
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><Phone size={20} /></div>
                                <span className="text-gray-400">+91 98254 62685</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><Mail size={20} /></div>
                                <span className="text-gray-400 hover:text-white transition-colors">info@copiawater.com</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><MapPin size={20} /></div>
                                <span className="text-gray-400">Karnal, Gujarat, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Join The Wave Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
                        <p className="text-base text-gray-400 mb-6">
                            Subscribe to stay updated on the latest purity standards and hydration tips.
                        </p>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary outline-none text-white font-medium text-base transition-all"
                            />
                            <button className="w-full bg-primary hover:bg-white hover:text-primary text-white py-3 rounded-xl font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 group-btn">
                                Subscribe
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2024 Copia Water. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
