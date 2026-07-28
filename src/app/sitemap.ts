import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rise360global.com";

  const services = [
    "global-market-expansion",
    "cross-border-transactions",
    "financial-operations-outsourcing",
    "ma-advisory",
  ];

  const industries = [
    "real-estate",
    "fintech-saas",
    "manufacturing",
    "life-sciences",
    "financial-services",
    "retail-ecommerce",
    "hospitality",
    "clean-energy",
    "automobile",
  ];

  const resources = [
    "cross-border-m-and-a-guide-2026",
    "market-entry-canada-vs-australia",
    "financial-operations-outsourcing-roi",
    "uae-market-entry-2026",
    "fintech-regulatory-challenges",
    "transfer-pricing-101",
  ];

  const countries = ["us", "ca", "uk", "au", "nl", "usa"];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/legal/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/legal/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...countries.map((code) => ({
      url: `${baseUrl}/${code}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industries.map((slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...resources.map((slug) => ({
      url: `${baseUrl}/resources/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
