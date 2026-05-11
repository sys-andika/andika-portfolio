"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeoCardProps {
  children: ReactNode;
  shadowColor?: string;
  className?: string;
  hoverable?: boolean;
  bgColor?: string;
}

export default function NeoCard({
  children,
  shadowColor = "#0A0A0A",
  className = "",
  hoverable = true,
  bgColor = "bg-white",
}: NeoCardProps) {
  return (
    <motion.div
      className={`
        border-2 border-neo-black
        ${bgColor}
        ${className}
      `}
      style={{ boxShadow: `4px 4px 0px ${shadowColor}` }}
      whileHover={
        hoverable
          ? {
              y: -4,
              boxShadow: `8px 8px 0px ${shadowColor}`,
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}
