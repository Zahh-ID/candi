"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Candi } from "@/data/candi";
import { MapPin, Building2, Landmark, Cuboid } from "lucide-react";
import { getAssetPath } from "@/utils/paths";

export default function CandiCard({ candi, index }: { candi: Candi; index: number }) {
  const isUNESCO = candi.statusWarisan === "UNESCO";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/candi/${candi.slug}`} className="block group h-full">
        <div className="bg-surface rounded-2xl overflow-hidden border border-border-dark group-hover:border-gold/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(200,169,81,0.12)]">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-background-200">
            <img 
              src={getAssetPath(candi.thumbnail)} 
              alt={candi.nama}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-200 via-transparent to-transparent opacity-80" />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full backdrop-blur-xl transition-colors duration-300 ${
                isUNESCO 
                  ? "bg-[#0A0806]/85 text-[#F5ECD7] border border-[#C8A951]/60 shadow-[0_0_15px_rgba(200,169,81,0.2)]" 
                  : "bg-[#0A0806]/85 text-[#9A8A72] border border-[#3D2E1E]"
              }`}>
                {isUNESCO && <span className="text-[#C8A951] mr-1">✦</span>}
                {candi.statusWarisan}
              </span>
              {candi.sketchfabId && (
                <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-[#0A0806]/85 text-[#C8A951] border border-[#C8A951]/40 flex items-center gap-1.5 backdrop-blur-xl shadow-[0_0_15px_rgba(200,169,81,0.15)]">
                  <Cuboid className="w-3.5 h-3.5" /> 3D View
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-cinzel font-bold text-xl text-gold-light mb-1 group-hover:text-gold transition-colors line-clamp-1">{candi.nama}</h3>
            
            <div className="flex items-center gap-1.5 text-sm text-text-muted mb-4">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="line-clamp-1">{candi.lokasi}</span>
            </div>

            <p className="text-sm text-text-primary/70 line-clamp-2 mb-6 flex-grow">
              {candi.deskripsiSingkat}
            </p>

            {/* Footer tags */}
            <div className="flex items-center gap-4 text-xs text-text-muted pt-4 border-t border-border-dark mt-auto">
              <div className="flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" />
                <span>{candi.agama}</span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                <span className="line-clamp-1">{candi.dinasti}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
