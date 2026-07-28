import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronDown, Globe } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { getCountryConfig } from "@/lib/countryResolver";
import { COUNTRY_CONFIG } from "@/config/countryConfig";

export async function generateStaticParams() {
  const params: { country: string; slug: string }[] = [];
  const slugs = ["global-market-expansion", "cross-border-transactions", "financial-operations-outsourcing", "ma-advisory"];

  for (const country of Object.keys(COUNTRY_CONFIG.countries)) {
    for (const slug of slugs) {
      params.push({ country, slug });
    }
  }

  return params;
}

const servicesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  bullets: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "global-market-expansion": {
    title: "Global Market Expansion",
    tagline: "Enter new markets with confidence",
    description: "End-to-end advisory and operational support for businesses entering Canada, USA, Australia, UAE, UK, and Europe.",
    longDescription: "Expanding into a new international market is one of the highest-leverage moves a growth business can make — and one of the most complex. Regulatory environments differ, tax structures vary, banking relationships need to be established, and local market dynamics must be understood. RISE360's Global Market Expansion service provides the strategic framework, operational infrastructure, and on-the-ground expertise to ensure your market entry is structured for long-term success.",
    bullets: ["Market entry strategy & feasibility studies", "Entity setup & corporate structuring", "Regulatory licensing & compliance navigation", "Local banking & financial relationship setup", "Talent & HR framework establishment", "Go-to-market execution planning", "Ongoing compliance monitoring"],
    process: [
      { step: "01", title: "Feasibility Assessment", desc: "We assess market opportunity, regulatory environment, competitive landscape, and financial viability." },
      { step: "02", title: "Strategy Design", desc: "A bespoke market entry strategy aligned with your business model, risk appetite, and growth goals." },
      { step: "03", title: "Entity & Structure Setup", desc: "Legal entity formation, corporate structuring, and banking/financial infrastructure." },
      { step: "04", title: "Regulatory Compliance", desc: "Obtain necessary licenses, registrations, and compliance frameworks before day one." },
      { step: "05", title: "Go-to-Market Execution", desc: "Launch support including partner identification, first-hire strategy, and operational readiness." },
    ],
    faqs: [
      { q: "How long does market entry typically take?", a: "Timeline varies by jurisdiction and business type. Simple entities can be established in 4-8 weeks; regulated industries may require 3-6 months for full licensing." },
      { q: "Which markets do you cover?", a: "We have active local expertise in Canada, USA, Australia, UAE, UK, Netherlands, and key European jurisdictions." },
      { q: "Do you assist with ongoing compliance after entry?", a: "Yes. We offer ongoing compliance monitoring retainers, annual filing support, and advisory as regulations change." },
    ],
  },
  "cross-border-transactions": {
    title: "Cross-Border Transactions",
    tagline: "Complex deals, expertly navigated",
    description: "M&A advisory, due diligence, and transaction structuring for international deals across multiple regulatory environments.",
    longDescription: "Cross-border M&A and investment transactions are among the most complex financial undertakings a business can execute. Multiple legal systems, tax regimes, currency risks, and regulatory approvals must be navigated simultaneously.",
    bullets: ["Buy-side & sell-side M&A advisory", "Cross-border due diligence", "Tax-efficient transaction design", "Post-merger integration support", "Foreign investment compliance", "Business valuation", "Regulatory approval management"],
    process: [
      { step: "01", title: "Deal Origination", desc: "We help identify and approach targets or acquirers aligned with your strategic objectives." },
      { step: "02", title: "Structuring & Valuation", desc: "Tax-optimized deal structure and independent business valuation." },
      { step: "03", title: "Due Diligence", desc: "Financial, legal, tax, and operational due diligence across all relevant jurisdictions." },
      { step: "04", title: "Negotiation Support", desc: "Term sheet negotiation, SPA review, and transaction management through to close." },
      { step: "05", title: "Integration", desc: "Post-merger integration planning and execution — finance, operations, and people." },
    ],
    faqs: [
      { q: "What deal sizes do you work on?", a: "We advise on transactions from $5M to $500M+. Our sweet spot is mid-market cross-border M&A where specialist expertise creates the most value." },
      { q: "How do you handle multi-jurisdictional regulatory approvals?", a: "We coordinate across our network of local legal and regulatory specialists in each relevant jurisdiction." },
      { q: "Do you provide post-deal integration support?", a: "Yes. We offer 90-day and 12-month integration programs covering financial consolidation and operational alignment." },
    ],
  },
  "financial-operations-outsourcing": {
    title: "Financial Operations Outsourcing",
    tagline: "Your back-office, world-class",
    description: "Complete outsourcing of your financial operations — bookkeeping, payroll, reporting, and virtual CFO — delivered with enterprise precision.",
    longDescription: "For growth businesses expanding internationally, maintaining a high-quality, multi-jurisdictional finance function is both critical and costly. RISE360's Financial Operations Outsourcing service gives you access to a complete, enterprise-grade finance team.",
    bullets: ["Outsourced accounting & bookkeeping", "Multi-currency financial reporting", "Payroll & HR administration", "Tax filing & statutory compliance", "Virtual CFO services", "Management accounts & board reporting", "Cash flow management & forecasting"],
    process: [
      { step: "01", title: "Onboarding & Discovery", desc: "We audit your existing processes, software stack, and compliance standing across all entities." },
      { step: "02", title: "Process Standardization", desc: "We design uniform workflows, Chart of Accounts, and approval matrix for your multi-entity structure." },
      { step: "03", title: "Systems Integration", desc: "Connect accounting software, banking feeds, expense management, and payroll into a unified stack." },
      { step: "04", title: "Operational Execution", desc: "Our team handles day-to-day bookkeeping, monthly close, tax filings, and management accounts." },
      { step: "05", title: "Strategic Oversight", desc: "Monthly virtual CFO reviews, variance analysis, cash forecasting, and board-level advice." },
    ],
    faqs: [
      { q: "Can you manage operations across multiple countries simultaneously?", a: "Yes. Multi-entity, multi-currency operations are our core strength. We consolidate financial reporting across all your entities into a unified dashboard." },
      { q: "What accounting software do you work with?", a: "We work with NetSuite, Xero, QuickBooks Online, Sage Intacct, and custom enterprise ERPs." },
      { q: "How is communication handled?", a: "You get a dedicated Finance Lead as your single point of contact, supported by specialized accounting and tax professionals." },
    ],
  },
  "ma-advisory": {
    title: "M&A Advisory",
    tagline: "Strategic mergers done right",
    description: "End-to-end advisory for mergers, acquisitions, and divestitures — from deal origination through integration.",
    longDescription: "Executing a successful M&A transaction requires rigorous financial analysis, strategic clarity, and disciplined transaction management. RISE360 provides full-lifecycle M&A advisory services for growth-stage and middle-market companies.",
    bullets: ["Buy-side & sell-side representation", "Business valuation & financial modeling", "Deal origination & target sourcing", "Transaction structuring & negotiation", "Tax & regulatory due diligence", "Post-acquisition integration strategy"],
    process: [
      { step: "01", title: "Strategic Alignment", desc: "We clarify M&A objectives, target criteria, and valuation benchmarks." },
      { step: "02", title: "Target Identification", desc: "Research and discreetly approach prospective target companies or buyers." },
      { step: "03", title: "Valuation & Structuring", desc: "Develop detailed financial models and optimal transaction structures." },
      { step: "04", title: "Due Diligence & SPA", desc: "Lead financial due diligence and assist legal counsel with definitive agreements." },
      { step: "05", title: "Closing & Integration", desc: "Execute closing conditions and implement the 100-day integration roadmap." },
    ],
    faqs: [
      { q: "Do you handle sell-side as well as buy-side transactions?", a: "Yes. We advise both acquirers seeking expansion targets and business owners preparing for exit or recapitalization." },
      { q: "How do you value target companies?", a: "We apply a combination of DCF analysis, comparable company multiples, precedent transactions, and asset-based approaches." },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}): Promise<Metadata> {
  const { country, slug } = await params;
  const countryConfig = getCountryConfig(country);
  const service = servicesData[slug];

  if (!service || !countryConfig) {
    return { title: "Service Not Found | RISE360 Global" };
  }

  return {
    title: `${service.title} in ${countryConfig.name} | RISE360 Advisory`,
    description: service.description,
    alternates: { canonical: `https://${countryConfig.domain}/services/${slug}` },
  };
}

