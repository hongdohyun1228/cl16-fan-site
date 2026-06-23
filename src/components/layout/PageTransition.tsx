"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function PageTransition() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((k) => k + 1);
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        key={key}
        className="fixed inset-0 z-[900] bg-red flex items-center justify-center pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: ["0%", "0%", "100%"] }}
        transition={{
          duration: 0.65,
          times: [0, 0.5, 1],
          ease: [0.4, 0, 0.6, 1],
        }}
      >
        <motion.span
          className="font-display font-black text-[56px] tracking-[0.06em] text-white uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.65, times: [0, 0.3, 0.7, 1] }}
        >
          CL16
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
}
