import { groq } from "next-sanity";

export const SERVICES_QUERY = groq`
  *[_type == "service"] {
    _id,
    title,
    "slug": slug.current,
    tagline,
    description,
    bullets
  }
`;

export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tagline,
    description,
    longDescription,
    bullets,
    process,
    faqs
  }
`;

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    tag
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readTime,
    tag,
    content
  }
`;
