"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Zone = {
  id: string;
  name: string;
  x: number;
  y: number;
  note: string;
  hq?: boolean;
};

const ZONES: Zone[] = [
  { id: "joondalup", name: "Joondalup", x: 118, y: 60, note: "Northern corridor coverage" },
  { id: "midland", name: "Midland", x: 232, y: 138, note: "Great Eastern Hwy freight route" },
  { id: "perth", name: "Perth CBD", x: 158, y: 168, note: "Metro rapid response" },
  { id: "kewdale", name: "Kewdale / Welshpool", x: 204, y: 196, note: "Freight & logistics hub" },
  { id: "fremantle", name: "Fremantle", x: 112, y: 232, note: "Port precinct support" },
  { id: "armadale", name: "Armadale", x: 236, y: 258, note: "South-east corridor" },
  { id: "wattleup", name: "Wattleup HQ", x: 138, y: 292, note: "42 Power Ave — home base", hq: true },
  { id: "rockingham", name: "Rockingham / Kwinana", x: 122, y: 340, note: "Industrial strip priority zone" },
  { id: "mandurah", name: "Mandurah", x: 138, y: 412, note: "Southern corridor coverage" },
];

export default function CoverageMap() {
  const [active, setActive] = useState<string>("wattleup");
  const current = ZONES.find((z) => z.id === active)!;

  return (
    <section id="coverage" className="bg-steel-sheen machined-edge relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Service Area"
          title="PERTH-WIDE"
          accent="COVERAGE"
          description="Mobile response units covering the entire Perth metro area and major freight corridors — from Joondalup to Mandurah."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* stylised map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <svg viewBox="0 0 320 460" className="w-full" role="img" aria-label="Perth service coverage map">
              {/* ocean */}
              <rect x="0" y="0" width="320" height="460" rx="12" fill="#0d0e11" />
              {/* land mass — stylised Perth coastline */}
              <path
                d="M96 0 L320 0 L320 460 L120 460
                   Q132 430 128 400 Q120 370 106 348
                   Q96 330 104 308 Q116 286 104 262
                   Q92 240 102 216 Q116 192 110 164
                   Q102 136 112 108 Q124 80 110 48 Q100 22 96 0 Z"
                fill="#1b1d22"
                stroke="#2e3138"
                strokeWidth="1.5"
              />
              {/* freight corridors */}
              <g stroke="#3a3d45" strokeWidth="2" strokeDasharray="4 6" fill="none">
                <path d="M118 60 Q140 110 158 168 Q150 230 138 292 Q128 350 138 412" />
                <path d="M158 168 L232 138" />
                <path d="M158 168 L204 196 L236 258" />
                <path d="M112 232 Q124 262 138 292" />
              </g>
              {/* coverage radius from HQ */}
              <circle cx="138" cy="292" r="120" fill="rgba(214,24,42,0.05)" stroke="rgba(214,24,42,0.25)" strokeWidth="1" strokeDasharray="3 5" />

              {ZONES.map((z) => (
                <g
                  key={z.id}
                  onMouseEnter={() => setActive(z.id)}
                  onClick={() => setActive(z.id)}
                  className="cursor-pointer"
                >
                  {(z.hq || active === z.id) && (
                    <circle cx={z.x} cy={z.y} r="10" fill="none" stroke={z.hq ? "#e8b941" : "#d6182a"} strokeWidth="1.5" className="pulse-ring" style={{ transformOrigin: `${z.x}px ${z.y}px` }} />
                  )}
                  <circle
                    cx={z.x}
                    cy={z.y}
                    r={z.hq ? 7 : 5}
                    fill={z.hq ? "#e8b941" : active === z.id ? "#ffffff" : "#d6182a"}
                    stroke="#0a0a0b"
                    strokeWidth="2"
                  />
                  <text
                    x={z.x + 12}
                    y={z.y + 4}
                    fontSize="11"
                    fontWeight={z.hq || active === z.id ? 700 : 500}
                    fill={z.hq ? "#e8b941" : active === z.id ? "#ffffff" : "#8b8f98"}
                  >
                    {z.name}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>

          {/* zone detail */}
          <div>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-md border border-white/10 bg-tw-steel/80 p-8"
            >
              <span className="text-xs font-bold tracking-[0.3em] text-tw-gold uppercase">
                {current.hq ? "Headquarters" : "Response Zone"}
              </span>
              <h3 className="mt-3 font-display text-2xl text-white">{current.name}</h3>
              <p className="mt-3 text-zinc-400">{current.note}</p>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {ZONES.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setActive(z.id)}
                  className={`rounded-sm border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                    active === z.id
                      ? "border-tw-red bg-tw-red/15 text-white"
                      : "border-white/10 bg-tw-black/40 text-zinc-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {z.name}
                </button>
              ))}
            </div>

            <p className="mt-8 text-sm text-zinc-500">
              Outside these zones? Call us anyway —{" "}
              <a href="tel:0406409409" className="font-semibold text-tw-gold hover:text-white">
                0406 409 409
              </a>
              . We regularly service regional WA freight routes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
