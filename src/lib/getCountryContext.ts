import { headers } from "next/headers";
import { getCountryConfig } from "@/lib/countryResolver";
import { CountryProfile } from "@/config/countryConfig";

/**
 * Server Component helper to retrieve the resolved country configuration from request headers
 */
export async function getCountryContext(): Promise<CountryProfile> {
  try {
    const headersList = await headers();
    const countryCode = headersList.get("x-country-code") || "global";
    return getCountryConfig(countryCode);
  } catch (err) {
    // Fallback for static rendering or isolated component renders
    return getCountryConfig("global");
  }
}
