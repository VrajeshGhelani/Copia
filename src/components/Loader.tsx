"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-700"
                >
                    <div className="relative flex flex-col items-center gap-8">
                        <div className="relative w-24 h-24">
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    duration: 1.5
                                }}
                                className="w-10 h-10 bg-primary rounded-full rounded-tr-none rotate-45 mx-auto shadow-premium"
                            />
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [0.5, 1.2, 1], opacity: [0.5, 0.2, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary/10 rounded-[100%] blur-xl"
                            />
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                className="text-3xl font-black text-primary tracking-[0.2em] uppercase italic"
                            >
                                COPIA WATER
                            </motion.h1>
                        </div>

                        <div className="w-48 h-[2px] bg-primary/10 relative overflow-hidden rounded-full">
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "100%" }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="absolute inset-0 w-1/2 h-full bg-primary"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
