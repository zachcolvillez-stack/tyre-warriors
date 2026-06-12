/*
 * SVG recreation of the Tyre Warriors shield logo.
 * If the real raster logo is dropped into /public/logo.png, swap the
 * usages of <Logo /> for <img src="/logo.png" /> in Navbar and Footer.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 300"
      className={className}
      role="img"
      aria-label="Tyre Warriors — New Tyres and Fittings"
    >
      {/* shield body */}
      <path
        d="M30 60 L330 60 L330 200 Q330 240 180 290 Q30 240 30 200 Z"
        fill="#0c0c0e"
        stroke="#d6182a"
        strokeWidth="6"
      />
      <path
        d="M42 70 L318 70 L318 196 Q318 230 180 276 Q42 230 42 196 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        opacity="0.5"
      />
      {/* truck silhouette */}
      <g transform="translate(108 12)" fill="#0c0c0e" stroke="#e5e5e5" strokeWidth="2">
        <rect x="6" y="22" width="52" height="34" rx="4" fill="#0c0c0e" />
        <rect x="12" y="27" width="40" height="12" rx="2" fill="#3a3d44" stroke="none" />
        <circle cx="20" cy="58" r="8" fill="#16171a" />
        <circle cx="46" cy="58" r="8" fill="#16171a" />
        {/* big tyre behind cab */}
        <circle cx="96" cy="38" r="30" fill="#101114" />
        <circle cx="96" cy="38" r="21" fill="#0c0c0e" />
        <g stroke="#cfcfcf" strokeWidth="3" strokeLinecap="round">
          <path d="M96 10 v8" /><path d="M96 58 v8" />
          <path d="M68 38 h8" /><path d="M116 38 h8" />
          <path d="M76 19 l6 6" /><path d="M110 51 l6 6" />
          <path d="M116 19 l-6 6" /><path d="M82 51 l-6 6" />
        </g>
      </g>
      {/* main banner */}
      <rect x="18" y="98" width="324" height="52" rx="8" fill="#f5f5f4" stroke="#0c0c0e" strokeWidth="5" />
      <text
        x="180"
        y="135"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="36"
        fill="#c4101f"
        textLength="296"
        lengthAdjust="spacingAndGlyphs"
      >
        TYRE WARRIORS
      </text>
      {/* sub banner */}
      <rect x="58" y="156" width="244" height="24" rx="12" fill="#0c0c0e" stroke="#ffffff" strokeWidth="2" />
      <text x="180" y="173" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#ffffff" textLength="216" lengthAdjust="spacingAndGlyphs">
        NEW TYRES AND FITTINGS
      </text>
      {/* services band */}
      <rect x="66" y="186" width="228" height="22" fill="#c4101f" />
      <text x="180" y="202" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#ffffff" textLength="216" lengthAdjust="spacingAndGlyphs">
        TYRE REPAIR • NEW TYRES • FITTINGS
      </text>
      {/* phone */}
      <rect x="84" y="212" width="192" height="34" rx="6" fill="#f5f5f4" stroke="#0c0c0e" strokeWidth="3" />
      <text x="180" y="238" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="24" fill="#c4101f">
        0406 409 409
      </text>
      {/* address */}
      <text x="180" y="262" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="11" fill="#d4d4d4" letterSpacing="0.5">
        42 Power Avenue • Wattleup 6166
      </text>
    </svg>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  /* compact wordmark for the navbar */
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-xl tracking-wide text-white sm:text-2xl">
        TYRE <span className="text-tw-red">WARRIORS</span>
      </span>
      <span className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-tw-silver sm:text-[10px]">
        NEW TYRES &amp; FITTINGS
      </span>
    </div>
  );
}
