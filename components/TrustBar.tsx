"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { value: 5000, suffix: "+", label: "Tyres Fitted" },
  { value: 24, suffix: "/7", label: "Always Available" },
  { value: 60, suffix: " min", label: "Avg. Perth Response", prefix: "<" },
  { value: 100, suffix: "%", label: "Fleet Specialists" },
];

function Counter({
  value,
  suffix,
  prefix = "",
  start,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span className="font-display text-4xl text-white sm:text-5xl">
      {prefix}
      {display.toLocaleString()}
      <span className="text-tw-red">{suffix}</span>
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="machined-edge relative bg-tw-coal" aria-label="Key metrics">
      <div className="bg-tread absolute inset-0" aria-hidden />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-20"
      >
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <Counter value={m.value} suffix={m.suffix} prefix={m.prefix} start={inView} />
            <div className="gold-underline w-12" />
            <span className="text-sm font-semibold tracking-[0.15em] text-zinc-400 uppercase">
              {m.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
