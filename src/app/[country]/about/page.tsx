import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { CompanyTimeline } from "@/components/sections/about/CompanyTimeline";
import { TeamSection } from "@/components/sections/about/TeamSection";
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
    return { title: "About | RISE360 Global" };
  }

  return {
    title: `About RISE360 ${countryConfig.name} | Our Mission & Expertise`,
    description: `Learn about RISE360 ${countryConfig.name} — simplifying cross-border business, corporate setup, and financial advisory.`,
    alternates: { canonical: `https://${countryConfig.domain}/about` },
  };
}

export default async function CountryAboutPage({
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
      <AboutHero countryConfig={countryConfig} />
      <MissionVision />
      <CompanyTimeline />
      <StatsSection countryConfig={countryConfig} />
      <TeamSection />
      <IndustriesSection />
      <CtaBand />
    </>
  );
}
