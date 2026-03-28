"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let time = 0;

    const resize = () => {
      w = canvas.parentElement?.clientWidth || window.innerWidth;
      h = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, w, h);

      // Animated gradient blobs
      const gradient = ctx.createRadialGradient(
        w * 0.3 + Math.sin(time) * 100,
        h * 0.5 + Math.cos(time * 0.7) * 60,
        0,
        w * 0.5,
        h * 0.5,
        w * 0.6
      );
      gradient.addColorStop(0, "rgba(200, 169, 81, 0.12)");
      gradient.addColorStop(0.5, "rgba(139, 0, 0, 0.06)");
      gradient.addColorStop(1, "rgba(10, 8, 6, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Second blob
      const g2 = ctx.createRadialGradient(
        w * 0.7 + Math.cos(time * 1.3) * 80,
        h * 0.4 + Math.sin(time * 0.9) * 50,
        0,
        w * 0.5,
        h * 0.5,
        w * 0.5
      );
      g2.addColorStop(0, "rgba(27, 58, 107, 0.1)");
      g2.addColorStop(1, "rgba(10, 8, 6, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      requestAnimationFrame(draw);
    };

    const frame = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function CTASection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[#0A0806]/40" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#9A8A72] text-xs tracking-[0.4em] uppercase mb-8"
        >
          Siap Memulai Perjalanan?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cinzel text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5ECD7] leading-[1.1] mb-12"
        >
          Setiap batu
          <br />
          menyimpan <span className="text-[#C8A951]">cerita</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/candi"
            className="group relative px-10 py-5 rounded-full bg-[#C8A951] text-[#0A0806] font-cinzel font-bold text-base tracking-wide overflow-hidden"
          >
            <span className="relative z-10">Jelajahi Sekarang</span>
            <div className="absolute inset-0 bg-[#E8C97A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          </Link>
          <Link
            href="/peta"
            className="px-10 py-5 rounded-full border border-[#3D2E1E] text-[#F5ECD7] font-medium text-sm tracking-wide hover:border-[#C8A951] transition-colors duration-300"
          >
            Lihat Peta
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
