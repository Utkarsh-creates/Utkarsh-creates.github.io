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
        <Link href="/" className={`font-mono text-xs uppercase tracking-widest transition ${logoClass}`}>
          STUDIO_V01
        </Link>

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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}