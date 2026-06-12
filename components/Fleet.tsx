"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    title: "Preventative Maintenance",
    text: "Scheduled tyre inspections, rotations and replacements planned around your operations — not around failures.",
    stat: "Fewer blowouts",
  },
  {
    title: "Tyre Monitoring",
    text: "Tread depth, pressure and wear-pattern tracking across every vehicle, with clear reporting your fleet manager can act on.",
    stat: "Full visibility",
  },
  {
    title: "Reduced Downtime",
    text: "Priority dispatch for fleet partners and pre-stocked tyres for your spec means trucks spend hours, not days, off the road.",
    stat: "Trucks earning",
  },
  {
    title: "Fleet Management Solutions",
    text: "One supplier, one invoice, one number to call. Consolidated tyre management for fleets of 5 to 500 vehicles.",
    stat: "One partner",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="machined-edge relative overflow-hidden bg-tw-coal py-24 sm:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,185,65,0.06), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="For Transport Companies"
          title="FLEET TYRE"
          accent="SOLUTIONS"
          description="Tyres are one of the biggest operating costs in heavy transport. We turn them from an unpredictable expense into a managed program."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-lg border border-white/10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/fleet-convoy.jpg"
            alt="Convoy of heavy transport trucks on a Western Australia freight route"
            className="h-64 w-full object-cover sm:h-80"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.55) 45%, transparent 100%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div className="max-w-md">
              <span className="text-xs font-bold tracking-[0.3em] text-tw-gold uppercase">
                One supplier · whole fleet
              </span>
              <p className="mt-3 font-display text-2xl leading-tight text-white sm:text-3xl">
                FROM 5 TRUCKS TO 500 — WE KEEP THEM ROLLING
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.6 }}
              className="group relative flex gap-6 overflow-hidden rounded-md border border-white/8 bg-tw-black/60 p-8 transition-colors hover:border-tw-gold/40"
            >
              <div className="hidden sm:block">
                <span className="font-display text-5xl text-white/10 transition-colors group-hover:text-tw-gold/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.25em] text-tw-gold uppercase">
                  {p.stat}
                </span>
                <h3 className="mt-2 font-display text-xl text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col items-center gap-6 rounded-md border border-white/10 bg-gradient-to-r from-tw-steel to-tw-black p-10 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <h3 className="font-display text-2xl text-white">
              Running a fleet? Let&apos;s talk numbers.
            </h3>
            <p className="mt-2 text-zinc-400">
              Get a tailored fleet maintenance proposal with trade pricing.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-sm border-2 border-tw-gold px-8 py-4 font-display tracking-wider text-tw-gold transition-all hover:bg-tw-gold hover:text-tw-black"
          >
            REQUEST FLEET QUOTE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
