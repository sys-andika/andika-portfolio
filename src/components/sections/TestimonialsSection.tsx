"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { testimonials } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const accentColors = {
  yellow: "#FFD166",
  blue: "#00B4D8",
  green: "#06D6A0",
  pink: "#EF476F",
  purple: "#7B2FBE",
};

export default function TestimonialsSection() {
  const { lang } = useLang();
  const t = content.testimonials;
  
  const stats = [
    { label: t.stats.clients[lang], value: "8", color: "#FFD166", textColor: '#0A0A0A' },
    { label: t.stats.rate[lang], value: "100%", color: "#06D6A0", textColor: '#0A0A0A' },
    { label: t.stats.projects[lang], value: "8", color: "#00B4D8", textColor: '#FFFFFF' },
    { label: t.stats.rating[lang], value: "5.0", color: "#FFFFFF", textColor: '#0A0A0A' },
  ];

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#FF6B35' }} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle text={t.sectionTitle[lang]} bgColor="white" textColor="black" />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white border-2 border-neo-black neo-shadow-lg p-6 group"
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "8px 8px 0px #0A0A0A" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-neo-accent-yellow text-neo-black"
                  />
                ))}
                <span className="ml-2 font-bold text-sm">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>

              {/* Quote with colored bar */}
              <motion.div 
                className="border-l-4 pl-4 mb-6"
                style={{ borderColor: accentColors[(['yellow', 'blue', 'green', 'pink', 'purple'] as const)[testimonial.id % 5]] }}
                whileHover={{ borderLeftWidth: '6px' }}
              >
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  &ldquo;{testimonial.quote[lang]}&rdquo;
                </p>
              </motion.div>

              {/* Author with avatar rotation on hover */}
              <div className="flex items-center gap-3">
                <motion.div 
                  className="relative w-12 h-12 border-2 border-neo-black overflow-hidden"
                  whileHover={{ rotate: 5, borderColor: '#00B4D8' }}
                  transition={{ type: "spring" }}
                >
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role[lang]}, {testimonial.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar with hover effects */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="border-2 border-neo-black neo-shadow p-4 text-center"
              style={{ backgroundColor: stat.color, color: stat.textColor }}
              whileHover={{ 
                y: -4, 
                boxShadow: "6px 6px 0px #0A0A0A",
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-heading font-black text-2xl">{stat.value}</p>
              <p className="font-bold text-xs uppercase opacity-70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
