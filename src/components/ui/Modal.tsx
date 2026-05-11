"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { X } from "lucide-react";
import NeoButton from "./NeoButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  buttonColor?: "blue" | "purple" | "green" | "pink" | "yellow";
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  buttonColor = "pink",
}: ModalProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Card */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white border-2 border-neo-black neo-shadow-xl max-w-lg w-full p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1 hover:bg-neo-gray rounded transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Title */}
              <h3 className="font-heading font-bold text-xl uppercase mb-4 pr-8">
                {title}
              </h3>
              
              {/* Content */}
              <div className="mb-6">{children}</div>
              
              {/* Close button */}
              <div className="flex justify-end">
                <NeoButton
                  onClick={onClose}
                  variant={buttonColor}
                  size="sm"
                >
                  TUTUP
                </NeoButton>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
