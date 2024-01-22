import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge"

type Props = ComponentProps<'li'> & VariantProps<typeof listItemVariants> & {}

const listItemVariants = tv({
  base: "flex items-center",
  variants: {
    variant: {
      default: "flex items-center",
      line: "flex items-center lg:w-full lg:after:content-[''] lg:after:w-full lg:after:h-[8px] lg:after:border-white lg:after:border lg:after:bg-white lg:after:hidden lg:after:inline-block lg:after:-translate-y-16 lg:after:animate-grow"
    },
  },
  defaultVariants: {
    variant: 'default',
    lineAnimation: 'none'
  }
})

export default function ListItem({ variant, ...props }: Props) {
  return (
    <li 
      className={twMerge(listItemVariants({ variant }))}
      {...props}
    />
  )
}