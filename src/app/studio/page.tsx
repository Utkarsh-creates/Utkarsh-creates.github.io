"use client";

import { motion } from "framer-motion";
import { artData } from "@/content/art";

export default function Studio() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-body-md overflow-x-hidden relative select-none">
      <main className="max-w-[1440px] mx-auto px-12 py-24">
        {/* Header Section */}
        <header className="mb-20 max-w-2xl text-left">
          <span className="font-mono-sm text-xs text-[#5e5e5e] uppercase tracking-[0.2em] mb-4 block">
            Archival Gallery // Studio V01
          </span>
          <h2 className="font-headline-lg text-3xl lg:text-5xl mb-6 font-light leading-tight">
            Minimalist visualization of procedural structures and industrial layouts.
          </h2>
          <p className="font-body-lg text-base text-[#5e5e5e] font-light">
            A digital laboratory displaying generative concepts, 3D modeling studies, and
            mechanics mapping. Drag your cursor over the entries to scan metadata files.
          </p>
        </header>

        {/* BORDERLESS MASONRY GALLERY */}
        <section className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:_balance] w-full">
          {artData.map((piece) => (
            <motion.div
              key={piece.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="break-inside-avoid relative overflow-hidden group select-none cursor-crosshair border border-[#c4c7c8] bg-[#eeeeee] p-1"
            >
              <div className="relative overflow-hidden w-full h-full">
                <img
                  src={piece.imagePath}
                  alt={piece.title}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Dynamic Opacity metadata drawer */}
                <div className="absolute inset-0 bg-[#f9f9f9]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-8 backdrop-blur-sm pointer-events-none group-hover:pointer-events-auto">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out text-left">
                    <span className="font-mono-sm text-[10px] text-[#5e5e5e] uppercase tracking-[0.2em] mb-2 block">
                      {piece.medium}
                    </span>
                    <h3 className="font-headline-lg text-lg mb-4 text-[#1a1c1c] font-medium">
                      {piece.title}
                    </h3>
                    <p className="font-body-md text-xs text-[#444748] leading-relaxed italic">
                      {piece.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#eeeeee] mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h1 className="font-headline-lg text-sm text-[#1a1c1c] mb-2 font-medium">
              THE GALERIE
            </h1>
            <p className="font-mono-sm text-xs tracking-[0.2em] uppercase text-[#5e5e5e]">
              © 2026 THE GALERIE. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-12">
            <a
              className="font-mono-sm text-xs tracking-[0.2em] uppercase text-[#5e5e5e] hover:text-[#000000] transition-colors duration-500"
              href="#"
            >
              Instagram
            </a>
            <a
              className="font-mono-sm text-xs tracking-[0.2em] uppercase text-[#5e5e5e] hover:text-[#000000] transition-colors duration-500"
              href="#"
            >
              Journal
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
