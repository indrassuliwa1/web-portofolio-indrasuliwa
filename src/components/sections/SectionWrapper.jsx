import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function SectionWrapper({
  id,
  children,
  className = "",
  badge,
  title,
  subtitle,
  initial = { opacity: 0, y: 30 },
  whileInView = { opacity: 1, y: 0 },
  animate,
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.6, ease: "easeOut" },
  variants,
  ...props
}) {
  return (
    <motion.section
      id={id}
      initial={variants ? "hidden" : initial}
      whileInView={variants ? "visible" : whileInView}
      animate={animate}
      viewport={viewport}
      transition={transition}
      variants={variants}
      className={cn("relative scroll-mt-24 py-12 md:py-16", className)}
      {...props}
    >
      {(badge || title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-400/30 text-purple-200 text-xs font-medium">
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-purple-200/70 font-sans">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
