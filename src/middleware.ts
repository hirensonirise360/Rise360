import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCountryFromHost } from "@/lib/countryResolver";
import { COUNTRY_CONFIG } from "@/config/countryConfig";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const host = request.headers.get("host");

  // 1. Check query parameter override e.g. ?country=us (useful for testing)
  const countryParam = searchParams.get("country");
  
  // 2. Check path-based prefix e.g. /us/about or /ca/contact
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0]?.toLowerCase();

  let resolvedCountry = COUNTRY_CONFIG.defaultCountry;

  if (countryParam && COUNTRY_CONFIG.countries[countryParam.toLowerCase()]) {
    resolvedCountry = countryParam.toLowerCase();
  } else if (firstSegment && COUNTRY_CONFIG.countries[firstSegment]) {
    resolvedCountry = firstSegment;
  } else {
    // 3. Detect via Host header (e.g. example.us -> us)
    resolvedCountry = getCountryFromHost(host);
  }

  // Clone headers and inject resolved country context
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-country-code", resolvedCountry);
  requestHeaders.set("x-current-domain", host || "rise360global.com");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     * - static image assets
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
