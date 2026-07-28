import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { ALL_BLOG_POSTS } from "../src/data/blogsData";

const envPath = path.join(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const envText = fs.readFileSync(envPath, "utf8");
  envText.split("\n").forEach((line) => {
    const parts = line.split("=");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join("=").trim();
      process.env[key] = val;
    }
  });
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "p0jrhlg7";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

interface SanityCountryDoc {
  _id: string;
  _type: string;
  name: string;
  code: string;
  domain: string;
  flag?: string;
  currency?: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: string;
  cityStateZip?: string;
  officeHours?: string;
  heroBadge?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
}

const countriesData: SanityCountryDoc[] = [
  {
    _id: "country-us",
    _type: "country",
    name: "United States",
    code: "us",
    domain: "rise360.us",
    flag: "🇺🇸",
    currency: "USD ($)",
    tagline: "US Market Expansion, Delaware Incorporation & IRS Compliance",
    phone: "+1 (212) 555-0199",
    email: "usa@rise360global.com",
    address: "250 Vesey Street, 24th Floor",
    cityStateZip: "New York, NY 10281, United States",
    officeHours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    heroBadge: "US Market Entry & IRS Advisory",
    heroHeadline: "Scale Your Business into the United States with Confidence",
    heroSubheadline: "Navigate Delaware C-Corp setup, 50-state tax nexus, IRS compliance, and venture funding preparation.",
  },
  {
    _id: "country-ca",
    _type: "country",
    name: "Canada",
    code: "ca",
    domain: "rise360.ca",
    flag: "🇨🇦",
    currency: "CAD ($)",
    tagline: "Canadian Incorporation, CRA Tax Compliance & SR&ED Advisory",
    phone: "+1 (416) 555-0144",
    email: "canada@rise360global.com",
    address: "100 King Street West, Suite 5600",
    cityStateZip: "Toronto, ON M5X 1C9, Canada",
    officeHours: "Mon - Fri: 8:30 AM - 5:00 PM EST",
    heroBadge: "Canadian Business Expansion",
    heroHeadline: "Seamless Canadian Incorporation & CRA Financial Advisory",
    heroSubheadline: "Establish your Canadian presence in Toronto, Vancouver, or Montreal with full CRA GST/HST tax compliance.",
  },
  {
    _id: "country-uk",
    _type: "country",
    name: "United Kingdom",
    code: "uk",
    domain: "rise360.co.uk",
    flag: "🇬🇧",
    currency: "GBP (£)",
    tagline: "UK Market Expansion, Companies House & HMRC Corporate Tax",
    phone: "+44 20 7946 0912",
    email: "uk@rise360global.com",
    address: "1 Bank Junction, City of London",
    cityStateZip: "London, EC3V 3LA, United Kingdom",
    officeHours: "Mon - Fri: 9:00 AM - 5:30 PM GMT",
    heroBadge: "UK & European Gateway",
    heroHeadline: "Establish & Scale Your Business Across the United Kingdom",
    heroSubheadline: "From London financial district setups to UK HMRC VAT filings and European market entry.",
  },
  {
    _id: "country-au",
    _type: "country",
    name: "Australia",
    code: "au",
    domain: "rise360.com.au",
    flag: "🇦🇺",
    currency: "AUD ($)",
    tagline: "Australian Market Entry, ASIC Entity Setup & ATO Compliance",
    phone: "+61 2 9000 1234",
    email: "australia@rise360global.com",
    address: "100 Barangaroo Avenue, Level 28",
    cityStateZip: "Sydney, NSW 2000, Australia",
  },
  {
    _id: "country-nl",
    _type: "country",
    name: "Netherlands",
    code: "nl",
    domain: "rise360.nl",
    flag: "🇳🇱",
    currency: "EUR (€)",
    tagline: "Dutch B.V. Setup, KVK Registration & European Union Entry",
    phone: "+31 20 123 4567",
    email: "netherlands@rise360global.com",
    address: "Strawinskylaan 3051",
    cityStateZip: "1077 ZX Amsterdam, Netherlands",
  },
];

