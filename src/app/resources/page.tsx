import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { getCountryContext } from "@/lib/getCountryContext";
import { ResourcesContent, BlogPost } from "@/components/resources/ResourcesContent";
import { ALL_BLOG_POSTS } from "@/data/blogsData";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const countryConfig = await getCountryContext();
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

export default async function ResourcesPage() {
  const countryConfig = await getCountryContext();
  const allPosts = await getPosts();

  const posts = allPosts.filter(
    (p) => !p.countryCode || p.countryCode === countryConfig.code || p.countryCode === "global"
  );

  return <ResourcesContent countryConfig={countryConfig} posts={posts.length > 0 ? posts : allPosts} />;
}
