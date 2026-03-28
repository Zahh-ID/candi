import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: "https://candi-nusantara.vercel.app" as any,
  title: "Candi Nusantara | Eksplorasi Peninggalan Bersejarah",
  description:
    "Platform eksplorasi candi dan peninggalan bersejarah Indonesia yang menampilkan model 3D, informasi sejarah, dan peta interaktif.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Candi Nusantara | Eksplorasi Peninggalan Bersejarah",
    description: "Nikmati perjalanan visual 3D melintasi sejarah candi-candi agung di Indonesia.",
    url: "https://candi-nusantara.vercel.app",
    siteName: "Candi Nusantara",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Candi Nusantara Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candi Nusantara | Eksplorasi Peninggalan Bersejarah",
    description: "Nikmati perjalanan visual 3D melintasi sejarah candi-candi agung di Indonesia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cinzel.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-outfit text-[#F5ECD7] bg-[#0A0806]">
        <SmoothScrolling>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
        <Script
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
          type="module"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
