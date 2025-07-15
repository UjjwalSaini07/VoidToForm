"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShinyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, style, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      initial={{ "--x": "100%", scale: 0.8 } as any}
      animate={{ "--x": "-100%", scale: 1 } as any}
      whileTap={{ scale: 0.95 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 5,
          mass: 0.5,
        },
      }}
      className={cn(
        "relative cursor-pointer rounded-lg px-6 py-2 font-medium border border-transparent backdrop-blur-xl bg-black/40 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_0_15px_3px_rgba(255,255,208,0.6)]",
        className
      )}
      style={{
        borderColor: "rgba(255, 255, 208, 0.3)",
        ...style,
      }}
      {...(props as any)}
    >
      <span
        className="relative block w-full text-sm uppercase tracking-wide"
        style={{
          color: "#fffdd0",
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))",
        }}
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
