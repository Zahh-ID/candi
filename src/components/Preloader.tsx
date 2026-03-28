"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0806] flex flex-col items-center justify-center"
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C8A951]/5 rounded-full blur-[120px]" />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="relative mb-12"
          >
            <div className="w-16 h-16 border border-[#C8A951]/40 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-t border-r border-[#C8A951] rounded-full"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="text-center mb-16"
          >
            <h1 className="font-cinzel text-2xl md:text-3xl tracking-[0.3em] text-[#F5ECD7] font-light mb-2">
              CANDI NUSANTARA
            </h1>
            <p className="text-[#9A8A72] text-xs tracking-[0.5em] uppercase">
              Warisan Peradaban
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 relative">
            <div className="h-[1px] bg-[#3D2E1E] w-full rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C8A951] to-[#E8C97A]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] text-[#9A8A72] tracking-[0.3em] text-center mt-4 font-mono"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
