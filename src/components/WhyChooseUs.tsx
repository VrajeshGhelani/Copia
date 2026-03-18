"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Droplets, Banknote, Award } from 'lucide-react';

const Card = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="bg-white dark:bg-black/40 p-8 rounded-3xl shadow-soft hover:shadow-premium transition-all duration-300 border border-primary-light dark:border-white/10 flex flex-col items-center text-center space-y-4 group"
    >
        <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
            <Icon size={32} strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-bold text-primary-dark dark:text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-primary-dark/60 dark:text-gray-300 font-medium leading-relaxed">{description}</p>
    </motion.div>
);

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Droplets,
            title: "100% Pure Water",
            description: "Purified using advanced reverse osmosis, UV sterilization, and ozonation processes."
        },
        {
            icon: ShieldCheck,
            title: "Hygienic Packaging",
            description: "Bottled in a clean, state-of-the-art facility ensuring maximum safety and quality."
        },
        {
            icon: Banknote,
            title: "Affordable Pricing",
            description: "Premium drinking water at competitive prices, making health accessible to all."
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            description: "Timely doorstep delivery across the city, because your hydration can't wait."
        },
        {
            icon: Award,
            title: "Quality Tested",
            description: "Regularly tested to meet national standards, ensuring consistency in every drop."
        }
    ];

    return (
        <section className="py-24 px-6 transition-colors duration-700 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-primary-dark dark:text-white transition-colors duration-700"
                    >
                        Setting The Standard <br />
                        For <span className="text-primary">Pure Hydration</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-primary-dark/60 dark:text-gray-300 font-medium leading-relaxed transition-colors duration-700"
                    >
                        At Copia Water, we believe that access to clean drinking water is a fundamental right. We ensure every drop we provide is pure, safe, and refreshing.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {reasons.map((reason, idx) => (
                        <Card
                            key={reason.title}
                            {...reason}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
