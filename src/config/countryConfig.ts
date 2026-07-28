export interface SeoConfig {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  cityStateZip: string;
  officeHours: string;
  googleMapEmbedUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface HomepageConfig {
  heroBadge?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroCtaText?: string;
  heroCtaHref?: string;
  stats?: { label: string; value: string; description: string }[];
  keyAdvantages?: string[];
  problemHeadline?: string;
  problemSubheadline?: string;
}

export interface LegalConfig {
  privacyPolicyTitle?: string;
  privacyPolicyNotice?: string;
  privacyPolicySections?: { title: string; content: string }[];
  termsTitle?: string;
  termsNotice?: string;
  termsSections?: { title: string; content: string }[];
}

export interface BlogPostOverride {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  color?: string;
  countryCode?: string;
}

export interface CountryProfile {
  code: string;
  name: string;
  flag: string;
  currency: string;
  domain: string;
  logoUrl?: string;
  bannerUrl?: string;
  tagline?: string;
  seo?: SeoConfig;
  contact?: ContactInfo;
  navMenu?: NavItem[];
  footerLinks?: { label: string; href: string }[];
  homepage?: HomepageConfig;
  legal?: LegalConfig;
  customPosts?: BlogPostOverride[];
}

export interface MultiCountryConfig {
  defaultCountry: string;
  domainToCountryMap: Record<string, string>;
  countries: Record<string, CountryProfile>;
}

export const COUNTRY_CONFIG: MultiCountryConfig = {
  defaultCountry: "global",

  domainToCountryMap: {
    "rise360global.com": "global",
    "www.rise360global.com": "global",
    "example.com": "global",
    "www.example.com": "global",

    "rise360.us": "us",
    "www.rise360.us": "us",
    "example.us": "us",
    "www.example.us": "us",

    "rise360.ca": "ca",
    "www.rise360.ca": "ca",
    "example.ca": "ca",
    "www.example.ca": "ca",

    "rise360.co.uk": "uk",
    "www.rise360.co.uk": "uk",
    "example.co.uk": "uk",
    "www.example.co.uk": "uk",

    "rise360.com.au": "au",
    "www.rise360.com.au": "au",
    "example.au": "au",

    "rise360.nl": "nl",
    "www.rise360.nl": "nl",
  },

  countries: {
    global: {
      code: "global",
      name: "Global Hub",
      flag: "🌐",
      currency: "USD ($)",
      domain: "rise360global.com",
      logoUrl: "/logo.svg",
      bannerUrl: "/RISE_FPO_Main.svg",
      tagline: "Outsourced Accounting, Tax & Virtual CFO Services for CPA Firms & SMBs",

      seo: {
        title: "RISE360 | Outsourced Accounting, Tax Prep & Virtual CFO Services for CPA Firms & SMBs",
        description: "Scale your CPA practice or growing business with RISE360's dedicated outsourced bookkeeping, tax preparation, payroll, and Virtual CFO services.",
        ogImage: "/og-image.jpg",
        keywords: [
          "outsourced accounting",
          "CPA firm staff augmentation",
          "outsourced tax preparation",
          "bookkeeping for SMBs",
          "virtual CFO services",
          "payroll administration",
          "financial operations outsourcing",
        ],
      },

      contact: {
        phone: "+1 (800) 555-3600",
        email: "global@rise360global.com",
        address: "100 International Parkway, Suite 500",
        cityStateZip: "New York, NY 10001, USA",
        officeHours: "Mon - Fri: 8:00 AM - 6:00 PM EST",
        googleMapEmbedUrl: "https://maps.google.com/maps?q=New+York+Financial+District&t=&z=13&ie=UTF8&iwloc=&output=embed",
      },

      homepage: {
        heroBadge: "Outsourced Accounting & Financial Operations",
        heroHeadline: "Scale Your Business & Accounting Practice with Dedicated Back-Office Operations",
        heroSubheadline: "Empowering CPA firms and small-to-mid-sized growing businesses with white-label bookkeeping, tax preparation, payroll, and Virtual CFO services — cutting operating costs by 40%.",
        heroCtaText: "Book a Strategy Call",
        heroCtaHref: "/contact",
        stats: [
          { label: "CPA Practices & SMBs Served", value: "100+", description: "Trusted by accounting firms & SMBs globally" },
          { label: "Hours Saved Annually per CPA Firm", value: "2,500+", description: "Eliminating busy-season capacity bottlenecks" },
          { label: "Cost Reduction for SMB Clients", value: "40%", description: "Lower overhead compared to local hires" },
          { label: "Client Retention Rate", value: "98%", description: "Long-term partnership & white-label delivery" },
        ],
        keyAdvantages: [
          "White-Label Accounting & Tax Prep for CPA Practices",
          "Dedicated Bookkeeping & Month-End Close for SMBs",
          "Multi-Jurisdiction Tax Filing, Payroll & Statutory Compliance",
          "Virtual CFO & High-Level Executive Financial Reporting",
        ],
        problemHeadline: "Struggling with Local Accounting Capacity & High Overhead Costs?",
        problemSubheadline: "CPA firms face severe tax-season hiring shortages, while small & mid-sized business owners overpay for in-house bookkeeping. RISE360 delivers dedicated, enterprise-grade back-office teams ready on day one.",
      },
    },

    us: {
      code: "us",
      name: "United States",
      flag: "🇺🇸",
      currency: "USD ($)",
      domain: "rise360.us",
      logoUrl: "/logo.svg",
      tagline: "Outsourced Bookkeeping, Tax Prep & Virtual CFO for US CPA Firms & SMBs",

      seo: {
        title: "US Outsourced Accounting & Tax Prep for CPA Firms & SMBs | RISE360 USA",
        description: "Scale your US CPA practice or growing business with dedicated US GAAP bookkeeping, IRS Form 1040/1120 tax prep, sales tax nexus, and Virtual CFO services.",
      },

      contact: {
        phone: "+1 (212) 555-0199",
        email: "usa@rise360global.com",
        address: "250 Vesey Street, 24th Floor",
        cityStateZip: "New York, NY 10281, United States",
        officeHours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      },

      homepage: {
        heroBadge: "Outsourced Accounting & Financial Operations",
        heroHeadline: "Outsourced Bookkeeping, Tax Preparation & Virtual CFO for US Businesses & CPA Firms",
        heroSubheadline: "Helping US CPA practices expand capacity during busy season and enabling small-to-mid-sized US businesses to eliminate high finance overhead with dedicated US GAAP accountants.",
        heroCtaText: "Schedule US Capacity Audit",
        heroCtaHref: "/us/contact",
        stats: [
          { label: "US CPA Practices Partnered", value: "45+", description: "White-label tax prep & bookkeeping delivery" },
          { label: "US SMB Books Managed", value: "150+", description: "Real-time QuickBooks, Xero & NetSuite close" },
          { label: "Busy Season Hours Unlocked", value: "3,000+", description: "Relieving local US accountant burnout" },
          { label: "IRS & State Tax Returns Filed", value: "1,200+", description: "1040, 1120, 1120-S & 1065 prep" },
        ],
        keyAdvantages: [
          "US GAAP Bookkeeping, Reconciliations & Month-End Close",
          "White-Label Tax Prep (1040, 1120, 1120-S, 1065) for US CPA Firms",
          "50-State Sales Tax Nexus & State Corporate Filing Compliance",
          "Virtual CFO Advisory, Cash Flow Forecasting & Board Decks",
        ],
        problemHeadline: "Struggling with US Accounting Staff Shortages & High US Payroll Costs?",
        problemSubheadline: "US CPA firms spend months hunting for qualified senior accountants, while US SMBs pay $90k+ for basic in-house bookkeepers. RISE360 provides instant dedicated US GAAP accounting teams at 40% lower cost.",
      },
    },

    ca: {
      code: "ca",
      name: "Canada",
      flag: "🇨🇦",
      currency: "CAD ($)",
      domain: "rise360.ca",
      logoUrl: "/logo.svg",
      tagline: "CPA Canada Firm Capacity & SMB Financial Operations Outsourcing",

      seo: {
        title: "Canadian Outsourced Accounting & CRA Tax Prep for CPA Firms & SMBs | RISE360 Canada",
        description: "Dedicated ASPE/IFRS bookkeeping, CRA T1/T2 tax preparation, GST/HST filings, SR&ED claims, and Virtual CFO services for Canadian businesses and accounting firms.",
      },

      contact: {
        phone: "+1 (416) 555-0144",
        email: "canada@rise360global.com",
        address: "100 King Street West, Suite 5600",
        cityStateZip: "Toronto, ON M5X 1C9, Canada",
        officeHours: "Mon - Fri: 8:30 AM - 5:00 PM EST",
      },

      homepage: {
        heroBadge: "Outsourced Accounting & Financial Operations",
        heroHeadline: "Outsourced Bookkeeping, CRA Tax Prep & Virtual CFO Services across Canada",
        heroSubheadline: "Supporting Canadian CPA firms with white-label T1/T2 tax prep and providing Canadian small-to-mid-sized businesses with dedicated ASPE/IFRS accounting and GST/HST compliance.",
        heroCtaText: "Book Consultation",
        heroCtaHref: "/ca/contact",
        stats: [
          { label: "Canadian CPA Firms Supported", value: "30+", description: "Toronto, Vancouver, Montreal & Calgary practices" },
          { label: "CRA Tax Returns Processed", value: "850+", description: "T1 personal & T2 corporate tax filings" },
          { label: "GST/HST & Payroll Filings", value: "100%", description: "Flawless CRA statutory compliance" },
          { label: "Average Client Savings", value: "38%", description: "Lower operational overhead for Canadian SMBs" },
        ],
        keyAdvantages: [
          "CRA T1 & T2 White-Label Tax Return Preparation for CPA Practices",
          "Dedicated Canadian ASPE/IFRS Bookkeeping & Month-End Close",
          "GST/HST, PST/QST & Canadian Payroll Administration",
          "SR&ED R&D Tax Incentive Documentation & Virtual CFO",
        ],
        problemHeadline: "Tired of Busy-Season Overwork & Expensive Canadian Bookkeeping Costs?",
        problemSubheadline: "Canadian accounting practices face intense tax-season crunches, while Canadian SMB owners struggle to find reliable local bookkeepers. RISE360 delivers turn-key Canadian financial operations.",
      },
    },

    uk: {
      code: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      currency: "GBP (£)",
      domain: "rise360.co.uk",
      logoUrl: "/logo.svg",
      tagline: "Outsourced Accounting & HMRC Tax Prep for UK Accounting Practices & SMBs",

      seo: {
        title: "UK Outsourced Bookkeeping, HMRC Tax & Virtual CFO | RISE360 UK",
        description: "White-label accounting for UK accounting firms and dedicated FRS 102 bookkeeping, HMRC VAT MTD filings, SA100/CT600 tax prep, and Virtual CFO services for UK SMBs.",
      },

      contact: {
        phone: "+44 20 7946 0912",
        email: "uk@rise360global.com",
        address: "1 Bank Junction, City of London",
        cityStateZip: "London, EC3V 3LA, United Kingdom",
        officeHours: "Mon - Fri: 9:00 AM - 5:30 PM GMT",
      },

      homepage: {
        heroBadge: "Outsourced Accounting & Financial Operations",
        heroHeadline: "Outsourced Bookkeeping, HMRC Tax Prep & Virtual CFO for UK Businesses & Accounting Practices",
        heroSubheadline: "Partnering with London and regional UK accounting firms to scale audit & tax capacity while providing UK small-to-mid-sized businesses with dedicated FRS 102 back-office accounting.",
        heroCtaText: "Discuss UK Partnership",
        heroCtaHref: "/uk/contact",
        stats: [
          { label: "UK Accounting Practices", value: "25+", description: "London & regional firm capacity partners" },
          { label: "HMRC CT600 & VAT Filings", value: "600+", description: "Full Making Tax Digital (MTD) compliance" },
          { label: "UK SMB Accounts Managed", value: "100+", description: "Xero, Sage & Dext continuous processing" },
          { label: "Practice Capacity Increase", value: "50%", description: "Scaling client load without added UK office rent" },
        ],
        keyAdvantages: [
          "HMRC CT600 Corporate & SA100 Personal Tax Return Preparation",
          "FRS 102 / FRS 105 Year-End Accounts & Companies House Filings",
          "Making Tax Digital (MTD) VAT & UK Payroll Auto-Enrolment",
          "Outsourced Virtual CFO & Management Accounts for UK SMBs",
        ],
        problemHeadline: "Struggling to Scale Your UK Accounting Practice or Manage UK Finance Overhead?",
        problemSubheadline: "UK accounting firms are constrained by high senior accountant salaries in London, while UK small businesses waste time on manual admin. RISE360 handles your back office with precision.",
      },
    },

    au: {
      code: "au",
      name: "Australia",
      flag: "🇦🇺",
      currency: "AUD ($)",
      domain: "rise360.com.au",
      logoUrl: "/logo.svg",
      tagline: "Outsourced Accounting & ATO Compliance for Australian Accounting Firms & SMBs",

      seo: {
        title: "Australian Outsourced Bookkeeping, ATO Tax & Virtual CFO | RISE360 Australia",
        description: "Scale your Australian accounting firm or business with dedicated Xero bookkeeping, ATO BAS & tax return preparation, payroll, and Virtual CFO services.",
      },

      contact: {
        phone: "+61 2 9000 1234",
        email: "australia@rise360global.com",
        address: "100 Barangaroo Avenue, Level 28",
        cityStateZip: "Sydney, NSW 2000, Australia",
        officeHours: "Mon - Fri: 8:30 AM - 5:30 PM AEST",
      },

      homepage: {
        heroBadge: "Outsourced Accounting & Financial Operations",
        heroHeadline: "Outsourced Accounting, ATO Tax Preparation & Virtual CFO for Australian Businesses",
        heroSubheadline: "Helping Australian accounting practices scale capacity during EOFY and providing Australian small-to-mid-sized businesses with dedicated Xero bookkeeping, BAS, and payroll.",
        heroCtaText: "Book Strategy Session",
        heroCtaHref: "/au/contact",
        stats: [
          { label: "Australian Firms Supported", value: "20+", description: "Sydney, Melbourne & Brisbane practices" },
          { label: "ATO BAS & Tax Returns", value: "500+", description: "EOFY tax prep & BAS statement lodgments" },
          { label: "Australian SMB Accounts", value: "90+", description: "Xero, MYOB & QuickBooks automated close" },
          { label: "EOFY Overtime Reduced", value: "60%", description: "Relieving stress during peak tax season" },
        ],
        keyAdvantages: [
          "White-Label ATO Tax Return Prep (Company, Trust, Individual) for Accounting Firms",
          "Dedicated Australian Xero Bookkeeping & EOFY Reconciliations",
          "ATO BAS Lodgment, Single Touch Payroll (STP) & Superannuation",
          "Virtual CFO Advisory & APAC Cash Flow Management for Australian SMBs",
        ],
        problemHeadline: "Crushed by EOFY Workloads & Local Australian Staffing Costs?",
        problemSubheadline: "Australian accounting practices lose sleep during EOFY peak seasons, while growing Australian SMBs pay top dollar for basic bookkeeping. RISE360 provides turn-key Australian financial ops.",
      },
    },

    nl: {
      code: "nl",
      name: "Netherlands",
      flag: "🇳🇱",
      currency: "EUR (€)",
      domain: "rise360.nl",
      logoUrl: "/logo.svg",
      tagline: "Outsourced Dutch Accounting, VAT & Virtual CFO for EU Businesses & Advisory Firms",

      seo: {
        title: "Dutch Outsourced Accounting, KVK & Tax Compliance | RISE360 Netherlands",
        description: "Dedicated Dutch B.V. bookkeeping, KVK annual financial statements, BTW VAT filings, 30% ruling payroll, and Virtual CFO services for Dutch SMBs and advisory practices.",
      },

      contact: {
        phone: "+31 20 123 4567",
        email: "netherlands@rise360global.com",
        address: "Strawinskylaan 3051",
        cityStateZip: "1077 ZX Amsterdam, Netherlands",
        officeHours: "Mon - Fri: 9:00 AM - 5:30 PM CET",
      },

      homepage: {
        heroBadge: "Outsourced Accounting & Financial Operations",
        heroHeadline: "Outsourced Bookkeeping, Dutch Tax Compliance & Virtual CFO for Netherlands SMBs",
        heroSubheadline: "Providing Dutch accounting practices and small-to-mid-sized businesses with dedicated back-office B.V. bookkeeping, KVK annual accounts, BTW VAT filings, and 30% ruling payroll.",
        heroCtaText: "Schedule Consultation",
        heroCtaHref: "/nl/contact",
        stats: [
          { label: "Dutch B.V. Accounts Managed", value: "60+", description: "Amsterdam & Rotterdam enterprise clients" },
          { label: "BTW VAT & Corporate Tax Filings", value: "300+", description: "Flawless Dutch Belastingdienst compliance" },
          { label: "Average Cost Savings", value: "40%", description: "Compared to hiring local Dutch financial staff" },
          { label: "EU Market Access", value: "100%", description: "Seamless pan-European financial operations" },
        ],
        keyAdvantages: [
          "Dutch B.V. Year-End Financial Statements & KVK Filing Compliance",
          "BTW (VAT) Declaration & ICP Intra-Community Trade Filings",
          "30% Tax Ruling Expatriate Payroll & HR Administration",
          "Outsourced Virtual CFO & Management Accounting for Dutch SMBs",
        ],
        problemHeadline: "Struggling with Dutch Financial Staff Shortages & High EU Overhead?",
        problemSubheadline: "Businesses operating in the Netherlands face high Dutch wage costs and complex Belastingdienst tax rules. RISE360 unifies your Dutch financial operations into a streamlined, cost-effective service.",
      },
    },
  },
};
