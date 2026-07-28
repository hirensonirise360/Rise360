"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { SectionBadge } from "@/components/ui/SectionBadge";

const team = [
  {
    name: "Alexandra Chen",
    title: "Founder & CEO",
    location: "Toronto, Canada",
    bio: "15+ years leading cross-border consulting mandates across North America, Europe, and APAC.",
    initials: "AC",
    color: "from-[#012269] to-[#4DA6FF]",
  },
  {
    name: "Marcus Osei",
    title: "Head of M&A Advisory",
    location: "London, UK",
    bio: "Former investment banker with deep expertise in cross-border transaction structuring and due diligence.",
    initials: "MO",
    color: "from-[#0237a0] to-[#4DA6FF]",
  },
  {
    name: "Priya Sharma",
    title: "Director, Financial Operations",
    location: "Dubai, UAE",
    bio: "CPA with 12 years experience managing multi-jurisdictional accounting and compliance for 50+ clients.",
    initials: "PS",
    color: "from-[#4DA6FF] to-[#012269]",
  },
  {
    name: "David Tanaka",
    title: "Head of APAC",
    location: "Sydney, Australia",
    bio: "Expert in Asia-Pacific market entry strategy and regulatory navigation across Australia, Japan, and Southeast Asia.",
    initials: "DT",
    color: "from-[#012269] to-[#0550d4]",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="section-padding bg-white" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <SectionBadge label="Leadership" className="border-[#4DA6FF]/30 bg-[#4DA6FF]/10 text-[#012269]" />
          <motion.h2
            id="team-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-[#012269]"
          >
            The experts behind your{" "}
            <span className="italic gradient-text-dark">global success</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, title, location, bio, initials, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              {/* Avatar */}
              <div className={`h-32 bg-gradient-to-br ${color} flex items-center justify-center`}>
                <span className="text-white font-bold text-3xl font-display">{initials}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#012269] text-base">{name}</h3>
                <p className="text-[#0237a0] text-xs font-semibold mt-0.5">{title}</p>
                <p className="text-slate-500 text-xs mt-0.5 mb-3 font-medium">{location}</p>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">{bio}</p>
                <button
                  className="flex items-center gap-1.5 text-slate-500 hover:text-[#0077b5] transition-colors text-xs font-medium"
                  aria-label={`View ${name} on LinkedIn`}
                >
                  <FaLinkedinIn size={12} /> LinkedIn
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
