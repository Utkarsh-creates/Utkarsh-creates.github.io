import React from "react";
import Link from "next/link";
import { blogRegistry } from "@/content/blog/registry";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogRegistry.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogRegistry.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-[#09090b] text-[#e5e1e4] min-h-screen font-body-md flex items-center justify-center pt-16">
        {/* FALLBACK ERROR STATE */}
        <div className="text-center font-mono-sm text-xs border border-red-500/40 bg-red-500/10 p-8">
          [INVALID_LOG_ENTRY] {"//"} ERROR_404
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#09090b] text-[#e5e1e4] min-h-screen font-body-md relative overflow-x-hidden pt-16">
      {/* GLOBAL CANVA GRID OVERLAY */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* CENTER VIEWPORT LAYOUT */}
      <div className="max-w-3xl mx-auto border-x border-[#27272a]/40 bg-[#09090b] relative z-10 min-h-screen flex flex-col justify-between p-8 md:p-12">
        <main className="flex-grow">
          {/* EDITORIAL ARTICLE HEADER */}
          <header className="mb-12">
            <div className="font-mono-sm text-[10px] text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>{post.date}</span>
              <span>{"//"}</span>
              <span>{post.readTime}</span>
              <span>{"//"}</span>
              <span className="text-primary font-bold">[{post.tag}]</span>
            </div>
            <h1 className="font-headline-lg text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="font-body-md text-sm text-[#a1a1aa] leading-relaxed italic mb-6">
              {post.summary}
            </p>
            <hr className="border-[#27272a]" />
          </header>

          {/* DYNAMIC CONTENT INGESTION LOOPS */}
          <div className="space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} className="flex flex-col gap-4">
                {section.heading && (
                  <h2 className="font-headline-lg text-lg font-bold uppercase tracking-widest text-primary border-b border-[#27272a]/40 pb-2 mb-2">
                    {section.heading}
                  </h2>
                )}

                {section.subheading && (
                  <h3 className="font-headline-lg text-sm font-semibold uppercase tracking-wider text-primary mb-1">
                    {section.subheading}
                  </h3>
                )}

                <div className="space-y-4">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="font-body-md text-sm text-[#a1a1aa] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {section.listItems && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 mb-6">
                    {section.listItems.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="font-mono-sm text-[11px] text-[#e5e1e4] bg-[#141416]/30 border border-[#27272a] px-3 py-2 flex items-center justify-start"
                      >
                        [ {item} ]
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* THE CORE PHILOSOPHY HIGHLIGHT */}
          {post.philosophyQuote && (
            <div className="my-16">
              <blockquote className="border-l-2 border-emerald-500 pl-6 py-2">
                <span className="font-mono-sm text-[10px] text-emerald-400 block mb-2 uppercase tracking-widest">
                  CORE_DISCIPLINE {"//"} MEMORANDUM
                </span>
                <p className="font-headline-lg text-lg text-primary italic leading-relaxed">
                  &quot;{post.philosophyQuote}&quot;
                </p>
              </blockquote>
            </div>
          )}

          {/* BACKTRACK LINK */}
          <div className="mt-16 pt-8 border-t border-[#27272a]/60">
            <Link
              href="/blog"
              className="font-mono-sm text-xs text-primary hover:underline uppercase tracking-widest"
            >
              &lt;&lt; RETURN_TO_DIRECTORY
            </Link>
          </div>
        </main>

        {/* SYSTEM METRICS FOOTER */}
        <footer className="w-full border-t border-[#27272a]/60 bg-[#141416]/5 p-8 flex flex-col sm:flex-row justify-between items-start gap-4 mt-12">
          <div>
            <span className="font-mono-sm text-[11px] font-bold text-primary block mb-1">
              © 2026 SYSTEM_CORE_ARCH
            </span>
            <p className="font-mono-sm text-[9px] text-zinc-600 uppercase tracking-widest leading-relaxed">
              MANIFESTO_READER {"//"} LIVE_STREAM
            </p>
          </div>
          <div className="font-mono-sm text-[9px] text-zinc-600 uppercase tracking-widest flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span>ENCRYPTION: AES-256</span>
            <span>Uptime: 99.9%</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
