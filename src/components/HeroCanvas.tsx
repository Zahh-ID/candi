"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

/* ── Magnetic Button ── */
function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#C8A951] text-[#0A0806] font-cinzel font-bold text-lg tracking-wide hover:bg-[#E8C97A] transition-colors duration-300 cursor-pointer"
    >
      {children}
    </motion.a>
  );
}

/* ── Canvas Background ── */
function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    const count = Math.min(80, Math.floor((w * h) / 15000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 81, ${p.a})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200, 169, 81, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ objectFit: "cover" }}
    />
  );
}

/* ── Main Hero Component ── */
export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Phase opacities — each phase gets a fade-in / fade-out window
  // Phase 1: 0% – 30% (Visible at start)
  const phase1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  // Phase 2: 30% – 60%
  const phase2 = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  // Phase 3: 60% – 90%
  const phase3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  // Phase 4: 85% – 100% (Combined with next section overlay)
  const phase4 = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);

  // Subtle parallax for canvas
  const canvasY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative h-[300vh] z-0">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas */}
        <motion.div className="absolute inset-0" style={{ y: canvasY }}>
          <CanvasBackground />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A0806]/50 pointer-events-none" />

        {/* Radial gradient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0A0806_100%)] pointer-events-none" />

        {/* ── Phase 1: Title + Subheading (Centered) ── */}
        <motion.div
          style={{ opacity: phase1 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
        >
          <motion.p
            className="text-[#9A8A72] text-xs md:text-sm tracking-[0.5em] uppercase mb-6"
          >
            Warisan Peradaban Nusantara
          </motion.p>
          <h1 className="font-cinzel text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-[#F5ECD7] leading-[0.9] tracking-tight mb-6">
            Candi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A951] to-[#E8C97A]">
              Nusantara
            </span>
          </h1>
          <p className="text-[#9A8A72] text-sm md:text-base max-w-md tracking-wide">
            Jelajahi keindahan arsitektur kuno Indonesia
          </p>
        </motion.div>

        {/* ── Phase 2: Left-aligned slogan ── */}
        <motion.div
          style={{ opacity: phase2 }}
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-32 pointer-events-none"
        >
          <p className="text-[#9A8A72] text-xs tracking-[0.3em] uppercase mb-4">
            Abad ke-7 hingga ke-15 Masehi
          </p>
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5ECD7] leading-[1.1] max-w-3xl">
            Ribuan tahun
            <br />
            <span className="text-[#C8A951]">mahakarya batu</span>
            <br />
            tersembunyi
          </h2>
        </motion.div>

        {/* ── Phase 3: Right-aligned slogan ── */}
        <motion.div
          style={{ opacity: phase3 }}
          className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-20 lg:px-32 text-right pointer-events-none"
        >
          <p className="text-[#9A8A72] text-xs tracking-[0.3em] uppercase mb-4">
            Dari Sumatera hingga Bali
          </p>
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5ECD7] leading-[1.1] max-w-3xl">
            Dua juta balok batu
            <br />
            <span className="text-[#C8A951]">tanpa semen</span>
          </h2>
        </motion.div>

        {/* ── Phase 4: Centered CTA ── */}
        <motion.div
          style={{ 
            opacity: phase4,
            pointerEvents: useTransform(scrollYProgress, p => p > 0.8 ? "auto" as const : "none" as const)
          }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <p className="text-[#9A8A72] text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            Siap menjelajah?
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-6xl font-bold text-[#F5ECD7] leading-[1.1] mb-12 max-w-2xl">
            Temukan kisah di balik setiap batu
          </h2>
          <MagneticButton href="/candi">
            Mulai Eksplorasi
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator (visible only at top) */}
        <motion.div
          style={{ opacity: phase1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] text-[#9A8A72] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#C8A951] to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
