"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CheckCircle2, TrendingUp, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface RegionData {
  id: string;
  name: string;
  flag: string;
  setupTime: string;
  taxHighlight: string;
  keyServices: string[];
  clientMetric: string;
}

const regionsData: RegionData[] = [
  {
    id: "us",
    name: "USA",
    flag: "🇺🇸",
    setupTime: "2-4 Weeks",
    taxHighlight: "Delaware C-Corp & FIRPTA Structuring",
    keyServices: ["Delaware/Wyoming Setup", "Cross-Border M&A Advisory", "US-Canada Tax Treaty"],
    clientMetric: "35+ Active US Engagements",
  },
  {
    id: "ca",
    name: "Canada",
    flag: "🇨🇦",
    setupTime: "4-6 Weeks",
    taxHighlight: "SR&ED R&D Tax Credit Optimization",
    keyServices: ["Corporation Entity Setup", "FIRTB & Cross-Border Tax", "Outsourced Accounting"],
    clientMetric: "$12M+ Average Deal Value",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    setupTime: "3-5 Weeks",
    taxHighlight: "FCA Regulated & European Treaty Structuring",
    keyServices: ["UK Subsidiary Formation", "VAT/GST Compliance", "Cross-Border Mergers"],
    clientMetric: "20+ Active UK Engagements",
  },
  {
    id: "au",
    name: "Australia",
    flag: "🇦🇺",
    setupTime: "4-6 Weeks",
    taxHighlight: "FIRB Approval & R&D Tax Incentive",
    keyServices: ["APAC Operations Hub", "Statutory Compliance", "Virtual CFO Services"],
    clientMetric: "15+ Years Regional Expertise",
  },
  {
    id: "nl",
    name: "Netherlands",
    flag: "🇳🇱",
    setupTime: "3-5 Weeks",
    taxHighlight: "Dutch Flex B.V. & Innovation Box 9% Tax",
    keyServices: ["KVK Commercial Setup", "EU VAT Passporting", "Transfer Pricing Substance"],
    clientMetric: "EU Commercial Hub",
  },
];

interface HeroExecutiveDashboardProps {
  countryCode?: string;
}

export function HeroExecutiveDashboard({ countryCode }: HeroExecutiveDashboardProps) {
  const code = (countryCode || "global").toLowerCase();
  
  const matched = regionsData.find((r) => r.id === code) || regionsData[0];
  const [activeRegion, setActiveRegion] = useState<RegionData>(matched);

  useEffect(() => {
    if (code && code !== "global") {
      const found = regionsData.find((r) => r.id === code);
      if (found) setActiveRegion(found);
    }
  }, [code]);

  return (
    <div className="relative">
      {/* Main Executive Card Frame */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Card Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#0066FF]" />
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                {activeRegion.name} Market Execution
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-[#012269] mt-0.5">
              {activeRegion.name} Market Entry Blueprint
            </h3>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Regional Practice
          </div>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {regionsData.map((region) => {
            const isSelected = activeRegion.id === region.id;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 border ${
                  isSelected
                    ? "bg-[#012269] text-white border-[#012269] shadow-md scale-105"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Region Dynamic Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-6 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/60"
          >
            {/* Top Metrics Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 space-y-1 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <Clock size={14} className="text-[#0066FF]" />
                  Average Setup Timeline
                </div>
                <div className="font-display text-xl font-bold text-[#012269]">
                  {activeRegion.setupTime}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/60 space-y-1 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <TrendingUp size={14} className="text-[#0066FF]" />
                  Regional Benchmark
                </div>
                <div className="font-display text-base font-bold text-emerald-700">
                  {activeRegion.clientMetric}
                </div>
              </div>
            </div>

            {/* Tax Highlight Badge */}
            <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/60 text-xs font-semibold text-[#0052CC] flex items-center justify-between">
              <span>{activeRegion.taxHighlight}</span>
            </div>

            {/* Key Services List */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Execution Capabilities
              </span>
              <div className="space-y-2">
                {activeRegion.keyServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/60"
                  >
                    <CheckCircle2 size={14} className="text-[#0052CC] flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Action Link */}
            <Link
              href={activeRegion.id === "us" ? "/us" : `/${activeRegion.id}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white text-xs font-bold rounded-xl transition-all shadow-md"
            >
              Explore {activeRegion.name} Market Hub
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
