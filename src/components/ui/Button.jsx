import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function Button({
  children,
  variant = "primary", // primary | glass | outline | ghost
  size = "md", // sm | md | lg
  icon: Icon,
  iconPosition = "left",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-xl gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-2xl gap-2.5 font-medium",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:brightness-110 border border-purple-400/30",
    glass:
      "bg-[#2D1B4E]/60 text-purple-100 backdrop-blur-md border border-white/15 hover:bg-[#3C2064]/80 hover:border-purple-400/40 hover:text-white shadow-glass",
    outline:
      "bg-transparent text-purple-200 border border-purple-500/40 hover:bg-purple-600/15 hover:border-purple-400 hover:text-white",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent",
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15 }}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400/40",
        sizeStyles[size],
        variantStyles[variant],
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
}
