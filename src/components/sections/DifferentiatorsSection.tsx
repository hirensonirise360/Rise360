"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Handshake, BookOpen, Cog } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

const differentiators = [
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "We don't just advise — we embed alongside your team as trusted partners. Our relationships are built on transparency, accountability, and a genuine commitment to your long-term success.",
    bullets: [
      "Dedicated relationship managers",
      "Proactive, not reactive communication",
      "Long-term retainer and project models",
    ],
    color: "from-[#4DA6FF]/20 to-[#012269]/10",
    accent: "#4DA6FF",
  },
  {
    icon: BookOpen,
    title: "Expert Guidance",
    description:
      "Our team combines deep local knowledge with global perspective across 15+ jurisdictions. We stay current with regulatory changes so you don't have to — and translate complexity into clear, actionable plans.",
    bullets: [
      "15+ years cross-border expertise",
      "Jurisdiction-specific specialists",
      "Regulatory intelligence & alerts",
    ],
    color: "from-[#012269]/10 to-[#4DA6FF]/20",
    accent: "#012269",
  },
  {
    icon: Cog,
    title: "Operational Reliability",
    description:
      "Strategy without execution is just theory. We deliver measurable, operational results — from financial reporting to compliance filing — with the precision and reliability that global operations demand.",
    bullets: [
      "End-to-end delivery, not just strategy",
      "Technology-enabled workflows",
      "SLA-backed performance commitments",
    ],
    color: "from-emerald-400/10 to-[#4DA6FF]/10",
    accent: "#10b981",
  },
];

export function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="section-padding bg-[#f8faff]" aria-labelledby="diff-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge
              label="Why RISE360"
              className="border-[#4DA6FF]/30 bg-[#4DA6FF]/10 text-[#012269]"
            />
          </motion.div>
          <motion.h2
            id="diff-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-[#012269]"
          >
            The RISE360{" "}
            <span className="italic gradient-text-dark">difference</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Three pillars that separate trusted advisors from the rest.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {differentiators.map(({ icon: Icon, title, description, bullets, color, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6`}>
                <Icon size={24} style={{ color: accent }} />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#012269] mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                style={{ color: accent }}
              >
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
