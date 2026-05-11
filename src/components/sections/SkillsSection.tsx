"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { skillsRow1, skillsRow2 } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

const accentColors = ['#00B4D8', '#06D6A0', '#FFD166', '#EF476F', '#7B2FBE', '#FF6B35'];

interface SkillCardProps {
  name: string;
  index: number;
}

function SkillCard({ name, index }: SkillCardProps) {
  const randomColor = accentColors[index % accentColors.length];
  
  return (
    <motion.div
      className="flex-shrink-0 bg-white border-2 border-neo-black neo-shadow px-6 py-3 mx-2 group cursor-pointer relative"
      whileHover={{ 
        y: -4, 
        boxShadow: "6px 6px 0px #0A0A0A",
        borderColor: randomColor,
        scale: 1.1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="font-heading font-bold text-sm uppercase whitespace-nowrap">
        {name}
      </span>
      {/* Tooltip */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neo-black text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
        initial={{ y: 5 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.div>
    </motion.div>
  );
}

interface MarqueeRowProps {
  skills: { name: string; icon: string }[];
  direction: "left" | "right";
  duration?: number;
}

function MarqueeRow({ skills, direction, duration = 25 }: MarqueeRowProps) {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden py-2 hover:[&>div]:pause">
      <div
        className={`flex ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } hover:animation-play-state-paused`}
        style={{
          width: "max-content",
          animationDuration: `${duration}s`,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} name={skill.name} index={index} />
        ))}
      </div>
    </div>
  );
}

const categoryColors = [
  { bg: '#FFD166', title: 'System Admin', text: '#0A0A0A' },
  { bg: '#00B4D8', title: 'Networking', text: '#FFFFFF' },
  { bg: '#EF476F', title: 'Development', text: '#FFFFFF' },
];

export default function SkillsSection() {
  const { lang } = useLang();
  const t = content.skills;
  
  return (
    <section id="skills" className="py-20 bg-white overflow-hidden" style={{ backgroundColor: '#F0F4F8' }} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle text={t.sectionTitle[lang]} bgColor="#00B4D8" textColor="white" />
        </div>

        {/* Description */}
        <motion.p
          className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
        >
          {t.subtitle[lang]}
        </motion.p>

        {/* Marquee Container - pauses on hover */}
        <div className="space-y-4 group">
          {/* Row 1 - Scroll Left */}
          <MarqueeRow skills={skillsRow1} direction="left" duration={30} />

          {/* Row 2 - Scroll Right */}
          <MarqueeRow skills={skillsRow2} direction="right" duration={35} />
        </div>

        {/* Skills Categories with hover effects */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {[
            { title: t.categorySystemAdmin[lang], desc: t.descSystemAdmin[lang], color: '#FFD166' },
            { title: t.categoryNetworking[lang], desc: t.descNetworking[lang], color: '#00B4D8' },
            { title: t.categoryDevelopment[lang], desc: t.descDevelopment[lang], color: '#EF476F' },
          ].map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="border-2 border-neo-black neo-shadow p-6"
              style={{ 
                backgroundColor: cat.color,
                color: idx === 0 ? '#0A0A0A' : '#FFFFFF'
              }}
              whileHover={{ 
                y: -6, 
                boxShadow: "8px 8px 0px #0A0A0A",
                rotate: -1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-heading font-black text-lg uppercase mb-2">
                {cat.title}
              </h3>
              <p className="text-sm">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
