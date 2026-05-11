"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, GitCommit, Star, Users } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

type GithubData = {
  totalRepos: number
  followers: number
  totalStars: number
  totalContributions: number
  contributionDays: { date: string; count: number; level: number }[]
}

const contributionColors: Record<number, string> = {
  0: "bg-gray-200", // no contribution
  1: "bg-neo-accent-green/40",
  2: "bg-neo-accent-green/60",
  3: "bg-neo-accent-green/80",
  4: "bg-neo-accent-green",
};

function CountUpNumber({ target, suffix = "", loading = false }: { target: number; suffix?: string; loading?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || loading) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target, loading]);

  if (loading) return <span ref={ref}>...</span>;

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function GithubSection() {
  const [data, setData] = useState<GithubData | null>(null)
  const [loading, setLoading] = useState(true)
  const { lang } = useLang();
  const t = content.github;

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Build contribution grid from API data (52 weeks x 7 days)
  const contributionGrid = Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => 0)
  )

  if (data?.contributionDays) {
    data.contributionDays.forEach((day) => {
      // Parse date and calculate position in grid
      const date = new Date(day.date)
      const dayOfWeek = date.getDay() // 0 = Sunday, 6 = Saturday
      // Calculate week index based on date
      const now = new Date()
      const diffTime = now.getTime() - date.getTime()
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      const weekIndex = 51 - Math.floor(diffDays / 7)
      
      if (weekIndex >= 0 && weekIndex < 52 && dayOfWeek >= 0 && dayOfWeek < 7) {
        contributionGrid[weekIndex][dayOfWeek] = day.level
      }
    })
  }

  const statCards = [
    { icon: GitCommit, value: data?.totalRepos ?? 0, label: t.repo[lang], bg: '#FFFFFF', textColor: '#0A0A0A' },
    { icon: Star, value: data?.totalStars ?? 0, label: t.stars[lang], bg: '#FFD166', textColor: '#0A0A0A' },
    { icon: GitCommit, value: data?.totalContributions ?? 0, label: t.contributions[lang], bg: '#06D6A0', textColor: '#0A0A0A' },
    { icon: Users, value: data?.followers ?? 0, label: t.followers[lang], bg: '#7B2FBE', textColor: '#FFFFFF' },
  ];

  return (
    <section id="github" className="py-20 bg-white" style={{ backgroundColor: '#FFFFFF' }} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle text={t.sectionTitle[lang]} bgColor="#00B4D8" textColor="white" />
        </div>

        {/* Contribution Heatmap */}
        <motion.div
          className="bg-white border-2 border-neo-black neo-shadow-lg p-6 mb-8 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          whileHover={{ boxShadow: "6px 6px 0px #0A0A0A" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Github className="w-6 h-6" />
            <h3 className="font-heading font-bold uppercase">
              {t.contributions[lang]} {t.more[lang]}
            </h3>
          </div>

          {/* Heatmap Grid */}
          <div className="flex gap-1 min-w-max">
            {contributionGrid.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((level, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 border border-neo-black/20 ${contributionColors[level] ?? contributionColors[0]}`}
                    whileHover={{ scale: 1.5, borderColor: '#0A0A0A' }}
                    transition={{ duration: 0.1 }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-4 text-xs">
            <span>{t.less[lang]}</span>
            {[1, 2, 3, 4].map((level) => (
              <div key={level} className={`w-3 h-3 border border-neo-black/20 ${contributionColors[level]}`} />
            ))}
            <span>{t.more[lang]}</span>
          </div>
        </motion.div>

        {/* Stats Grid with flip effect on hover */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {statCards.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="border-2 border-neo-black neo-shadow p-6 text-center cursor-pointer"
              style={{ backgroundColor: stat.bg, color: stat.textColor }}
              whileHover={{ 
                scaleY: 1.05, 
                boxShadow: "6px 6px 0px #0A0A0A",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2" />
              <p className="font-heading font-black text-2xl">
                <CountUpNumber target={stat.value} loading={loading} />
              </p>
              <p className="font-bold text-xs uppercase opacity-70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
