"use client";

import { useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

interface ThreeDViewerProps {
  sketchfabId: string;
  credit: string;
  alt: string;
}

export default function ThreeDViewer({ sketchfabId, credit, alt }: ThreeDViewerProps) {
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (!mounted) return (
    <div className="w-full aspect-video md:aspect-[21/9] bg-[#1A1510] rounded-2xl animate-pulse flex items-center justify-center border border-[#3D2E1E]">
      <div className="w-8 h-8 rounded-full border-2 border-[#C8A951] border-t-transparent animate-spin" />
    </div>
  );

  const toggleFullscreen = () => {
    const viewer = document.getElementById("main-3d-viewer");
    if (!viewer) return;

    if (!document.fullscreenElement) {
      viewer.requestFullscreen().catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const embedUrl = `https://sketchfab.com/models/${sketchfabId}/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0&ui_watermark_link=0&ui_watermark=0`;

  return (
    <div
      id="main-3d-viewer"
      className={`relative w-full rounded-2xl overflow-hidden border border-[#3D2E1E] bg-[#0A0806] group ${
        isFullscreen ? "h-screen" : "aspect-video md:aspect-[21/9]"
      }`}
    >
      <iframe
        title={alt}
        src={embedUrl}
        className="w-full h-full border-0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />

      {/* Controls HUD */}
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-[#0A0806]/80 backdrop-blur border border-[#3D2E1E] text-[#F5ECD7] hover:text-[#C8A951] hover:border-[#C8A951]/50 transition-colors cursor-pointer"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Credit */}
      <div className="absolute top-4 left-4 bg-[#0A0806]/80 backdrop-blur border border-[#3D2E1E] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[10px] text-[#9A8A72]">
          3D Model by <a href={`https://sketchfab.com/models/${sketchfabId}`} target="_blank" rel="noopener noreferrer" className="text-[#C8A951] hover:text-[#E8C97A]">{credit}</a> on Sketchfab
        </p>
      </div>
    </div>
  );
}
