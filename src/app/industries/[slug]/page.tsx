import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";

const industriesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  accentColor: string;
  badgeBg: string;
}> = {
  "real-estate": {
    title: "Real Estate",
    tagline: "Cross-border property investment & development advisory",
    description: "Navigate complex cross-border real estate transactions, foreign investment regulations, and multi-jurisdiction property structures with confidence.",
    challenges: ["Foreign ownership restrictions and FIRPTA/FIRTB compliance", "Multi-jurisdiction tax exposure on property income", "Currency hedging for international property acquisitions", "Cross-border development financing structures"],
    solutions: ["Entity structuring for tax-efficient foreign property ownership", "Cross-border real estate transaction advisory", "Fund setup for international real estate portfolios", "Ongoing compliance and reporting across jurisdictions"],
    accentColor: "#f59e0b",
    badgeBg: "bg-amber-100/80 text-amber-800 border-amber-300",
  },
  "fintech-saas": {
    title: "FinTech & SaaS",
    tagline: "Global expansion for tech-first businesses",
    description: "Scale your FinTech or SaaS business across borders with expert guidance on regulatory licensing, payment infrastructure, and international entity structuring.",
    challenges: ["Financial services licensing across multiple jurisdictions", "PSD2, MiCA, and regional fintech regulatory compliance", "Cross-border payment infrastructure and banking relationships", "Data residency and privacy compliance (GDPR, CCPA)"],
    solutions: ["Regulatory mapping and licensing strategy", "EMI/PSP license applications and management", "International entity and IP structuring for tax efficiency", "Ongoing regulatory monitoring and advisory"],
    accentColor: "#0066FF",
    badgeBg: "bg-blue-100/80 text-[#0052CC] border-blue-300",
  },
  "manufacturing": {
    title: "Manufacturing",
    tagline: "Global manufacturing footprint advisory",
    description: "Optimize your global manufacturing footprint with strategic advisory on facility establishment, supply chain structuring, and international operations.",
    challenges: ["Free trade zone and customs duty optimization", "Transfer pricing for intra-group manufacturing", "Environmental and product compliance across markets", "International workforce and payroll management"],
    solutions: ["Manufacturing entity setup in target jurisdictions", "Transfer pricing policy design and documentation", "Trade compliance and customs advisory", "Payroll and HR outsourcing for manufacturing teams"],
    accentColor: "#6366f1",
    badgeBg: "bg-indigo-100/80 text-indigo-800 border-indigo-300",
  },
  "life-sciences": {
    title: "Life Sciences",
    tagline: "International regulatory and commercial advisory",
    description: "Navigate the complex intersection of scientific regulation and international commerce for pharmaceutical, biotech, and medical device companies.",
    challenges: ["FDA, EMA, TGA regulatory pathways", "Clinical trial structuring across multiple markets", "IP protection and licensing for cross-border commercialization", "Reimbursement and market access strategy"],
    solutions: ["Regulatory affairs support and market entry", "Cross-border licensing and IP structuring", "Clinical site entity and financial management", "Commercial entity setup and operations"],
    accentColor: "#10b981",
    badgeBg: "bg-emerald-100/80 text-emerald-800 border-emerald-300",
  },
  "financial-services": {
    title: "Financial Services",
    tagline: "Cross-border expansion for financial institutions",
    description: "Strategic and operational advisory for banks, asset managers, insurance companies, and financial intermediaries expanding internationally.",
    challenges: ["Banking and investment management licensing", "AML/KYC compliance across jurisdictions", "FATCA, CRS, and international tax reporting", "Capital allocation and transfer pricing"],
    solutions: ["Regulatory licensing strategy and applications", "AML/KYC framework design and implementation", "International tax compliance and reporting", "Operating model design for multi-jurisdiction entities"],
    accentColor: "#2563eb",
    badgeBg: "bg-blue-100/80 text-blue-900 border-blue-300",
  },
  "retail-ecommerce": {
    title: "Retail & E-commerce",
    tagline: "Seamless global retail expansion",
    description: "Launch and scale your retail or e-commerce brand internationally with expert guidance on market entry, VAT/GST compliance, and supply chain optimization.",
    challenges: ["VAT/GST registration and compliance in multiple markets", "Cross-border e-commerce tax obligations (OSS, IOSS)", "Marketplace and fulfillment entity structuring", "Consumer protection and returns compliance"],
    solutions: ["VAT/GST registration and ongoing filing", "Cross-border e-commerce tax strategy", "International entity and warehouse structuring", "Customs and trade compliance"],
    accentColor: "#f97316",
    badgeBg: "bg-orange-100/80 text-orange-900 border-orange-300",
  },
  "hospitality": {
    title: "Hospitality",
    tagline: "International hospitality investment and operations",
    description: "Advisory for hotel groups, restaurant chains, and hospitality investors navigating cross-border property acquisition, franchise structuring, and operations.",
    challenges: ["Multi-jurisdiction hotel and F&B licensing", "Cross-border franchise and management agreement structuring", "Foreign property ownership and holding structures", "International payroll and employment compliance"],
    solutions: ["Hospitality entity and franchise structure design", "Foreign property acquisition and tax structuring", "Management company and fee optimization", "International payroll and HR administration"],
    accentColor: "#8b5cf6",
    badgeBg: "bg-purple-100/80 text-purple-900 border-purple-300",
  },
  "clean-energy": {
    title: "Clean Energy",
    tagline: "Cross-border clean energy investment advisory",
    description: "Navigate the evolving regulatory and financial landscape of international clean energy investment, project development, and infrastructure transactions.",
    challenges: ["Jurisdiction-specific renewable energy incentive programs", "Carbon credit and offset market compliance", "Project finance and international capital structuring", "Grid connection and offtake agreement negotiation"],
    solutions: ["Incentive and grant program identification and application", "Project entity structuring for international clean energy", "Carbon market advisory and compliance", "Financial operations for project companies"],
    accentColor: "#22c55e",
    badgeBg: "bg-green-100/80 text-green-900 border-green-300",
  },
  "automobile": {
    title: "Automobile",
    tagline: "Global automotive market expansion advisory",
    description: "Strategic advisory for automotive OEMs, distributors, and EV companies entering new markets and navigating complex regulatory and trade environments.",
    challenges: ["Type approval and homologation across jurisdictions", "Import duties and trade compliance (tariffs, FTAs)", "EV infrastructure and subsidy programs", "Dealer network and distribution entity structuring"],
    solutions: ["Market entry strategy for automotive and EV brands", "Trade and customs compliance advisory", "Distribution entity and dealer network structuring", "EV subsidy and incentive program navigation"],
    accentColor: "#ef4444",
    badgeBg: "bg-red-100/80 text-red-900 border-red-300",
  },
};

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} | RISE360 Cross-Border Consulting`,
    description: industry.description,
    alternates: { canonical: `https://rise360global.com/industries/${slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(1,34,105,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1,34,105,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#4DA6FF]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Home</Link>
            <span className="text-slate-400">/</span>
            <Link href="/industries" className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Industries</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">{industry.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${industry.badgeBg} text-xs font-bold uppercase tracking-wider`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {industry.tagline}
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#012269] leading-tight">
              {industry.title}
            </h1>

            <p className="text-slate-600 text-xl leading-relaxed font-normal">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Challenges */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <AlertCircle size={20} className="text-amber-500" />
                <h2 className="font-display text-2xl font-bold text-[#012269]">Sector Challenges</h2>
              </div>
              <ul className="space-y-3">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3.5 p-4.5 rounded-2xl border border-amber-200/60 bg-amber-50/40">
                    <div className="w-5 h-5 rounded-full bg-amber-200/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-800 text-sm font-medium leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <h2 className="font-display text-2xl font-bold text-[#012269]">RISE360 Solutions</h2>
              </div>
              <ul className="space-y-3">
                {industry.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3.5 p-4.5 rounded-2xl border border-emerald-200/60 bg-emerald-50/40">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-medium leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-14 p-8 lg:p-10 rounded-3xl bg-[#012269] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4DA6FF]/10 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="font-display text-3xl font-bold text-white">
                Ready to expand in {industry.title}?
              </h2>
              <p className="text-slate-200 text-base font-normal">
                Book a sector-specific consultation with our {industry.title.toLowerCase()} specialists. We&apos;ll assess your target market and outline a tailored execution roadmap.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white !text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
                >
                  Book a Consultation <ArrowRight size={15} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
