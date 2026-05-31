"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/content/skills";

export default function SkillsMatrix() {
  return (
    <section className="border-t border-[#444748] bg-[#131315] py-24 px-6 md:px-[64px]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 border-b border-[#444748] pb-4">
          <div>
            <span className="font-mono-sm text-xs uppercase tracking-widest text-[#e5e1e4] opacity-50 scan-label">
              SYSTEM_CAPABILITIES_LOG
            </span>
            <h2 className="font-headline-lg text-xl font-bold uppercase tracking-wider text-primary mt-1">
              Technical Skill Matrix
            </h2>
          </div>
          <span className="font-mono-sm text-[10px] text-on-surface-variant tracking-widest hidden sm:inline">
            CORE_ENGINEERING_V6
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat) => (
            <motion.div
              key={cat.categoryName}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
              className="bg-[#1c1b1d]/40 border border-[#444748] p-5 flex flex-col justify-between transition-colors hover:border-primary/50 cursor-default"
            >
              <div>
                {/* Category Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-headline-lg text-xs font-bold uppercase tracking-wider text-primary">
                    {cat.categoryName}
                  </h3>
                  <span className="font-mono-sm text-[9px] text-on-surface-variant bg-[#0e0e10] px-2 py-0.5 border border-[#444748]">
                    {cat.systemCode}
                  </span>
                </div>

                {/* Individual Skill Tokens */}
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary/70" />
                      <span className="font-mono-sm text-xs text-on-surface-variant tracking-wide">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}