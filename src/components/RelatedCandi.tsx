import { Candi } from "@/data/candi";
import CandiCard from "./CandiCard";

interface RelatedCandiProps {
  relatedSlugs: string[];
  allCandi: Candi[];
}

export default function RelatedCandi({ relatedSlugs, allCandi }: RelatedCandiProps) {
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  const related = relatedSlugs
    .map(slug => allCandi.find(c => c.slug === slug))
    .filter((c): c is Candi => c !== undefined);

  if (related.length === 0) return null;

  return (
    <div className="mt-20 pt-16 border-t border-border-dark">
      <h3 className="text-2xl font-cinzel font-bold text-gold-light mb-8">Eksplorasi Terkait</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((candi, index) => (
          <CandiCard key={candi.slug} candi={candi} index={index} />
        ))}
      </div>
    </div>
  );
}
