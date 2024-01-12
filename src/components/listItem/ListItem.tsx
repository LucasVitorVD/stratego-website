"use client"

import { ComponentProps } from "react";
import { useInView } from "react-intersection-observer";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge"

type Props = ComponentProps<'li'> & VariantProps<typeof listItemVariants> & {}

const listItemVariants = tv({
  base: "flex items-center",
  variants: {
    variant: {
      default: "flex items-center",
      line: "flex w-full items-center after:content-[''] after:w-full after:h-[8px] after:border-white  after:border after:bg-white after:hidden md:after:inline-block after:relative after:bottom-[100px] after:animate-grow"
    },
  },
  defaultVariants: {
    variant: 'default',
    lineAnimation: 'none'
  }
})

export default function ListItem({ variant, ...props }: Props) {
  const { inView, ref } = useInView({
    threshold: 0.2,
  });

  return (
    <li 
      className={twMerge(listItemVariants({ variant }))}
      {...props}
      ref={ref}
    />
  )
}