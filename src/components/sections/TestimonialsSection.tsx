"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

const testimonials = [
  {
    quote:
      "RISE360 transformed how we approached our Canadian market entry. Their team anticipated regulatory hurdles we hadn't even considered, saving us months of delays and significant compliance costs.",
    name: "Sarah Mitchell",
    title: "CFO",
    company: "TechVentures Australia",
    country: "🇦🇺 Sydney, Australia",
    stat: "6 months",
    statLabel: "faster market entry than projected",
  },
  {
    quote:
      "The financial operations outsourcing completely restructured our back-office. We reduced overhead by 40% while gaining better financial visibility than we ever had with an in-house team.",
    name: "Rajesh Patel",
    title: "Managing Director",
    company: "Nexus Manufacturing Ltd",
    country: "🇨🇦 Toronto, Canada",
    stat: "40%",
    statLabel: "reduction in back-office costs",
  },
  {
    quote:
      "Their M&A advisory during our Dubai acquisition was exceptional. Navigating UAE regulations while managing a cross-border deal required expertise we simply didn't have in-house. RISE360 delivered flawlessly.",
    name: "Ahmed Al-Rashid",
    title: "CEO",
    company: "Pinnacle Real Estate Group",
    country: "🇦🇪 Dubai, UAE",
    stat: "$50M",
    statLabel: "cross-border transaction successfully closed",
  },
  {
    quote:
      "We've worked with several international consulting firms. RISE360 stands apart — they're proactive, deeply knowledgeable, and treat our business like it's their own. Retention rate says it all.",
    name: "Elena Vasquez",
    title: "VP of Finance",
    company: "Meridian FinTech Group",
    country: "🇬🇧 London, UK",
    stat: "3 years",
    statLabel: "ongoing engagement and counting",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="section-padding bg-[#f8faff]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionBadge label="Client Results" className="border-[#4DA6FF]/30 bg-[#4DA6FF]/10 text-[#012269]" />
          </motion.div>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-[#012269]"
          >
            Trusted by leaders across{" "}
            <span className="italic gradient-text-dark">the globe</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#012269]/10 overflow-hidden border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-8 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#4DA6FF]/15 flex items-center justify-center mb-4">
                      <Quote size={18} className="text-[#012269]" />
                    </div>
                    <p className="text-slate-800 text-lg leading-relaxed italic mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-[#012269] text-base">{t.name}</p>
                      <p className="text-slate-600 text-sm font-medium">
                        {t.title} &mdash; {t.company}
                      </p>
                      <p className="text-slate-500 text-xs mt-1">{t.country}</p>
                    </div>
                  </div>
                  <div className="lg:w-48 bg-gradient-to-br from-[#012269] to-[#0341b8] rounded-2xl p-6 text-center flex-shrink-0">
                    <p className="font-display text-4xl font-bold text-white mb-1">{t.stat}</p>
                    <p className="text-white/60 text-xs leading-snug">{t.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between px-8 lg:px-12 pb-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "bg-[#012269] w-6" : "bg-gray-200 w-1.5"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:border-[#4DA6FF] hover:text-[#4DA6FF] transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:border-[#4DA6FF] hover:text-[#4DA6FF] transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
