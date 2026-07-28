import type { Metadata } from "next";
import Link from "next/link";
import { getCountryContext } from "@/lib/getCountryContext";

export async function generateMetadata(): Promise<Metadata> {
  const countryConfig = await getCountryContext();
  const legal = countryConfig.legal || {};
  return {
    title: `${legal.termsTitle || "Terms of Service"} | RISE360 ${countryConfig.name}`,
    description: legal.termsNotice || "RISE360 Terms of Service governing access to our website and consulting services.",
    alternates: { canonical: `https://${countryConfig.domain}/legal/terms` },
  };
}

export default async function TermsPage() {
  const countryConfig = await getCountryContext();
  const legal = countryConfig.legal || {};
  const sections = legal.termsSections || [
    {
      title: "1. Agreement to Terms",
      content: "By accessing or using the RISE360 website and advisory resources, you agree to be bound by these Terms of Use and all applicable laws and regulations.",
    },
    {
      title: "2. Advisory Disclaimer",
      content: "The information on this website is for general informational purposes only and does not constitute formal legal, tax, or financial advice until a signed client engagement agreement is established.",
    },
    {
      title: "3. Intellectual Property",
      content: "All content, branding, code, logos, and materials on this site are the intellectual property of RISE360 Financial Professional Outsourcing Consultants.",
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">Terms of Service</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#012269]">
              {legal.termsTitle || "Terms of Service"}
            </h1>
            <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-[#0052CC] rounded-full">
              {countryConfig.flag} {countryConfig.name}
            </span>
          </div>
          <p className="text-slate-600 text-sm font-medium mt-2">
            {legal.termsNotice || "Governing access to and use of our website and advisory services."}
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
