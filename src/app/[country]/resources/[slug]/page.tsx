import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCountryConfig } from "@/lib/countryResolver";
import { ResourceDetailContent } from "@/components/resources/ResourceDetailContent";
import { ALL_BLOG_POSTS } from "@/data/blogsData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}): Promise<Metadata> {
  const { country, slug } = await params;
  const countryConfig = getCountryConfig(country);
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post || !countryConfig) {
    return { title: "Resource Not Found | RISE360 Global" };
  }

  return {
    title: `${post.title} | RISE360 ${countryConfig.name}`,
    description: post.excerpt,
    alternates: { canonical: `https://${countryConfig.domain}/resources/${slug}` },
  };
}

export default async function CountryResourceSlugPage({
  params,
}: {
  params: Promise<{ country: string; slug: string }>;
}) {
  const { country, slug } = await params;
  const countryConfig = getCountryConfig(country);
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post || !countryConfig) {
    notFound();
  }

  return <ResourceDetailContent countryConfig={countryConfig} post={post} />;
}
