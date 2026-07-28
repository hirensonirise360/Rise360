import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityClient } from "@/sanity/lib/client";
import { getCountryConfig } from "@/lib/countryResolver";
import { ResourcesContent, BlogPost } from "@/components/resources/ResourcesContent";
import { COUNTRY_CONFIG } from "@/config/countryConfig";
import { ALL_BLOG_POSTS } from "@/data/blogsData";

export async function generateStaticParams() {
  return Object.keys(COUNTRY_CONFIG.countries).map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const countryConfig = getCountryConfig(country);

  if (!countryConfig) {
    return { title: "Resources | RISE360 Global" };
  }

  return {
    title: `Resources & Insights | RISE360 ${countryConfig.name}`,
    description: `Regulatory updates, market entry guides, and financial advisory insights from RISE360 ${countryConfig.name} consultants.`,
    alternates: { canonical: `https://${countryConfig.domain}/resources` },
  };
}

function deduplicatePosts(posts: BlogPost[]): BlogPost[] {
  const seen = new Set<string>();
  return posts.filter((post) => {
    if (!post.slug || seen.has(post.slug)) return false;
    seen.add(post.slug);
    return true;
  });
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await sanityClient.fetch(
      `*[_type == "post" && !(_id in path("drafts.**"))] | order(coalesce(publishedAt, _createdAt) desc) {
        "slug": slug.current,
        title,
        excerpt,
        "date": coalesce(publishedAt, _createdAt),
        readTime,
        tag,
        domain,
        countryCode
      }`
    );
    if (res && Array.isArray(res) && res.length > 0) {
      const sanityPosts = res.map((p: any) => ({
        slug: p.slug,
        title: p.title || "Untitled Post",
        excerpt: p.excerpt || "",
        date: p.date ? p.date.split("T")[0] : "2026-07-27",
        readTime: p.readTime || "5 min read",
        tag: p.tag || "Insights",
        domain: p.domain || "market-expansion",
        countryCode: p.countryCode || "global",
      }));
      return deduplicatePosts([...sanityPosts, ...ALL_BLOG_POSTS]);
    }
  } catch (err) {
    // Sanity fallback
  }

  return deduplicatePosts(ALL_BLOG_POSTS);
}

export default async function CountryResourcesPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const countryConfig = getCountryConfig(country);

  if (!countryConfig) {
    notFound();
  }

  const allPosts = await getPosts();
  const posts = allPosts.filter(
    (p) => !p.countryCode || p.countryCode === countryConfig.code || p.countryCode === "global"
  );

  return <ResourcesContent countryConfig={countryConfig} posts={posts.length > 0 ? posts : allPosts} />;
}
