"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  { id: "ch1", label: "01", title: "Origins" },
  { id: "ch2", label: "02", title: "Ascent" },
  { id: "ch3", label: "03", title: "Ferrari" },
  { id: "ch4", label: "04", title: "Hunt" },
  { id: "ch5", label: "05", title: "Monaco" },
];

export function ChapterNav() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      const now = window.scrollY;
      setVisible(true);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setVisible(false), 3000);

      // Determine active chapter
      CHAPTERS.forEach((ch, i) => {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) setActiveChapter(i);
        }
      });

      setLastScroll(now);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(hideTimer);
    };
  }, [lastScroll]);

  const scrollToChapter = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goNext = () => {
    const next = Math.min(activeChapter + 1, CHAPTERS.length - 1);
    scrollToChapter(CHAPTERS[next].id);
  };

  const goPrev = () => {
    const prev = Math.max(activeChapter - 1, 0);
    scrollToChapter(CHAPTERS[prev].id);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-[200] border-t border-white/[0.08]"
          style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)" }}
        >
          <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center gap-6">
            {/* Chapter label */}
            <span className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-cream/50 hidden sm:block">
              Chapter {activeChapter + 1} of 5 · {CHAPTERS[activeChapter]?.title}
            </span>

            {/* Chapter dots */}
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              {CHAPTERS.map((ch, i) => (
                <button
                  key={ch.id}
                  onClick={() => scrollToChapter(ch.id)}
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-150",
                    activeChapter === i
                      ? "bg-red text-white"
                      : "border border-cream/25 text-cream/30 hover:border-red hover:text-red"
                  )}
                  aria-label={`Go to Chapter ${ch.label}: ${ch.title}`}
                >
                  {ch.label}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2 ml-auto">
              <button
                onClick={goPrev}
                disabled={activeChapter === 0}
                className="w-8 h-8 border border-white/[0.1] rounded-sm flex items-center justify-center text-cream/50 hover:border-red hover:text-red disabled:opacity-30 transition-all"
                aria-label="Previous chapter"
              >
                ←
              </button>
              <button
                onClick={goNext}
                disabled={activeChapter === CHAPTERS.length - 1}
                className="w-8 h-8 border border-white/[0.1] rounded-sm flex items-center justify-center text-cream/50 hover:border-red hover:text-red disabled:opacity-30 transition-all"
                aria-label="Next chapter"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
