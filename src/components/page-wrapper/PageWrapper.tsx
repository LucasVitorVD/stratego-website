"use client";

import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function PageWrapper({ className, children }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className={twMerge("overflow-hidden", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, y: -20 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
