"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Globe, Layers, ShieldCheck, TrendingUp, Building2, FileText, Search, Sparkles, BookOpen, ChevronRight } from "lucide-react";
import { CountryProfile } from "@/config/countryConfig";
import { CtaBand } from "@/components/sections/CtaBand";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  domain: string;
  color?: string;
  countryCode?: string;
  author?: { name: string; title: string };
}

interface ResourcesContentProps {
  countryConfig: CountryProfile;
  posts: BlogPost[];
}

export const DOMAINS = [
  {
    id: "all",
    name: "All Domains",
    icon: Layers,
    description: "Explore all cross-border insights and regulatory guides",
    badgeBg: "bg-blue-100/80 text-[#0052CC]",
    borderGradient: "from-blue-600 via-indigo-600 to-cyan-500",
  },
  {
    id: "market-expansion",
    name: "Market Expansion",
    icon: Globe,
    description: "Entity setups, foreign direct investment, and local commercial scaling",
    badgeBg: "bg-blue-100 text-[#0052CC]",
    borderGradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "tax-compliance",
    name: "Tax & Statutory Compliance",
    icon: ShieldCheck,
    description: "Corporate income tax, sales tax nexus, CRA/IRS/ATO filings",
    badgeBg: "bg-indigo-100 text-indigo-700",
    borderGradient: "from-indigo-600 to-purple-600",
  },
  {
    id: "ma-advisory",
    name: "M&A & Deal Advisory",
    icon: TrendingUp,
    description: "Cross-border mergers, acquisitions, due diligence & deal structuring",
    badgeBg: "bg-purple-100 text-purple-700",
    borderGradient: "from-purple-600 to-pink-600",
  },
  {
    id: "fintech-ops",
    name: "FinTech & Financial Operations",
    icon: Building2,
    description: "Financial outsourcing, payment licensing & back-office architecture",
    badgeBg: "bg-amber-100 text-amber-800",
    borderGradient: "from-amber-500 to-orange-600",
  },
  {
    id: "transfer-pricing",
    name: "Transfer Pricing & OECD",
    icon: FileText,
    description: "OECD Pillar Two, intercompany pricing, and Master File documentation",
    badgeBg: "bg-emerald-100 text-emerald-800",
    borderGradient: "from-emerald-600 to-teal-600",
  },
];

export function ResourcesContent({ countryConfig, posts }: ResourcesContentProps) {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const countryPrefix = countryConfig.code !== "global" ? `/${countryConfig.code}` : "";

  // Group posts by Domain
  const groupedByDomain: Record<string, BlogPost[]> = {
    "market-expansion": posts.filter((p) => p.domain === "market-expansion" || p.tag === "Market Expansion"),
    "tax-compliance": posts.filter((p) => p.domain === "tax-compliance" || p.tag === "Tax & Compliance"),
    "ma-advisory": posts.filter((p) => p.domain === "ma-advisory" || p.tag === "M&A Advisory"),
    "fintech-ops": posts.filter((p) => p.domain === "fintech-ops" || p.tag === "Finance Ops" || p.tag === "FinTech" || p.tag === "FinTech & Ops"),
    "transfer-pricing": posts.filter((p) => p.domain === "transfer-pricing" || p.tag === "Transfer Pricing"),
  };

  // Search filter
  const filterBySearch = (list: BlogPost[]) => {
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
    );
  };

  return (
    <>
      {/* Sleek Hero Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 via-[#011638] to-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#4DA6FF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0066FF]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-slate-400 font-medium">
            <Link href={countryPrefix || "/"} className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-bold">Knowledge Domains ({countryConfig.name})</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-400/20 text-[#4DA6FF] rounded-full text-xs font-bold shadow-sm">
                <Sparkles size={14} />
                <span>RISE360 {countryConfig.name} Knowledge Architecture</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Knowledge <span className="bg-gradient-to-r from-[#4DA6FF] via-blue-300 to-indigo-200 bg-clip-text text-transparent">Domains & Guides</span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed">
                Structured domain frames containing comprehensive regulatory frameworks, entity guides, and financial insights for {countryConfig.name}.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles across all domains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Knowledge Domain Filter Tabs */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Knowledge Domains ({posts.length} Total Articles)</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {DOMAINS.map((domain) => {
                const Icon = domain.icon;
                const active = selectedDomain === domain.id;
                const count = domain.id === "all" ? posts.length : (groupedByDomain[domain.id]?.length || 0);

                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomain(domain.id)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                      active
                        ? "bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                    }`}
                  >
                    <Icon size={16} className={active ? "text-white" : "text-[#4DA6FF]"} />
                    <span>{domain.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] ${
                        active ? "bg-white/20 text-white" : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Framed Knowledge Domains Layout */}
      <section className="py-16 bg-slate-100/70 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Multi-Domain Frames Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOMAINS.filter((d) => d.id !== "all").map((dom) => {
              // If domain filter active and doesn't match this domain, skip
              if (selectedDomain !== "all" && selectedDomain !== dom.id) return null;

              const rawList = groupedByDomain[dom.id] || [];
              const domainPosts = filterBySearch(rawList);
              if (domainPosts.length === 0 && searchQuery.trim() !== "") return null;

              const Icon = dom.icon;

              return (
                <div
                  key={dom.id}
                  className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Top Gradient Accent Line */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${dom.borderGradient}`} />

                  {/* Frame Header */}
                  <div className="p-6 border-b border-slate-100 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-2xl ${dom.badgeBg} flex items-center justify-center font-bold shadow-sm`}>
                        <Icon size={20} />
                      </div>
                      <span className="px-3 py-1 bg-white text-slate-700 font-extrabold text-xs rounded-full border border-slate-200 shadow-xs">
                        {rawList.length} Guides
                      </span>
                    </div>

                    <div>
                      <h2 className="font-display text-xl font-bold text-[#012269] group-hover:text-[#0052CC] transition-colors">
                        {dom.name}
                      </h2>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium mt-1">
                        {dom.description}
                      </p>
                    </div>
                  </div>

                  {/* Frame Content: List of Blogs in this Domain */}
                  <div className="p-6 space-y-4 flex-1">
                    {domainPosts.slice(0, 4).map((post, idx) => (
                      <Link
                        key={`${dom.id}-${post.slug}-${idx}`}
                        href={`${countryPrefix}/resources/${post.slug}`}
                        className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-all duration-150 border border-transparent hover:border-blue-100"
                      >
                        {/* Bullet Icon */}
                        <div className="w-5 h-5 rounded-full bg-blue-100/70 text-[#0052CC] group-hover/item:bg-[#0052CC] group-hover/item:text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 transition-colors">
                          <ChevronRight size={12} className="group-hover/item:translate-x-0.5 transition-transform" />
                        </div>

                        {/* Title & Metadata */}
                        <div className="space-y-1 flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-[#0052CC] transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {post.readTime}
                            </span>
                            <span>•</span>
                            <span className="text-slate-500 font-semibold">{post.tag}</span>
                          </div>
                        </div>
                      </Link>
                    ))}

                    {domainPosts.length === 0 && (
                      <p className="text-xs text-slate-400 italic text-center py-4">No matching articles in this domain.</p>
                    )}
                  </div>

                  {/* Frame Footer */}
                  <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">
                      RISE360 {countryConfig.name}
                    </span>
                    <button
                      onClick={() => setSelectedDomain(dom.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:text-[#003899] group/btn transition-colors"
                    >
                      Explore All ({rawList.length})
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
