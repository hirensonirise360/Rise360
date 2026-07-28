"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  country: z.string().min(1, "Please select your country"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Global Market Expansion",
  "Cross-Border Transactions",
  "Financial Operations Outsourcing",
  "M&A Advisory",
  "Other / Not sure yet",
];

const countries = [
  "Canada", "United States", "United Kingdom", "Australia", "UAE / Dubai",
  "India", "Germany", "France", "Netherlands", "Singapore", "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      // TODO: POST to /api/contact
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h2 className="font-display text-2xl font-bold text-[#012269]">Message received!</h2>
        <p className="text-gray-500 max-w-sm">
          Thank you for reaching out. A member of our team will be in touch within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Jane Smith"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]/50 transition-all ${
              errors.name ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="jane@company.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]/50 transition-all ${
              errors.email ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
          <input
            id="company"
            type="text"
            {...register("company")}
            placeholder="Acme Corp"
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]/50 transition-all ${
              errors.company ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
            }`}
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
          <select
            id="country"
            {...register("country")}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]/50 transition-all bg-white ${
              errors.country ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <option value="">Select country...</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Interest *</label>
        <select
          id="service"
          {...register("service")}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]/50 transition-all bg-white ${
            errors.service ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <option value="">What can we help you with?</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          placeholder="Tell us about your business and what you're looking to achieve..."
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]/50 transition-all resize-none ${
            errors.message ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="privacy" required className="mt-1 rounded" />
        <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed">
          I agree to the <a href="/legal/privacy-policy" className="text-[#4DA6FF] hover:underline">Privacy Policy</a> and consent to RISE360 contacting me about my enquiry.
        </label>
      </div>

      <button
        type="submit"
        id="contact-submit-btn"
        disabled={submitting}
        className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#012269] hover:bg-[#0237a0] text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={15} /> Send Message</>
        )}
      </button>
    </form>
  );
}
