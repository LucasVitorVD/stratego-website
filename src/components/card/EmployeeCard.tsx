"use client"

import { UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { staggerAnimation } from "@/lib/utils";

interface Props {
  name: string,
  activity: string,
  index?: number
}

export default function EmployeeCard({ name, activity, index }: Props) {
  return (
    <motion.div 
      className="flex flex-col items-center gap-4"
      variants={staggerAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex items-center justify-center h-64 w-64 rounded-full bg-gray-400">
        <UserRound size={150} />
      </div>
      <div className="text-center text-xl font-bold font-montserrat_alt">
        <p>{name}</p>
        <p className="text-highlightYellow w-[196px]">{activity}</p>
      </div>
    </motion.div>
  );
}
