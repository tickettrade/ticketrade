'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function PolicyModal({ isOpen, onClose, title, content }: PolicyModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" dir="rtl">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl max-h-[80vh] flex flex-col bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 bg-zinc-900/50">
              <h3 className="text-xl font-bold text-white font-sans">{title}</h3>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 text-sm text-zinc-300 leading-relaxed font-sans whitespace-pre-wrap select-text text-right">
              {content}
            </div>

            {/* Footer / Close Button */}
            <div className="px-6 py-4 border-t border-white/5 bg-zinc-900/20 text-left">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl transition-all"
              >
                סגור
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
