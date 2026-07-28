import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, Cpu, Factory, FlaskConical, Landmark, ShoppingBag, Hotel, Leaf, Car, Globe } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { getCountryConfig } from "@/lib/countryResolver";
import { COUNTRY_CONFIG } from "@/config/countryConfig";

export async function generateStaticParams() {
  return Object.keys(COUNTRY_CONFIG.countries).map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const countryConfig = getCountryConfig(country);

  if (!countryConfig) {
    return { title: "Industries | RISE360 Global" };
  }

  return {
    title: `Industry Solutions in ${countryConfig.name} | RISE360 Sector Advisory`,
    description: `Specialized cross-border sector consulting for ${countryConfig.name}: Real Estate, FinTech, Manufacturing, Life Sciences, Energy, and Automobile.`,
    alternates: { canonical: `https://${countryConfig.domain}/industries` },
  };
}

const industries = [
  { icon: Building2, title: "Real Estate", slug: "real-estate", desc: "Cross-border property investment, foreign holding structures, and multi-jurisdiction development advisory.", color: "#f59e0b" },
  { icon: Cpu, title: "FinTech & SaaS", slug: "fintech-saas", desc: "Regulatory licensing, EMI/PSP setup, cross-border payments, and global IP structuring for tech leaders.", color: "#0066FF" },
  { icon: Factory, title: "Manufacturing", slug: "manufacturing", desc: "Global footprint optimization, supply chain structuring, transfer pricing, and customs duty advisory.", color: "#6366f1" },
  { icon: FlaskConical, title: "Life Sciences", slug: "life-sciences", desc: "FDA/EMA regulatory pathways, cross-border clinical trials, and international IP licensing.", color: "#10b981" },
  { icon: Landmark, title: "Financial Services", slug: "financial-services", desc: "Regulatory licensing, AML/KYC compliance, tax reporting, and cross-border bank expansion.", color: "#012269" },
  { icon: ShoppingBag, title: "Retail & E-commerce", slug: "retail-ecommerce", desc: "VAT/GST compliance, cross-border tax, marketplace structuring, and global fulfillment setup.", color: "#f97316" },
  { icon: Hotel, title: "Hospitality", slug: "hospitality", desc: "International hotel acquisition, franchise agreement structuring, and multi-country payroll management.", color: "#8b5cf6" },
  { icon: Leaf, title: "Clean Energy", slug: "clean-energy", desc: "Renewable energy project finance, carbon credit compliance, and international infrastructure advisory.", color: "#22c55e" },
  { icon: Car, title: "Automobile", slug: "automobile", desc: "Automotive OEM market entry, EV subsidy programs, type approval, and distribution network design.", color: "#ef4444" },
];

export default async function CountryIndustriesPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const countryConfig = getCountryConfig(country);

  if (!countryConfig) {
    notFound();
  }

  const countryPrefix = countryConfig.code !== "global" ? `/${countryConfig.code}` : "";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(1,34,105,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1,34,105,0.4) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href={countryPrefix || "/"} className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">Industries ({countryConfig.name})</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-[#0052CC] rounded-full text-xs font-bold mb-4 border border-blue-200">
            <Globe size={14} />
            <span>RISE360 {countryConfig.name} Industry Expertise</span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#012269] mb-6 leading-tight">
            Sector expertise for <span className="italic gradient-text-dark">{countryConfig.name} Markets</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl leading-relaxed font-normal">
            Deep domain knowledge tailored to the specific regulatory, financial, and market dynamics of {countryConfig.name}.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, title, slug, desc, color }) => (
              <div key={slug} className="group bg-white rounded-3xl p-7 border border-slate-200/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ backgroundColor: `${color}15` }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#012269] mb-3">{title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 font-normal">{desc}</p>
                <Link href={`${countryPrefix}/industries/${slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold transition-all text-[#0066FF] hover:text-[#0044B3] group/btn">
                  Explore sector <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
