"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import NeoButton from "../ui/NeoButton";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

const decorativeShapes = [
  { color: "#06D6A0", size: "w-8 h-8", top: "10%", left: "5%", delay: 0 },
  { color: "#00B4D8", size: "w-12 h-12", top: "20%", right: "8%", delay: 0.2 },
  { color: "#EF476F", size: "w-6 h-6", bottom: "30%", left: "10%", delay: 0.4 },
  { color: "#7B2FBE", size: "w-10 h-10", bottom: "20%", right: "5%", delay: 0.6 },
];

const verticalLines = Array.from({ length: 8 }, (_, i) => ({
  left: `${12.5 * (i + 1)}%`,
  delay: i * 0.1,
}));

// Floating animation for shapes
const floatingAnimation = {
  y: [0, -10, 0],
  rotate: [0, 3, -3, 0],
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = content.hero;

  // Typewriter effect for role
  const roleText = t.title[lang];
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(roleText.slice(0, i));
      if (i >= roleText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16"
      style={{ backgroundColor: '#00B4D8' }}
      suppressHydrationWarning
    >
      {/* Vertical Lines Decoration */}
      {verticalLines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute top-0 w-px bg-neo-black/20"
          style={{ left: line.left, height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.5, delay: line.delay, ease: "easeOut" }}
        />
      ))}

      {/* Decorative Shapes with floating animation */}
      {decorativeShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} border-2 border-neo-black`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            backgroundColor: shape.color,
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            ...floatingAnimation,
          }}
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{
            scale: { duration: 0.5, delay: shape.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center py-20">
        {/* Hello Text */}
        <motion.p
          className="font-heading font-bold text-lg md:text-xl uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.greeting[lang]}
        </motion.p>

        {/* Name Card with Ropes and Pendulum */}
        <div className="relative flex flex-col items-center mb-6">
          {/* Tali kiri dan kanan */}
          <div className="flex justify-between w-[85%] absolute -top-16">
            {/* Tali kiri */}
            <motion.div
              className="w-[2px] bg-black"
              initial={{ height: 0 }}
              animate={{ height: 64 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            {/* Tali kanan */}
            <motion.div
              className="w-[2px] bg-black"
              initial={{ height: 0 }}
              animate={{ height: 64 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
          </div>

          {/* Card nama dengan animasi pendulum */}
          <motion.div
            initial={{ y: -60, rotate: -3 }}
            animate={{ y: [-60, 20, -10, 5, 0], rotate: [-3, 2, -1, 0.5, 0] }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: 'easeOut',
              times: [0, 0.4, 0.65, 0.82, 1],
            }}
            whileHover={{
              rotate: [-1, 1, -1, 0],
              transition: { duration: 0.4, ease: 'easeInOut' },
            }}
            style={{
              transformOrigin: 'top center',
            }}
          >
            {/* Shadow */}
            <div className="absolute inset-0 bg-neo-black transform translate-x-2 translate-y-2" />
            
            {/* Card */}
            <div className="relative bg-white border-2 border-neo-black p-8 md:p-12 transform -rotate-1">
              <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-center">
                ANDIKA DWI
                <br />
                SATRIO
              </h1>
            </div>
          </motion.div>
        </div>

        {/* Role Badge with Typewriter Effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{
            scale: 1.05,
            rotate: [-1, 1, -1, 0],
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.97 }}
        >
          <div 
            className="text-white font-heading font-bold text-sm md:text-base uppercase px-6 py-2 border-2 border-neo-black neo-shadow"
            style={{ backgroundColor: '#0077B6' }}
          >
            {displayed}
            {/* Cursor berkedip selama typewriter berjalan */}
            {!done && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="ml-0.5 inline-block"
              >
                |
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NeoButton
              href="#projects"
              variant="primary"
              size="lg"
              icon={<Send className="w-5 h-5" />}
            >
              {t.cta1[lang]}
            </NeoButton>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NeoButton
              href="https://wa.me/6282137507006"
              variant="green"
              size="lg"
              icon={<FaWhatsapp className="w-5 h-5" />}
            >
              {t.cta2[lang]}
            </NeoButton>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a
            href="https://github.com/sys-andika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 border-2 border-neo-black neo-shadow"
            style={{ backgroundColor: '#7B2FBE' }}
            whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" }}
            whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px #0A0A0A" }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="https://www.instagram.com/andikadwisatrio_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 border-2 border-neo-black neo-shadow"
            style={{ backgroundColor: '#EF476F' }}
            whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" }}
            whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px #0A0A0A" }}
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
