"use client";
import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/content/profile";

export default function ExperienceTimeline() {
  return (
    <section className="border-t border-[#444748] bg-[#131315] py-24 px-6 md:px-[64px]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 border-b border-[#444748] pb-4">
          <div>
            <span className="font-mono-sm text-xs uppercase tracking-widest text-[#e5e1e4] opacity-50 scan-label">
              REGISTRY // DEPLOYMENT_HISTORY
            </span>
            <h2 className="font-headline-lg text-xl font-bold uppercase tracking-wider text-primary mt-1">
              Professional Experience
            </h2>
          </div>
          <span className="font-mono-sm text-[10px] text-on-surface-variant tracking-widest">
            LOG_IDX: [03_UNITS]
          </span>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-[#444748] ml-2 pl-6 space-y-12">
          {profileData.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative group animate-on-scroll"
            >
              {/* Timeline Indicator Dot (Square 0px Radius) */}
              <span className="absolute -left-[29px] top-1.5 w-2 h-2 bg-[#1c1b1d] border border-[#444748] group-hover:bg-primary group-hover:border-primary/50 transition-colors duration-300" style={{ borderRadius: 0 }} />
              
              {/* Entry Metadata Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-3">
                <div>
                  <h3 className="font-headline-lg text-base font-bold text-primary uppercase tracking-wide">
                    {exp.role}
                  </h3>
                  <div className="font-mono-sm text-xs text-on-surface-variant tracking-wide mt-0.5">
                    {exp.company} <span className="text-on-surface-variant/40">{"//"}</span> {exp.location}
                  </div>
                </div>
                <span className="font-mono-sm text-[11px] text-on-surface-variant bg-[#0e0e10] border border-[#444748] px-2 py-0.5 tracking-wider w-fit" style={{ borderRadius: 0 }}>
                  {exp.timeline}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mt-3 pl-4 list-disc text-on-surface-variant text-xs font-light leading-relaxed marker:text-zinc-600 group-hover:marker:text-primary transition-colors">
                {exp.details.map((bullet, bIdx) => (
                  <li key={bIdx} className="tracking-wide">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}