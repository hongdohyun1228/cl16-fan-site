"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/data";

export function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[300] h-[64px] flex items-center justify-between px-8 transition-all duration-300",
          scrolled
            ? "bg-carbon/92 backdrop-blur-md border-b border-white/[0.08]"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-black text-[20px] tracking-[0.06em] uppercase text-cream hover:opacity-90 transition-opacity"
        >
          CL<span className="text-red">16</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "red-line-sweep relative font-body text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-150",
                pathname === link.href
                  ? "text-cream after:scale-x-100"
                  : "text-cream/70 hover:text-cream"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-[2px] left-0 w-full h-[1.5px] bg-red block" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/community"
            className="hidden sm:block font-body text-[10px] font-bold tracking-[0.1em] uppercase bg-red text-white px-[18px] py-[8px] rounded-sm hover:bg-red-light transition-colors duration-150"
          >
            Join the Tifosi
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-cream/70 hover:text-cream transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[500] bg-carbon/96 backdrop-blur-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-cream/70 hover:text-cream transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display font-bold text-[32px] uppercase tracking-[0.04em] transition-colors",
                      pathname === link.href ? "text-red" : "text-cream hover:text-red"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  href="/community"
                  className="font-body text-[12px] font-bold tracking-[0.12em] uppercase bg-red text-white px-8 py-4 rounded-sm"
                >
                  Join the Tifosi
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
