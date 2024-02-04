"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerAnimation } from "@/lib/utils";

interface Props {
  coverImage: string;
  title: string;
  id: string | number;
  index?: number
}

export default function PostCard({ coverImage, title, id, index }: Props) {
  return (
    <motion.div 
      className="flex flex-col gap-4 w-80"
      variants={staggerAnimation}
      initial="initial"
      animate="animate"
      custom={index}
    >
      <figure>
        <Image
          src={coverImage}
          alt="Imagem da capa do blog"
          width={350}
          height={350}
        />
      </figure>
      <div className="flex flex-col gap-4">
        <Link
          href={`/blog/post/${id}`}
          className="text-sm font-bold capitalize text-pretty hover:underline"
        >
          {title}
        </Link>
        <Link href={`/blog/post/${id}`} className="nav text-sm text-highlightYellow font-bold">
          Ler mais
        </Link>
      </div>
    </motion.div>
  );
}
