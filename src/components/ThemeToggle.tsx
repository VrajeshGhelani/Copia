"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 shadow-soft relative overflow-hidden"
        >
            <motion.div
                initial={false}
                animate={{ y: theme === "dark" ? 40 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute"
            >
                <Sun size={24} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ y: theme === "dark" ? 0 : -40 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute"
            >
                <Moon size={24} />
            </motion.div>
        </motion.button>
    );
};
