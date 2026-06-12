import Logo from "./Logo";
import { PhoneIcon } from "./Navbar";

const SERVICE_LINKS = [
  "24/7 Mobile Truck Tyre Fitting",
  "Roadside Breakdown Assistance",
  "Truck Tyre Replacement",
  "Trailer Tyres",
  "Fleet Tyre Maintenance",
  "Commercial Tyre Services",
  "Emergency Callouts",
  "Truck & Trailer Tyre Supply",
];

export default function Footer() {
  return (
    <footer className="machined-edge bg-tw-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div>
          <Logo className="w-56" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-500">
            Perth&apos;s 24/7 heavy-vehicle tyre specialists. Mobile fitting,
            roadside breakdown response and fleet tyre management across the
            Perth metro area.
          </p>
        </div>

        <nav aria-label="Services">
          <h3 className="font-display text-sm tracking-[0.2em] text-tw-gold">SERVICES</h3>
          <ul className="mt-5 grid gap-2.5 text-sm text-zinc-400">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#services" className="transition-colors hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm tracking-[0.2em] text-tw-gold">CONTACT</h3>
          <address className="mt-5 text-sm not-italic leading-relaxed text-zinc-400">
            42 Power Ave
            <br />
            Wattleup WA 6166
            <br />
            <a href="tel:0406409409" className="font-semibold text-white hover:text-tw-gold">
              0406 409 409
            </a>
            <br />
            Open 24 hours, 7 days
          </address>
          <a
            href="tel:0406409409"
            className="red-glow mt-6 inline-flex items-center gap-2 rounded-sm bg-tw-red px-6 py-3 font-display text-sm tracking-wider text-white transition-transform hover:scale-105"
          >
            <PhoneIcon className="h-4 w-4" /> CALL NOW
          </a>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-600 sm:flex-row sm:px-6">
          <span>
            © {new Date().getFullYear()} Tyre Warriors — New Tyres and Fittings. All rights reserved.
          </span>
          <span className="font-semibold tracking-[0.2em] text-zinc-500">
            KEEP YOUR TRUCKS ROLLING
          </span>
        </div>
      </div>
    </footer>
  );
}
