"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BlogPost } from "@/content/blog/registry";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const searchParams = useSearchParams();
  const isAudioActive = searchParams.get("audio") === "true";
  const [audioStatus, setAudioStatus] = useState("AUDIO_STREAM_INITIALIZING // ELEVENLABS_NODE");
  const [audioError, setAudioError] = useState(false);

  // ElevenLabs API connection hook window
  useEffect(() => {
    if (isAudioActive) {
      console.log("ElevenLabs Node Initialized. Ready for API endpoint integration.");
      setAudioStatus("AUDIO_STREAM_INITIALIZING // ELEVENLABS_NODE");
      // FUTURE ElevenLabs direct integration window:
      // const fetchAudio = async () => {
      //   setAudioStatus("AUDIO_STREAM_CONNECTING...");
      //   try {
      //     // API Call to ElevenLabs here
      //     setAudioStatus("AUDIO_STREAM_PLAYING // ELEVENLABS_NODE");
      //   } catch (e) {
      //     setAudioStatus("AUDIO_STREAM_ERROR");
      //   }
      // };
      // fetchAudio();
    }
  }, [isAudioActive]);

  return (
    <div className="max-w-3xl mx-auto border-x border-[#27272a]/40 bg-[#09090b] relative z-10 min-h-screen flex flex-col justify-between p-8 md:p-12">
      <main className="flex-grow">
        {/* Sleek audio control panel */}
        {isAudioActive && (
          <div className="mb-8 p-4 border border-emerald-500/30 bg-[#141416]/50 flex flex-col gap-3 relative overflow-hidden select-none">
            <div className="flex items-center justify-between w-full font-mono-sm text-[10px] text-emerald-400 tracking-wider font-bold">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>[{audioStatus}]</span>
              </div>
              <div className="text-[#a1a1aa] border border-[#27272a] px-2 py-0.5 text-[9px]">
                STREAMING_ACTIVE
              </div>
            </div>

            {audioError ? (
              <div className="font-mono-sm text-[10px] text-zinc-500 bg-[#141416]/20 border border-[#27272a] px-3 py-2 text-center uppercase tracking-wider">
                [AUDIO_SOURCE_STREAM_OFFLINE // RUN_LOCAL_COMPILATION_SCRIPT]
              </div>
            ) : (
              <audio
                src={`/audio/${post.slug}.mp3`}
                controls
                onError={() => setAudioError(true)}
                className="w-full h-8 outline-none border border-[#27272a] bg-[#141416]/50"
              />
            )}
          </div>
        )}

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
  );
}
