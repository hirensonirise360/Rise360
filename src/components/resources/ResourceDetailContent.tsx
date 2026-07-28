import Link from "next/link";
import { ArrowLeft, Clock, Tag, Globe } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { CountryProfile } from "@/config/countryConfig";

interface ResourceDetailContentProps {
  countryConfig: CountryProfile;
  post: {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    tag: string;
    author: { name: string; title: string };
  };
}

export function ResourceDetailContent({ countryConfig, post }: ResourceDetailContentProps) {
  const countryPrefix = countryConfig.code !== "global" ? `/${countryConfig.code}` : "";

  return (
    <>
      <article className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link & breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link
              href={`${countryPrefix}/resources`}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0066FF] font-medium transition-colors"
            >
              <ArrowLeft size={16} /> Back to Resources
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500 font-normal truncate max-w-xs">{post.title}</span>
          </div>

          {/* Article Header */}
          <div className="space-y-6 pb-10 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100/80 text-[#0052CC] rounded-full text-xs font-bold">
                <Tag size={12} />
                {post.tag}
              </span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Clock size={13} />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-full">
                <Globe size={12} /> {countryConfig.flag} {countryConfig.name} Edition
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#012269] leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-600 text-xl leading-relaxed font-normal">{post.excerpt}</p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0052CC] to-[#4DA6FF] text-white flex items-center justify-center font-bold text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{post.author.name}</p>
                  <p className="text-xs text-slate-500">{post.author.title}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-medium">{post.date}</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="py-10 space-y-6 text-slate-800 leading-relaxed text-base lg:text-lg font-normal whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
