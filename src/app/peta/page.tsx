"use client";

import dynamic from "next/dynamic";

const PetaCandiMap = dynamic(() => import("@/components/PetaCandi"), { ssr: false });

export default function PetaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 mt-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-[#E8C97A] mb-4">
          Peta Persebaran
        </h1>
        <p className="text-lg text-[#9A8A72] max-w-3xl">
          Jelajahi lokasi peninggalan bersejarah dari ujung Sumatera hingga Bali melalui peta interaktif kami. Klik ikon pada peta untuk melihat informasi singkat.
        </p>
      </div>

      <div className="w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-[#3D2E1E] relative z-10">
        <PetaCandiMap />
      </div>
    </div>
  );
}
