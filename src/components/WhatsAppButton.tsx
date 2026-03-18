"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="fixed bottom-10 right-10 z-[100]"
        >
            <motion.button
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative group"
            >
                <MessageCircle size={32} />
                <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-x-[-10px] inset-y-[-10px] bg-[#25D366]/30 rounded-full -z-10"
                />
                <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap italic uppercase tracking-widest">
                    Message Us
                </span>
            </motion.button>
        </motion.div>
    );
};
