"use client";

import { motion } from "framer-motion";

export default function ConductAside() {
  const blueSquare = "w-6 h-6 bg-primary-darkBlue inline-block ml-6"

  return (
    <aside className="hidden bg-highlightYellow text-primary-darkBlue text-[5rem] font-bold overflow-hidden lg:block">
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.2 }}
      >
        PO
      </motion.p>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3 }}
      >
        <p>SI</p>
        <span className={blueSquare}></span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        CIO
      </motion.p>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.5 }}
      >
        <p>NA</p>
        <span className={blueSquare}></span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.6 }}
      >
        MEN
      </motion.p>

      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.7 }}
      >
        <p>TO</p>
        <span className={blueSquare}></span>
      </motion.div>
    </aside>
  );
}
