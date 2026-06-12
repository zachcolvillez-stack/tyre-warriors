"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, React.ReactNode> = {
  roadside: (
    <path d="M4 34 L14 14 H34 L44 34 Z M14 34 v6 M34 34 v6 M10 26 h28 M24 4 v6 M16 6 l3 5 M32 6 l-3 5" />
  ),
  mobile: (
    <path d="M4 32 h8 l4-10 h16 l6 10 h6 v6 h-40 z M14 38 a4 4 0 108 0 a4 4 0 10-8 0 M32 38 a4 4 0 108 0 a4 4 0 10-8 0 M20 22 v-8 h10 l4 8" />
  ),
  fleet: (
    <path d="M6 12 h20 v18 H6 z M26 18 h10 l6 6 v6 h-16 M10 30 a4 4 0 108 0 M32 30 a4 4 0 108 0 M10 18 h12 M10 24 h8" />
  ),
  trailer: (
    <path d="M4 14 h32 v14 H4 z M36 22 h8 M10 28 a4 4 0 108 0 M20 28 a4 4 0 108 0 M40 28 a3 3 0 106 0 M4 20 h32" />
  ),
  emergency: (
    <path d="M24 4 L28 18 H42 L31 26 L35 40 L24 31 L13 40 L17 26 L6 18 H20 Z" />
  ),
  supply: (
    <path d="M24 6 a18 18 0 100 36 a18 18 0 100-36 M24 14 a10 10 0 100 20 a10 10 0 100-20 M24 6 v8 M24 34 v8 M6 24 h8 M34 24 h8 M11 11 l6 6 M31 31 l6 6 M37 11 l-6 6 M17 31 l-6 6" />
  ),
};

const SERVICES = [
  {
    icon: "roadside",
    title: "Roadside Breakdown Assistance",
    text: "Blown a tyre on the highway? Our rapid-response units get your truck back on the road fast — day or night, anywhere in Perth.",
  },
  {
    icon: "mobile",
    title: "Mobile Truck Tyre Fitting",
    text: "Fully equipped service vehicles bring the workshop to you. Fitting, balancing and torque-checked installs at your depot or roadside.",
  },
  {
    icon: "fleet",
    title: "Fleet Maintenance Programs",
    text: "Scheduled inspections, pressure management and wear reporting that keep entire fleets compliant and on schedule.",
  },
  {
    icon: "trailer",
    title: "Trailer Tyres",
    text: "Supply and fitting for all trailer configurations — from single axle to road trains. Matched tyres for even wear and longer life.",
  },
  {
    icon: "emergency",
    title: "Emergency Callouts",
    text: "One number, 24 hours a day, 365 days a year. When you're stranded, we're already moving.",
  },
  {
    icon: "supply",
    title: "Commercial Tyre Supply",
    text: "Premium heavy-duty brands at competitive trade pricing, including 16-ply rated drive, steer and trailer tyres in stock.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-steel-sheen relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="What We Do"
          title="HEAVY-DUTY"
          accent="SERVICES"
          description="Built for trucks. Backed by experience. Every service delivered with heavy-duty equipment and zero shortcuts."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-md border border-white/8 bg-tw-steel/80 p-8 transition-colors duration-300 hover:border-tw-red/60"
            >
              {/* hover sheen */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(214,24,42,0.12), transparent 70%)",
                }}
                aria-hidden
              />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-tw-red/40 bg-tw-red/10 transition-all duration-300 group-hover:bg-tw-red/20">
                  <svg
                    viewBox="0 0 48 48"
                    className="h-9 w-9 text-tw-red transition-colors group-hover:text-tw-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {ICONS[s.icon]}
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-lg text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{s.text}</p>
                <div className="mt-6 h-0.5 w-0 bg-tw-red transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
