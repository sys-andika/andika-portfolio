"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

// Color mapping for each nav item
const navColors: Record<string, { bg: string; text: string }> = {
  Home:        { bg: '#00B4D8', text: '#0A0A0A' },
  About:       { bg: '#06D6A0', text: '#0A0A0A' },
  Projects:    { bg: '#7B2FBE', text: '#FFFFFF' },
  Skills:      { bg: '#FFD166', text: '#0A0A0A' },
  Certificates:{ bg: '#EF476F', text: '#FFFFFF' },
  Testimonials:{ bg: '#FF6B35', text: '#FFFFFF' },
  GitHub:      { bg: '#0A0A0A', text: '#06D6A0' },
  Contact:     { bg: '#0077B6', text: '#FFFFFF' },
};

// Map navLinks to translations
const getNavLabel = (name: string, lang: 'ID' | 'EN') => {
  const key = name.toLowerCase() as keyof typeof content.nav;
  return content.nav[key]?.[lang] || name;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-neo-black transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="font-heading font-black text-xl tracking-tight">
              ANDIKA
            </span>
            <span 
              className="font-heading font-black text-xl tracking-tight px-2 py-0.5 border-2 border-neo-black ml-1"
              style={{ backgroundColor: '#FFD166' }}
            >
              SATRIO
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              const colors = navColors[link.name] || { bg: '#00B4D8', text: '#0A0A0A' };
              
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  style={{ position: 'relative' }}
                  whileHover={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className={`px-3 py-1 font-heading font-bold uppercase text-sm border-2 border-transparent ${
                    isActive 
                      ? 'border-neo-black shadow-[3px_3px_0px_#0A0A0A]' 
                      : ''
                  }`}
                  animate={isActive ? {
                    backgroundColor: colors.bg,
                    color: colors.text,
                  } : {}}
                >
                  {getNavLabel(link.name, lang)}
                </motion.a>
              );
            })}
          </div>

          {/* Language Toggle */}
          <div className="hidden lg:flex items-center">
            <motion.button
              onClick={toggle}
              key={lang}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 font-heading font-black text-sm border-2 border-neo-black flex items-center justify-center"
              style={{ 
                backgroundColor: lang === 'ID' ? '#7B2FBE' : '#00B4D8', 
                color: '#fff', 
                boxShadow: '3px 3px 0px black' 
              }}
            >
              {lang === 'ID' ? 'ID' : 'EN'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 border-2 border-neo-black bg-neo-accent-yellow neo-shadow"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-16 right-0 w-72 bg-white border-l-2 border-b-2 border-neo-black neo-shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link, index) => {
                const colors = navColors[link.name] || { bg: '#00B4D8', text: '#0A0A0A' };
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`block font-heading font-bold text-sm uppercase px-4 py-3 border-2 border-neo-black ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white"
                        : "bg-white"
                    }`}
                    style={activeSection === link.href.replace("#", "") ? {
                      backgroundColor: colors.bg,
                      color: colors.text,
                    } : {}}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {getNavLabel(link.name, lang)}
                  </motion.a>
                );
              })}
              <div className="pt-2 border-t-2 border-neo-black mt-4">
                <motion.button
                  onClick={() => { toggle(); setIsOpen(false); }}
                  key={lang + '-mobile'}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full font-heading font-bold text-sm uppercase px-4 py-3 border-2 border-neo-black text-white"
                  style={{ 
                    backgroundColor: lang === 'ID' ? '#7B2FBE' : '#00B4D8'
                  }}
                >
                  {lang === 'ID' ? 'Switch to EN' : 'Ganti ke ID'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
