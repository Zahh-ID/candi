"use client";

import { useState, Suspense } from "react";
import { dataCandi } from "@/data/candi";
import FilterBar from "@/components/FilterBar";
import CandiCard from "@/components/CandiCard";

function CandiExplorerContent() {
  const [filters, setFilters] = useState({
    pulau: "",
    agama: "",
    era: "",
    search: ""
  });

  const filteredCandi = dataCandi.filter(candi => {
    if (filters.pulau && candi.pulau !== filters.pulau) return false;
    if (filters.agama && candi.agama !== filters.agama) return false;
    
    if (filters.era && filters.era !== "semua") {
      if (filters.era === "awal" && (candi.abadDibangun < 7 || candi.abadDibangun > 8)) return false;
      if (filters.era === "tengah" && (candi.abadDibangun < 9 || candi.abadDibangun > 10)) return false;
      if (filters.era === "akhir" && (candi.abadDibangun < 11 || candi.abadDibangun > 15)) return false;
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match = candi.nama.toLowerCase().includes(q) || 
                    candi.lokasi.toLowerCase().includes(q) ||
                    (candi.namaLain && candi.namaLain.toLowerCase().includes(q));
      if (!match) return false;
    }

    return true;
  });

  return (
    <>
      <FilterBar onFilterChange={setFilters} />

      {filteredCandi.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandi.map((candi, index) => (
            <CandiCard key={candi.slug} candi={candi} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-surface border border-border-dark rounded-xl">
          <h3 className="text-2xl font-cinzel text-gold-light mb-3">Peninggalan Tidak Ditemukan</h3>
          <p className="text-text-muted">Maaf, kami tidak menemukan candi yang sesuai dengan kriteria yang Anda cari.</p>
        </div>
      )}
    </>
  );
}

export default function CandiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 mt-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-gold-light mb-4">
          Direktori Candi Nusantara
        </h1>
        <p className="text-lg text-text-muted max-w-3xl">
          Telusuri dan pelajari berbagai peninggalan bersejarah di seluruh Indonesia. Gunakan filter untuk mencari berdasarkan pulau, agama, atau era pembangunan.
        </p>
      </div>

      <Suspense fallback={<div className="h-64 flex items-center justify-center">Memuat...</div>}>
        <CandiExplorerContent />
      </Suspense>
    </div>
  );
}