export default async function CountryServiceDetailPage({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}) {
  const { country, slug } = await params;
  const countryConfig = getCountryConfig(country);
  const service = servicesData[slug];

  if (!service || !countryConfig) {
    notFound();
  }

  const countryPrefix = countryConfig.code !== "global" ? `/${countryConfig.code}` : "";

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(1,34,105,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1,34,105,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href={countryPrefix || "/"} className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Home</Link>
            <span className="text-slate-400">/</span>
            <Link href={`${countryPrefix}/services`} className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Services</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">{service.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100/80 text-[#0052CC] rounded-full text-xs font-bold mb-4 border border-blue-200/60 shadow-sm">
            <Globe size={14} />
            <span>RISE360 {countryConfig.name} Practice</span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#012269] mb-6 leading-tight max-w-4xl">
            {service.title} <span className="italic gradient-text-dark">in {countryConfig.name}</span>
          </h1>

          <p className="text-slate-600 text-xl max-w-3xl leading-relaxed mb-8 font-normal">
            {service.description}
          </p>

          <Link
            href={`${countryPrefix}/contact`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white font-bold text-sm rounded-xl transition-all shadow-xl hover:-translate-y-0.5"
          >
            Discuss Your Growth Goals <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-3xl font-bold text-[#012269]">Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{service.longDescription}</p>

              <div className="pt-6">
                <h3 className="font-display text-2xl font-bold text-[#012269] mb-4">Key Capabilities</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <CheckCircle2 size={16} className="text-[#0052CC] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-800 text-sm font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 h-fit border border-slate-800 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-white">Ready to Expand in {countryConfig.name}?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Schedule a confidential consultation with our {countryConfig.name} country director to map out your strategic roadmap.
              </p>
              <Link
                href={`${countryPrefix}/contact`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Schedule Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Process Steps */}
          {service.process && (
            <div className="pt-8 border-t border-slate-100 space-y-8">
              <h2 className="font-display text-3xl font-bold text-[#012269]">Our Delivery Process</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {service.process.map((p) => (
                  <div key={p.step} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-2">
                    <span className="text-2xl font-black text-[#0052CC]">{p.step}</span>
                    <h4 className="font-display text-base font-bold text-slate-900">{p.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {service.faqs && (
            <div className="pt-8 border-t border-slate-100 space-y-6">
              <h2 className="font-display text-3xl font-bold text-[#012269]">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-4xl">
                {service.faqs.map((faq) => (
                  <div key={faq.q} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
                    <h4 className="font-display text-lg font-bold text-slate-900 flex items-center justify-between">
                      {faq.q}
                      <ChevronDown size={18} className="text-slate-400" />
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
