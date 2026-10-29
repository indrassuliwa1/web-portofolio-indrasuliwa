import React from "react";
import { cn } from "../../utils/cn";

/**
 * Reusable GlassCard component mimicking floating translucent purple panels
 * with soft rounded corners, backdrop blur, subtle borders and cosmic glow.
 */
export default function GlassCard({
  children,
  className = "",
  variant = "default", // default | interactive | glowing | subtle
  hover = true,
  onClick,
  ...props
}) {
  const variantStyles = {
    default:
      "bg-[#2D1B4E]/40 border-white/10 shadow-[0_8px_32px_0_rgba(10,4,20,0.37)]",
    interactive:
      "bg-[#2D1B4E]/45 border-white/15 shadow-[0_8px_32px_0_rgba(10,4,20,0.4)] hover:bg-[#3C2064]/60 hover:border-purple-400/30 hover:shadow-[0_14px_40px_0_rgba(168,85,247,0.25)] hover:-translate-y-1",
    glowing:
      "bg-[#2D1B4E]/50 border-purple-400/30 shadow-[0_0_25px_rgba(168,85,247,0.2),0_8px_32px_0_rgba(10,4,20,0.4)]",
    subtle:
      "bg-white/[0.03] border-white/5 shadow-sm backdrop-blur-md",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl backdrop-blur-xl border transition-all duration-300 overflow-hidden",
        variantStyles[variant] || variantStyles.default,
        hover && variant !== "interactive" && "hover:border-white/20 hover:shadow-lg",
        onClick && "cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Subtle top-highlight shimmer simulating glass specular edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
      
      {children}
    </div>
  );
}
