import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-lg text-base font-bold leading-6",
  {
    variants: {
      variant: {
        primary:
          "bg-primary font-quicksand text-white hover:bg-primary-hover hover:shadow-[0px_4px_6px_0] hover:shadow-shadow/15 active:bg-primary-selected disabled:bg-primary-inverseHover disabled:hover:shadow-none",
        secondary:
          "border border-solid border-primary bg-background-white font-quicksand text-primary hover:border-primary-hover hover:bg-primary-inverseHover hover:text-primary-hover hover:shadow-[0px_4px_6px_0] hover:shadow-shadow/15 active:border-primary-selected active:bg-primary-inverseHoverSelected active:text-primary-selected disabled:border-primary-inverseHover disabled:text-primary-inverseHover disabled:hover:bg-white disabled:hover:shadow-none disabled:active:bg-white",
        ghost:
          "text-primary-hover hover:bg-primary-inverseHover active:text-primary-selected"
      },
      size: {
        default: "px-6 pb-[10px] pt-[14px]",
        sm: "p-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
