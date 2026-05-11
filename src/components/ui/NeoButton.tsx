"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeoButtonProps {
  children?: ReactNode;
  variant?: "yellow" | "green" | "blue" | "pink" | "purple" | "black" | "white" | "primary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles = {
  yellow: "bg-neo-yellow text-neo-black",
  green: "bg-neo-green text-neo-black",
  blue: "bg-neo-blue text-neo-white",
  pink: "bg-neo-pink text-neo-white",
  purple: "bg-neo-purple text-neo-white",
  black: "bg-neo-black text-neo-white",
  white: "bg-neo-white text-neo-black",
  primary: "bg-neo-primary text-neo-white",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function NeoButton({
  children,
  variant = "yellow",
  size = "md",
  onClick,
  href,
  icon,
  className = "",
  type = "button",
  disabled = false,
}: NeoButtonProps) {
  const baseStyles = `
    font-heading font-bold uppercase
    border-2 border-neo-black
    neo-shadow
    transition-all
    flex items-center justify-center gap-2
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={baseStyles}
        whileHover={!disabled ? { x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" } : {}}
        whileTap={!disabled ? { x: 4, y: 4, boxShadow: "0px 0px 0px #0A0A0A" } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      whileHover={!disabled ? { x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" } : {}}
      whileTap={!disabled ? { x: 4, y: 4, boxShadow: "0px 0px 0px #0A0A0A" } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
}
