"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Cpu, Factory, FlaskConical, Landmark, ShoppingBag, Hotel, Leaf, Car } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { CountryProfile } from "@/config/countryConfig";

interface IndustriesSectionProps {
  countryConfig?: CountryProfile;
}

const industries = [
  { icon: Building2, label: "Real Estate", href: "/industries/real-estate", color: "#f59e0b" },
  { icon: Cpu, label: "FinTech & SaaS", href: "/industries/fintech-saas", color: "#4DA6FF" },
  { icon: Factory, label: "Manufacturing", href: "/industries/manufacturing", color: "#6366f1" },
  { icon: Landmark, label: "Financial Services", href: "/industries/financial-services", color: "#012269" },
  { icon: Car, label: "Automobile", href: "/industries/automobile", color: "#ef4444" },
  { icon: FlaskConical, label: "Life Sciences", href: "/industries/life-sciences", color: "#10b981" },
  { icon: ShoppingBag, label: "Retail & E-commerce", href: "/industries/retail-ecommerce", color: "#f97316" },
  { icon: Hotel, label: "Hospitality", href: "/industries/hospitality", color: "#8b5cf6" },
  { icon: Leaf, label: "Clean Energy", href: "/industries/clean-energy", color: "#22c55e" },
];

export function IndustriesSection({ countryConfig }: IndustriesSectionProps) {
  const countryPrefix = countryConfig && countryConfig.code !== "global" ? `/${countryConfig.code}` : "";

  return (
    <section id="industries" className="section-padding bg-white" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge label={`Industries ${countryConfig?.name ? `(${countryConfig.name})` : ""}`} className="border-[#4DA6FF]/30 bg-[#4DA6FF]/10 text-[#012269]" />
          </motion.div>
          <motion.h2
            id="industries-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-[#012269]"
          >
            Serving leaders across{" "}
            <span className="italic gradient-text-dark">every sector</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Industry-specific expertise in {countryConfig?.name || "global markets"} means we understand the unique regulatory, financial, 
            and operational challenges you face.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, label, href, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`${countryPrefix}${href}`}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-gradient-to-br hover:from-[#012269] hover:to-[#0052CC] border border-slate-200/80 hover:border-transparent hover:shadow-xl transition-all duration-300 min-h-[160px]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white/20"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={24} className="group-hover:text-white transition-colors" style={{ color }} />
                  </div>
                  <ArrowRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-white transition-colors">
                    {label}
                  </h3>
                  <span className="text-xs text-slate-500 group-hover:text-white/80 transition-colors font-medium">
                    Explore {countryConfig?.name || "Global"} Practice →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
