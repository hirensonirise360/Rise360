"use client";

import { useState } from "react";
import { MapPin, ExternalLink, Copy, Check, Navigation, X } from "lucide-react";

interface LocationMapProps {
  address?: string;
  addressText?: string;
  embedUrl?: string;
  googleMapsEmbedUrl?: string;
  directUrl?: string;
  directGoogleMapsUrl?: string;
}

export function LocationMap({
  address,
  addressText,
  embedUrl,
  googleMapsEmbedUrl,
  directUrl,
  directGoogleMapsUrl,
}: LocationMapProps) {
  const finalAddress = address || addressText || "";
  const finalEmbedUrl = embedUrl || googleMapsEmbedUrl || "";
  const finalDirectUrl = directUrl || directGoogleMapsUrl || "#";
  const [showInfo, setShowInfo] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative w-full h-[480px] lg:h-[550px] rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-slate-100 group">
      {/* Google Map iFrame */}
      <iframe
        title="RISE360 India Headquarters Map"
        src={finalEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
      />

      {/* Interactive Clickable Red Pin Marker Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setShowInfo((prev) => !prev)}
          className="relative flex flex-col items-center group/pin focus:outline-none"
          title="Click pin to show address"
          aria-label="Click location pin to view full address"
        >
          {/* Animated ping ring */}
          <span className="absolute -top-1 w-14 h-14 rounded-full bg-red-500/40 animate-ping pointer-events-none" />

          {/* Pin Icon Bubble */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-2xl flex items-center justify-center border-2 border-white ring-4 ring-red-500/30 group-hover/pin:scale-110 group-hover/pin:ring-red-500/50 transition-all duration-300 cursor-pointer">
            <MapPin size={22} className="fill-white/20" />
          </div>

          <div className="w-3 h-3 bg-red-600 rounded-full mt-0.5 border border-white shadow-md" />

          {/* Helper Tooltip when popup is closed */}
          {!showInfo && (
            <span className="mt-2 px-3 py-1 bg-slate-900/90 text-white text-[11px] font-semibold rounded-full shadow-lg whitespace-nowrap animate-bounce">
              Click pin to view address
            </span>
          )}
        </button>
      </div>

      {/* Prominent Address Info Window Box Overlay (Toggleable on Pin Click) */}
      {showInfo && (
        <div className="absolute top-5 left-4 right-4 md:left-6 md:right-auto md:max-w-lg z-20 bg-white/98 backdrop-blur-md p-5 rounded-2xl border-2 border-[#0066FF] shadow-2xl space-y-3.5 animate-[fadeIn_0.3s_ease]">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2 text-[#0066FF] font-bold text-xs uppercase tracking-wider">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                <MapPin size={15} className="text-[#0066FF]" />
              </div>
              RISE360 Corporate Headquarters
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                India HQ
              </span>
              <button
                type="button"
                onClick={() => setShowInfo(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close address window"
                title="Close window"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Highlighted Address Bar (Matching Screenshot Selection Style) */}
          <div className="p-3.5 bg-[#0052CC] text-white rounded-xl border border-blue-600 shadow-inner space-y-1">
            <p className="text-[11px] uppercase tracking-wider text-blue-200 font-bold">
              Official Location Address
            </p>
            <p className="text-xs font-semibold leading-relaxed text-white select-all">
              {finalAddress}
            </p>
          </div>

          {/* Actions Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href={finalDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white !text-white font-bold text-xs rounded-xl transition-all shadow-md"
            >
              <Navigation size={13} className="text-white" /> Get Directions <ExternalLink size={12} className="text-white" />
            </a>

            <button
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all border border-slate-200"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} className="text-slate-600" />
                  Copy Address
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
