import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { CompanyTimeline } from "@/components/sections/about/CompanyTimeline";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { getCountryContext } from "@/lib/getCountryContext";

export async function generateMetadata(): Promise<Metadata> {
  const countryConfig = await getCountryContext();
  return {
    title: `About RISE360 ${countryConfig.name} | Our Mission & Expertise`,
    description: `Learn about RISE360 ${countryConfig.name} — simplifying cross-border business, corporate setup, and financial advisory for growing companies.`,
    alternates: { canonical: `https://${countryConfig.domain}/about` },
  };
}

export default async function AboutPage() {
  const countryConfig = await getCountryContext();

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
