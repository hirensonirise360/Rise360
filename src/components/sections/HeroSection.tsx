"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe2, CheckCircle2, Building2 } from "lucide-react";
import { HeroExecutiveDashboard } from "@/components/ui/HeroExecutiveDashboard";
import { CountryProfile } from "@/config/countryConfig";

interface HeroSectionProps {
  countryConfig?: CountryProfile;
}

const trustBadges = [
  { icon: Shield, label: "Enterprise Security", desc: "SOC2 compliant & white-label ready" },
  { icon: Zap, label: "Instant Onboarding", desc: "Dedicated teams active in under 5 days" },
  { icon: Globe2, label: "40% Cost Savings", desc: "High-margin delivery for CPA firms & SMBs" },
];

export function HeroSection({ countryConfig }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const countryName = countryConfig?.name || "Global";
  const badge = countryConfig?.homepage?.heroBadge || "Outsourced Accounting & Financial Operations";
  const headline = countryConfig?.homepage?.heroHeadline || `Outsourced Bookkeeping, Tax Prep & Virtual CFO Services in ${countryName}`;
  const subheadline = countryConfig?.homepage?.heroSubheadline || `Empowering ${countryName} CPA practices and small-to-mid-sized businesses with dedicated white-label bookkeeping, tax preparation, payroll, and Virtual CFO support.`;
  const ctaText = countryConfig?.homepage?.heroCtaText || "Book a Strategy Call";
  const ctaHref = countryConfig?.homepage?.heroCtaHref || "/contact";

  const icpHighlights = [
    `CPA Firm Capacity & Busy Season Support`,
    `Small & Mid-Sized Business (SMB) Finance Operations`,
    `Tax Prep, Payroll & Virtual CFO Services`,
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white"
      aria-label="Hero section"
    >
      {/* Background visual accents */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#4DA6FF]/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full bg-[#012269]/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(1,34,105,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1,34,105,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Pre-headline badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Building2 size={13} />
              <span>{badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#012269] leading-[1.12] tracking-tight"
            >
              {headline.split("with").map((part, i) =>
                i === 0 ? (
                  <span key={part}>
                    {part}{" "}
                  </span>
                ) : (
                  <span key={part} className="gradient-text-dark italic">
                    with {part}
                  </span>
                )
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {subheadline}
            </motion.p>

            {/* Target Audience Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1"
            >
              {icpHighlights.map((item) => (
                <div key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 text-slate-800 text-xs font-bold border border-slate-200/80">
                  <CheckCircle2 size={13} className="text-[#0066FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href={ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white font-bold text-base rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>{ctaText}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Core Services
              </Link>
            </motion.div>

            {/* Micro trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80"
            >
              {trustBadges.map((b) => (
                <div key={b.label} className="text-center lg:text-left space-y-1">
                  <div className="inline-flex items-center gap-1 text-slate-900 font-bold text-xs">
                    <b.icon size={13} className="text-[#0066FF]" />
                    <span>{b.label}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight hidden sm:block">{b.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Interactive Executive Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <HeroExecutiveDashboard countryCode={countryConfig?.code} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
