"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Works", path: "/works" },
  { name: "Blog", path: "/blog" },
  { name: "Studio", path: "/studio" },
  { name: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Premium spring animation configuration
  const springTransition = { type: "spring" as const, stiffness: 380, damping: 30 };

  // Path-aware theme mapping (e.g. /studio is light-mode, others are dark-mode)
  const isLightPage = pathname === "/studio";

  const headerClass = isLightPage
    ? "bg-[#f9f9f9]/80 border-b border-[#c4c7c7]/50 text-[#1a1c1c]"
    : "bg-[#131315]/80 border-b border-[#444748]/50 text-[#e5e1e4]";

  const logoClass = isLightPage
    ? "text-zinc-600 hover:text-black"
    : "text-zinc-400 hover:text-zinc-200";

  const linkClass = (isActive: boolean) => {
    if (isLightPage) {
      return isActive
        ? "text-black font-semibold"
        : "text-zinc-600 hover:text-black";
    } else {
      return isActive
        ? "text-white font-semibold"
        : "text-zinc-400 hover:text-zinc-100";
    }
  };

  const activeUnderlineClass = isLightPage ? "bg-black" : "bg-white";

  const drawerClass = isLightPage
    ? "bg-[#f9f9f9] border-b border-[#c4c7c7]"
    : "bg-[#131315] border-b border-[#444748]";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md px-6 py-4 transition-colors duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className={`font-mono text-xs uppercase tracking-widest transition ${logoClass}`}>
            STUDIO_V01
          </Link>
          <div className={`hidden sm:block h-3.5 w-px ${isLightPage ? "bg-zinc-300" : "bg-[#444748]"}`}></div>
          <a
            href="mailto:utkarshmishra72005@gmail.com"
            className={`hidden sm:flex items-center space-x-2 font-mono text-[10px] lowercase transition-colors ${
              isLightPage ? "text-zinc-500 hover:text-black" : "text-zinc-400 hover:text-white"
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>utkarshmishra72005@gmail.com</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-mono text-xs uppercase tracking-wider py-1 transition ${linkClass(isActive)}`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className={`absolute bottom-0 left-0 w-full h-[1px] ${activeUnderlineClass}`}
                    transition={springTransition}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className={`w-5 h-[1.5px] block ${isLightPage ? "bg-black" : "bg-white"}`}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`w-5 h-[1.5px] block ${isLightPage ? "bg-black" : "bg-white"}`}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className={`w-5 h-[1.5px] block ${isLightPage ? "bg-black" : "bg-white"}`}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile Drawer Slide-out */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`absolute top-full left-0 w-full px-6 py-8 flex flex-col space-y-6 md:hidden ${drawerClass}`}
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-sm uppercase tracking-wider ${linkClass(pathname === link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className={`pt-6 border-t ${isLightPage ? "border-zinc-200" : "border-[#444748]/50"} flex flex-col space-y-4`}>
              {/* Row for Icon Buttons */}
              <div className="flex justify-around items-center">
                <a
                  href="https://github.com/Utkarsh-creates"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`p-2.5 border flex items-center justify-center ${
                    isLightPage ? "border-zinc-300 text-zinc-600 hover:text-black" : "border-[#444748] text-zinc-400 hover:text-white"
                  }`}
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/utkarsh-mishra-creates"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`p-2.5 border flex items-center justify-center ${
                    isLightPage ? "border-zinc-300 text-zinc-600 hover:text-black" : "border-[#444748] text-zinc-400 hover:text-white"
                  }`}
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/theutkarsh_mishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`p-2.5 border flex items-center justify-center ${
                    isLightPage ? "border-zinc-300 text-zinc-600 hover:text-black" : "border-[#444748] text-zinc-400 hover:text-white"
                  }`}
                  title="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>

              {/* Full Width Email Bar with address written out */}
              <a
                href="mailto:utkarshmishra72005@gmail.com"
                onClick={() => setIsOpen(false)}
                className={`py-2.5 px-4 border flex items-center justify-center space-x-3 w-full ${
                  isLightPage ? "border-zinc-300 text-zinc-600 hover:text-black" : "border-[#444748] text-zinc-400 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="font-mono text-xs lowercase">utkarshmishra72005@gmail.com</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}