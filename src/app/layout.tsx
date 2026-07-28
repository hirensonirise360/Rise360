import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { getCountryContext } from "@/lib/getCountryContext";
import { getAllSupportedCountries } from "@/lib/countryResolver";

const geistSans = { variable: "--font-geist-sans" };
const playfairDisplay = { variable: "--font-playfair" };

export const metadata: Metadata = {
  metadataBase: new URL("https://rise360global.com"),
  title: {
    default:
      "RISE360 | Financial Professional Outsourcing Consultants | Global Market Entry",
    template: "%s | RISE360 Global",
  },
  description:
    "RISE360 provides expert cross-border consulting, financial operations outsourcing, and global market expansion advisory. Trusted by 100+ clients worldwide.",
  keywords: [
    "cross-border consulting",
    "global market entry",
    "financial outsourcing",
    "international business consulting",
    "M&A advisory",
    "tax compliance",
    "outsourced accounting",
    "market expansion",
    "RISE360",
  ],
  authors: [{ name: "RISE360 Global" }],
  creator: "RISE360 Global",
  publisher: "RISE360 Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rise360global.com",
    siteName: "RISE360 Global",
    title: "RISE360 | Financial Professional Outsourcing Consultants",
    description:
      "Expert cross-border consulting and financial operations for global market expansion.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RISE360 Global Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RISE360 | Financial Professional Outsourcing Consultants",
    description:
      "Expert cross-border consulting and financial operations for global market expansion.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const countryConfig = await getCountryContext();
  const countries = getAllSupportedCountries();

  return (
    <html lang="en" className={`${geistSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Dynamic Multi-Country Hreflang SEO Tags */}
        {countries.map((c) => (
          <link
            key={c.code}
            rel="alternate"
            hrefLang={c.code === "global" ? "x-default" : `en-${c.code}`}
            href={`https://${c.domain}`}
          />
        ))}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: `RISE360 ${countryConfig.name !== "Global Hub" ? countryConfig.name : "Global"}`,
              alternateName: "RISE360 Financial Professional Outsourcing Consultants",
              url: `https://${countryConfig.domain}`,
              logo: `https://${countryConfig.domain}${countryConfig.logoUrl}`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: countryConfig.contact?.phone,
                contactType: "customer service",
                availableLanguage: "English",
              },
              areaServed: countries.map((c) => c.name),
              serviceType: [
                "Global Market Expansion",
                "Cross-Border Transactions",
                "Financial Operations Outsourcing",
                "M&A Advisory",
                "Tax Compliance",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header countryConfig={countryConfig} />
        <main id="main-content">{children}</main>
        <Footer countryConfig={countryConfig} />
        <CookieConsent />
      </body>
    </html>
  );
}
