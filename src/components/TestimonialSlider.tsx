"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    quote: "Borobudur bukan sekadar tumpukan batu — ia adalah puisi kosmologis yang ditulis dalam bahasa arsitektur.",
    author: "Dr. Soekmono",
    role: "Arkeolog Indonesia",
  },
  {
    quote: "Setiap relief di Prambanan menceritakan kisah epik Ramayana dengan kehalusan seni yang tak tertandingi.",
    author: "Prof. Jan Fontein",
    role: "Ahli Sejarah Seni Asia",
  },
  {
    quote: "Di balik setiap candi tersimpan kearifan nenek moyang yang memadukan ilmu teknik, astronomi, dan spiritualitas.",
    author: "Mundardjito",
    role: "Guru Besar Arkeologi UI",
  },
  {
    quote: "Muaro Jambi membuktikan bahwa Nusantara pernah menjadi pusat peradaban Buddha terbesar di Asia Tenggara.",
    author: "Dr. Agus Aris Munandar",
    role: "Peneliti Sejarah Kuno",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0806]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A951]/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#9A8A72] text-xs tracking-[0.4em] uppercase mb-16"
        >
          Kata Mereka
        </motion.p>

        {/* Quote */}
        <div className="min-h-[280px] md:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center"
            >
              <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#F5ECD7] leading-[1.4] mb-10 font-light italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[#C8A951] font-medium text-sm tracking-wide">{t.author}</p>
                <p className="text-[#9A8A72] text-xs mt-1">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] rounded-full transition-all duration-500 cursor-pointer ${
                i === current ? "w-12 bg-[#C8A951]" : "w-6 bg-[#3D2E1E] hover:bg-[#9A8A72]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
