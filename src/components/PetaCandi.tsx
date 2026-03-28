"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { dataCandi } from "@/data/candi";
import { MapIcon } from "lucide-react";
import { useRouter } from "next/navigation";

// Since leaflet needs window, we should make sure it is dynamically imported or only used on client
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// Fix missing marker icons in react-leaflet
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function PetaCandiMap() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] rounded-2xl bg-surface border border-border-dark flex items-center justify-center">
        <div className="flex flex-col items-center text-text-muted gap-2">
          <MapIcon className="w-8 h-8 animate-pulse" />
          <p className="animate-pulse">Memuat peta Nusantara...</p>
        </div>
      </div>
    );
  }

  // Define standard dark map using CartoDB Dark Matter
  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-border-dark isolate">
      <MapContainer
        center={[-2.5, 118]}
        zoom={5}
        className="w-full h-full z-0"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {dataCandi.map((candi) => (
          <Marker 
            key={candi.slug} 
            position={[candi.koordinat.lat, candi.koordinat.lng]}
            icon={customIcon}
          >
            <Popup className="custom-popup">
              <div className="font-outfit text-background-200">
                <img src={candi.thumbnail} alt={candi.nama} className="w-full h-24 object-cover rounded-md mb-2" />
                <h3 className="font-cinzel font-bold text-base mb-1">{candi.nama}</h3>
                <p className="text-xs text-gray-700 mb-1">{candi.lokasi}</p>
                <div className="flex gap-2 text-xs text-gray-600 mb-3">
                  <span>{candi.agama}</span>
                  <span>•</span>
                  <span>{candi.abadDibangun}M</span>
                </div>
                <button
                  onClick={() => router.push(`/candi/${candi.slug}`)}
                  className="w-full py-1.5 bg-background-200 text-gold-light text-xs font-semibold rounded hover:bg-surface transition-colors"
                >
                  Lihat Detail
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          background: #F5ECD7;
          border-radius: 8px;
          padding: 0;
        }
        .custom-popup .leaflet-popup-tip {
          background: #F5ECD7;
        }
        .custom-popup .leaflet-popup-content {
          margin: 12px;
        }
        .custom-popup a.leaflet-popup-close-button {
          color: #0A0806;
          padding: 4px;
        }
      `}</style>
    </div>
  );
}
