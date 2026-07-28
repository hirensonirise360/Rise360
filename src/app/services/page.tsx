import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, GitMerge, Calculator, Shield } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Our Services | Global Market Expansion, Cross-Border M&A, Finance Outsourcing",
  description: "Explore RISE360's integrated consulting services: Global Market Expansion, Cross-Border Transactions, Financial Operations Outsourcing, and M&A Advisory.",
  alternates: { canonical: "https://rise360global.com/services" },
};

const services = [
  {
    icon: TrendingUp,
    title: "Global Market Expansion",
    slug: "global-market-expansion",
    tagline: "Enter new markets with confidence",
    description: "From market feasibility and entity setup to regulatory licensing and go-to-market execution — we handle every step of your international market entry.",
    bullets: ["Market entry strategy & feasibility", "Entity setup & corporate structuring", "Regulatory licensing & compliance", "Local partner identification", "Go-to-market execution planning"],
    color: "from-[#012269] to-[#0341b8]",
  },
  {
    icon: GitMerge,
    title: "Cross-Border Transactions",
    slug: "cross-border-transactions",
    tagline: "Complex deals, expertly navigated",
    description: "M&A advisory, due diligence, and transaction structuring for businesses executing complex international deals across multiple regulatory environments.",
    bullets: ["M&A advisory & deal structuring", "Cross-border due diligence", "Tax-efficient transaction design", "Post-merger integration", "Foreign investment compliance"],
    color: "from-[#0237a0] to-[#4DA6FF]",
    featured: true,
  },
  {
    icon: Calculator,
    title: "Financial Operations Outsourcing",
    slug: "financial-operations-outsourcing",
    tagline: "Your back-office, world-class",
    description: "Complete outsourcing of your financial operations — from bookkeeping and payroll to multi-currency reporting and virtual CFO services.",
    bullets: ["Outsourced accounting & bookkeeping", "Multi-currency financial reporting", "Payroll & HR administration", "Tax filing & compliance", "Virtual CFO services"],
    color: "from-[#012269] to-[#0237a0]",
  },
  {
    icon: Shield,
    title: "M&A Advisory",
    slug: "ma-advisory",
    tagline: "Strategic mergers done right",
    description: "End-to-end advisory for mergers, acquisitions, and divestitures — from deal origination through integration, across all major global jurisdictions.",
    bullets: ["Buy-side & sell-side advisory", "Business valuation", "Deal origination & sourcing", "Regulatory approvals management", "Post-deal integration support"],
    color: "from-[#0341b8] to-[#012269]",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(1,34,105,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1,34,105,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">Services</span>
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#012269] mb-6 leading-tight">
            Services built for <span className="italic gradient-text-dark">global ambition</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl leading-relaxed font-normal">
            Integrated, end-to-end consulting services designed to cover every stage of your international growth journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, slug, tagline, description, bullets, color, featured }) => (
              <div key={slug} className={`relative group rounded-3xl overflow-hidden flex flex-col ${featured ? "ring-2 ring-[#4DA6FF]/60 shadow-xl" : ""}`}>
                {featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#0066FF] text-white text-xs font-bold rounded-full">Most Popular</div>
                )}
                <div className={`bg-gradient-to-br ${color} p-8 flex flex-col flex-1`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">{tagline}</p>
                  <h2 className="font-display text-2xl font-bold text-white mb-3">{title}</h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                        <ArrowRight size={12} className="text-[#4DA6FF] flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm rounded-xl transition-all border border-white/20 hover:border-white/40 w-fit group/btn">
                    Learn more <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
