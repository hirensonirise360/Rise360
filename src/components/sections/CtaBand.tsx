"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
}

export function CtaBand({ title, subtitle }: CtaBandProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="section-padding bg-[#f8faff] border-t border-slate-200/80" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
            Ready to grow globally?
          </div>

          <h2
            id="cta-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-[#012269]"
          >
            {title ? (
              title
            ) : (
              <>
                Ready to unlock your next{" "}
                <span className="italic gradient-text-dark">growth opportunity?</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-normal">
            {subtitle ? (
              subtitle
            ) : (
              "Join 100+ businesses that have successfully expanded globally with RISE360. Start with a no-obligation consultation."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              id="cta-book-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white !text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/25 hover:-translate-y-1"
            >
              Book a Free Consultation
              <ArrowRight size={16} className="text-white" />
            </Link>
          </div>

          {/* Email capture */}
          {!submitted ? (
            <div className="pt-4">
              <p className="text-slate-500 text-sm mb-3 font-medium">Or subscribe for global market insights:</p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row max-w-md mx-auto gap-2"
              >
                <div className="relative flex-1">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    id="cta-newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  id="cta-newsletter-btn"
                  className="px-6 py-3 bg-[#012269] hover:bg-[#0237a0] text-white font-bold text-sm rounded-xl transition-all shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold pt-4 text-sm">
              <CheckCircle2 size={18} />
              Thanks for subscribing! We&apos;ll be in touch.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
