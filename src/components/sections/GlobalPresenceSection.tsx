"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const regions = [
  { name: "Canada", desc: "Market entry, accounting & compliance", cx: 20, cy: 35 },
  { name: "USA", desc: "Cross-border M&A, tax advisory", cx: 22, cy: 42 },
  { name: "United Kingdom", desc: "Financial services, FinTech", cx: 48, cy: 28 },
  { name: "UAE / Dubai", desc: "Real estate, hospitality, finance", cx: 60, cy: 48 },
  { name: "India", desc: "Outsourcing, manufacturing, tech", cx: 65, cy: 52 },
  { name: "Australia", desc: "Clean energy, life sciences", cx: 80, cy: 70 },
];

export function GlobalPresenceSection() {
  return (
    <section id="global-presence" className="section-padding bg-white border-b border-slate-200/80" aria-labelledby="global-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider"
            >
              <Globe2 size={13} /> Global Footprint
            </motion.div>
            <motion.h2
              id="global-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-[#012269]"
            >
              100+ clients across{" "}
              <span className="italic gradient-text-dark">6 continents</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed font-normal"
            >
              From Toronto to Dubai, Sydney to London — our network of local specialists 
              delivers on-the-ground expertise wherever your business needs to go.
            </motion.p>

            <div className="space-y-3 pt-2">
              {regions.map(({ name, desc }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/80 transition-colors"
                >
                  <div>
                    <p className="text-[#012269] font-bold text-sm">{name}</p>
                    <p className="text-slate-600 text-xs font-medium">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Visual World Map Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-8 shadow-xl">
              {/* SVG World Map Placeholder */}
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <svg viewBox="0 0 100 50" className="w-full h-full opacity-40" aria-hidden="true">
                  <ellipse cx="18" cy="25" rx="12" ry="10" fill="#0066FF" />
                  <ellipse cx="25" cy="38" rx="6" ry="9" fill="#0066FF" />
                  <ellipse cx="50" cy="22" rx="7" ry="6" fill="#0066FF" />
                  <ellipse cx="50" cy="34" rx="6" ry="9" fill="#0066FF" />
                  <ellipse cx="68" cy="24" rx="15" ry="10" fill="#0066FF" />
                  <ellipse cx="80" cy="38" rx="7" ry="5" fill="#0066FF" />
                </svg>

                {/* Pulsing location dots */}
                {regions.map(({ name, cx, cy }, i) => (
                  <motion.div
                    key={name}
                    className="absolute"
                    style={{ left: `${cx}%`, top: `${cy}%` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-6 h-6 rounded-full bg-[#0066FF]/30 animate-ping" style={{ animationDuration: `${2 + i * 0.5}s` }} />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#0066FF] border-2 border-white z-10 shadow-md" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom stat */}
              <div className="mt-6 flex items-center justify-around border-t border-slate-200 pt-5">
                {["100+ Clients", "6 Continents", "15+ Jurisdictions"].map((s) => (
                  <div key={s} className="text-center">
                    <p className="text-[#012269] font-bold text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
