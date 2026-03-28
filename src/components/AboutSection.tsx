"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const paragraph = "Selama berabad-abad, nenek moyang kita membangun monumen batu yang luar biasa — dari stupa megah Borobudur hingga menara candi Prambanan yang menjulang. Setiap pahatan relief menyimpan kisah epik, setiap balok batu menyimpan doa.";

function SplitText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const chars = text.split("");

  return (
    <div ref={containerRef} className="relative flex flex-wrap leading-[1.4]">
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return (
          <SingleChar key={i} char={char} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </div>
  );
}

function SingleChar({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["#3D2E1E", "#F5ECD7"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-none"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function AboutSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-20 lg:px-32 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#9A8A72] text-xs tracking-[0.4em] uppercase mb-12"
      >
        Tentang Warisan Kita
      </motion.p>

      <SplitText text={paragraph} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 flex flex-col sm:flex-row gap-8 items-start"
      >
        <div className="w-16 h-[1px] bg-[#C8A951] mt-3 shrink-0" />
        <p className="text-[#9A8A72] text-sm md:text-base leading-relaxed max-w-lg">
          Candi Nusantara hadir untuk melestarikan dan memperkenalkan kembali warisan arsitektur kuno Indonesia kepada generasi digital — melalui eksplorasi 3D, peta interaktif, dan narasi sejarah yang mendalam.
        </p>
      </motion.div>
    </section>
  );
}
