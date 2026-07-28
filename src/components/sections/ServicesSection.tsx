"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, GitMerge, Calculator } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { CountryProfile } from "@/config/countryConfig";

interface ServicesSectionProps {
  countryConfig?: CountryProfile;
}

const services = [
  {
    icon: TrendingUp,
    title: "Global Market Expansion",
    description: "Strategic advisory and operational support for businesses entering new international markets with confidence.",
    href: "/services/global-market-expansion",
    bullets: [
      "Market entry strategy & feasibility",
      "Entity setup & corporate structuring",
      "Regulatory licensing & compliance",
      "Local partner identification",
      "Go-to-market execution",
    ],
    accent: "#0066FF",
    iconBg: "bg-blue-50 text-[#0066FF]",
  },
  {
    icon: GitMerge,
    title: "Cross-Border Transactions",
    description: "M&A advisory, due diligence, and transaction structuring for complex international deals across multiple jurisdictions.",
    href: "/services/cross-border-transactions",
    bullets: [
      "M&A advisory & deal structuring",
      "Cross-border due diligence",
      "Tax-efficient transaction design",
      "Post-merger integration support",
      "Foreign investment compliance",
    ],
    accent: "#0052CC",
    iconBg: "bg-blue-100 text-[#0052CC]",
    featured: true,
  },
  {
    icon: Calculator,
    title: "Financial Operations Outsourcing",
    description: "Complete outsourcing of your back-office financial operations — from bookkeeping to CFO-level reporting — delivered with enterprise precision.",
    href: "/services/financial-operations-outsourcing",
    bullets: [
      "Outsourced accounting & bookkeeping",
      "Multi-currency financial reporting",
      "Payroll & HR administration",
      "Tax filing & compliance",
      "Virtual CFO services",
    ],
    accent: "#012269",
    iconBg: "bg-indigo-50 text-[#012269]",
  },
];

export function ServicesSection({ countryConfig }: ServicesSectionProps) {
  const countryPrefix = countryConfig && countryConfig.code !== "global" ? `/${countryConfig.code}` : "";

  return (
    <section id="services" className="section-padding bg-[#f8faff] border-y border-slate-200/60" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <SectionBadge title={`Core Advisory Services ${countryConfig?.name ? `(${countryConfig.name})` : ""}`} />
          <h2 id="services-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#012269] tracking-tight">
            Integrated Solutions for{" "}
            <span className="italic gradient-text-dark">Cross-Border Success</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            Whether expanding into {countryConfig?.name || "new international markets"}, executing a cross-border acquisition, or outsourcing financial operations — we bring end-to-end expertise.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl bg-white p-8 border flex flex-col justify-between transition-all duration-300 ${
                  service.featured
                    ? "border-[#0066FF] shadow-2xl ring-2 ring-[#0066FF]/20 lg:-translate-y-2"
                    : "border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white text-xs font-bold rounded-full shadow-md">
                    Core Capability
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center font-bold shadow-sm`}>
                    <Icon size={26} />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#012269] mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">{service.description}</p>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {service.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="pt-8">
                  <Link
                    href={`${countryPrefix}${service.href}`}
                    className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 ${
                      service.featured
                        ? "bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white shadow-lg hover:shadow-blue-500/25"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
