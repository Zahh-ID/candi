"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 14, suffix: "+", label: "Candi Terdata", description: "Dari berbagai penjuru Nusantara" },
  { value: 3, suffix: "", label: "Situs UNESCO", description: "Diakui dunia internasional" },
  { value: 6, suffix: "", label: "Kerajaan Kuno", description: "Dari abad ke-7 hingga ke-15" },
  { value: 1200, suffix: "+", label: "Tahun Peradaban", description: "Rentang sejarah yang terdata" },
];

export default function StatsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-b border-[#3D2E1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center md:text-left flex flex-col"
            >
              <span className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-[#C8A951] mb-3 leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[#F5ECD7] font-medium text-sm md:text-base mb-1">
                {stat.label}
              </span>
              <span className="text-[#9A8A72] text-xs">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
