"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { CountryProfile } from "@/config/countryConfig";

interface AboutHeroProps {
  countryConfig?: CountryProfile;
}

export function AboutHero({ countryConfig }: AboutHeroProps) {
  const countryPrefix = countryConfig && countryConfig.code !== "global" ? `/${countryConfig.code}` : "";

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden" aria-label="About hero">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(1,34,105,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1,34,105,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-[#4DA6FF]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 mb-6">
            <Link href={countryPrefix || "/"} className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">About</span>
          </motion.div>

          {countryConfig && countryConfig.code !== "global" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100/80 text-[#0052CC] rounded-full text-xs font-bold mb-4 border border-blue-200/60 shadow-sm">
              <Globe size={14} />
              <span>{countryConfig.flag} RISE360 {countryConfig.name} Advisory</span>
            </motion.div>
          )}

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-5xl lg:text-7xl font-bold text-[#012269] mb-6 leading-tight">
            We exist to make{" "}
            <span className="italic gradient-text-dark">global growth</span>{" "}
            accessible {countryConfig?.name ? `in ${countryConfig.name}` : ""}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-slate-600 text-xl leading-relaxed mb-8 font-normal">
            RISE360 was founded on one belief: that every ambitious business expanding into {countryConfig?.name || "global markets"} deserves access to world-class cross-border expertise — not just the Fortune 500.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            <Link href={`${countryPrefix}/contact`} className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white !text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/25 hover:-translate-y-0.5">
              Work with us <ArrowRight size={16} className="text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
