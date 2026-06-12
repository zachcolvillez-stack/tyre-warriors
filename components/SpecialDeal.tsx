"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "./Navbar";

const POINTS = [
  "Heavy Duty — 16 Ply Rated",
  "Superior Traction & Long Life",
  "Built For Tough Loads",
  "Reliable Performance",
];

export default function SpecialDeal() {
  return (
    <section className="machined-edge relative overflow-hidden bg-tw-black py-24 sm:py-32">
      <div className="bg-carbon absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(214,24,42,0.14), transparent 65%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* real marketing flyer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="red-glow overflow-hidden rounded-lg border border-tw-red/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/special-deal.webp"
              alt="Double Coin Drive Tyres special deal — 11R22.5 148/145M 16PR RLB1 drive tyre, heavy duty 16 ply rated"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* deal details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-tw-gold/50 bg-tw-gold/10 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-tw-gold uppercase">
            Special Deal
          </span>
          <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl">
            DOUBLE COIN <span className="text-tw-red">DRIVE TYRES</span>
          </h2>
          <p className="mt-4 font-display text-xl text-tw-gold">
            11R22.5 148/145M · 16PR RLB1 (DRIVE)
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-zinc-400">
            Premium heavy-duty drive tyres in stock now at special pricing. Built
            for the toughest WA freight routes — fitted on site or at our Wattleup
            workshop.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-zinc-200">
                <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-tw-red" fill="currentColor" aria-hidden>
                  <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4L4 9.6l1.7-1.7 3.1 3.1 5.5-5.5L16 7.2l-7.2 7.2z" />
                </svg>
                <span className="font-semibold">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:0406409409"
              className="red-glow flex items-center justify-center gap-3 rounded-sm bg-tw-red px-8 py-4 font-display tracking-wider text-white transition-all hover:bg-tw-red-dark"
            >
              <PhoneIcon className="h-5 w-5" /> CALL FOR PRICING
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-sm border-2 border-white/25 px-8 py-4 font-display tracking-wider text-white transition-all hover:border-tw-gold hover:text-tw-gold"
            >
              ENQUIRE NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
