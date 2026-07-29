import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { getCountryConfig } from "@/lib/countryResolver";
import { COUNTRY_CONFIG } from "@/config/countryConfig";

export async function generateStaticParams() {
  return Object.keys(COUNTRY_CONFIG.countries).map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const countryConfig = getCountryConfig(country);

  if (!countryConfig) {
    return { title: "RISE360 Global Consulting" };
  }

  const title = countryConfig.seo?.title || `RISE360 ${countryConfig.name} | Global Market Expansion & Advisory`;
  const description = countryConfig.seo?.description || `RISE360 ${countryConfig.name} provides expert cross-border consulting, financial operations outsourcing, and market expansion advisory.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://${countryConfig.domain}`,
    },
    openGraph: {
      title,
      description,
      url: `https://${countryConfig.domain}`,
      siteName: `RISE360 ${countryConfig.name}`,
    },
  };
}

export default async function CountryHomePage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const countryConfig = getCountryConfig(country);

  if (!countryConfig) {
    notFound();
  }

  return (
    <>
      <HeroSection countryConfig={countryConfig} />
      <ProblemSection />
      <DifferentiatorsSection />
      <ServicesSection countryConfig={countryConfig} />
      <GlobalPresenceSection countryConfig={countryConfig} />
      <TestimonialsSection />
      <StatsSection countryConfig={countryConfig} />
      <IndustriesSection countryConfig={countryConfig} />
      <CtaBand />
    </>
  );
}
