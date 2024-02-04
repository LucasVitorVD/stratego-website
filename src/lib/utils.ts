import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const staggerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      ease: "easeInOut", 
      duration: 0.5, 
      delay: index ? index * 0.2 : 0.2
    }
  }),
};