import { notFound } from "next/navigation";
import { dataCandi } from "@/data/candi";
import Link from "next/link";
import { ChevronRight, MapPin, Cuboid, Landmark, Clock, Building2, Info, Ticket, ClockIcon, Lightbulb } from "lucide-react";
import ThreeDViewer from "@/components/ThreeDViewer";
import RelatedCandi from "@/components/RelatedCandi";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return dataCandi.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const candi = dataCandi.find((c) => c.slug === slug);
  if (!candi) return { title: "Candi Tidak Ditemukan" };

  return {
    title: `${candi.nama} | Candi Nusantara`,
    description: candi.deskripsiSingkat,
  };
}

export default async function CandiDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const candi = dataCandi.find((c) => c.slug === slug);

  if (!candi) {
    notFound();
  }

  const isUNESCO = candi.statusWarisan === "UNESCO";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 mt-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Beranda</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/candi" className="hover:text-gold transition-colors">Eksplorasi</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gold-light">{candi.nama}</span>
      </nav>

      {/* Header & 3D Viewer */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1">
          <ThreeDViewer 
            sketchfabId={candi.sketchfabId}
            credit={candi.sketchfabCredit}
            alt={`Model 3D ${candi.nama}`}
          />
        </div>
        
        {/* Info Panel */}
        <div className="w-full lg:w-[400px] flex flex-col gap-6">
          <div className="bg-surface border border-border-dark p-6 rounded-2xl">
            <h1 className="text-3xl font-cinzel font-bold text-gold-light mb-2">
              {candi.nama}
            </h1>
            {candi.namaLain && (
              <p className="text-text-muted italic mb-4 text-sm">Juga dikenal sebagai {candi.namaLain}</p>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                isUNESCO ? "bg-unesco-green/20 text-green-300 border border-unesco-green/50" : "bg-background-200 border border-border-dark text-text-muted"
              }`}>
                {candi.statusWarisan} {candi.unescoTahun && `(${candi.unescoTahun})`}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-background-200 border border-border-dark text-text-primary capitalize">
                {candi.pulau}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Lokasi</p>
                  <p className="text-sm text-text-muted">{candi.lokasi}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Landmark className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Corak Keagamaan</p>
                  <p className="text-sm text-text-muted">{candi.agama}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Building2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Dinasti Pembangun</p>
                  <p className="text-sm text-text-muted">{candi.dinasti}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Masa Pembangunan</p>
                  <p className="text-sm text-text-muted">{candi.tahunDibangun} (Abad ke-{candi.abadDibangun})</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border-dark p-6 rounded-2xl">
            <h3 className="text-lg font-cinzel font-bold text-gold-light mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" /> Informasi Kunjungan
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Ticket className="w-4 h-4 text-text-muted" />
                <span className="text-sm text-text-primary">{candi.tiketMasuk || "Gratis / Tidak ada info tiket"}</span>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-4 h-4 text-text-muted" />
                <span className="text-sm text-text-primary">{candi.jamBuka || "Umumnya 08.00 - 16.00 waktu setempat"}</span>
              </div>
              {candi.tips && (
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-border-dark">
                  <Lightbulb className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span className="text-sm text-text-muted italic">Tips: {candi.tips}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Sejarah & Deskripsi */}
          <section id="sejarah" className="scroll-mt-24">
            <h2 className="text-2xl font-cinzel font-bold text-gold-light border-b border-border-dark pb-4 mb-6">
              Sejarah & Gambaran Umum
            </h2>
            <div className="prose prose-invert prose-stone max-w-none text-text-primary/90 leading-relaxed font-outfit">
              <p>{candi.deskripsiLengkap}</p>
              <br />
              <p><strong className="text-gold">Fungsi Utama:</strong> {candi.fungsi}</p>
            </div>
          </section>

          {/* Arsitektur & Relief */}
          <section id="arsitektur" className="scroll-mt-24">
            <h2 className="text-2xl font-cinzel font-bold text-gold-light border-b border-border-dark pb-4 mb-6">
              Arsitektur & Seni Pahatan
            </h2>
            <div className="bg-background-200 border border-border-dark rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gold mb-2">Gaya Arsitektur</h4>
                  <p className="text-text-muted leading-relaxed">{candi.arsitektur}</p>
                </div>
                {candi.reliefUtama && (
                  <div>
                    <h4 className="font-semibold text-lg text-gold mb-2">Relief / Arca Utama</h4>
                    <p className="text-text-muted leading-relaxed">{candi.reliefUtama}</p>
                  </div>
                )}
                {candi.dimensi && (
                  <div className="md:col-span-2 pt-4 border-t border-border-dark flex flex-wrap gap-6">
                    {candi.dimensi.tinggi && (
                      <div>
                        <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Tinggi</span>
                        <span className="font-medium">{candi.dimensi.tinggi}</span>
                      </div>
                    )}
                    {candi.dimensi.luas && (
                      <div>
                        <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Luas Komplek</span>
                        <span className="font-medium">{candi.dimensi.luas}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar: Fakta Unik */}
        <div>
          <section className="bg-surface border border-gold/30 rounded-2xl p-6 sticky top-24">
            <h3 className="text-xl font-cinzel font-bold text-gold-light mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-gold" /> Fakta Menarik
            </h3>
            <ul className="space-y-4">
              {candi.faktaUnik.map((fakta, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-background-200 border border-gold text-gold text-xs font-bold font-cinzel">
                    {i + 1}
                  </span>
                  <span className="text-sm text-text-primary/90 pt-0.5">{fakta}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <RelatedCandi relatedSlugs={candi.candiTerkait} allCandi={dataCandi} />
    </div>
  );
}
