"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Beranda", path: "/" },
  { name: "Eksplorasi", path: "/candi" },
  { name: "Peta Candi", path: "/peta" },
  { name: "Dinasti", path: "/dinasti" },
];



export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top bar — always visible */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled && !isOpen
            ? "bg-[#0A0806]/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-[110] font-cinzel text-lg md:text-xl tracking-[0.15em] text-[#F5ECD7] hover:text-[#C8A951] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Candi<span className="text-[#C8A951]">.</span>
          </Link>

          {/* Menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] flex flex-col items-end gap-1.5 group cursor-pointer"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6, width: 28 } : { rotate: 0, y: 0, width: 28 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="block h-[1.5px] bg-[#F5ECD7] group-hover:bg-[#C8A951] transition-colors rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="block h-[1.5px] bg-[#F5ECD7] group-hover:bg-[#C8A951] transition-colors rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6, width: 28 } : { rotate: 0, y: 0, width: 16 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="block h-[1.5px] bg-[#F5ECD7] group-hover:bg-[#C8A951] transition-colors rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-[#0A0806] flex flex-col"
          >
            {/* Ambient glow */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C8A951]/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32">
              <div className="flex flex-col gap-2 md:gap-4">
                {links.map((link, i) => {
                  const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15 + i * 0.08,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <Link
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-6 py-3 md:py-4"
                      >
                        <span className="text-[#9A8A72] text-xs md:text-sm font-mono tracking-wider w-8">
                          0{i + 1}
                        </span>
                        <span
                          className={`font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight transition-all duration-500 group-hover:translate-x-4 group-hover:text-[#C8A951] ${
                            isActive ? "text-[#C8A951]" : "text-[#F5ECD7]"
                          }`}
                        >
                          {link.name}
                        </span>
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          whileHover={{ width: 80, opacity: 1 }}
                          className="hidden md:block h-[1px] bg-[#C8A951] ml-4"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom bar: socials + contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="px-8 md:px-20 lg:px-32 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-[#3D2E1E] pt-8"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A8A72]">
                Warisan Peradaban Nusantara
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
