import type { Metadata } from "next";
import Link from "next/link";
import { getCountryContext } from "@/lib/getCountryContext";

export async function generateMetadata(): Promise<Metadata> {
  const countryConfig = await getCountryContext();
  const legal = countryConfig.legal || {};
  return {
    title: `${legal.privacyPolicyTitle || "Privacy Policy"} | RISE360 ${countryConfig.name}`,
    description: legal.privacyPolicyNotice || "RISE360 Privacy Policy outlining data collection and privacy rights.",
    alternates: { canonical: `https://${countryConfig.domain}/legal/privacy-policy` },
  };
}

export default async function PrivacyPolicyPage() {
  const countryConfig = await getCountryContext();
  const legal = countryConfig.legal || {};
  const sections = legal.privacyPolicySections || [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly through contact forms, consultation bookings, and newsletter signups including name, business email, company name, phone number, and query details.",
    },
    {
      title: "2. How We Use Your Information",
      content: "Your information is used strictly to deliver our consulting services, respond to inquiries, send requested market insights, and fulfill legal compliance obligations across jurisdictions.",
    },
    {
      title: "3. Data Protection & Security",
      content: "We implement enterprise-grade technical and organizational security measures to protect your personal data against unauthorized access, loss, or alteration.",
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">Privacy Policy</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#012269]">
              {legal.privacyPolicyTitle || "Privacy Policy"}
            </h1>
            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-[#0052CC] rounded-full">
              {countryConfig.flag} {countryConfig.name} Jurisdiction
            </span>
          </div>
          <p className="text-slate-600 text-sm font-medium mt-2">
            {legal.privacyPolicyNotice || "Outlining how we collect, use, and protect your personal data."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed font-normal text-sm sm:text-base">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="font-display text-2xl font-bold text-[#012269] mb-3">{sec.title}</h2>
              <p>{sec.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
