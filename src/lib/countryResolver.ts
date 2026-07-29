import { COUNTRY_CONFIG, CountryProfile } from "@/config/countryConfig";
import { sanityClient } from "@/sanity/lib/client";

/**
 * Resolves a country code from an incoming Host header (e.g. "example.us" -> "us")
 */
export function getCountryFromHost(hostHeader?: string | null): string {
  if (!hostHeader) return COUNTRY_CONFIG.defaultCountry;

  // Clean host (remove port number if present e.g. "localhost:3000" or "example.us:8080")
  const hostname = hostHeader.split(":")[0].toLowerCase();

  if (COUNTRY_CONFIG.domainToCountryMap[hostname]) {
    return COUNTRY_CONFIG.domainToCountryMap[hostname];
  }

  return COUNTRY_CONFIG.defaultCountry;
}

/**
 * Performs a deep hierarchical merge of a target country config on top of the 'global' default config.
 * Any omitted property in target country automatically falls back to the global default.
 */
export function getCountryConfig(countryCode?: string | null): CountryProfile {
  const code = (countryCode || COUNTRY_CONFIG.defaultCountry).toLowerCase();
  const globalConfig = COUNTRY_CONFIG.countries[COUNTRY_CONFIG.defaultCountry];
  const targetConfig = COUNTRY_CONFIG.countries[code];

  if (!targetConfig || code === COUNTRY_CONFIG.defaultCountry) {
    return globalConfig;
  }

  return {
    ...globalConfig,
    ...targetConfig,
    seo: {
      title: targetConfig.seo?.title || globalConfig.seo?.title || "",
      description: targetConfig.seo?.description || globalConfig.seo?.description || "",
      ogImage: targetConfig.seo?.ogImage || globalConfig.seo?.ogImage,
      keywords: targetConfig.seo?.keywords || globalConfig.seo?.keywords,
    },
    contact: {
      phone: targetConfig.contact?.phone || globalConfig.contact?.phone || "",
      email: targetConfig.contact?.email || globalConfig.contact?.email || "",
      address: targetConfig.contact?.address || globalConfig.contact?.address || "",
      cityStateZip: targetConfig.contact?.cityStateZip || globalConfig.contact?.cityStateZip || "",
      officeHours: targetConfig.contact?.officeHours || globalConfig.contact?.officeHours || "",
      googleMapEmbedUrl: targetConfig.contact?.googleMapEmbedUrl || globalConfig.contact?.googleMapEmbedUrl,
    },
    homepage: {
      ...globalConfig.homepage,
      ...targetConfig.homepage,
      stats: targetConfig.homepage?.stats || globalConfig.homepage?.stats,
      keyAdvantages: targetConfig.homepage?.keyAdvantages || globalConfig.homepage?.keyAdvantages,
    },
    legal: {
      ...globalConfig.legal,
      ...targetConfig.legal,
      privacyPolicySections:
        targetConfig.legal?.privacyPolicySections || globalConfig.legal?.privacyPolicySections,
      termsSections: targetConfig.legal?.termsSections || globalConfig.legal?.termsSections,
    },
    navMenu: targetConfig.navMenu || globalConfig.navMenu,
    footerLinks: targetConfig.footerLinks || globalConfig.footerLinks,
    customPosts: targetConfig.customPosts || globalConfig.customPosts,
  };
}

/**
 * Async version of getCountryConfig that fetches custom country documents from Sanity CMS
 */
export async function getCountryConfigAsync(countryCode?: string | null): Promise<CountryProfile> {
  const baseConfig = getCountryConfig(countryCode);
  const code = (countryCode || COUNTRY_CONFIG.defaultCountry).toLowerCase();

  try {
    const sanityCountry = await sanityClient.fetch(
      `*[_type == "country" && code == $code][0]`,
      { code }
    );

    if (sanityCountry) {
      return {
        ...baseConfig,
        name: sanityCountry.name || baseConfig.name,
        flag: sanityCountry.flag || baseConfig.flag,
        currency: sanityCountry.currency || baseConfig.currency,
        domain: sanityCountry.domain || baseConfig.domain,
        tagline: sanityCountry.tagline || baseConfig.tagline,
        contact: {
          ...baseConfig.contact,
          phone: sanityCountry.phone || baseConfig.contact?.phone,
          email: sanityCountry.email || baseConfig.contact?.email,
          address: sanityCountry.address || baseConfig.contact?.address,
          cityStateZip: sanityCountry.cityStateZip || baseConfig.contact?.cityStateZip,
          officeHours: sanityCountry.officeHours || baseConfig.contact?.officeHours,
        },
        homepage: {
          ...baseConfig.homepage,
          heroBadge: sanityCountry.heroBadge || baseConfig.homepage?.heroBadge,
          heroHeadline: sanityCountry.heroHeadline || baseConfig.homepage?.heroHeadline,
          heroSubheadline: sanityCountry.heroSubheadline || baseConfig.homepage?.heroSubheadline,
        },
      };
    }
  } catch (err) {
    // Sanity fallback
  }

  return baseConfig;
}

/**
 * Returns list of all available countries for country selector dropdowns
 */
export function getAllSupportedCountries(): { code: string; name: string; flag: string; domain: string }[] {
  return Object.values(COUNTRY_CONFIG.countries).map((country) => ({
    code: country.code,
    name: country.name,
    flag: country.flag,
    domain: country.domain,
  }));
}

/**
 * Gets blog posts for a specific country, falling back to global posts if none are customized
 */
export function getBlogPostsForCountry(countryCode: string, allPosts: any[]) {
  const countryConfig = getCountryConfig(countryCode);
  if (countryConfig.customPosts && countryConfig.customPosts.length > 0) {
    return countryConfig.customPosts;
  }

  const filtered = allPosts.filter(
    (post) => !post.countryCode || post.countryCode === countryCode || post.countryCode === "global"
  );

  return filtered.length > 0 ? filtered : allPosts;
}
