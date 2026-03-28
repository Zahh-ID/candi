"use client";

import { dataDinasti } from "@/data/dinasti";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function DinastiSection() {
  return (
    <section className="bg-surface py-20 border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-gold-light mb-4">Jejak Dinasti</h2>
            <p className="text-text-muted max-w-2xl">
              Kenali lebih dalam kerajaan dan wangsa yang pernah menorehkan sejarah peradaban emas di Nusantara.
            </p>
          </div>
          <Link 
            href="/dinasti" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors"
          >
            Lihat Timeline Lengkap <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataDinasti.slice(0, 3).map((dinasti, index) => (
            <motion.div
              key={dinasti.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-200 border border-border-dark rounded-xl p-6 group hover:border-gold/50 transition-colors flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-border-dark mb-4 group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-cinzel font-bold text-text-primary mb-2 group-hover:text-gold-light transition-colors">
                {dinasti.nama}
              </h3>
              <p className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface border border-border-dark text-xs font-medium text-text-muted mb-4 w-max">
                {dinasti.periode} • {dinasti.pusatKekuasaan}
              </p>
              <p className="text-sm text-text-primary/70 line-clamp-3 mb-6 flex-grow">
                {dinasti.deskripsi}
              </p>
              <Link
                href={`/dinasti#${dinasti.id}`}
                className="text-sm font-medium text-text-muted group-hover:text-gold transition-colors inline-flex items-center gap-1 mt-auto"
              >
                Pelajari lebih lanjut <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
