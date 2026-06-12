"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  kicker,
  title,
  accent,
  description,
  align = "center",
}: {
  kicker: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <span className="text-xs font-bold tracking-[0.35em] text-tw-gold uppercase">
        {kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-5xl">
        {title} {accent && <span className="text-tw-red">{accent}</span>}
      </h2>
      <div className={`gold-underline mt-6 w-20 ${centered ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">{description}</p>
      )}
    </motion.div>
  );
}
