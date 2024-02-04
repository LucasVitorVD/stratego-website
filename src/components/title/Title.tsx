"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string
}

export default function Title({ text, className }: Props) {
  return (
    <p className={twMerge("relative font-montserrat_alt font-bold text-4xl", className)}>
      <motion.span
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        className="bg-highlightYellow h-[3px] w-full left-0 top-full rounded-xl absolute"
      />
      {text}
    </p>
  );
}
