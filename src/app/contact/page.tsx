import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { LocationMap } from "@/components/ui/LocationMap";
import { Mail, Clock, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { getCountryContext } from "@/lib/getCountryContext";

export async function generateMetadata(): Promise<Metadata> {
  const countryConfig = await getCountryContext();
  return {
    title: `Contact RISE360 ${countryConfig.name} | Book a Consultation`,
    description: `Get in touch with RISE360 ${countryConfig.name} to discuss cross-border consulting, financial operations, or market entry.`,
    alternates: { canonical: `https://${countryConfig.domain}/contact` },
  };
}

const globalOffices = [
  { city: "New York", country: "United States", flag: "🇺🇸", timezone: "EST (UTC-5)" },
  { city: "Toronto", country: "Canada", flag: "🇨🇦", timezone: "EST (UTC-5)" },
  { city: "London", country: "United Kingdom", flag: "🇬🇧", timezone: "GMT (UTC+0)" },
  { city: "Sydney", country: "Australia", flag: "🇦🇺", timezone: "AEDT (UTC+11)" },
  { city: "Amsterdam", country: "Netherlands", flag: "🇳🇱", timezone: "CET (UTC+1)" },
  { city: "Ahmedabad", country: "India (Operations HQ)", flag: "🇮🇳", timezone: "IST (UTC+5:30)" },
];

export default async function ContactPage() {
  const countryConfig = await getCountryContext();
  const contact = countryConfig.contact || {
    address: "100 International Parkway, Suite 500",
    cityStateZip: "New York, NY 10001, USA",
    phone: "+1 (800) 555-3600",
    email: "global@rise360global.com",
    officeHours: "Mon - Fri: 8:00 AM - 6:00 PM EST",
  };

  const addressText = `${contact.address}, ${contact.cityStateZip}`;
  const mapAddressQuery = encodeURIComponent(addressText);
  const googleMapsEmbedUrl = contact.googleMapEmbedUrl || `https://maps.google.com/maps?q=${mapAddressQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const directGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(1,34,105,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1,34,105,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-slate-600 text-sm hover:text-[#012269] transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 text-sm font-bold">Contact ({countryConfig.name})</span>
          </div>
          <div className="max-w-2xl space-y-4">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-[#012269] leading-tight">
              Let&apos;s talk about{" "}
              <span className="italic gradient-text-dark">your growth</span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed font-normal">
              Schedule a no-obligation consultation with our {countryConfig.name} specialists. We&apos;ll assess your needs
              and outline how RISE360 can accelerate your regional and global expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-[#012269]">Regional Hub Info</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-[#0052CC] rounded-full">
                    {countryConfig.flag} {countryConfig.name}
                  </span>
                </div>

                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#0066FF] font-medium transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#0066FF]" />
                    </div>
                    {contact.email}
                  </a>
                )}

                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#0066FF] font-medium transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[#0066FF]" />
                    </div>
                    {contact.phone}
                  </a>
                )}

                <a
                  href="https://linkedin.com/company/rise360global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#0066FF] font-medium transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0">
                    <FaLinkedinIn size={16} className="text-[#0066FF]" />
                  </div>
                  LinkedIn Profile
                </a>

                {contact.officeHours && (
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[#0066FF]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-normal">Office Hours</p>
                      <p>{contact.officeHours}</p>
                    </div>
                  </div>
                )}

                {contact.address && (
                  <div className="flex items-start gap-3 text-sm text-slate-700 font-medium pt-2 border-t border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={16} className="text-[#0066FF]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-normal">Primary Address</p>
                      <p className="text-slate-800">{contact.address}</p>
                      <p className="text-slate-600 text-xs">{contact.cityStateZip}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Global Network Hubs */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 space-y-4">
                <h3 className="font-display text-lg font-bold text-[#012269]">Global Office Network</h3>
                <div className="space-y-3">
                  {globalOffices.map((off) => (
                    <div key={off.city} className="flex items-center justify-between text-xs py-1 border-b border-slate-200/50 last:border-0">
                      <div className="flex items-center gap-2">
                        <span>{off.flag}</span>
                        <span className="font-semibold text-slate-800">{off.city}</span>
                        <span className="text-slate-500">({off.country})</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">{off.timezone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed Section */}
          <div className="mt-16">
            <LocationMap
              addressText={addressText}
              googleMapsEmbedUrl={googleMapsEmbedUrl}
              directGoogleMapsUrl={directGoogleMapsUrl}
            />
          </div>
        </div>
      </section>
    </>
  );
}
