"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Globe, Users } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

const problems = [
  {
    icon: Users,
    title: "Limited Advisory Bandwidth",
    description:
      "Most accounting and legal firms lack the specialised cross-border expertise your business needs. You end up with fragmented advice from multiple vendors — none of whom see the full picture.",
    stat: "73%",
    statLabel: "of businesses cite lack of cross-border expertise as their #1 barrier to global expansion",
  },
  {
    icon: Globe,
    title: "Cross-Border Complexity",
    description:
      "Every jurisdiction has its own tax codes, compliance requirements, and regulatory frameworks. Navigating these simultaneously — while running your core business — is overwhelming and error-prone.",
    stat: "60%",
    statLabel: "of international market entries fail due to inadequate local regulatory and financial planning",
  },
  {
    icon: AlertTriangle,
    title: "Risk Without Local Partners",
    description:
      "Operating in a new market without trusted local expertise exposes you to financial penalties, reputational damage, and missed opportunities. The cost of getting it wrong far exceeds the cost of getting it right.",
    stat: "$2.4M",
    statLabel: "average cost of failed international expansion attempts for mid-market companies",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-white" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge
              label="The Global Dilemma"
              className="border-red-200 bg-red-50 text-red-600"
            />
          </motion.div>
          <motion.h2
            id="problem-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-[#012269]"
          >
            Why global growth feels{" "}
            <span className="italic text-red-500">so hard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Expanding globally is the right move — but the path is filled with costly traps 
            that even experienced companies fall into.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, description, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-7 hover:border-red-200 hover:shadow-xl hover:shadow-red-50/50 transition-all duration-500 overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                <Icon size={22} className="text-red-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#012269] mb-3">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-display text-3xl font-bold text-red-600">{stat}</p>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed font-medium">{statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
