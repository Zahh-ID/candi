import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Beranda", href: "/" },
    { label: "Eksplorasi", href: "/candi" },
    { label: "Peta Candi", href: "/peta" },
    { label: "Dinasti", href: "/dinasti" },
  ];



  return (
    <footer className="border-t border-[#3D2E1E] bg-[#0A0806]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="font-cinzel text-2xl tracking-[0.1em] text-[#F5ECD7] hover:text-[#C8A951] transition-colors">
              Candi<span className="text-[#C8A951]">.</span>
            </Link>
            <p className="text-[#9A8A72] text-sm leading-relaxed mt-4 max-w-xs">
              Melestarikan warisan peradaban Nusantara melalui eksplorasi digital interaktif.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9A8A72] mb-4">Navigasi</p>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#F5ECD7]/70 hover:text-[#C8A951] transition-colors duration-300 w-max"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div />
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#3D2E1E] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[#9A8A72] tracking-wide">
            © {new Date().getFullYear()} Candi Nusantara. Hak Cipta Dilindungi.
          </p>
          <p className="text-[11px] text-[#9A8A72] tracking-wide">
            Dibuat untuk melestarikan warisan Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
}
