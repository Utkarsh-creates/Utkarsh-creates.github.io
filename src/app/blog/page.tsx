"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogRegistry } from "@/content/blog/registry";

export default function Blog() {
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
      <div className="max-w-5xl mx-auto border-x border-[#27272a]/40 bg-[#09090b] relative z-10 min-h-screen flex flex-col justify-between">
        <main className="flex-grow p-8 md:p-12">
          {/* HEADER VIEWPORT PANEL */}
          <section className="mb-12 border-b border-[#27272a]/60 pb-8">
            <div className="flex flex-col gap-6">
              {/* Status node */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-mono-sm text-xs tracking-widest text-[#e5e1e4] opacity-60">
                  SYSTEM_MANIFESTO // LIVE_V6
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="font-headline-lg text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-primary mb-2">
                  INDEX_VIEWFINDER
                </h1>
                <p className="font-mono-sm text-xs text-zinc-500 tracking-wider">
                  LOG_COUNT: {blogRegistry.length.toString().padStart(3, "0")} {"//"} SELECT_ENTRY
                </p>
              </div>
            </div>
          </section>

          {/* COMPACT BLOG PORTAL TRACKER GRID */}
          <section className="grid grid-cols-1 gap-6">
            {blogRegistry.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block group"
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="border border-[#27272a] bg-[#141416]/10 hover:border-[#444748] transition-colors duration-150 p-6 flex flex-col gap-3 text-left w-full cursor-pointer"
                >
                  {/* Top Row Metrics */}
                  <div className="font-mono-sm text-xs text-zinc-500 flex flex-wrap items-center gap-2 sm:gap-4">
                    <span>{article.date}</span>
                    <span>{"//"}</span>
                    <span>{article.readTime}</span>
                    <span>{"//"}</span>
                    <span className="text-primary font-bold">[{article.tag}]</span>
                  </div>

                  {/* Center Block Title & Summary */}
                  <div className="space-y-2">
                    <h2 className="font-headline-lg text-lg md:text-xl font-bold text-[#e5e1e4] group-hover:text-primary tracking-tight uppercase transition-colors duration-150">
                      {article.title}
                    </h2>
                    <p className="font-body-md text-xs text-[#a1a1aa] leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </section>
        </main>

        {/* SYSTEM METRICS FOOTER SHELL */}
        <footer className="w-full border-t border-[#27272a] bg-[#141416]/10 p-8 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <span className="font-mono-sm text-xs font-bold text-primary block mb-1">
              ©2026 INDUSTRIAL_SYNTAX
            </span>
            <p className="font-mono-sm text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
              CPU_LOAD: 12% // NET_LATENCY: 4MS
            </p>
          </div>
          <div className="font-mono-sm text-[10px] text-zinc-500 uppercase tracking-widest flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span>ENCRYPTION: AES-256-GCM</span>
            <span>NODE_STABILITY: SECURE</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
