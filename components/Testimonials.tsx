"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const REVIEWS = [
  {
    name: "Dave M.",
    role: "Owner-Driver, Kewdale",
    text: "Blew a drive tyre on the Kwinana Freeway at 2am fully loaded. These blokes were on site within 40 minutes and had me rolling again before sunrise. Unreal service.",
  },
  {
    name: "Sarah T.",
    role: "Fleet Manager, Transport Co.",
    text: "Moved our 30-truck fleet onto their maintenance program last year. Tyre-related downtime has dropped massively and the reporting makes my job easy. Couldn't recommend them more.",
  },
  {
    name: "Marko V.",
    role: "Civil Contractor, Rockingham",
    text: "Honest pricing, quality tyres and they actually answer the phone. Fitted a full set of 16-ply drives on site at our yard. Professional from start to finish.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 text-tw-gold" fill="currentColor" aria-hidden>
          <path d="M10 1l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 14.5 4.6 17.5l1.2-6L1.3 7.3l6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="machined-edge relative overflow-hidden bg-tw-black py-24 sm:py-32">
      <div className="bg-carbon absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Trusted On The Road"
          title="WHAT OPERATORS"
          accent="SAY"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col rounded-md border border-white/8 bg-tw-steel/80 p-8 transition-colors hover:border-tw-gold/40"
            >
              <div className="flex items-center justify-between">
                <Stars />
                {/* Google-style G */}
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-label="Google review">
                  <path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h5.9c-.3 1.4-1 2.5-2.2 3.3v2.8h3.6c2.1-1.9 3.3-4.8 3.3-8.2z" />
                  <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8C3.9 20.5 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.8 14.1c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1V7.1H2.1C1.4 8.6 1 10.2 1 12s.4 3.4 1.1 4.9l3.7-2.8z" />
                  <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2C17.5 2.1 15 1 12 1 7.7 1 3.9 3.5 2.1 7.1l3.7 2.8c.9-2.6 3.3-4.5 6.2-4.5z" />
                </svg>
              </div>
              <blockquote className="mt-6 flex-1 leading-relaxed text-zinc-300">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-tw-red font-display text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <span className="block font-semibold text-white">{r.name}</span>
                    <span className="text-sm text-zinc-500">{r.role}</span>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
