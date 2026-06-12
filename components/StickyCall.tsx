"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneIcon } from "./Navbar";

export default function StickyCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="tel:0406409409"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="red-glow fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-3 rounded-md bg-tw-red py-4 font-display tracking-wider text-white shadow-2xl sm:hidden"
          aria-label="Call Tyre Warriors now on 0406 409 409"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="pulse-ring absolute h-full w-full rounded-full bg-white" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <PhoneIcon className="h-5 w-5" />
          EMERGENCY — CALL NOW
        </motion.a>
      )}
    </AnimatePresence>
  );
}
