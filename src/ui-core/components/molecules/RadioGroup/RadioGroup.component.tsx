import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "before relative aspect-square h-4 w-4 rounded-full border border-slate-200 border-typography/50 text-slate-900 ring-offset-white before:invisible before:absolute before:left-2/4 before:top-2/4 before:-z-10 before:block before:h-4 before:w-4 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-sm before:ring-8 before:ring-primary-inverseHover hover:border-primary-hover hover:bg-primary-inverseHover hover:ring-8 hover:ring-primary-inverseHover hover:before:visible focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-typography/20 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:ring-0 disabled:hover:before:invisible data-[state=checked]:border-primary-selected data-[state=checked]:text-primary-selected dark:border-slate-50 dark:border-slate-800 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
