import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";

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
    longDescription: "Expanding into a new international market is one of the highest-leverage moves a growth business can make — and one of the most complex. Regulatory environments differ, tax structures vary, banking relationships need to be established, and local market dynamics must be understood. RISE360's Global Market Expansion service provides the strategic framework, operational infrastructure, and on-the-ground expertise to ensure your market entry is structured for long-term success — not just a quick launch that creates future liability.",
    bullets: ["Market entry strategy & feasibility studies", "Entity setup & corporate structuring", "Regulatory licensing & compliance navigation", "Local banking & financial relationship setup", "Talent & HR framework establishment", "Go-to-market execution planning", "Ongoing compliance monitoring"],
    process: [
      { step: "01", title: "Feasibility Assessment", desc: "We assess market opportunity, regulatory environment, competitive landscape, and financial viability." },
      { step: "02", title: "Strategy Design", desc: "A bespoke market entry strategy aligned with your business model, risk appetite, and growth goals." },
      { step: "03", title: "Entity & Structure Setup", desc: "Legal entity formation, corporate structuring, and banking/financial infrastructure." },
      { step: "04", title: "Regulatory Compliance", desc: "Obtain necessary licenses, registrations, and compliance frameworks before day one." },
      { step: "05", title: "Go-to-Market Execution", desc: "Launch support including partner identification, first-hire strategy, and operational readiness." },
    ],
    faqs: [
      { q: "How long does market entry typically take?", a: "Timeline varies by jurisdiction and business type. Simple entities can be established in 4-8 weeks; regulated industries may require 3-6 months for full licensing. We set realistic expectations during feasibility." },
      { q: "Which markets do you cover?", a: "We have active local expertise in Canada, USA, Australia, UAE, UK, India, and key European jurisdictions. We also have network partners for other markets." },
      { q: "Do you assist with ongoing compliance after entry?", a: "Yes. We offer ongoing compliance monitoring retainers, annual filing support, and advisory as regulations change." },
    ],
  },
  "cross-border-transactions": {
    title: "Cross-Border Transactions",
    tagline: "Complex deals, expertly navigated",
    description: "M&A advisory, due diligence, and transaction structuring for international deals across multiple regulatory environments.",
    longDescription: "Cross-border M&A and investment transactions are among the most complex financial undertakings a business can execute. Multiple legal systems, tax regimes, currency risks, and regulatory approvals must be navigated simultaneously — while keeping the deal on track and value intact. RISE360's transaction advisory team brings deep expertise in structuring, executing, and integrating cross-border deals, with a track record of successfully closed transactions across four continents.",
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
      { q: "How do you handle multi-jurisdictional regulatory approvals?", a: "We coordinate across our network of local legal and regulatory specialists in each relevant jurisdiction, managing the approval process as a unified workstream." },
      { q: "Do you provide post-deal integration support?", a: "Yes. We offer 90-day and 12-month integration programs covering financial consolidation, operational alignment, and team integration." },
    ],
  },
  "financial-operations-outsourcing": {
    title: "Financial Operations Outsourcing",
    tagline: "Your back-office, world-class",
    description: "Complete outsourcing of your financial operations — bookkeeping, payroll, reporting, and virtual CFO — delivered with enterprise precision.",
    longDescription: "For growth businesses expanding internationally, maintaining a high-quality, multi-jurisdictional finance function is both critical and costly. RISE360's Financial Operations Outsourcing service gives you access to a complete, enterprise-grade finance team — without the overhead of hiring, training, and managing in-house staff across multiple markets. Our clients consistently achieve 30-40% cost reductions while gaining better financial visibility and control.",
    bullets: ["Outsourced accounting & bookkeeping", "Multi-currency financial reporting", "Payroll & HR administration", "Tax filing & statutory compliance", "Virtual CFO services", "Management accounts & board reporting", "Cash flow management & forecasting"],
    process: [
      { step: "01", title: "Finance Health Check", desc: "Assess your current finance function, systems, and gaps across all jurisdictions." },
      { step: "02", title: "Transition Planning", desc: "Structured handover of responsibilities with zero disruption to operations." },
      { step: "03", title: "Systems Setup", desc: "Cloud accounting infrastructure (Xero/QuickBooks/Netsuite) configured for your needs." },
      { step: "04", title: "Go Live", desc: "Dedicated team managing your finance operations with agreed SLAs." },
      { step: "05", title: "Ongoing Advisory", desc: "Regular reporting, strategic CFO input, and proactive compliance monitoring." },
    ],
    faqs: [
      { q: "What accounting software do you support?", a: "We support Xero, QuickBooks Online, NetSuite, SAP, and can work within your existing systems." },
      { q: "How quickly can we transition?", a: "Most transitions take 4-6 weeks with a structured handover plan. We ensure business continuity throughout." },
      { q: "What is the typical cost saving?", a: "Our clients achieve 30-40% reduction in total finance function costs on average, while gaining more senior expertise." },
    ],
  },
  "ma-advisory": {
    title: "M&A Advisory",
    tagline: "Strategic mergers done right",
    description: "End-to-end M&A advisory for mergers, acquisitions, and divestitures across all major global jurisdictions.",
    longDescription: "Mergers and acquisitions represent transformational moments for any business. The difference between a value-creating deal and a value-destroying one often comes down to the quality of advisory support. RISE360's M&A Advisory practice brings deep transactional expertise, global network access, and rigorous analytical capabilities to every engagement — from initial strategy through to successful close.",
    bullets: ["Buy-side & sell-side advisory", "Business valuation & financial modelling", "Deal origination & sourcing", "Information memorandum preparation", "Regulatory approvals management", "SPA negotiation & documentation", "Post-deal integration"],
    process: [
      { step: "01", title: "Strategic Alignment", desc: "Define acquisition criteria, strategic rationale, and deal parameters." },
      { step: "02", title: "Target Identification", desc: "Proprietary research and network access to identify and approach priority targets." },
      { step: "03", title: "Valuation & Structuring", desc: "Independent valuation, financial modelling, and deal structure optimization." },
      { step: "04", title: "Due Diligence", desc: "Comprehensive financial, operational, and commercial due diligence." },
      { step: "05", title: "Close & Integrate", desc: "Transaction management through to close and post-deal integration support." },
    ],
    faqs: [
      { q: "Do you work on both buy-side and sell-side mandates?", a: "Yes. We advise both acquirers and vendors, including full divestiture processes and management buyouts." },
      { q: "How is your advisory fee structured?", a: "Typically a retainer plus success fee structured to align our interests with deal completion and value creation." },
      { q: "Do you have access to deal flow and strategic buyers?", a: "Yes. Our network spans strategic corporates, private equity, family offices, and high-net-worth acquirers across our active geographies." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | RISE360 Global Consulting`,
    description: service.description,
    alternates: { canonical: `https://rise360global.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

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
            <Link href="/services" className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Services</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0052CC] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
              {service.tagline}
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#012269] leading-tight">
              {service.title}
            </h1>

            <p className="text-slate-600 text-xl leading-relaxed font-normal">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-[#012269] mb-4">Overview</h2>
                <p className="text-slate-700 leading-relaxed text-base font-normal">{service.longDescription}</p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-[#012269] mb-5">What&apos;s Included</h2>
                <ul className="grid sm:grid-cols-2 gap-3.5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
                      <CheckCircle2 size={17} className="text-[#0066FF] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-800 text-sm font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-[#012269] mb-6">Our Execution Process</h2>
                <div className="space-y-4">
                  {service.process.map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-[#0066FF]/30 hover:shadow-lg transition-all bg-white">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md">
                        {step}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#012269] text-base mb-1">{title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-display text-2xl font-bold text-[#012269] mb-5">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {service.faqs.map(({ q, a }) => (
                    <details key={q} className="group border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
                      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
                        <span className="font-bold text-[#012269] text-sm">{q}</span>
                        <ChevronDown size={16} className="text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-slate-100 pt-3">
                        <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#012269] rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#4DA6FF]/10 blur-2xl" />
                  <h3 className="font-display text-xl font-bold mb-2 text-white">Ready to get started?</h3>
                  <p className="text-slate-200 text-sm mb-6 leading-relaxed">Book a no-obligation consultation with our specialists.</p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white !text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-500/25"
                  >
                    Book a Consultation <ArrowRight size={15} className="text-white" />
                  </Link>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80">
                  <h3 className="font-bold text-[#012269] mb-4 text-sm uppercase tracking-wider font-display">Related Practice Areas</h3>
                  <ul className="space-y-2.5">
                    {Object.entries(servicesData).filter(([s]) => s !== slug).slice(0, 3).map(([s, d]) => (
                      <li key={s}>
                        <Link href={`/services/${s}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#0066FF] font-medium transition-colors">
                          <ArrowRight size={13} className="text-[#0066FF]" /> {d.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
