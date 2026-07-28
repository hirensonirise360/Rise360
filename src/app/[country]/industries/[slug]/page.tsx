import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, AlertCircle, Globe } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { getCountryConfig } from "@/lib/countryResolver";
import { COUNTRY_CONFIG } from "@/config/countryConfig";

export async function generateStaticParams() {
  const params: { country: string; slug: string }[] = [];
  const slugs = [
    "real-estate",
    "fintech-saas",
    "manufacturing",
    "life-sciences",
    "financial-services",
    "retail-ecommerce",
    "hospitality",
    "clean-energy",
    "automobile",
  ];

  for (const country of Object.keys(COUNTRY_CONFIG.countries)) {
    for (const slug of slugs) {
      params.push({ country, slug });
    }
  }

  return params;
}

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
    tagline: "Cross-border retail expansion & tax advisory",
    description: "Expand consumer brands into global markets with seamless indirect tax compliance, marketplace setup, and logistics structure.",
    challenges: ["Cross-border VAT/GST and sales tax economic nexus", "Customs duty, tariffs, and import regulations", "Multi-currency merchant settlement and FX management", "Local entity registration for marketplace fulfillment"],
    solutions: ["Global indirect tax registration and filings", "E-commerce supply chain & entity structuring", "Cross-border payments & treasury setup", "Customs clearance & import compliance"],
    accentColor: "#f97316",
    badgeBg: "bg-orange-100/80 text-orange-800 border-orange-300",
  },
  "hospitality": {
    title: "Hospitality",
    tagline: "International hotel & leisure development",
    description: "Strategic transaction and operational advisory for hotel owners, resort developers, and hospitality brand managers.",
    challenges: ["Cross-border hotel acquisitions and property leases", "Franchise agreement tax optimization", "Multi-country payroll and labor compliance", "Local licensing for food, beverage, and gaming"],
    solutions: ["Hospitality transaction & lease advisory", "Franchise agreement structuring", "Multi-country payroll outsourcing", "Hotel entity incorporation"],
    accentColor: "#8b5cf6",
    badgeBg: "bg-purple-100/80 text-purple-800 border-purple-300",
  },
  "clean-energy": {
    title: "Clean Energy",
    tagline: "Renewable infrastructure & carbon finance",
    description: "Advisory for solar, wind, storage, and clean technology projects expanding across international borders.",
    challenges: ["Complex project finance and joint venture structuring", "Cross-border carbon credit tax treatment", "Government grant and subsidy compliance", "Power Purchase Agreement (PPA) regulatory frameworks"],
    solutions: ["Renewable energy project entity setup", "Cross-border tax optimization for green funds", "Grant and subsidy compliance management", "ESG regulatory reporting"],
    accentColor: "#22c55e",
    badgeBg: "bg-green-100/80 text-green-800 border-green-300",
  },
  "automobile": {
    title: "Automobile",
    tagline: "EV & OEM global market entry",
    description: "Strategic advisory for automotive OEMs, EV manufacturers, and supply chain vendors expanding into international markets.",
    challenges: ["Type approval and safety regulatory standards", "Supply chain tariff and free trade agreement rules", "EV subsidy eligibility and local content rules", "Dealer network and distribution agreements"],
    solutions: ["Automotive subsidiary setup and licensing", "Tariff and customs duty optimization", "EV incentive compliance and applications", "Distribution contract structuring"],
    accentColor: "#ef4444",
    badgeBg: "bg-red-100/80 text-red-800 border-red-300",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}): Promise<Metadata> {
  const { country, slug } = await params;
  const countryConfig = getCountryConfig(country);
  const industry = industriesData[slug];

  if (!industry || !countryConfig) {
    return { title: "Industry Not Found | RISE360 Global" };
  }

  return {
    title: `${industry.title} Advisory in ${countryConfig.name} | RISE360`,
    description: industry.description,
    alternates: { canonical: `https://${countryConfig.domain}/industries/${slug}` },
  };
}

export default async function CountryIndustryDetailPage({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}) {
  const { country, slug } = await params;
  const countryConfig = getCountryConfig(country);
  const industry = industriesData[slug];

  if (!industry || !countryConfig) {
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
            <Link href={`${countryPrefix}/industries`} className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Industries</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">{industry.title}</span>
          </div>

          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border ${industry.badgeBg}`}>
            <Globe size={14} />
            <span>RISE360 {countryConfig.name} {industry.title} Practice</span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#012269] mb-6 leading-tight max-w-4xl">
            {industry.title} Advisory <span className="italic gradient-text-dark">in {countryConfig.name}</span>
          </h1>

          <p className="text-slate-600 text-xl max-w-3xl leading-relaxed mb-8 font-normal">
            {industry.description}
          </p>

          <Link
            href={`${countryPrefix}/contact`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white font-bold text-sm rounded-xl transition-all shadow-xl hover:-translate-y-0.5"
          >
            Speak with Sector Advisor <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Challenges */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <AlertCircle size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#012269]">Key Sector Challenges in {countryConfig.name}</h3>
              </div>
              <div className="space-y-3">
                {industry.challenges.map((c) => (
                  <div key={c} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RISE360 Solutions */}
            <div className="bg-blue-50/60 rounded-3xl p-8 border border-blue-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0052CC] text-white flex items-center justify-center font-bold">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#012269]">Our Tailored Solutions</h3>
              </div>
              <div className="space-y-3">
                {industry.solutions.map((s) => (
                  <div key={s} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-blue-100 shadow-xs">
                    <CheckCircle2 size={16} className="text-[#0052CC] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-800 text-sm font-semibold leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
