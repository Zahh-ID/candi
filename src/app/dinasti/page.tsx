import { Metadata } from "next";
import { dataDinasti } from "@/data/dinasti";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jelajah Dinasti Nusantara | Candi Nusantara",
  description: "Menelusuri jejak kerajaan dan dinasti di Indonesia yang meninggalkan warisan candi megah.",
};

export default function DinastiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 mt-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-gold-light mb-6">
          Jejak Wangsa Nusantara
        </h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Setiap candi merepresentasikan kejayaan dinasti atau kemaharajaan di baliknya. Pelajari timeline kerajaan-kerajaan besar pembangun peradaban.
        </p>
      </div>

      <div className="relative border-l border-border-dark ml-4 md:ml-10 space-y-16">
        {dataDinasti.map((dinasti, index) => (
          <div key={dinasti.id} id={dinasti.id} className="relative pl-8 md:pl-16 scroll-mt-32 group">
            <div className="absolute w-8 h-8 rounded-full bg-surface border-2 border-gold flex items-center justify-center -left-4 top-0 shadow-[0_0_15px_rgba(200,169,81,0.5)] group-hover:bg-gold transition-colors">
              <div className="w-2 h-2 rounded-full bg-background-200" />
            </div>

            <div className="bg-surface border border-border-dark rounded-2xl p-6 md:p-8 hover:border-gold/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-text-primary mb-2 group-hover:text-gold-light transition-colors">
                    {dinasti.nama}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-background-200 border border-border-dark font-medium text-sm text-gold-light">
                      {dinasti.periode}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background-200 border border-border-dark font-medium text-sm text-text-muted">
                      Pusat: {dinasti.pusatKekuasaan}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-background-200 flex flex-shrink-0 items-center justify-center border border-border-dark">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
              </div>

              <p className="text-text-primary/90 leading-relaxed mb-6 font-outfit">
                {dinasti.deskripsi}
              </p>

              <div className="pt-6 border-t border-border-dark">
                <Link 
                  href={`/candi?dinasti=${encodeURIComponent(dinasti.nama)}`}
                  className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors"
                >
                  Lihat peninggalan era ini &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