const servicesData = [
  {
    _id: "service-global-market-expansion",
    _type: "service",
    title: "Global Market Expansion",
    slug: { _type: "slug", current: "global-market-expansion" },
    tagline: "Enter new markets with confidence",
    description: "From market feasibility and entity setup to regulatory licensing and go-to-market execution.",
    longDescription: "Expanding into a new international market requires navigating diverse tax, legal, and banking landscapes.",
    countryCode: "global",
    bullets: ["Market entry strategy & feasibility", "Entity setup & corporate structuring", "Regulatory licensing & compliance"],
  },
  {
    _id: "service-cross-border-transactions",
    _type: "service",
    title: "Cross-Border Transactions",
    slug: { _type: "slug", current: "cross-border-transactions" },
    tagline: "Complex deals, expertly navigated",
    description: "M&A advisory, due diligence, and transaction structuring for international deals.",
    longDescription: "Cross-border M&A and investment transactions require deep expertise across multiple legal systems.",
    countryCode: "global",
    bullets: ["M&A advisory & deal structuring", "Cross-border due diligence", "Tax-efficient transaction design"],
  },
  {
    _id: "service-financial-operations-outsourcing",
    _type: "service",
    title: "Financial Operations Outsourcing",
    slug: { _type: "slug", current: "financial-operations-outsourcing" },
    tagline: "Your back-office, world-class",
    description: "Complete outsourcing of your financial operations — bookkeeping, payroll, and Virtual CFO.",
    longDescription: "Maintaining a multi-jurisdictional finance team creates high overhead.",
    countryCode: "global",
    bullets: ["Outsourced accounting & bookkeeping", "Multi-currency financial reporting", "Payroll & HR administration"],
  },
  {
    _id: "service-ma-advisory",
    _type: "service",
    title: "M&A Advisory",
    slug: { _type: "slug", current: "ma-advisory" },
    tagline: "Strategic mergers done right",
    description: "End-to-end advisory for mergers, acquisitions, and divestitures.",
    longDescription: "Executing a successful M&A transaction requires rigorous financial analysis and deal structuring.",
    countryCode: "global",
    bullets: ["Buy-side & sell-side advisory", "Business valuation", "Deal origination & sourcing"],
  },
];

const industriesData = [
  { _id: "ind-real-estate", _type: "industry", title: "Real Estate", slug: { _type: "slug", current: "real-estate" }, tagline: "Cross-border property investment", description: "Cross-border property investment, foreign holding structures, and development advisory.", countryCode: "global" },
  { _id: "ind-fintech-saas", _type: "industry", title: "FinTech & SaaS", slug: { _type: "slug", current: "fintech-saas" }, tagline: "Global expansion for tech leaders", description: "Regulatory licensing, EMI/PSP setup, cross-border payments, and global IP structuring.", countryCode: "global" },
  { _id: "ind-manufacturing", _type: "industry", title: "Manufacturing", slug: { _type: "slug", current: "manufacturing" }, tagline: "Global manufacturing footprint advisory", description: "Global footprint optimization, supply chain structuring, transfer pricing, and customs duty.", countryCode: "global" },
  { _id: "ind-life-sciences", _type: "industry", title: "Life Sciences", slug: { _type: "slug", current: "life-sciences" }, tagline: "International regulatory & commercial advisory", description: "FDA/EMA regulatory pathways, cross-border clinical trials, and international IP licensing.", countryCode: "global" },
  { _id: "ind-financial-services", _type: "industry", title: "Financial Services", slug: { _type: "slug", current: "financial-services" }, tagline: "Cross-border expansion for financial institutions", description: "Regulatory licensing, AML/KYC compliance, tax reporting, and bank expansion.", countryCode: "global" },
];

async function seed() {
  console.log(`Seeding Sanity CMS with Countries, Services, Industries, and Blog Posts...`);
  
  if (!token) {
    console.error("ERROR: SANITY_API_TOKEN is missing.");
    return;
  }

  for (const country of countriesData) {
    try {
      await client.createOrReplace(country as any);
      console.log(`✓ Seeded Country: ${country.name} (${country.code})`);
    } catch (err: any) {
      console.error(`Error seeding country ${country.code}:`, err.message);
    }
  }

  for (const s of servicesData) {
    try {
      await client.createOrReplace(s as any);
      console.log(`✓ Seeded Service: ${s.title}`);
    } catch (err: any) {
      console.error(`Error seeding service ${s.title}:`, err.message);
    }
  }

  for (const ind of industriesData) {
    try {
      await client.createOrReplace(ind as any);
      console.log(`✓ Seeded Industry: ${ind.title}`);
    } catch (err: any) {
      console.error(`Error seeding industry ${ind.title}:`, err.message);
    }
  }

  let count = 0;
  for (const post of ALL_BLOG_POSTS) {
    try {
      const sanityDoc = {
        _id: `post-${post.slug}`,
        _type: "post",
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        excerpt: post.excerpt,
        content: post.content,
        publishedAt: `${post.date}T10:00:00Z`,
        readTime: post.readTime,
        tag: post.tag,
        domain: post.domain,
        countryCode: post.countryCode,
      };

      await client.createOrReplace(sanityDoc);
      count++;
      console.log(`✓ [${count}/${ALL_BLOG_POSTS.length}] Seeded Post: ${post.title} (${post.countryCode.toUpperCase()})`);
    } catch (err: any) {
      console.error(`Error seeding post ${post.slug}:`, err.message);
    }
  }

  console.log(`Sanity CMS Seeding Complete!`);
}

seed();
