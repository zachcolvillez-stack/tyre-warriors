"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    title: "Rapid Response",
    text: "Strategically positioned mobile units mean we reach most Perth breakdowns in under an hour.",
  },
  {
    title: "Experienced Technicians",
    text: "Heavy-vehicle specialists who fit truck tyres every single day — not car guys with a bigger jack.",
  },
  {
    title: "Heavy Duty Equipment",
    text: "Commercial-grade jacks, rattle guns and torque tooling rated for the biggest rigs on WA roads.",
  },
  {
    title: "Fleet Support",
    text: "Dedicated account management, consolidated invoicing and priority dispatch for fleet partners.",
  },
  {
    title: "24/7 Availability",
    text: "Nights, weekends, public holidays. The phone is always answered and a truck is always ready.",
  },
  {
    title: "Reliable Service",
    text: "Torque-checked, pressure-verified and documented. Done right the first time, every time.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="machined-edge relative overflow-hidden bg-tw-black py-24 sm:py-32">
      <div className="bg-carbon absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <SectionHeading
              align="left"
              kicker="The Tyre Warriors Standard"
              title="WHY OPERATORS"
              accent="CHOOSE US"
              description="When a truck is off the road, every minute costs money. We built Tyre Warriors around one promise: get heavy transport moving again — fast, safe and without excuses."
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="red-glow relative mt-12 overflow-hidden rounded-md border border-tw-red/40 bg-gradient-to-br from-tw-red/20 to-transparent p-8"
            >
              <div className="bg-tread absolute inset-0" aria-hidden />
              <div className="relative">
                <p className="font-display text-2xl text-white">
                  &ldquo;KEEP YOUR TRUCKS ROLLING&rdquo;
                </p>
                <p className="mt-3 text-zinc-300">
                  It&apos;s not a slogan — it&apos;s the job. One call and we&apos;re rolling to you.
                </p>
                <a
                  href="tel:0406409409"
                  className="mt-6 inline-flex items-center gap-2 font-display text-lg tracking-wider text-tw-gold transition-colors hover:text-white"
                >
                  0406 409 409 →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* reasons grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="group rounded-md border border-white/8 bg-tw-steel/70 p-6 transition-colors hover:border-tw-gold/50"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-tw-red/70 transition-colors group-hover:text-tw-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base text-white">{r.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
