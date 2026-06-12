"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// TODO: create a Formspree form for Tyre Warriors and replace this ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-sm border border-white/12 bg-tw-black/60 px-4 py-3.5 text-white placeholder-zinc-500 transition-colors focus:border-tw-red focus:outline-none";

  return (
    <section id="contact" className="bg-steel-sheen machined-edge relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Get In Touch"
          title="CONTACT"
          accent="TYRE WARRIORS"
          description="Emergency? Call us now. Fleet enquiry or quote? Send the form and we'll get back to you fast."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* details + map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:0406409409"
                className="group rounded-md border border-white/10 bg-tw-steel/80 p-6 transition-colors hover:border-tw-red"
              >
                <span className="text-xs font-bold tracking-[0.25em] text-tw-gold uppercase">
                  24/7 Hotline
                </span>
                <span className="mt-2 block font-display text-2xl text-white group-hover:text-tw-red">
                  0406 409 409
                </span>
              </a>
              <div className="rounded-md border border-white/10 bg-tw-steel/80 p-6">
                <span className="text-xs font-bold tracking-[0.25em] text-tw-gold uppercase">
                  Workshop
                </span>
                <span className="mt-2 block font-semibold text-white">
                  42 Power Ave
                  <br />
                  Wattleup WA 6166
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-md border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=42%20Power%20Ave%2C%20Wattleup%20WA%206166&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tyre Warriors — 42 Power Ave, Wattleup WA 6166"
              />
            </div>
          </motion.div>

          {/* quote form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="rounded-md border border-white/10 bg-tw-steel/80 p-8 sm:p-10"
          >
            <h3 className="font-display text-xl text-white">Request a Quote</h3>
            {status === "sent" ? (
              <div className="mt-8 rounded-md border border-tw-gold/40 bg-tw-gold/10 p-6 text-center">
                <p className="font-display text-lg text-tw-gold">QUOTE REQUEST RECEIVED</p>
                <p className="mt-2 text-zinc-300">
                  We&apos;ll be in touch shortly. Urgent? Call{" "}
                  <a href="tel:0406409409" className="font-semibold text-white underline">
                    0406 409 409
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Name *" className={inputCls} aria-label="Name" />
                  <input name="phone" required type="tel" placeholder="Phone *" className={inputCls} aria-label="Phone" />
                </div>
                <input name="email" type="email" placeholder="Email" className={inputCls} aria-label="Email" />
                <select name="service" className={inputCls} aria-label="Service required" defaultValue="">
                  <option value="" disabled>
                    Service required…
                  </option>
                  <option>Emergency breakdown</option>
                  <option>Mobile tyre fitting</option>
                  <option>Fleet maintenance quote</option>
                  <option>Trailer tyres</option>
                  <option>Tyre supply / pricing</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your truck, tyre size or fleet…"
                  className={inputCls}
                  aria-label="Message"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="red-glow mt-2 rounded-sm bg-tw-red py-4 font-display tracking-wider text-white transition-all hover:bg-tw-red-dark disabled:opacity-60"
                >
                  {status === "sending" ? "SENDING…" : "SEND QUOTE REQUEST"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-tw-red">
                    Something went wrong — please call 0406 409 409 instead.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
