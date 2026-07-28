"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("rise360-cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("rise360-cookies-accepted", "true");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("rise360-cookies-accepted", "false");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#010f2e] border border-white/20 rounded-2xl shadow-2xl p-5 animate-[fadeInUp_0.4s_ease]"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-[#4DA6FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Cookie size={16} className="text-[#4DA6FF]" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm mb-1">We use cookies</p>
          <p className="text-slate-200 text-xs leading-relaxed">
            We use cookies to enhance your experience and analyze our traffic. 
            See our{" "}
            <Link href="/legal/privacy-policy" className="text-[#4DA6FF] hover:underline font-medium">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <button
          onClick={decline}
          className="flex-shrink-0 text-slate-300 hover:text-white transition-colors"
          aria-label="Close cookie banner"
        >
          <X size={16} />
        </button>
      </div>
      <div className="flex gap-2">
        <button
          id="cookie-accept-btn"
          onClick={accept}
          className="flex-1 py-2 bg-[#4DA6FF] hover:bg-[#70b8ff] text-[#010f2e] font-semibold text-xs rounded-lg transition-all"
        >
          Accept All
        </button>
        <button
          id="cookie-decline-btn"
          onClick={decline}
          className="flex-1 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg transition-all"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
