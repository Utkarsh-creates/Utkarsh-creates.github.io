"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/content/projects";

function RadarChart({ metrics }: { metrics: { subject: string; value: number }[] }) {
  const cx = 150;
  const cy = 150;
  const r = 90; // max radius
  const N = metrics.length;

  // Generate concentric background polygons (rings)
  const levels = [0.25, 0.5, 0.75, 1];
  const backgroundPolygons = levels.map((level) => {
    const points = [];
    for (let i = 0; i < N; i++) {
      const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
      const x = cx + r * level * Math.cos(angle);
      const y = cy + r * level * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  });

  // Generate axis lines
  const axes = [];
  for (let i = 0; i < N; i++) {
    const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    axes.push({ x, y });
  }

  // Generate data polygon
  const dataPoints = metrics.map((m, i) => {
    const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
    const valR = r * (m.value / 100);
    const x = cx + valR * Math.cos(angle);
    const y = cy + valR * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="w-full flex flex-col justify-center items-center py-6 bg-[#131315]/40 border border-[#444748] relative overflow-hidden">
      {/* Grid background inside chart for design flavor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grid-pattern"></div>
      <span className="absolute top-3 left-4 font-mono-sm text-[10px] text-on-surface-variant/50 tracking-wider">
        SYS_RADAR_MAP_v0.2
      </span>
      <svg width="340" height="340" className="overflow-visible select-none z-10">
        {/* Concentric rings */}
        {backgroundPolygons.map((points, idx) => (
          <polygon
            key={idx}
            points={points}
            fill="none"
            stroke="#444748"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Level indicators */}
        {levels.map((level, idx) => {
          const y = cy - r * level;
          return (
            <text
              key={idx}
              x={cx + 5}
              y={y + 4}
              className="font-mono-sm text-[9px] fill-on-surface-variant/40"
            >
              {level * 100}%
            </text>
          );
        })}

        {/* Axis lines */}
        {axes.map((axis, idx) => (
          <line
            key={idx}
            x1={cx}
            y1={cy}
            x2={axis.x}
            y2={axis.y}
            stroke="#444748"
            strokeWidth="1"
          />
        ))}

        {/* Data polygon */}
        <polygon
          points={dataPoints}
          fill="rgba(255, 255, 255, 0.12)"
          stroke="#ffffff"
          strokeWidth="1.5"
          className="transition-all duration-300 ease-out"
        />

        {/* Data points */}
        {metrics.map((m, i) => {
          const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
          const valR = r * (m.value / 100);
          const x = cx + valR * Math.cos(angle);
          const y = cy + valR * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill="#ffffff"
              className="transition-all duration-300 ease-out"
            />
          );
        })}

        {/* Subject labels */}
        {metrics.map((m, i) => {
          const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
          const labelR = r + 24;
          const x = cx + labelR * Math.cos(angle);
          const y = cy + labelR * Math.sin(angle);

          let textAnchor: "inherit" | "end" | "middle" | "start" = "middle";
          const cos = Math.cos(angle);
          if (cos > 0.1) textAnchor = "start";
          else if (cos < -0.1) textAnchor = "end";

          return (
            <text
              key={i}
              x={x}
              y={y + 4}
              textAnchor={textAnchor}
              className="font-mono-sm text-[9px] fill-on-surface-variant font-medium uppercase tracking-widest"
            >
              {m.subject}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function Works() {
  const [activeProject, setActiveProject] = useState<Project>(projectsData[0]);
  const [viewMode, setViewMode] = useState<"image" | "video">("image");

  return (
    <div className="bg-[#131315] text-[#e5e1e4] min-h-screen font-body-md relative overflow-x-hidden pt-16 animate-fade-in">
      {/* BACKGROUND GRID OVERLAY with 0.02 opacity */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.02,
        }}
      ></div>
      <div className="bg-noise z-0"></div>

      <main className="min-h-screen flex flex-col md:flex-row relative z-10 border-t border-[#444748]">
        {/* LEFT PANEL: THE INVENTORY INDEX (30%) */}
        <aside className="w-full md:w-[30%] border-r border-[#444748] bg-[#131315]/80 backdrop-blur-sm flex flex-col">
          <div className="p-6 border-b border-[#444748] flex flex-col gap-1">
            <span className="font-mono-sm text-[10px] text-on-surface-variant/40 tracking-wider">
              SYSTEMS_DIRECTORY
            </span>
            <h2 className="font-headline-lg text-xl font-bold uppercase tracking-tight text-primary">
              INVENTORY INDEX
            </h2>
          </div>
          <div className="flex-grow overflow-y-auto max-h-[300px] md:max-h-[calc(100vh-140px)] divide-y divide-[#444748]/50">
            {projectsData.map((project) => {
              const isActive = project.id === activeProject.id;
              return (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveProject(project);
                    setViewMode("image");
                  }}
                  className={`w-full text-left p-6 transition-all duration-150 flex flex-col gap-2 ${
                    isActive
                      ? "bg-[#2a2a2c] border-l-2 border-primary"
                      : "hover:bg-[#1c1b1d] border-l-2 border-transparent"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="font-mono-sm text-[10px] text-primary tracking-widest font-semibold">
                      {project.id}
                    </span>
                    <span className="font-mono-sm text-[10px] text-on-surface-variant/60">
                      {project.timeline.split(" - ")[0]}
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-base font-bold text-[#e5e1e4] group-hover:text-primary tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono-sm text-[11px] text-on-surface-variant/80 line-clamp-1">
                    {project.field}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT PANEL: SYSTEM TELEMETRY CONTROL PANEL (70%) */}
        <section className="w-full md:w-[70%] bg-[#0e0e10]/90 backdrop-blur-sm flex flex-col">
          {/* Header Metadata */}
          <div className="p-6 border-b border-[#444748] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#131315]">
            <div className="flex flex-col gap-1">
              <span className="font-mono-sm text-[10px] text-on-surface-variant/40 tracking-wider">
                ACTIVE_STREAM
              </span>
              <h2 className="font-mono-sm text-xs font-bold text-primary tracking-widest uppercase">
                {activeProject.id} {"//"} {activeProject.title}
              </h2>
            </div>
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 border border-primary text-primary font-mono-sm text-xs hover:bg-primary hover:text-background transition-colors duration-150 uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>ACCESS_REPOSITORY</span>
              <span className="material-symbols-outlined text-xs">north_east</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-[#444748]">
            {/* Visual Telemetry Stream (Grid Left, 7 cols) */}
            <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#444748] flex flex-col">
              {/* Media Viewport */}
              <div className="relative aspect-video bg-[#18181b] overflow-hidden">
                {viewMode === "image" ? (
                  /* Image Asset Viewport */
                  <div className="w-full h-full relative group">
                    <img
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100"
                      src={activeProject.imagePath}
                      alt={activeProject.title}
                    />
                    <div className="absolute bottom-3 left-4 bg-[#131315]/80 border border-[#444748] px-3 py-1 font-mono-sm text-[9px] text-on-surface-variant tracking-wider pointer-events-none z-10">
                      ASSET_FEED: {activeProject.imagePath.split("/").pop()}
                    </div>
                  </div>
                ) : (
                  /* Video Feed or Disabled Fallback */
                  <div className="w-full h-full relative">
                    {activeProject.linkedinEmbedUrl ? (
                      <iframe
                        src={activeProject.linkedinEmbedUrl}
                        title={`${activeProject.title} Video Feed`}
                        className="w-full h-full border-none"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex flex-col justify-center items-center p-8 text-center border-2 border-dashed border-[#444748]/30 bg-[#131315]/40 select-none">
                        <span className="material-symbols-outlined text-[#ffbe3b]/60 text-3xl mb-2">
                          videocam_off
                        </span>
                        <span className="font-mono-sm text-xs text-[#ffbe3b]/80 font-bold tracking-widest uppercase">
                          [VIDEO_STREAM_DISABLED]
                        </span>
                        <span className="font-mono-sm text-[10px] text-on-surface-variant/40 mt-1 max-w-[240px]">
                          No dynamic video telemetry registered for this inventory index.
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-4 bg-[#131315]/80 border border-[#444748] px-3 py-1 font-mono-sm text-[9px] text-on-surface-variant tracking-wider pointer-events-none z-10">
                      VIDEO_STREAM
                    </div>
                  </div>
                )}

                {/* Telemetry Overlays */}
                <div className="absolute top-3 left-4 bg-[#131315]/80 border border-[#444748] px-3 py-1 font-mono-sm text-[9px] text-on-surface-variant tracking-wider pointer-events-none z-20">
                  MONITOR_FEED // {viewMode.toUpperCase()}
                </div>

                {/* Toggle Controls */}
                <div className="absolute top-3 right-4 bg-[#131315]/95 border border-[#444748] p-0.5 flex gap-0.5 z-20">
                  <button
                    onClick={() => setViewMode("image")}
                    className={`px-2 py-0.5 font-mono-sm text-[9px] transition-colors border ${
                      viewMode === "image"
                        ? "bg-primary text-background border-primary"
                        : "border-transparent text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    IMAGE
                  </button>
                  <button
                    onClick={() => setViewMode("video")}
                    className={`px-2 py-0.5 font-mono-sm text-[9px] transition-colors border ${
                      viewMode === "video"
                        ? "bg-primary text-background border-primary"
                        : "border-transparent text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    VIDEO
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics Telemetry (Grid Right, 5 cols) */}
            <div className="lg:col-span-5 bg-[#131315]/30 flex flex-col justify-center items-center p-6 gap-4">
              <span className="font-mono-sm text-[10px] text-on-surface-variant/50 self-start uppercase tracking-widest mb-2">
                SYSTEMS_PERFORMANCE_METRIC
              </span>
              <RadarChart metrics={activeProject.radarMetrics} />
            </div>
          </div>

          {/* Description & Technical Specs */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#131315]/20">
            {/* Description (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h3 className="font-label-caps text-xs text-on-surface-variant/50 tracking-wider">
                PROJECT SUMMARY
              </h3>
              <p className="font-body-md text-sm text-on-surface leading-relaxed max-w-3xl">
                {activeProject.summary}
              </p>
              <div className="flex gap-8 mt-4 font-mono-sm text-xs text-on-surface-variant/60 border-t border-[#444748]/30 pt-4">
                <div>
                  <span className="block text-[10px] opacity-40 uppercase">Timeline</span>
                  <span className="text-primary font-medium">{activeProject.timeline}</span>
                </div>
                <div>
                  <span className="block text-[10px] opacity-40 uppercase">Domain</span>
                  <span className="text-primary font-medium">{activeProject.field}</span>
                </div>
              </div>
            </div>

            {/* Specifications Matrix (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="font-label-caps text-xs text-on-surface-variant/50 tracking-wider">
                STRUCTURAL SPECIFICATIONS
              </h3>
              <div className="border border-[#444748] divide-y divide-[#444748] bg-[#131315]">
                {activeProject.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between p-3 text-xs font-mono-sm">
                    <span className="text-on-surface-variant/70 uppercase">{spec.label}</span>
                    <span className="text-primary font-medium text-right max-w-[60%] truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#131315] border-t border-[#444748] flex justify-between items-center w-full px-margin-desktop py-4 relative z-10">
        <div className="font-mono-sm text-[10px] text-primary">
          © 2026 SYSTEM_ARCH_OS // ALL RIGHTS RESERVED
        </div>
        <div className="hidden md:flex gap-6 font-mono-sm text-[10px] text-on-surface-variant/60">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Status: Operational
          </span>
          <span>Core: v1.0.5</span>
        </div>
      </footer>
    </div>
  );
}
