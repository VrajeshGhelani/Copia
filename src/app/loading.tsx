"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center space-y-6">
            <div className="relative w-24 h-24">
                {/* Animated Ripple Effect */}
                <motion.div
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-primary/20 rounded-full"
                />
                <motion.div
                    animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    className="absolute inset-0 bg-primary/30 rounded-full"
                />
                {/* Core Drop Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="w-8 h-8 bg-primary rounded-full rounded-tr-none rotate-45 shadow-sm"
                    />
                </div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-primary font-bold tracking-widest text-lg animate-pulse"
            >
                PURIFYING...
            </motion.p>
        </div>
    );
};

export default Loading;
