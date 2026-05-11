"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import NeoButton from "../ui/NeoButton";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { useLang } from "@/context/LangContext";
import { content } from "@/lib/i18n";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { lang } = useLang();
  const t = content.projects;
  
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#06D6A0' }} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <SectionTitle text={t.sectionTitle[lang]} bgColor="#7B2FBE" textColor="white" />
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <motion.button
              onClick={prevPage}
              className="p-3 border-2 border-neo-black neo-shadow"
              style={{ backgroundColor: '#FFD166' }}
              whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" }}
              whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px #0A0A0A" }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextPage}
              className="p-3 border-2 border-neo-black neo-shadow"
              style={{ backgroundColor: '#FFD166' }}
              whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0px #0A0A0A" }}
              whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px #0A0A0A" }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          key={currentPage}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          animate="visible"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white border-2 border-neo-black neo-shadow-lg overflow-hidden group"
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "10px 10px 0px #0A0A0A" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Project Image with zoom effect on hover */}
              <div className="relative border-b-2 border-neo-black overflow-hidden bg-white" style={{ aspectRatio: '16/10' }}>
                <div className="absolute top-0 left-0 right-0 h-6 bg-neo-gray border-b border-neo-black flex items-center px-2 gap-1 z-10">
                  <div className="w-3 h-3 rounded-full bg-neo-accent-pink border border-neo-black" />
                  <div className="w-3 h-3 rounded-full bg-neo-accent-yellow border border-neo-black" />
                  <div className="w-3 h-3 rounded-full bg-neo-accent-green border border-neo-black" />
                </div>
                <motion.div
                  className="relative w-full h-full mt-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category Badge */}
                <span className="text-xs font-bold uppercase px-2 py-1 bg-neo-accent-yellow border border-neo-black mb-2 inline-block">
                  {project.category[lang]}
                </span>

                <h3 className="font-heading font-black text-lg uppercase mb-2">
                  {project.title[lang]}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.shortDesc[lang]}
                </p>

                {/* Tech Stack with jiggle on hover */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="text-xs font-bold uppercase px-2 py-1 bg-neo-gray border border-neo-black"
                      initial={{ y: 0 }}
                      whileHover={{ y: -3 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Year */}
                <p className="text-xs font-bold uppercase text-gray-400 mb-3">
                  {t.year[lang]}: {project.year}
                </p>

                {/* Buttons */}
                <div className="flex gap-2 flex-wrap">
                  {/* Detail Button - ALL projects */}
                  <NeoButton
                    onClick={() => setSelectedProject(project)}
                    variant="blue"
                    size="sm"
                  >
                    {t.detailBtn[lang]}
                  </NeoButton>

                  {/* Source Code - only if hasSourceCode */}
                  {project.hasSourceCode && (
                    <NeoButton
                      href={project.sourceCodeUrl}
                      variant="yellow"
                      size="sm"
                      icon={<Code className="w-4 h-4" />}
                    >
                      {t.sourceCode[lang]}
                    </NeoButton>
                  )}

                  {/* Visit - only if hasVisit */}
                  {project.hasVisit && (
                    <NeoButton
                      href={project.visitUrl}
                      variant="green"
                      size="sm"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      {t.visit[lang]}
                    </NeoButton>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 border-2 border-neo-black ${
                currentPage === index ? "bg-neo-black" : "bg-white"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence initial={false}>
          {selectedProject && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/70 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />
              
              {/* Modal Card */}
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative bg-white border-2 border-neo-black max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  style={{ boxShadow: '8px 8px 0px #0A0A0A' }}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 right-3 p-1 bg-neo-gray border-2 border-neo-black hover:bg-neo-accent-pink hover:text-white transition-colors z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  {/* Project Image */}
                  <div className="relative w-full border-b-2 border-neo-black bg-white" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title[lang]}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="text-xs font-bold uppercase px-2 py-1 bg-neo-accent-yellow border border-neo-black mb-3 inline-block">
                      {selectedProject.category[lang]}
                    </span>

                    <h3 className="font-heading font-bold text-xl uppercase mb-2">
                      {selectedProject.title[lang]}
                    </h3>
                    
                    <p className="text-sm text-gray-500 font-bold mb-4">
                      {t.year[lang]}: {selectedProject.year}
                    </p>

                    {/* Full Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {selectedProject.fullDesc[lang]}
                    </p>

                    {/* Tools */}
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase text-gray-400 mb-2">
                        {t.tools[lang]}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-bold uppercase px-2 py-1 bg-neo-gray border border-neo-black"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.hasSourceCode && (
                        <NeoButton
                          href={selectedProject.sourceCodeUrl}
                          variant="yellow"
                          size="sm"
                          icon={<Code className="w-4 h-4" />}
                        >
                          {t.sourceCode[lang]}
                        </NeoButton>
                      )}
                      {selectedProject.hasVisit && (
                        <NeoButton
                          href={selectedProject.visitUrl}
                          variant="green"
                          size="sm"
                          icon={<ExternalLink className="w-4 h-4" />}
                        >
                          {t.visit[lang]}
                        </NeoButton>
                      )}
                    </div>

                    {/* Close Button */}
                    <div className="flex justify-end mt-6">
                      <NeoButton
                        onClick={() => setSelectedProject(null)}
                        variant="primary"
                        size="sm"
                      >
                        {t.closeBtn[lang]}
                      </NeoButton>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
