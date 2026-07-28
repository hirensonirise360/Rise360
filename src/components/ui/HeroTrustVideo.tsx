"use client";

import { useState } from "react";
import { Play, X, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const handshakeVideoMp4 =
  "https://cdn.coverr.co/videos/coverr-shaking-hands-in-an-office-5742/1080p.mp4";

const fallbackHandshakeVideoMp4 =
  "https://assets.mixkit.co/videos/preview/mixkit-business-partners-shaking-hands-after-a-meeting-41528-large.mp4";

export function HeroTrustVideo() {
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Main Video Card Frame — Clean & Visible Handshake Video */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-100 group aspect-[4/3] lg:aspect-[16/11]">
          {/* 100% Reliable Autoplaying Handshake Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          >
            <source src={handshakeVideoMp4} type="video/mp4" />
            <source src={fallbackHandshakeVideoMp4} type="video/mp4" />
            Your browser does not support video playback.
          </video>

          {/* Light Ambient Overlay so handshake video remains 100% visible */}
          <div className="absolute inset-0 bg-blue-950/15 group-hover:bg-blue-950/5 transition-colors duration-300 pointer-events-none" />

          {/* Top Verified Badge */}
          <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#0066FF]" />
            <span className="text-[#012269] text-xs font-bold">Verified Global Partners</span>
          </div>

          {/* Interactive Play Button (Centered Overlay) */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setIsPlayingModal(true)}
              className="relative flex items-center justify-center group/play cursor-pointer focus:outline-none"
              aria-label="Play Corporate Overview Video"
            >
              {/* Outer Pulse Ring */}
              <span className="absolute w-20 h-20 rounded-full bg-white/50 animate-ping pointer-events-none" />

              {/* Play Button Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white shadow-2xl flex items-center justify-center border-2 border-white ring-4 ring-white/40 group-hover/play:scale-110 transition-all duration-300">
                <Play size={24} className="fill-white translate-x-0.5" />
              </div>
            </button>
          </div>

          {/* Bottom Card Caption Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-5 bg-gradient-to-t from-[#010f2e]/80 via-[#010f2e]/40 to-transparent">
            <p className="text-white font-bold text-base font-display drop-shadow-md">
              Trusted Cross-Border Strategic Advisory
            </p>
            <p className="text-slate-200 text-xs font-medium drop-shadow">
              Sealing partnerships across 15+ jurisdictions
            </p>
          </div>
        </div>

        {/* Floating Achievement Badge 1 (Top Right) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 -right-4 z-30 bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xl hidden sm:flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <p className="text-[#012269] text-xs font-bold">94% Retention</p>
            <p className="text-slate-500 text-[11px] font-medium">Long-term client trust</p>
          </div>
        </motion.div>

        {/* Floating Achievement Badge 2 (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-5 -left-4 z-30 bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xl hidden sm:flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0066FF] flex items-center justify-center font-bold">
            <Zap size={18} />
          </div>
          <div>
            <p className="text-[#012269] text-xs font-bold">40% Cost Savings</p>
            <p className="text-slate-500 text-[11px] font-medium">Back-office efficiency</p>
          </div>
        </motion.div>
      </div>

      {/* Interactive Full Screen Video Modal Player */}
      <AnimatePresence>
        {isPlayingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPlayingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-[#010f2e] text-white border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#4DA6FF]" />
                  <span className="font-bold text-sm">RISE360 Global Partnership Showcase</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPlayingModal(false)}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal video"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Player Frame */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  src={handshakeVideoMp4}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer Bar */}
              <div className="p-4 bg-[#010f2e] text-slate-300 text-xs flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                <p>Learn how RISE360 streamlines multi-jurisdiction financial operations and market entry.</p>
                <a
                  href="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white font-bold text-xs rounded-xl hover:shadow-lg transition-all"
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
