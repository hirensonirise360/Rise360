"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { CountryProfile, COUNTRY_CONFIG } from "@/config/countryConfig";
import { getAllSupportedCountries, getCountryConfig } from "@/lib/countryResolver";

interface HeaderProps {
  countryConfig?: CountryProfile;
}

function getCountryLink(href: string, countryCode?: string) {
  if (!countryCode || countryCode === "global") return href;
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (href === "/") return `/${countryCode}`;
  if (href.startsWith(`/${countryCode}`)) return href;
  return `/${countryCode}${href}`;
}

const defaultNavLinks = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Global Market Expansion", href: "/services/global-market-expansion" },
      { label: "Cross-Border Transactions", href: "/services/cross-border-transactions" },
      { label: "Financial Operations Outsourcing", href: "/services/financial-operations-outsourcing" },
      { label: "M&A Advisory", href: "/services/ma-advisory" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "FinTech & SaaS", href: "/industries/fintech-saas" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Life Sciences", href: "/industries/life-sciences" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Clean Energy", href: "/industries/clean-energy" },
      { label: "Automobile", href: "/industries/automobile" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Header({ countryConfig }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const firstSegment = pathname ? pathname.split("/").filter(Boolean)[0]?.toLowerCase() : "";
  const activeCountryCode =
    firstSegment && COUNTRY_CONFIG.countries[firstSegment]
      ? firstSegment
      : countryConfig?.code || "global";

  const supportedCountries = getAllSupportedCountries();
  const currentCountry = getCountryConfig(activeCountryCode);

  const navLinks = countryConfig?.navMenu || defaultNavLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" ref={dropdownRef}>
            {/* Logo & Country Badge */}
            <div className="flex items-center gap-3">
              <Link href={getCountryLink("/", currentCountry.code)} aria-label="RISE360 Global — Home" className="flex items-center flex-shrink-0">
                <Image
                  src={currentCountry.logoUrl || "/logo.svg"}
                  alt="RISE360 Financial Professional Outsourcing Consultants"
                  width={160}
                  height={59}
                  priority
                  className="h-10 w-auto"
                />
              </Link>

              {currentCountry.code !== "global" && (
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-800 rounded-full border border-slate-200">
                  <Globe size={12} className="text-[#0052CC]" />
                  <span>{currentCountry.name}</span>
                </span>
              )}
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center gap-1 px-4 py-2 text-slate-700 hover:text-[#012269] font-semibold text-sm transition-colors duration-200 rounded-lg hover:bg-slate-100/80"
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200 text-[#012269]",
                          activeDropdown === link.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={getCountryLink(link.href, currentCountry.code)}
                      className="px-4 py-2 text-slate-700 hover:text-[#012269] font-semibold text-sm transition-colors duration-200 rounded-lg hover:bg-slate-100/80 block"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-[slideIn_0.2s_ease]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={getCountryLink(child.href, currentCountry.code)}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-slate-700 hover:text-[#012269] hover:bg-slate-50 transition-all duration-150 group/item font-medium"
                        >
                          <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[#4DA6FF]" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Country Selector */}
              <div className="relative ml-2">
                <button
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all border border-slate-200"
                  aria-label="Select Country"
                >
                  <Globe size={14} className="text-[#0052CC]" />
                  <span>{currentCountry.name}</span>
                  <ChevronDown size={12} className={cn("transition-transform", countryDropdownOpen ? "rotate-180" : "")} />
                </button>

                {countryDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden p-1 z-50">
                    <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Select Region / Domain
                    </div>
                    {supportedCountries.map((c) => (
                      <Link
                        key={c.code}
                        href={c.code === "global" ? "/" : `/${c.code}`}
                        onClick={() => setCountryDropdownOpen(false)}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 text-xs rounded-xl transition-colors font-medium",
                          currentCountry.code === c.code ? "bg-blue-50 text-[#0052CC] font-bold" : "text-slate-700 hover:bg-slate-100"
                        )}
                      >
                        <span>{c.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={getCountryLink("/contact", currentCountry.code)}
                id="header-cta-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0044B3] hover:to-[#0052CC] text-white !text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight size={14} className="text-white" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 bg-white border-l border-slate-200 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto shadow-2xl",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <Image src="/logo.svg" alt="RISE360 Global" width={130} height={48} className="h-8 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-5 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <div>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.label ? null : link.label)
                    }
                    className="flex items-center justify-between w-full px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform text-[#012269]",
                        activeDropdown === link.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="pl-4 mt-1 space-y-1 border-l border-slate-200 ml-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={getCountryLink(child.href, currentCountry.code)}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-[#012269] hover:bg-slate-50 rounded-lg font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={getCountryLink(link.href, currentCountry.code)}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-slate-800 font-semibold rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Country Selector */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">Select Region</div>
            <div className="grid grid-cols-2 gap-1.5">
              {supportedCountries.map((c) => (
                <Link
                  key={c.code}
                  href={c.code === "global" ? "/" : `/${c.code}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-xl bg-slate-50 hover:bg-slate-100 font-medium text-slate-700"
                >
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link
              href={getCountryLink("/contact", currentCountry.code)}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white !text-white font-bold rounded-xl transition-all shadow-md"
            >
              Book a Consultation
              <ArrowRight size={16} className="text-white" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
