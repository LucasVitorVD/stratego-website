"use client"

import Image from "next/image";
import Link from "next/link";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  setOpenModal?: React.Dispatch<boolean>
}

const linkVariants = tv({
  base: "relative text-primary-textPrimary text-lg font-bold",
  variants: {
    variant: {
      default: "nav text-primary-textPrimary text-lg font-bold",
      logo: "hidden md:block",
      highlighted: "nav text-highlightYellow text-lg font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface LinkProps {
  href: string,
  content: string | React.ReactNode,
  variant: "default" | "logo" | "highlighted" | undefined,
}

const links: LinkProps[] = [
  {
    href: "/",
    content: "INÍCIO",
    variant: "default",
  },
  {
    href: "/sobre",
    content: "QUEM SOMOS",
    variant: "default",
  },
  {
    href: "/",
    content: (
      <Image src="/images/logo1.png" width={35} height={35} alt="Logo" />
    ),
    variant: "logo",
  },
  {
    href: "/blog",
    content: "ACESSE O BLOG",
    variant: "highlighted",
  },
  {
    href: "/contato",
    content: "FALE CONOSCO",
    variant: "highlighted",
  },
];

export default function Nav({ setOpenModal }: Props) {
  const path = usePathname()

  return (
    <nav className="w-full mt-10 md:mt-0 md:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-around md:gap-0">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={twMerge(linkVariants({ variant: link.variant }))}
            onClick={() => setOpenModal!(false)}
          >
            {link.href === path && typeof link.content === "string" && (
              <motion.span 
                className="bg-highlightYellow h-[3px] w-full left-0 top-full rounded-xl absolute" 
                layoutId="underline"
              />
            )}
            {link.content}
          </Link>
        ))}
      </div>
    </nav>
  );
}
