"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import NeoButton from "../ui/NeoButton";
import { certificates, Certificate } from "@/lib/data";
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

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { lang } = useLang();
  const t = content.certificates;

  return (
    <section id="certificates" className="py-20" style={{ backgroundColor: '#7B2FBE' }} suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle text={t.sectionTitle[lang]} bgColor="white" textColor="black" />
        </div>

        {/* Certificates Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-white border-2 border-neo-black overflow-hidden cursor-pointer"
              style={{ 
                boxShadow: `4px 4px 0px ${cert.shadowColor}`,
                transformStyle: 'preserve-3d',
                perspective: 1000 
              }}
              variants={fadeUp}
              whileHover={{ 
                y: -4, 
                boxShadow: `8px 8px 0px ${cert.shadowColor}`,
                rotateY: 3,
                rotateX: -2,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden border-b-2 border-neo-black bg-white" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={cert.image}
                  alt={cert.title[lang]}
                  fill
                  className="object-contain"
                />
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-black/0 flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-white font-bold text-sm uppercase px-4 py-2 border-2 border-white opacity-0"
                    whileHover={{ opacity: 1 }}
                    style={{ backgroundColor: cert.badgeColor }}
                  >
                    {t.detailBtn[lang]}
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Icon */}
                <div
                  className="w-12 h-12 border-2 border-neo-black flex items-center justify-center mb-3"
                  style={{ backgroundColor: cert.badgeColor }}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-heading font-bold text-lg mb-1 line-clamp-2">
                  {cert.title[lang]}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{cert.issuer[lang]}</p>
                <p className="text-xs font-bold uppercase text-gray-400">
                  {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal with spring animation */}
        <AnimatePresence initial={false}>
          {selectedCert && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/70 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
              />
              
              {/* Modal Card */}
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative bg-white border-2 border-neo-black max-w-lg w-full max-h-[90vh] overflow-y-auto"
                  style={{ boxShadow: '8px 8px 0px #0A0A0A' }}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-3 right-3 p-1 bg-neo-gray border-2 border-neo-black hover:bg-neo-accent-pink hover:text-white transition-colors z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  {/* Certificate Image */}
                  <div className="relative w-full border-b-2 border-neo-black bg-white" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.title[lang]}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">
                      {selectedCert.title[lang]}
                    </h3>
                    
                    <div className="space-y-3">
                      <p 
                        className="font-bold text-sm uppercase px-3 py-1 inline-block border-2 border-neo-black text-white"
                        style={{ backgroundColor: selectedCert.badgeColor }}
                      >
                        {selectedCert.issuer[lang]}
                      </p>
                      <p className="text-sm text-gray-500 font-bold">{selectedCert.year}</p>
                      <p className="text-gray-700">{selectedCert.description[lang]}</p>
                    </div>

                    {/* Close button */}
                    <div className="flex justify-end mt-6">
                      <NeoButton
                        onClick={() => setSelectedCert(null)}
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
