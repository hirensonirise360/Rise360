"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    icon: Target,
    title: "Our Mission",
    content:
      "To be the most trusted cross-border consulting partner for growth-stage and mid-market businesses, delivering measurable outcomes through integrated expertise in market entry, financial operations, and transaction advisory.",
    color: "#4DA6FF",
  },
  {
    id: "vision",
    label: "Vision",
    icon: Eye,
    title: "Our Vision",
    content:
      "A world where geography is no longer a barrier to business ambition. We envision a future where any company — regardless of size — can access the local expertise, compliance infrastructure, and operational support they need to compete and win in any market.",
    color: "#012269",
  },
  {
    id: "values",
    label: "Values",
    icon: Heart,
    title: "Our Values",
    content: "",
    values: [
      { title: "Integrity First", desc: "We do what we say. Every engagement is governed by transparency and accountability." },
      { title: "Client-Centric", desc: "Your goals drive our strategy. We measure success by your outcomes, not just deliverables." },
      { title: "Expertise Depth", desc: "Shallow advice costs more than good advice. We invest in genuine, deep specialization." },
      { title: "Operational Excellence", desc: "We don't just strategize — we execute. Precision, reliability, and follow-through." },
    ],
    color: "#10b981",
  },
];

export function MissionVision() {
  const [active, setActive] = useState("mission");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="section-padding bg-white" aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 p-1.5 bg-gray-100 rounded-2xl mb-10">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                id={`tab-${id}`}
                onClick={() => setActive(id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === id ? "bg-white text-[#012269] shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
                aria-selected={active === id}
                role="tab"
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
          >
            <h2 id="mission-heading" className="font-display text-3xl font-bold text-[#012269] mb-4">
              {tab.title}
            </h2>
            {tab.content && (
              <p className="text-gray-600 text-lg leading-relaxed">{tab.content}</p>
            )}
            {tab.values && (
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {tab.values.map(({ title, desc }) => (
                  <div key={title} className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#4DA6FF]/30 transition-colors">
                    <h3 className="font-semibold text-[#012269] mb-1.5">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
