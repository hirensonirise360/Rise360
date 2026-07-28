"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { CountryProfile, COUNTRY_CONFIG } from "@/config/countryConfig";
import { getCountryConfig } from "@/lib/countryResolver";

interface FooterProps {
  countryConfig?: CountryProfile;
}

function getCountryLink(href: string, countryCode?: string) {
  if (!countryCode || countryCode === "global") return href;
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (href === "/") return `/${countryCode}`;
  if (href.startsWith(`/${countryCode}`)) return href;
  return `/${countryCode}${href}`;
}

const defaultFooterLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Global Market Expansion", href: "/services/global-market-expansion" },
    { label: "Cross-Border Transactions", href: "/services/cross-border-transactions" },
    { label: "Financial Operations", href: "/services/financial-operations-outsourcing" },
    { label: "M&A Advisory", href: "/services/ma-advisory" },
  ],
  Regions: [
    { label: "United States", href: "/us" },
    { label: "Canada", href: "/ca" },
    { label: "United Kingdom", href: "/uk" },
    { label: "Australia", href: "/au" },
    { label: "Netherlands", href: "/nl" },
  ],
  Resources: [
    { label: "Blog & Insights", href: "/resources" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Use", href: "/legal/terms" },
  ],
};

export function Footer({ countryConfig }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const firstSegment = pathname ? pathname.split("/").filter(Boolean)[0]?.toLowerCase() : "";
  const activeCountryCode =
    firstSegment && COUNTRY_CONFIG.countries[firstSegment]
      ? firstSegment
      : countryConfig?.code || "global";

  const activeCountry = getCountryConfig(activeCountryCode);
  const contact = activeCountry?.contact || {
    address: "100 International Parkway, Suite 500",
    cityStateZip: "New York, NY 10001, USA",
    phone: "+1 (800) 555-3600",
    email: "global@rise360global.com",
  };

  return (
    <footer className="bg-[#010f2e] border-t border-slate-800 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Link href={getCountryLink("/", activeCountry.code)} aria-label="RISE360 Global Home">
                <Image
                  src={activeCountry?.logoUrl || "/logo.svg"}
                  alt="RISE360 Global"
                  width={160}
                  height={59}
                  className="h-10 w-auto"
                />
              </Link>
              {activeCountry?.code && activeCountry.code !== "global" && (
                <span className="px-2.5 py-1 text-xs font-semibold bg-white/10 text-white rounded-full border border-white/20">
                  {activeCountry.name}
                </span>
              )}
            </div>

            <p className="!text-slate-200 text-sm leading-relaxed max-w-xs font-normal">
              {activeCountry?.tagline ||
                "Your trusted partner for cross-border consulting, global market entry, and financial operations outsourcing."}
            </p>

            {/* Local Office Information */}
            <div className="space-y-3 pt-1">
              {contact.address && (
                <div className="flex items-start gap-2.5 text-sm !text-slate-200 font-medium">
                  <MapPin size={16} className="text-[#4DA6FF] flex-shrink-0 mt-0.5" />
                  <span>
                    {contact.address}, {contact.cityStateZip}
                  </span>
                </div>
              )}

              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2.5 text-sm !text-slate-200 hover:!text-[#4DA6FF] transition-colors font-medium"
                >
                  <Phone size={14} className="text-[#4DA6FF] flex-shrink-0" />
                  {contact.phone}
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-sm !text-slate-200 hover:!text-[#4DA6FF] transition-colors font-medium"
                >
                  <Mail size={14} className="text-[#4DA6FF] flex-shrink-0" />
                  {contact.email}
                </a>
              )}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/company/rise360global"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0066FF] flex items-center justify-center !text-white transition-all duration-200 border border-white/15"
                aria-label="RISE360 on LinkedIn"
              >
                <FaLinkedinIn size={14} className="text-[#0066FF]" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(defaultFooterLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={getCountryLink(link.href, activeCountry.code)}
                      className="text-sm !text-slate-300 hover:!text-[#4DA6FF] transition-colors font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#000a20] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} RISE360 Global Consulting Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href={getCountryLink("/legal/privacy-policy", activeCountry.code)} className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href={getCountryLink("/legal/terms", activeCountry.code)} className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
