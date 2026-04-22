export default function RaideLogo() {
  // Custom letterforms inspired by the Demola wordmark:
  // — solid silhouettes (no open counters)
  // — built from circles and rounded rectangles
  // — uniform stroke-width feel, flat baseline, flat top
  // Drawn on a 100-unit-tall grid, each glyph ~78 wide, 14u gap.
  //
  // Letters: R · A · I · D · E
  return (
    <div className="flex flex-col items-center text-center">
      <svg
        viewBox="0 0 384 100"
        className="w-[88vw] max-w-[280px] sm:max-w-[420px] md:max-w-[560px] lg:max-w-[720px] h-auto opacity-0 animate-scale-in drop-shadow-[0_0_60px_hsla(20,95%,60%,0.45)]"
        style={{
          animationDelay: "800ms",
          animationDuration: "1.2s",
          animationFillMode: "forwards",
        }}
        aria-label="RAIDE"
        role="img"
      >
        <defs>
          <linearGradient id="raideGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(330 85% 55%)" />
            <stop offset="55%" stopColor="hsl(20 95% 60%)" />
            <stop offset="100%" stopColor="hsl(45 100% 60%)" />
          </linearGradient>
        </defs>

        <g fill="url(#raideGradient)">
          {/* R — solid bowl on top + thick leg. Built from a half-circle
              fused to a rectangle stem, with a diagonal leg. No inner counter. */}
          <g transform="translate(0,0)">
            {/* stem */}
            <rect x="0" y="0" width="28" height="100" rx="4" />
            {/* bowl: solid semicircle on the right of the stem */}
            <path d="M 14 0 H 50 a 28 28 0 0 1 0 56 H 14 Z" />
            {/* diagonal leg from bowl base to bottom-right */}
            <path d="M 28 50 L 70 100 L 42 100 L 14 64 Z" />
          </g>

          {/* A — wide solid arch with flat bottom (no triangular counter). */}
          <g transform="translate(86,0)">
            {/* full arch silhouette: two legs + curved top */}
            <path d="
              M 0 100
              L 0 40
              a 40 40 0 0 1 80 0
              L 80 100
              L 52 100
              L 52 40
              a 12 12 0 0 0 -24 0
              L 28 100
              Z
            " />
            {/* fill the inner triangle/counter to keep silhouette solid like Demola */}
            <rect x="28" y="40" width="24" height="60" />
            <path d="M 28 40 a 12 12 0 0 1 24 0 Z" />
          </g>

          {/* I — single thick rounded bar */}
          <g transform="translate(180,0)">
            <rect x="0" y="0" width="28" height="100" rx="4" />
          </g>

          {/* D — solid half-disc fused to a stem. No inner counter. */}
          <g transform="translate(222,0)">
            <rect x="0" y="0" width="28" height="100" rx="4" />
            <path d="M 14 0 H 36 a 50 50 0 0 1 0 100 H 14 Z" />
          </g>

          {/* E — stem + three rounded bars (top, middle, bottom). */}
          <g transform="translate(316,0)">
            <rect x="0" y="0" width="28" height="100" rx="4" />
            <rect x="0" y="0" width="68" height="22" rx="4" />
            <rect x="0" y="39" width="58" height="22" rx="4" />
            <rect x="0" y="78" width="68" height="22" rx="4" />
          </g>
        </g>
      </svg>

      {/* Acronym subtitle */}
      <p
        className="text-foreground/50 text-xs sm:text-sm uppercase tracking-[0.3em] mt-6 opacity-0 animate-fade-up font-light"
        style={{ animationDelay: "1600ms", animationFillMode: "forwards" }}
      >
        Radical AI Deployment Ecosystem
      </p>
    </div>
  );
}
