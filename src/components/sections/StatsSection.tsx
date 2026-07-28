"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CountryProfile } from "@/config/countryConfig";

interface StatsSectionProps {
  countryConfig?: CountryProfile;
}

const defaultStats = [
  { value: 15, suffix: "+", label: "Years of Experience", desc: "Deep cross-border expertise" },
  { value: 100, suffix: "+", label: "Clients Served", desc: "Across 6 continents" },
  { value: 350, suffix: "+", label: "Projects Delivered", desc: "On time and on budget" },
  { value: 45, suffix: "+", label: "Team Members", desc: "Multi-jurisdiction specialists" },
  { value: 94, suffix: "%", label: "Client Retention", desc: "Long-term partnerships" },
  { value: 6, suffix: "", label: "Countries Active", desc: "With local expertise" },
  { value: 40, suffix: "%", label: "Average Cost Savings", desc: "On back-office operations" },
  { value: 12, suffix: "+", label: "Industries Served", desc: "Cross-sector experience" },
];

export function StatsSection({ countryConfig }: StatsSectionProps) {
  const customStats = countryConfig?.homepage?.stats;

  return (
    <section id="stats" className="section-padding bg-[#f8faff] border-y border-slate-200/60" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <motion.h2
            id="stats-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl lg:text-5xl font-bold text-[#012269]"
          >
            Numbers that{" "}
            <span className="italic gradient-text-dark">speak volumes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-600 max-w-xl mx-auto text-base font-normal"
          >
            Measurable outcomes for businesses that chose to grow with RISE360 {countryConfig?.name ? `in ${countryConfig.name}` : ""}.
          </motion.p>
        </div>

        {customStats && customStats.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customStats.map((st, i) => (
              <motion.div
                key={st.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-[#012269] mb-1">
                  {st.value}
                </div>
                <p className="text-[#012269] font-bold text-sm mb-1">{st.label}</p>
                {st.description && <p className="text-slate-500 text-xs font-medium">{st.description}</p>}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#0066FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {defaultStats.map(({ value, suffix, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-[#012269] mb-1">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <p className="text-[#012269] font-bold text-sm mb-1">{label}</p>
                <p className="text-slate-500 text-xs font-medium">{desc}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#0066FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
