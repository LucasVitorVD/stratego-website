"use client";

import { CountUp } from "use-count-up";
import { motion } from "framer-motion";

interface Props {
  end: number;
  duration?: number;
  highlight?: boolean;
  plusIcon?: boolean;
}

export default function Counter({
  end,
  duration = 3,
  highlight,
  plusIcon,
}: Props) {
  return (
    <motion.span
      data-highlight={highlight}
      className="data-[highlight=true]:text-highlightYellow text-6xl font-bold"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
    >
      {plusIcon && <span>+</span>}
      <CountUp isCounting={true} start={0} end={end} duration={duration} />
    </motion.span>
  );
}
