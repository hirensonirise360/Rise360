import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { getCountryContext } from "@/lib/getCountryContext";

export async function generateMetadata(): Promise<Metadata> {
  const countryConfig = await getCountryContext();
  const title = countryConfig.seo?.title || "RISE360 | Financial Professional Outsourcing Consultants | Global Market Entry";
  const description = countryConfig.seo?.description || "RISE360 is your trusted partner for cross-border consulting, financial operations outsourcing, and global market expansion.";

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

export default async function HomePage() {
  const countryConfig = await getCountryContext();

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
