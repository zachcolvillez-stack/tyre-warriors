const ITEMS = [
  "DRIVE TYRES",
  "STEER TYRES",
  "TRAILER TYRES",
  "16-PLY RATED",
  "MOBILE FITTING",
  "FLEET PROGRAMS",
  "24/7 CALLOUTS",
  "PERTH METRO",
];

export default function Marquee() {
  return (
    <div className="machined-edge overflow-hidden border-b border-white/8 bg-tw-red py-3" aria-hidden>
      <div className="animate-marquee flex w-max gap-10">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm tracking-[0.2em] whitespace-nowrap text-white">
            {item}
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-tw-gold" fill="currentColor">
              <circle cx="6" cy="6" r="6" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
