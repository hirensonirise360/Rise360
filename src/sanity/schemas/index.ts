import { defineType, defineField } from "sanity";

export const countrySchema = defineType({
  name: "country",
  title: "Countries & Domains",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Country Name (e.g. Germany, Japan)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Country Code (2-letter lowercase code, e.g. 'de', 'jp', 'us')",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "domain",
      title: "Associated Domain Name (e.g. 'example.de', 'rise360.de')",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "flag",
      title: "Flag Emoji (e.g. 🇩🇪, 🇯🇵, 🇺🇸)",
      type: "string",
    }),
    defineField({
      name: "currency",
      title: "Currency String (e.g. 'EUR (€)', 'JPY (¥)')",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Country Tagline",
      type: "string",
    }),

    // Contact Details
    defineField({ name: "phone", title: "Contact Phone Number", type: "string" }),
    defineField({ name: "email", title: "Contact Email Address", type: "string" }),
    defineField({ name: "address", title: "Street Address", type: "string" }),
    defineField({ name: "cityStateZip", title: "City, State/Province, Zip Code", type: "string" }),
    defineField({ name: "officeHours", title: "Office Working Hours", type: "string" }),

    // Homepage Overrides
    defineField({ name: "heroBadge", title: "Homepage Hero Badge", type: "string" }),
    defineField({ name: "heroHeadline", title: "Homepage Hero Headline", type: "string" }),
    defineField({ name: "heroSubheadline", title: "Homepage Hero Subheadline", type: "text", rows: 3 }),
  ],
});

export const serviceSchema = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "countryCode",
      title: "Target Country / Region",
      type: "string",
      options: {
        list: [
          { title: "Global (All Regions)", value: "global" },
          { title: "United States (us)", value: "us" },
          { title: "Canada (ca)", value: "ca" },
          { title: "United Kingdom (uk)", value: "uk" },
          { title: "Australia (au)", value: "au" },
          { title: "Netherlands (nl)", value: "nl" },
        ],
      },
      initialValue: "global",
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "longDescription", title: "Full Description", type: "text", rows: 6 }),
    defineField({ name: "bullets", title: "Key Features / Bullets", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "process",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "step", title: "Step Number", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", title: "Question", type: "string" },
            { name: "a", title: "Answer", type: "text" },
          ],
        },
      ],
    }),
  ],
});

export const industrySchema = defineType({
  name: "industry",
  title: "Industries",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "countryCode",
      title: "Target Country / Region",
      type: "string",
      options: {
        list: [
          { title: "Global (All Regions)", value: "global" },
          { title: "United States (us)", value: "us" },
          { title: "Canada (ca)", value: "ca" },
          { title: "United Kingdom (uk)", value: "uk" },
          { title: "Australia (au)", value: "au" },
          { title: "Netherlands (nl)", value: "nl" },
        ],
      },
      initialValue: "global",
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Short Description", type: "text" }),
    defineField({ name: "challenges", title: "Key Challenges", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "solutions", title: "RISE360 Solutions", type: "array", of: [{ type: "string" }] }),
  ],
});

export const postSchema = defineType({
  name: "post",
  title: "Blog & Insights",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "publishedAt", title: "Publish Date", type: "datetime" }),
    defineField({ name: "readTime", title: "Read Time (e.g. '8 min read')", type: "string" }),
    defineField({ name: "tag", title: "Category / Tag Label", type: "string" }),
    defineField({
      name: "domain",
      title: "Knowledge Domain",
      type: "string",
      options: {
        list: [
          { title: "Market Expansion Domain", value: "market-expansion" },
          { title: "Tax & Compliance Domain", value: "tax-compliance" },
          { title: "M&A Advisory Domain", value: "ma-advisory" },
          { title: "FinTech & Operations Domain", value: "fintech-ops" },
          { title: "Transfer Pricing Domain", value: "transfer-pricing" },
        ],
      },
      initialValue: "market-expansion",
    }),
    defineField({
      name: "countryCode",
      title: "Target Country / Region",
      type: "string",
      options: {
        list: [
          { title: "Global (All Regions)", value: "global" },
          { title: "United States (us)", value: "us" },
          { title: "Canada (ca)", value: "ca" },
          { title: "United Kingdom (uk)", value: "uk" },
          { title: "Australia (au)", value: "au" },
          { title: "Netherlands (nl)", value: "nl" },
        ],
      },
      initialValue: "global",
    }),
  ],
});

export const schemaTypes = [countrySchema, serviceSchema, industrySchema, postSchema];
