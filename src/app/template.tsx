"use client";

import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5
            }}
        >
            {children}
        </motion.div>
    );
}
