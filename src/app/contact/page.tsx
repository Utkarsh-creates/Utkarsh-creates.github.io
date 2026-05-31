"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "@/content/contact";

function ContactForm({ formspreeEndpoint }: { formspreeEndpoint: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setError(null);
      } else {
        setError("TRANSMISSION_FAILED: Node refused parameters.");
      }
    } catch {
      setError("TRANSMISSION_ERROR: Network latency timeout.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-12 bg-[#141416]/50 border border-emerald-500/20 text-center space-y-4 font-mono-sm text-xs"
        style={{ borderRadius: 0 }}
      >
        <span className="material-symbols-outlined text-4xl text-emerald-400 select-none">
          verified
        </span>
        <h3 className="text-emerald-400 font-bold tracking-widest uppercase">
          [TRANSMISSION_SUCCESS]
        </h3>
        <p className="text-on-surface-variant font-light max-w-sm mx-auto leading-relaxed">
          DATA PACKET SUCCESSFULLY ROUTED AND CATALOGED IN THE SECURITY CHANNEL. INBOX ROUTING ACTIVE.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-mono-sm text-xs">
      <input type="hidden" name="_subject" value="New submission from your portfolio system" />

      {error && (
        <div className="p-4 bg-red-950/20 border border-red-500/30 text-red-400 font-bold uppercase tracking-wider">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block tracking-widest text-on-surface-variant/40 mb-2 uppercase text-[10px]">
            IDENT_NAME
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-[#1c1b1d]/50 border border-[#27272a] p-3 text-primary focus:outline-none focus:border-primary/50 transition-colors focus:bg-[#141416]"
            style={{ borderRadius: 0 }}
          />
        </div>
        <div>
          <label className="block tracking-widest text-on-surface-variant/40 mb-2 uppercase text-[10px]">
            COMMS_EMAIL
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-[#1c1b1d]/50 border border-[#27272a] p-3 text-primary focus:outline-none focus:border-primary/50 transition-colors focus:bg-[#141416]"
            style={{ borderRadius: 0 }}
          />
        </div>
      </div>
      <div>
        <label className="block tracking-widest text-on-surface-variant/40 mb-2 uppercase text-[10px]">
          TRANSMISSION_DATA_PAYLOAD
        </label>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full bg-[#1c1b1d]/50 border border-[#27272a] p-3 text-primary focus:outline-none focus:border-primary/50 transition-colors leading-relaxed font-body-md text-xs focus:bg-[#141416]"
          style={{ borderRadius: 0 }}
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="w-full bg-[#e5e1e4] text-[#131315] hover:bg-white font-bold py-3 transition-mechanical tracking-widest uppercase cursor-pointer text-xs"
        style={{ borderRadius: 0 }}
      >
        SUBMIT_PACKET_SIGNAL
      </motion.button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#09090b] text-[#e5e1e4] min-h-screen font-body-md relative overflow-x-hidden">
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
      <div className="max-w-7xl mx-auto border-x border-[#27272a]/40 bg-[#09090b] relative z-10 min-h-screen flex flex-col justify-between pt-16">
        <main className="flex-grow">
          {/* HEADER VIEWPORT PANEL */}
          <section className="border-b border-[#27272a] bg-[#141416]/10">
            <div className="p-12">
              <div className="flex items-center gap-3 mb-6">
                {/* Pulsing emerald status indicator dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono-sm text-xs tracking-widest text-[#e5e1e4] opacity-60">
                  {contactData.systemNode}
                </span>
              </div>
              <h1 className="font-headline-lg text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-primary mb-6">
                {contactData.title}
              </h1>
              <p className="font-body-md text-sm text-on-surface-variant max-w-2xl leading-relaxed uppercase">
                {contactData.description}
              </p>
            </div>
          </section>

          {/* CONTENT GRID */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-[#27272a]">
            {/* LEFT PANEL: SOCIAL CHANNELS */}
            <div className="md:col-span-5 border-r border-[#27272a] p-12 bg-[#141416]/20 flex flex-col justify-between gap-12">
              <div className="space-y-6">
                <h3 className="font-headline-lg text-lg font-bold uppercase tracking-wider text-primary">
                  Verify Credentials
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed uppercase">
                  Establish connection via authenticated cryptographic channels or explore active project updates.
                </p>
              </div>

              {/* Dynamic Social Anchors mapping contactData.socials */}
              <div className="space-y-4">
                {contactData.socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center space-x-4 text-xs font-mono-sm text-on-surface-variant hover:text-primary transition-colors group border border-[#27272a] hover:border-primary/50 p-4 bg-[#141416]/50 cursor-pointer"
                    style={{ borderRadius: 0 }}
                  >
                    <span
                      className="border border-[#27272a] group-hover:border-primary/30 px-2 py-1 bg-[#09090b] font-bold text-primary text-[10px]"
                      style={{ borderRadius: 0 }}
                    >
                      {social.code}
                    </span>
                    <span className="tracking-wider uppercase font-semibold">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL: CONTACT FORM */}
            <div className="md:col-span-7 p-12 bg-[#141416]/10">
              <ContactForm formspreeEndpoint={contactData.formspreeEndpoint} />
            </div>
          </section>
        </main>

        {/* SYSTEM METRICS FOOTER SHELL */}
        <footer className="w-full border-t border-[#27272a] bg-[#141416]/10 p-12 flex flex-col sm:flex-row justify-between items-start gap-6">
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
