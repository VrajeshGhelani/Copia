"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Loader } from "@/components/Loader";

const ContactPage = () => {
    // Premium Form States
    const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, text: string }>({ type: null, text: '' });

    // Handle interactive dynamic binding
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Submitting with graceful animations and safety checks
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, text: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'API Rejection Error');

            setStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
            setFormData({ fullName: '', email: '', phone: '', message: '' });
        } catch (error: any) {
            setStatus({ type: 'error', text: error.message || 'Oops! Something went wrong. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <SmoothScroll>
            <Loader />
            <main className="min-h-screen transition-colors duration-700">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-12 md:pb-20 px-6 bg-primary-light/10 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-8 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6"
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white mb-6 transition-colors duration-700"
                        >
                            Contact Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto transition-colors duration-700"
                        >
                            Have a bulk order or just want to chat? We are here to ensure your hydration journey is seamless.
                        </motion.p>
                    </div>
                </section>

                {/* Contacts Grid */}
                <section className="py-12 md:py-20 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Contact Info Info Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 transition-colors duration-700">Let's talk</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-6 group">
                                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-105">
                                            <Phone size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-700">Phone</h4>
                                            <p className="text-base text-gray-600 dark:text-gray-300 transition-colors duration-700">+91 98254 62685</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6 group">
                                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-105">
                                            <Mail size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-700">Email</h4>
                                            <p className="text-base text-gray-600 dark:text-gray-300 transition-colors duration-700">info@copiawater.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-6 group">
                                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-105">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-700">Location</h4>
                                            <p className="text-base text-gray-600 dark:text-gray-300 transition-colors duration-700">Karnal, Gujarat, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary p-8 md:p-12 rounded-[2rem] border border-white/20 relative overflow-hidden group shadow-premium">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <MessageCircle size={80} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    Quick Support?
                                </h3>
                                <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 pr-8">
                                    Message us on WhatsApp for instant orders or queries. We're online 24/7.
                                </p>
                                <button className="w-full bg-white hover:bg-gray-50 text-primary font-medium py-4 rounded-full flex items-center justify-center gap-3 shadow-lg hover:scale-105 active:scale-95 transition-all text-lg">
                                    WHATSAPP NOW
                                    <MessageCircle size={24} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-black/40 p-8 md:p-12 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-soft relative overflow-hidden transition-colors duration-700"
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 transition-colors duration-700">Send a message</h2>
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-700">Fill the form below and our pure water experts will get in touch.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Smooth Premium Notification Banner */}
                                <AnimatePresence>
                                    {status.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={`p-4 rounded-xl font-medium flex items-center gap-3 transition-colors ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}
                                        >
                                            {status.type === 'success' ? (
                                                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                            {status.text}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 mb-2 block tracking-wide transition-colors duration-700">FULL NAME *</label>
                                        <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-gray-900 dark:text-white font-medium transition-all text-base shadow-sm" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 mb-2 block tracking-wide transition-colors duration-700">PHONE *</label>
                                        <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 1234567890" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-gray-900 dark:text-white font-medium transition-all text-base shadow-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 mb-2 block tracking-wide transition-colors duration-700">EMAIL <span className="text-gray-400 font-normal lowercase">(For our auto-reply)</span></label>
                                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-gray-900 dark:text-white font-medium transition-all text-base shadow-sm" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1 mb-2 block tracking-wide transition-colors duration-700">MESSAGE *</label>
                                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="How can we help you stay hydrated?" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-gray-900 dark:text-white font-medium transition-all text-base shadow-sm resize-none"></textarea>
                                </div>
                                <button disabled={isSubmitting} type="submit" className="w-full bg-primary hover:bg-black text-white font-medium py-4 rounded-full shadow-lg transition-all duration-300 text-lg flex items-center justify-center gap-3 mt-8 hover:scale-105 active:scale-95 group disabled:opacity-70 disabled:hover:scale-100 disabled:active:scale-100 disabled:cursor-not-allowed">
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            SUBMIT REQUEST
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                {/* Dynamic Map Area */}
                <section className="py-12 md:py-20 px-6 bg-primary-light/5">
                    <div className="max-w-7xl mx-auto space-y-12 text-center w-full">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-700">Find Us</h2>
                        <div className="w-full h-[500px] bg-white dark:bg-black/40 rounded-[2rem] shadow-premium overflow-hidden relative border border-gray-100 dark:border-white/10 group transition-colors duration-700">
                            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                <p className="text-2xl font-semibold text-primary">Map view</p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505!2d76!3d29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDMyJzU1LjUiTiA3NsKwMzInMzUuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
};

export default ContactPage;
