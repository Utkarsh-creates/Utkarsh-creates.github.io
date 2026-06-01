"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/content/profile";
import SkillsMatrix from "@/components/sections/SkillsMatrix";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function Home() {
  const [timestamp, setTimestamp] = useState("UTC 00:00:00");
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic timestamp update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, "0");
      const m = String(now.getUTCMinutes()).padStart(2, "0");
      const s = String(now.getUTCSeconds()).padStart(2, "0");
      setTimestamp(`UTC ${h}:${m}:${s}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Parallax interaction handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // Move slightly in the opposite direction
    const moveX = (x - 0.5) * -15;
    const moveY = (y - 0.5) * -15;
    setParallax({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#131315] text-[#e5e1e4] min-h-screen relative font-body-md"
    >
      <div className="bg-grid"></div>
      <div className="bg-noise"></div>

      {/* BACKGROUND PROFILE IMAGE CONTAINER - ABSOLUTE WITH BOTTOM-FADING LINEAR ALPHA MASK */}
      <div
        className="absolute top-0 left-0 w-full md:w-[58.33%] h-[50vh] md:h-[85vh] pointer-events-none z-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Image
          alt="Profile Background"
          src="/images/profile_bg.png"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover object-center md:object-left filter grayscale contrast-125 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px) scale(1.05)`,
          }}
        />
      </div>

      <main className="pt-24 min-h-screen relative z-10">
        {/* HERO SECTION: ASYMMETRIC GRID */}
        <section className="grid grid-cols-1 md:grid-cols-12 w-full min-h-[819px] border-b border-[#444748]">
          {/* LEFT COLUMN: EMPTY SPACE FOR ABSOLUTE BACKGROUND IMAGE PREVIEW (60%) */}
          <div className="md:col-span-7 border-r border-[#444748] relative flex flex-col justify-end p-8 min-h-[300px] md:min-h-0">
            <div className="flex flex-col gap-1 z-20">
              <span className="font-mono-sm text-xs text-primary opacity-50 scan-label">
                IMG_SOURCE_ID: 001
              </span>
              <span className="font-mono-sm text-xs text-primary opacity-50 scan-label">
                EXP_TIME: 1/125
              </span>
            </div>
          </div>

          {/* IDENTITY METADATA (40%) */}
          <div className="md:col-span-5 p-margin-desktop flex flex-col justify-between bg-[#131315]/70 backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="font-mono-sm text-xs bg-primary text-background px-2 py-0.5 font-bold">
                  ACTIVE
                </span>
                <span className="font-mono-sm text-xs text-on-surface-variant scan-label group cursor-pointer inline-flex items-center">
                  <span className="group-hover:hidden">
                    LOC: {profileData.coordinates}
                  </span>
                  <span className="hidden group-hover:inline text-primary">
                    LOC: {profileData.location}
                  </span>
                </span>
              </div>
              <h1 className="font-headline-xl text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight uppercase tracking-tighter">
                {profileData.name.split(" ")[0]}
                <br />
                {profileData.name.split(" ")[1]}
              </h1>
              <div className="w-24 h-px bg-primary mb-12"></div>
              <div className="space-y-8 max-w-sm">
                <div>
                  <span className="font-mono-sm text-[11px] tracking-wider text-on-surface-variant block mb-2 uppercase opacity-60">
                    STATED_VERSION
                  </span>
                  <p className="font-body-md text-sm text-on-surface">
                    {profileData.tagline}
                  </p>
                </div>
                <div>
                  <span className="font-mono-sm text-[11px] tracking-wider text-on-surface-variant block mb-2 uppercase opacity-60">
                    SECTION_ID: 04-INFO
                  </span>
                  <p className="font-body-md text-sm text-on-surface">
                    Systematic approach to visual communication. Engineered for precision
                    and functional clarity.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-16">
              <div className="flex flex-col gap-1 border-t border-[#444748] pt-8">
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono-sm text-xs text-on-surface-variant uppercase">
                    Archive Index
                  </span>
                  <span className="font-mono-sm text-xs text-primary">
                    {profileData.systemVersion}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono-sm text-xs text-on-surface-variant uppercase">
                    Last Update
                  </span>
                  <span className="font-mono-sm text-xs text-primary">
                    2026.05.30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURAL GATEWAY CARDS */}
        <section className="w-full px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* WORKS CARD */}
          <Link
            className="group border border-[#444748] p-8 hover:border-primary/50 hover:bg-white/[0.02] transition-mechanical relative overflow-hidden flex flex-col h-[320px]"
            href="/works"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono-sm text-xs text-primary">01_</span>
              <span className="material-symbols-outlined text-primary opacity-20 group-hover:opacity-100 card-arrow">
                north_east
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl text-primary mb-4 uppercase tracking-tighter">
              WORKS
            </h3>
            <p className="font-mono-sm text-xs text-on-surface-variant mt-auto max-w-[240px]">
              Structural engineering projects, interface prototypes, and spatial system
              documentation.
            </p>
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary transition-all duration-500"></div>
          </Link>

          {/* BLOG CARD */}
          <Link
            className="group border border-[#444748] md:border-l-0 p-8 hover:border-primary/50 hover:bg-white/[0.02] transition-mechanical relative overflow-hidden flex flex-col h-[320px]"
            href="/blog"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono-sm text-xs text-primary">02_</span>
              <span className="material-symbols-outlined text-primary opacity-20 group-hover:opacity-100 card-arrow">
                north_east
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl text-primary mb-4 uppercase tracking-tighter">
              BLOG
            </h3>
            <p className="font-mono-sm text-xs text-on-surface-variant mt-auto max-w-[240px]">
              Technical bulletins on reductive design methodology and algorithmic
              aesthetics.
            </p>
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary transition-all duration-500"></div>
          </Link>

          {/* STUDIO CARD */}
          <Link
            className="group border border-[#444748] md:border-l-0 p-8 hover:border-primary/50 hover:bg-white/[0.02] transition-mechanical relative overflow-hidden flex flex-col h-[320px]"
            href="/studio"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono-sm text-xs text-primary">03_</span>
              <span className="material-symbols-outlined text-primary opacity-20 group-hover:opacity-100 card-arrow">
                north_east
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl text-primary mb-4 uppercase tracking-tighter">
              STUDIO
            </h3>
            <p className="font-mono-sm text-xs text-on-surface-variant mt-auto max-w-[240px]">
              Inventory of physical tools, hardware specifications, and experimental
              apparatus.
            </p>
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary transition-all duration-500"></div>
          </Link>
        </section>

        <SkillsMatrix />
        <ExperienceTimeline />

        {/* DATA DENSITY SECTION */}
        <section className="border-t border-[#444748] px-margin-desktop py-24 grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="md:col-span-4 border-r border-[#444748] p-8">
            <span className="font-label-caps text-xs text-on-surface-variant block mb-12 scan-label">
              ACTIVE_CORE_SYSTEM
            </span>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-[#444748] pb-2 group">
                <span className="font-mono-sm text-xs group-hover:text-primary transition-colors">
                  OS_KERNEL
                </span>
                <span className="font-mono-sm text-xs text-primary">{profileData.kernel}</span>
              </div>
              <div className="flex justify-between border-b border-[#444748] pb-2 group">
                <span className="font-mono-sm text-xs group-hover:text-primary transition-colors">
                  LATENCY
                </span>
                <span className="font-mono-sm text-xs text-primary">{profileData.latency}</span>
              </div>
              <div className="flex justify-between border-b border-[#444748] pb-2 group">
                <span className="font-mono-sm text-xs group-hover:text-primary transition-colors">
                  ENCRYPTION
                </span>
                <span className="font-mono-sm text-xs text-primary">{profileData.encryption}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 p-8 flex flex-col justify-center">
            <blockquote className="font-headline-lg text-2xl lg:text-3xl text-primary italic tracking-tight max-w-2xl">
              &quot;{profileData.philosophy}&quot;
            </blockquote>
            <p className="font-mono-sm text-xs text-on-surface-variant mt-8 scan-label">
              — PROTOCOL_LOG_009
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER SHELL */}
      <footer className="bg-[#131315] border-t border-[#444748] flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-8 relative z-10">
        <div className="font-mono-sm text-xs text-primary mb-4 md:mb-0">
          ©2026 ARCHIVAL_SYSTEM
        </div>
        <div className="flex gap-12 font-mono-sm text-xs text-on-secondary-container">
          <span className="hover:text-primary transition-mechanical cursor-default uppercase">
            {profileData.systemVersion}
          </span>
          <span
            className="hover:text-primary transition-mechanical cursor-default uppercase"
            id="timestamp"
          >
            {timestamp}
          </span>
        </div>
      </footer>
    </div>
  );
}
