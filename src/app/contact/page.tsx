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
                      className="border border-[#27272a] group-hover:border-primary/30 p-2.5 bg-[#09090b] text-primary flex items-center justify-center"
                      style={{ borderRadius: 0 }}
                    >
                      {social.code === "GH" && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                        </svg>
                      )}
                      {social.code === "LN" && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )}
                      {social.code === "IG" && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                      )}
                      {social.code === "MAIL" && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      )}
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
