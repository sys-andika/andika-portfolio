"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/sys-andika",
    bg: "#0077B6",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/andikadwisatrio",
    bg: "#7B2FBE",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/andikadwisatrio_",
    bg: "#EF476F",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/6282137507006",
    bg: "#06D6A0",
  },
];

export default function Footer() {
  return (
    <footer className="bg-neo-black border-t-4 border-neo-accent-green">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left — Logo */}
        <div className="flex items-center gap-1">
          <span className="text-white font-heading font-black text-xl tracking-tight">ANDIKA</span>
          <span
            className="text-neo-black font-heading font-black text-xl px-2 py-0.5"
            style={{ backgroundColor: '#FFD166', border: '2px solid #FFD166' }}
          >
            SATRIO
          </span>
        </div>

        {/* Center — Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: '3px 3px 0px white' }}
              whileTap={{ y: 1, boxShadow: '0px 0px 0px white' }}
              className="w-10 h-10 flex items-center justify-center border-2 border-white text-white"
              style={{ backgroundColor: social.bg }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Right — Copyright */}
        <p className="text-white text-sm font-heading font-bold tracking-widest uppercase">
          &copy; 2026 ANDIKA DWI SATRIO.
        </p>

      </div>
    </footer>
  );
}
