export interface EntityType {
  name: string;
  code: string;
  description: string;
  idealFor: string;
}

export interface ComplianceItem {
  agency: string;
  title: string;
  description: string;
}

export interface AdvisoryFocus {
  title: string;
  description: string;
  iconName: string;
}

export interface CountryFaq {
  question: string;
  answer: string;
}

export interface CountryData {
  code: string;
  name: string;
  flag: string;
  currency: string;
  region: string;
  heroHeadline: string;
  heroSubheadline: string;
  taxRate: string;
  keyHubs: string[];
  entityTypes: EntityType[];
  complianceItems: ComplianceItem[];
  advisoryFocus: AdvisoryFocus[];
  marketOverview: string;
  keyAdvantages: string[];
  faqs: CountryFaq[];
}

export const COUNTRIES: Record<string, CountryData> = {
  us: {
    code: "us",
    name: "United States",
    flag: "🇺🇸",
    currency: "USD ($)",
    region: "North America",
    heroHeadline: "United States Business Expansion & Financial Advisory",
    heroSubheadline:
      "Navigate Delaware incorporation, multi-state tax nexus, IRS compliance, and cross-border transactions in the world's largest economy.",
    taxRate: "21% Federal (+ 0-11.5% State)",
    keyHubs: ["New York", "Silicon Valley", "Texas", "Florida", "Chicago"],
    marketOverview:
      "The United States remains the premier market for global capital, innovation, and enterprise scaling. Success in the US requires navigating federal IRS regulations, 50 distinct state tax jurisdictions, and complex cross-border transfer pricing rules.",
    keyAdvantages: [
      "Access to the world's deepest venture capital and private equity markets",
      "Robust legal protection for intellectual property and commercial contracts",
      "Flexible corporate structuring via Delaware C-Corps and LLCs",
      "Direct market access to over 330 million high-purchasing-power consumers",
    ],
    entityTypes: [
      {
        name: "C-Corporation (C-Corp)",
        code: "C-Corp",
        description: "The gold standard for venture-backed startups and foreign parent subsidiaries.",
        idealFor: "Companies seeking US VC investment, stock options, or eventual IPO.",
      },
      {
        name: "Limited Liability Company (LLC)",
        code: "LLC",
        description: "Pass-through tax entity offering asset protection with flexible management.",
        idealFor: "Privately held businesses, real estate holdings, and joint ventures.",
      },
      {
        name: "Foreign Branch Office",
        code: "Branch",
        description: "Direct extension of an overseas parent company operating within the US.",
        idealFor: "Testing US commercial presence prior to full subsidiary incorporation.",
      },
    ],
    complianceItems: [
      {
        agency: "IRS (Internal Revenue Service)",
        title: "Federal FEIN & Corporate Income Tax",
        description: "Form 1120 / 1120-F filing, BEAT tax calculations, and transfer pricing documentation.",
      },
      {
        agency: "State Revenue Departments",
        title: "Multi-State Sales Tax & Franchise Tax Nexus",
        description: "Wayfair economic nexus monitoring, state income allocation, and local franchise filings.",
      },
      {
        agency: "FinCEN",
        title: "Corporate Transparency Act (BOI)",
        description: "Beneficial Ownership Information reporting for domestic and foreign registered entities.",
      },
      {
        agency: "U.S. Dept of Treasury",
        title: "FIRPTA & Cross-Border Withholding",
        description: "Foreign Investment in Real Property Tax Act compliance and treaty benefit claims.",
      },
    ],
    advisoryFocus: [
      {
        title: "US Market Entry Strategy",
        description: "Turnkey entity formation, bank account setup guidance, state selection, and corporate governance.",
        iconName: "Globe",
      },
      {
        title: "Multi-State Tax & Sales Tax Nexus",
        description: "Automated sales tax integration, physical and economic nexus audits across all 50 states.",
        iconName: "FileText",
      },
      {
        title: "Cross-Border Tax & Transfer Pricing",
        description: "Intercompany service agreements, IP licensing optimization, and OECD/IRS compliance.",
        iconName: "TrendingUp",
      },
      {
        title: "Outsourced US Finance & CFO",
        description: "US GAAP compliant bookkeeping, monthly closes, 401(k) / payroll administration, and board reporting.",
        iconName: "Building2",
      },
    ],
    faqs: [
      {
        question: "Why do foreign companies choose Delaware for US incorporation?",
        answer:
          "Delaware offers the most advanced Court of Chancery, well-established corporate law precedents, privacy protections, and is universally preferred by institutional US investors.",
      },
      {
        question: "Do foreign owners need a US Social Security Number (SSN) to start a business?",
        answer:
          "No. Non-US residents can obtain an Employer Identification Number (EIN) from the IRS without an SSN or ITIN using specialized tax filing processes.",
      },
      {
        question: "What is Sales Tax Nexus and how does it affect non-US companies?",
        answer:
          "If your business reaches specific sales thresholds or physical presence in a US state, you must register, collect, and remit state sales tax even if headquartered abroad.",
      },
    ],
  },
  ca: {
    code: "ca",
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD ($)",
    region: "North America",
    heroHeadline: "Canada Business Expansion & Financial Advisory Services",
    heroSubheadline:
      "Leverage Canadian innovation incentives (SR&ED), USMCA market access, federal/provincial incorporation, and CRA tax compliance.",
    taxRate: "~26.5% Combined Federal & Provincial",
    keyHubs: ["Toronto", "Vancouver", "Montreal", "Calgary", "Waterloo"],
    marketOverview:
      "Canada provides a stable, highly educated, and innovation-focused business environment. With direct US market integration via USMCA, Canada is a primary choice for tech expansion, natural resources, and financial services.",
    keyAdvantages: [
      "Generous R&D tax incentives through the SR&ED program (up to 35% tax credits)",
      "Duty-free market access across North America under USMCA/CUSMA",
      "World-class tech talent hubs in Toronto, Vancouver, and Montreal",
      "Stable banking system ranked among the soundest globally",
    ],
    entityTypes: [
      {
        name: "Federal Corporation (CBCA)",
        code: "Federal",
        description: "National brand protection and nationwide operation under the Canada Business Corporations Act.",
        idealFor: "Businesses operating across multiple provinces or scaling internationally.",
      },
      {
        name: "Provincial Corporation (OBCA/BCBCA)",
        code: "Provincial",
        description: "Incorporation governed by a specific province (e.g. Ontario or British Columbia).",
        idealFor: "Entities focused primarily on a single regional market.",
      },
      {
        name: "Extra-Provincial Registration",
        code: "Extra-Prov",
        description: "Licensing foreign or federal corporations to conduct business in specific provinces.",
        idealFor: "Cross-border entities extending physical or commercial operations into Canada.",
      },
    ],
    complianceItems: [
      {
        agency: "CRA (Canada Revenue Agency)",
        title: "Corporate Tax (T2) & Business Number",
        description: "Annual T2 corporate returns, transfer pricing filings (T106), and tax treaty election forms.",
      },
      {
        agency: "CRA / Provincial Revenue",
        title: "GST / HST / PST Sales Tax",
        description: "Harmonized sales tax registration, input tax credit (ITC) claims, and quarterly filings.",
      },
      {
        agency: "Innovation, Science & Economic Dev",
        title: "SR&ED Tax Credit Claims",
        description: "Technical and financial documentation for Scientific Research & Experimental Development credits.",
      },
      {
        agency: "Investment Canada Division",
        title: "Investment Canada Act (ICA) Filings",
        description: "Notification and review procedures for foreign investors establishing or acquiring Canadian businesses.",
      },
    ],
    advisoryFocus: [
      {
        title: "Canadian Market Expansion",
        description: "Turnkey incorporation, director requirement advisory, CRA registration, and banking connections.",
        iconName: "Globe",
      },
      {
        title: "SR&ED R&D Tax Credit Optimization",
        description: "Maximizing federal and provincial R&D cash refunds and tax credits for tech and manufacturing firms.",
        iconName: "TrendingUp",
      },
      {
        title: "Cross-Border Canada-US Tax & Structuring",
        description: "Dual-resident tax structuring, Article IV treaty elections, and transfer pricing defense.",
        iconName: "FileText",
      },
      {
        title: "Outsourced Canadian Accounting & Payroll",
        description: "Multi-province payroll, GST/HST filing, ASPE/IFRS financial statements, and management reporting.",
        iconName: "Building2",
      },
    ],
    faqs: [
      {
        question: "Do Canadian corporations require Canadian resident directors?",
        answer:
          "Federal corporations (CBCA) no longer require Canadian resident directors as of 2021. Certain provinces (like Ontario and BC) also have no residency requirements.",
      },
      {
        question: "What is the SR&ED incentive and how much can companies claim?",
        answer:
          "SR&ED provides up to 35% refundable tax credits on qualified Canadian R&D salaries, materials, and contractor expenditures for eligible tech and industrial firms.",
      },
      {
        question: "How does GST/HST work for foreign companies selling into Canada?",
        answer:
          "Non-resident businesses making taxable supplies in Canada may need to register under simplified or standard GST/HST rules to collect tax and claim input tax credits.",
      },
    ],
  },
  uk: {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP (£)",
    region: "Europe",
    heroHeadline: "United Kingdom Market Entry & Financial Advisory",
    heroSubheadline:
      "Establish your UK presence via Companies House incorporation, HMRC tax compliance, FCA FinTech advisory, and London headquarter operations.",
    taxRate: "25% (Main Rate)",
    keyHubs: ["London", "Manchester", "Edinburgh", "Cambridge", "Birmingham"],
    marketOverview:
      "The UK is one of the world's leading financial and technological capitals. As a gateway to European, Middle Eastern, and global markets, the UK offers an attractive corporate legal system, strong R&D incentives, and capital depth.",
    keyAdvantages: [
      "London is a global financial center with unequaled access to international capital",
      "Attractive R&D tax incentives & Patent Box regime (10% corporate tax rate on IP profits)",
      "Clear, transparent corporate governance via Companies House",
      "Comprehensive double tax treaty network spanning over 130 jurisdictions",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (Ltd)",
        code: "Ltd",
        description: "The standard legal entity for UK commercial operations and foreign subsidiaries.",
        idealFor: "Small to mid-size enterprises, tech startups, and commercial subsidiaries.",
      },
      {
        name: "Public Limited Company (PLC)",
        code: "PLC",
        description: "Corporate entity permitted to offer shares to the general public.",
        idealFor: "Large corporations seeking stock exchange listings (LSE/AIM).",
      },
      {
        name: "UK Establishment (Branch)",
        code: "Branch",
        description: "Registration of an overseas parent company with Companies House.",
        idealFor: "Overseas entities extending operational footprint without a standalone UK subsidiary.",
      },
    ],
    complianceItems: [
      {
        agency: "Companies House",
        title: "Annual Confirmation Statement & Accounts",
        description: "Filing annual statutory accounts (UK GAAP/IFRS), PSC registers, and director records.",
      },
      {
        agency: "HMRC (HM Revenue & Customs)",
        title: "Corporation Tax (CT600) & PAYE",
        description: "Annual CT600 returns, R&D tax credit claims, payroll PAYE, and National Insurance.",
      },
      {
        agency: "HMRC VAT Division",
        title: "VAT Registration & Making Tax Digital (MTD)",
        description: "Standard 20% VAT compliance, MTD software integration, and cross-border trade VAT.",
      },
      {
        agency: "FCA (Financial Conduct Authority)",
        title: "FinTech & Payment Service Licensing",
        description: "EMI licensing, API registration, and regulatory compliance for financial services.",
      },
    ],
    advisoryFocus: [
      {
        title: "UK Market Expansion & Setup",
        description: "Fast-track Ltd registration, resident secretary services, corporate banking, and governance.",
        iconName: "Globe",
      },
      {
        title: "FinTech & Regulatory Advisory",
        description: "FCA authorization support, AML/KYC framework implementation, and compliance audits.",
        iconName: "FileText",
      },
      {
        title: "Patent Box & UK R&D Tax Relief",
        description: "Claiming 10% effective tax rates on qualifying IP income and R&D expenditure relief.",
        iconName: "TrendingUp",
      },
      {
        title: "Outsourced UK Financial Operations",
        description: "Xero/NetSuite bookkeeping, statutory accounts prep, PAYE administration, and VAT filings.",
        iconName: "Building2",
      },
    ],
    faqs: [
      {
        question: "How long does it take to incorporate a UK Private Limited Company (Ltd)?",
        answer:
          "Companies House typically processes digital incorporation within 24 to 48 hours once all anti-money laundering (AML) checks are completed.",
      },
      {
        question: "What is the UK Patent Box regime?",
        answer:
          "The Patent Box allows UK companies to apply a lower 10% rate of Corporation Tax to profits earned from patented inventions and qualifying IP.",
      },
      {
        question: "Is UK VAT mandatory for non-UK businesses selling services into the UK?",
        answer:
          "The UK VAT threshold (£90,000) generally applies to UK businesses, but foreign entities making taxable supplies in the UK may have a zero-threshold registration requirement.",
      },
    ],
  },
  au: {
    code: "au",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD ($)",
    region: "Asia-Pacific",
    heroHeadline: "Australia Business Expansion & Financial Advisory",
    heroSubheadline:
      "Expand into the APAC region with ASIC corporate incorporation, FIRB foreign investment approvals, ATO tax compliance, and R&D tax offsets.",
    taxRate: "25% Base / 30% Standard",
    keyHubs: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    marketOverview:
      "Australia is the financial hub of the Asia-Pacific region. Boasting sophisticated financial infrastructure, rich natural resources, high consumer purchasing power, and strong regulatory standards, Australia offers strategic growth.",
    keyAdvantages: [
      "Strategic gateway to Asia-Pacific trade corridors and ASEAN supply chains",
      "Highly attractive R&D Tax Incentive offering up to 43.5% refundable tax offsets",
      "Robust consumer market with one of the highest per-capita GDPs in the world",
      "Transparent corporate regulation via ASIC and stable governance",
    ],
    entityTypes: [
      {
        name: "Proprietary Limited Company (Pty Ltd)",
        code: "Pty Ltd",
        description: "The standard private corporate vehicle for foreign subsidiaries and domestic businesses.",
        idealFor: "Commercial operations, tech ventures, and foreign parent company subsidiaries.",
      },
      {
        name: "Public Company (Limited)",
        code: "Ltd",
        description: "Corporate entity capable of offering shares to the public and listing on the ASX.",
        idealFor: "Large enterprises and investment funds seeking ASX public capital.",
      },
      {
        name: "Registered Foreign Company (ARBN)",
        code: "ARBN",
        description: "Direct registration of an overseas corporation with ASIC under an Australian Registered Body Number.",
        idealFor: "Overseas companies managing contracts or assets in Australia directly.",
      },
    ],
    complianceItems: [
      {
        agency: "ASIC (Australian Securities & Inv Comm)",
        title: "Company Registration & Director ID",
        description: "Annual ASIC solvency statements, Director ID compliance, and resident director requirements.",
      },
      {
        agency: "ATO (Australian Taxation Office)",
        title: "ABN, TFN & Corporate Income Tax",
        description: "Australian Business Number (ABN), Tax File Number (TFN), and annual corporate tax returns.",
      },
      {
        agency: "ATO GST Division",
        title: "Goods & Services Tax (GST - 10%) & BAS",
        description: "Business Activity Statements (BAS), GST registration, and Single Touch Payroll (STP).",
      },
      {
        agency: "FIRB (Foreign Investment Review Board)",
        title: "FIRB Investment Approvals",
        description: "Clearance for foreign acquisitions of Australian businesses, commercial real estate, or IP.",
      },
    ],
    advisoryFocus: [
      {
        title: "Australia & APAC Market Entry",
        description: "Pty Ltd formation, nominee director services, ABN/TFN setup, and banking setup support.",
        iconName: "Globe",
      },
      {
        title: "FIRB Foreign Investment Advisory",
        description: "Structuring cross-border transactions to ensure swift FIRB statutory clearance.",
        iconName: "FileText",
      },
      {
        title: "R&D Tax Incentive Refund Optimization",
        description: "Documentation and submission for up to 43.5% cash refunds on qualifying R&D spend.",
        iconName: "TrendingUp",
      },
      {
        title: "Outsourced Australian Accounting & Payroll",
        description: "Xero financial management, BAS GST returns, Single Touch Payroll (STP), and superannuation.",
        iconName: "Building2",
      },
    ],
    faqs: [
      {
        question: "Does an Australian Proprietary Limited (Pty Ltd) company require a resident director?",
        answer:
          "Yes. Australian law mandates that at least one director of a Pty Ltd company must ordinarily reside in Australia. RISE360 provides resident nominee director advisory.",
      },
      {
        question: "What is FIRB approval and when is it required?",
        answer:
          "The Foreign Investment Review Board (FIRB) evaluates foreign investments in Australian assets, real estate, and companies above specified monetary thresholds.",
      },
      {
        question: "How does the Australian R&D Tax Incentive work?",
        answer:
          "Companies with aggregated annual turnover under AUD $20M can receive a 43.5% refundable tax offset (cash refund) for eligible R&D activities conducted in Australia.",
      },
    ],
  },
  nl: {
    code: "nl",
    name: "Netherlands",
    flag: "🇳🇱",
    currency: "EUR (€)",
    region: "European Union",
    heroHeadline: "Netherlands & European Union Expansion Advisory",
    heroSubheadline:
      "Establish your EU gateway with Dutch BV incorporation, KVK registration, 30% expat ruling, and EU VAT / Holding tax optimization.",
    taxRate: "19% (up to €200k) / 25.8%",
    keyHubs: ["Amsterdam", "Rotterdam", "Eindhoven", "Utrecht", "The Hague"],
    marketOverview:
      "The Netherlands is the undisputed logistics, holding, and headquarters gateway for Europe. Offering an unmatched tax treaty network, English business fluency, and central geographic location, the Netherlands connects you to 450+ million EU consumers.",
    keyAdvantages: [
      "Ideal EU holding jurisdiction with extensive participation exemption (0% tax on qualifying dividends)",
      "Direct access to the EU Single Market and Port of Rotterdam / Schiphol logistics hubs",
      "30% Tax Ruling tax incentive for qualifying foreign skilled workers",
      "World-class innovation ecosystem in tech, clean energy, and agrifood",
    ],
    entityTypes: [
      {
        name: "Private Limited Company (BV)",
        code: "BV",
        description: "Besloten Vennootschap — the standard corporate entity for EU subsidiaries and operating business.",
        idealFor: "International companies establishing an EU regional HQ, holding structure, or trading hub.",
      },
      {
        name: "Public Limited Company (NV)",
        code: "NV",
        description: "Naamloze Vennootschap — suitable for large public enterprises and capital market listings.",
        idealFor: "Large multinational enterprises and listed corporations.",
      },
      {
        name: "Dutch Branch Office (Dependance)",
        code: "Branch",
        description: "Formal registration of a foreign corporate head office with the Dutch Chamber of Commerce (KVK).",
        idealFor: "Overseas entities desiring an official commercial footprint without forming a new legal entity.",
      },
    ],
    complianceItems: [
      {
        agency: "KVK (Chamber of Commerce)",
        title: "KVK Registration & UBO Register",
        description: "Company trade register enrollment, Ultimate Beneficial Owner (UBO) filing, and annual accounts.",
      },
      {
        agency: "Belastingdienst (Tax Authority)",
        title: "Corporate Income Tax (VPB) & 30% Ruling",
        description: "Annual VPB returns, transfer pricing master/local file compliance, and expat tax applications.",
      },
      {
        agency: "Belastingdienst VAT Division",
        title: "Dutch VAT (BTW - 21%) & Article 23",
        description: "Quarterly BTW returns, EU OSS registration, and Article 23 import VAT deferral licenses.",
      },
      {
        agency: "Dutch Financial Markets Auth (AFM)",
        title: "EU Financial Regulatory Compliance",
        description: "MiFID II, PSD2, and financial services licensing compliance across the European Economic Area.",
      },
    ],
    advisoryFocus: [
      {
        title: "Netherlands & EU Headquarter Setup",
        description: "Notarial BV deed execution, KVK registration, tax office clearance, and bank account setup.",
        iconName: "Globe",
      },
      {
        title: "EU VAT & Customs Tariff Advisory",
        description: "Article 23 import VAT deferral, EU One-Stop-Shop (OSS) compliance, and supply chain tax optimization.",
        iconName: "FileText",
      },
      {
        title: "Dutch Holding & Participation Exemption",
        description: "Structuring international IP, dividend flows, and holding entities to avoid double taxation.",
        iconName: "TrendingUp",
      },
      {
        title: "Outsourced Dutch Finance & Payroll",
        description: "Dutch GAAP / IFRS accounting, 30% ruling expat payroll management, and Belastingdienst filings.",
        iconName: "Building2",
      },
    ],
    faqs: [
      {
        question: "What is the minimum share capital required to incorporate a Dutch BV?",
        answer:
          "Since the Flex-BV law reform, the statutory minimum share capital is just €0.01 (1 cent), making Dutch BV incorporation fast and accessible.",
      },
      {
        question: "How does the Dutch 30% Expat Tax Ruling work?",
        answer:
          "Qualified foreign employees relocated to the Netherlands can receive up to 30% of their gross salary tax-free, significantly reducing employment overhead.",
      },
      {
        question: "What is Article 23 import VAT deferral?",
        answer:
          "Article 23 allows Dutch companies importing goods into the EU to defer paying import VAT at customs, eliminating cash-flow bottlenecks.",
      },
    ],
  },
};

// Supporting alias mapping (e.g. usa -> us)
COUNTRIES["usa"] = {
  ...COUNTRIES["us"],
  code: "usa",
};

export const SUPPORTED_COUNTRY_CODES = ["us", "usa", "ca", "uk", "au", "nl"];

export const COUNTRY_LIST = [
  { code: "us", name: "United States", flag: "🇺🇸", region: "North America" },
  { code: "ca", name: "Canada", flag: "🇨🇦", region: "North America" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
  { code: "au", name: "Australia", flag: "🇦🇺", region: "Asia-Pacific" },
  { code: "nl", name: "Netherlands", flag: "🇳🇱", region: "Europe" },
];
