"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  text: string;
  bgColor: string;
  textColor?: "black" | "white";
}

const textColorStyles = {
  black: "text-neo-black",
  white: "text-white",
};

export default function SectionTitle({
  text,
  bgColor,
  textColor = "black",
}: SectionTitleProps) {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ rotate: -1, scale: 1.03 }}
    >
      {/* Decorative shadow box */}
      <div
        className="absolute -right-2 -bottom-2 w-full h-full bg-neo-black"
        style={{ transform: "translate(4px, 4px)" }}
      />
      
      {/* Main title box */}
      <div
        className="relative px-6 py-3 border-2 border-neo-black neo-shadow font-heading font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className={textColorStyles[textColor]}>
          {text}
        </h2>
      </div>
    </motion.div>
  );
}
