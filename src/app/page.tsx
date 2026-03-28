"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { dataCandi } from "@/data/candi";
import HeroCanvas from "@/components/HeroCanvas";
import Preloader from "@/components/Preloader";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import FilterBar from "@/components/FilterBar";
import CandiCard from "@/components/CandiCard";
import DinastiSection from "@/components/DinastiSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";

const PetaCandiMap = dynamic(() => import("@/components/PetaCandi"), { ssr: false });

export default function Home() {
  const [filters, setFilters] = useState({
    pulau: "",
    agama: "",
    era: "",
    search: "",
  });

  const filteredCandi = dataCandi.filter((candi) => {
    if (filters.pulau && candi.pulau !== filters.pulau) return false;
    if (filters.agama && candi.agama !== filters.agama) return false;

    if (filters.era && filters.era !== "semua") {
      if (filters.era === "awal" && (candi.abadDibangun < 7 || candi.abadDibangun > 8))
        return false;
      if (filters.era === "tengah" && (candi.abadDibangun < 9 || candi.abadDibangun > 10))
        return false;
      if (filters.era === "akhir" && (candi.abadDibangun < 11 || candi.abadDibangun > 15))
        return false;
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match =
        candi.nama.toLowerCase().includes(q) ||
        candi.lokasi.toLowerCase().includes(q) ||
        (candi.namaLain && candi.namaLain.toLowerCase().includes(q));
      if (!match) return false;
    }

    return true;
  });

  return (
    <>
      <Preloader />

      {/* ── Scroll-triggered Canvas Hero (sticky, 300vh) ── */}
      <HeroCanvas />

      {/* ── Content sections — overlaps hero with negative margin for seamless finish ── */}
      <div className="-mt-[100vh] relative z-10 bg-[#0A0806]">
        {/* About with text-reveal */}
        <AboutSection />

        {/* Stats with count-up */}
        <StatsSection />

        {/* Galeri Peninggalan */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="mb-12">
            <p className="text-[#9A8A72] text-xs tracking-[0.4em] uppercase mb-4">Koleksi</p>
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-[#F5ECD7] mb-4">
              Galeri Peninggalan
            </h2>
            <p className="text-[#9A8A72] max-w-2xl text-sm md:text-base">
              Jelajahi keindahan arsitektur kuno nusantara dari berbagai era dan kekuatan dinasti
              masa lampau.
            </p>
          </div>

          <FilterBar onFilterChange={setFilters} />

          {filteredCandi.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandi.map((candi, index) => (
                <CandiCard key={candi.slug} candi={candi} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#1A1510] border border-[#3D2E1E] rounded-xl">
              <h3 className="text-xl font-cinzel text-[#E8C97A] mb-2">
                Candi Tidak Ditemukan
              </h3>
              <p className="text-[#9A8A72]">
                Coba ubah kata kunci pencarian atau sesuaikan filter Anda.
              </p>
            </div>
          )}
        </div>

        {/* Dinasti Section */}
        <DinastiSection />

        {/* Peta */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="mb-12">
            <p className="text-[#9A8A72] text-xs tracking-[0.4em] uppercase mb-4">Lokasi</p>
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-[#F5ECD7] mb-4">
              Peta Persebaran
            </h2>
            <p className="text-[#9A8A72] max-w-2xl text-sm md:text-base">
              Peninggalan peradaban tersebar dari ujung Sumatera hingga pesisir Bali.
            </p>
          </div>
          <PetaCandiMap />
        </div>

        {/* Testimonial */}
        <TestimonialSlider />

        {/* CTA */}
        <CTASection />
      </div>
    </>
  );
}
