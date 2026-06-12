"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "./Navbar";

export default function EmergencyCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "linear-gradient(135deg, #a31020 0%, #d6182a 50%, #7d0c18 100%)" }}
      aria-label="Emergency callout"
    >
      <div className="bg-tread absolute inset-0 opacity-60" aria-hidden />
      {/* hazard stripes top & bottom */}
      <div
        className="absolute inset-x-0 top-0 h-3"
        style={{
          background:
            "repeating-linear-gradient(-45deg, #0a0a0b 0 16px, #e8b941 16px 32px)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-3"
        style={{
          background:
            "repeating-linear-gradient(-45deg, #0a0a0b 0 16px, #e8b941 16px 32px)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 rounded-full bg-black/30 px-5 py-2 text-xs font-bold tracking-[0.3em] text-white"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="pulse-ring absolute h-full w-full rounded-full bg-white" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          EMERGENCY HOTLINE — 24/7
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="headline-shadow mt-8 font-display text-5xl text-white sm:text-7xl"
        >
          STRANDED?
          <br />
          WE&apos;RE READY.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 max-w-xl text-lg text-white/85"
        >
          One call. Rapid dispatch. Back on the road. Perth&apos;s heavy-vehicle
          tyre response team is standing by right now.
        </motion.p>

        <motion.a
          href="tel:0406409409"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 flex items-center gap-4 rounded-md bg-tw-black px-10 py-6 shadow-2xl sm:px-14 sm:py-7"
        >
          <PhoneIcon className="h-8 w-8 text-tw-gold sm:h-10 sm:w-10" />
          <span className="font-display text-3xl tracking-wider text-white sm:text-5xl">
            0406 409 409
          </span>
        </motion.a>
      </div>
    </section>
  );
}
