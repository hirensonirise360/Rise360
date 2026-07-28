import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCountryContext } from "@/lib/getCountryContext";
import { ResourceDetailContent } from "@/components/resources/ResourceDetailContent";
import { ALL_BLOG_POSTS } from "@/data/blogsData";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const countryConfig = await getCountryContext();
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Resource Not Found | RISE360 Global" };
  }

  return {
    title: `${post.title} | RISE360 ${countryConfig.name}`,
    description: post.excerpt,
    alternates: { canonical: `https://${countryConfig.domain}/resources/${slug}` },
  };
}

export default async function ResourceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const countryConfig = await getCountryContext();
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <ResourceDetailContent countryConfig={countryConfig} post={post} />;
}
