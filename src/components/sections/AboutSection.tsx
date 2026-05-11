"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import NeoButton from "../ui/NeoButton";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function AboutSection() {
  const { lang } = useLang();
  const t = content.about;

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#FFFFFF' }} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle text={t.sectionTitle[lang]} bgColor="#EF476F" textColor="white" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Stack with wobble hover */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            {/* Background Photo (Yellow tint) */}
            <motion.div 
              className="absolute top-4 left-4 w-full h-full border-2 border-neo-black neo-shadow transform rotate-2"
              style={{ backgroundColor: '#FFD166' }}
              whileHover={{ rotate: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            {/* Main Photo with wobble hover */}
            <motion.div 
              className="relative bg-white border-2 border-neo-black neo-shadow-lg p-2 overflow-hidden"
              whileHover={{ 
                rotate: [-1, 1, -1, 0], 
                scale: 1.03 
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-square relative">
                <Image
                  src="/about/andika.jpeg"
                  alt="Andika Dwi Satrio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            {/* Name and Role */}
            <motion.div className="mb-6" variants={fadeInRight}>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">
                <span style={{ color: '#00B4D8' }}>Andika Dwi Satrio</span>
              </h3>
              <div 
                className="inline-block text-neo-black font-heading font-bold text-sm uppercase px-4 py-1.5 border-2 border-neo-black"
                style={{ backgroundColor: '#06D6A0' }}
              >
                {t.heading[lang]}
              </div>
            </motion.div>

            {/* Bio Quote - changed to teal accent */}
            <motion.div
              className="border-l-4 pl-6 mb-6"
              style={{ borderColor: '#00B4D8' }}
              variants={fadeInRight}
            >
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;{t.bio[lang]}&rdquo;
              </p>
            </motion.div>

            {/* Info Cards with hover animations */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 mb-8"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center gap-3 bg-white border-2 border-neo-black neo-shadow p-4"
                variants={fadeInRight}
                whileHover={{ x: 4, boxShadow: "6px 6px 0px #0A0A0A" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div 
                  className="p-2 border-2 border-neo-black"
                  style={{ backgroundColor: '#EF476F' }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase text-gray-500">
                    {content.contact.location[lang]}
                  </p>
                  <p className="font-bold">{t.location[lang]}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 bg-white border-2 border-neo-black neo-shadow p-4"
                variants={fadeInRight}
                whileHover={{ x: 4, boxShadow: "6px 6px 0px #0A0A0A" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div 
                  className="p-2 border-2 border-neo-black"
                  style={{ backgroundColor: '#00B4D8' }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase text-gray-500">
                    Email
                  </p>
                  <p className="font-bold text-sm">
                    andikadwisatrio08@gmail.com
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
            >
              <NeoButton
                href="#contact"
                variant="primary"
                size="lg"
                icon={<Send className="w-5 h-5" />}
              >
                {t.hireBtn[lang]}
              </NeoButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
