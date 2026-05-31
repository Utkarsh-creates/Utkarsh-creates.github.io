"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageAnimate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        exit={{ opacity: 0, filter: "blur(4px)", y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // Custom elite ease-out expo curve
        className="pt-20" // Prevents content from clipping under fixed navbar
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}