"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "./Navbar";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-tw-black"
    >
      {/* layered cinematic background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photos/hero-truck.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-carbon opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-tread" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 20%, rgba(214,24,42,0.16), transparent 65%), radial-gradient(ellipse 50% 40% at 15% 85%, rgba(232,185,65,0.07), transparent 70%), linear-gradient(180deg, rgba(10,10,11,0.2) 0%, rgba(10,10,11,0.75) 70%, #0a0a0b 100%)",
        }}
        aria-hidden
      />
      {/* giant tyre arc */}
      <svg
        className="absolute -right-48 -top-48 h-[700px] w-[700px] opacity-[0.16] md:opacity-25"
        viewBox="0 0 400 400"
        aria-hidden
      >
        <circle cx="200" cy="200" r="180" fill="none" stroke="#2c2e34" strokeWidth="34" />
        <circle cx="200" cy="200" r="180" fill="none" stroke="#d6182a" strokeWidth="2" strokeDasharray="6 18" opacity="0.7" />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2;
          // fixed precision so SSR and client markup match exactly
          const x1 = (200 + Math.cos(a) * 163).toFixed(1);
          const y1 = (200 + Math.sin(a) * 163).toFixed(1);
          const x2 = (200 + Math.cos(a) * 197).toFixed(1);
          const y2 = (200 + Math.sin(a) * 197).toFixed(1);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0a0a0b" strokeWidth="8" />;
        })}
      </svg>
      {/* red speed slash */}
      <div
        className="absolute bottom-0 left-0 h-2 w-full"
        style={{ background: "linear-gradient(90deg, #d6182a, #a31020 50%, transparent)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36">
        {/* animated emergency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-tw-red/50 bg-tw-red/10 px-5 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-tw-red" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-tw-red" />
          </span>
          <span className="text-xs font-bold tracking-[0.25em] text-white sm:text-sm">
            24/7 EMERGENCY RESPONSE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="headline-shadow max-w-5xl font-display text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          24/7 TRUCK TYRE
          <br />
          <span className="text-tw-red">BREAKDOWN</span> SPECIALISTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
        >
          Fast roadside response, fleet maintenance, and premium truck tyre
          solutions across Perth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="tel:0406409409"
            className="red-glow group flex items-center justify-center gap-3 rounded-sm bg-tw-red px-10 py-5 font-display text-lg tracking-wider text-white transition-all hover:bg-tw-red-dark"
          >
            <PhoneIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
            CALL NOW
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-3 rounded-sm border-2 border-white/25 bg-white/5 px-10 py-5 font-display text-lg tracking-wider text-white backdrop-blur-sm transition-all hover:border-tw-gold hover:text-tw-gold"
          >
            REQUEST FLEET QUOTE
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-zinc-400"
        >
          <span className="flex items-center gap-2">
            <Tick /> Mobile fitting at your location
          </span>
          <span className="flex items-center gap-2">
            <Tick /> All truck &amp; trailer sizes
          </span>
          <span className="flex items-center gap-2">
            <Tick /> Perth metro &amp; surrounds
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-tw-gold" fill="currentColor" aria-hidden>
      <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4L4 9.6l1.7-1.7 3.1 3.1 5.5-5.5L16 7.2l-7.2 7.2z" />
    </svg>
  );
}
