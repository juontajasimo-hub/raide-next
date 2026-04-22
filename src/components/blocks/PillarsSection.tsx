"use client"

import { useScrollReveal } from "hooks/useScrollReveal"

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="text-gold font-medium">{children}</span>
)

// Inline SVG replacements for lucide-react icons
function ZapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function LightbulbIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  )
}

export default function PillarsSection() {
  const ref0 = useScrollReveal(0)
  const ref1 = useScrollReveal(120)
  const ref2 = useScrollReveal(240)

  return (
    <section className="py-32 md:py-40 bg-dark-surface-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line opacity-20" />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-20 text-balance">
          This is how RAIDE works
        </h2>
        <div className="grid md:grid-cols-3 gap-0 divide-x divide-border/50">

          {/* Pillar I */}
          <div ref={ref0} className="cin-reveal px-8 md:px-10 py-2 first:pl-0">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-gold font-display text-3xl italic">I</span>
              <div className="h-px flex-1 gold-line opacity-30" />
            </div>
            <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-6 text-gold">
              <ZapIcon />
            </div>
            <h3 className="text-xl text-foreground mb-4">The Experimentation Engine</h3>
            <p className="text-dim text-sm leading-relaxed text-pretty">
              <G>Systematic rapid prototyping</G> through the Demola platform.{" "}
              <G>Multidisciplinary innovation teams from universities and startup companies</G>{" "}
              tackle real enterprise challenges — thesis projects, startup pilots, technology demos.
            </p>
          </div>

          {/* Pillar II */}
          <div ref={ref1} className="cin-reveal px-8 md:px-10 py-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-gold font-display text-3xl italic">II</span>
              <div className="h-px flex-1 gold-line opacity-30" />
            </div>
            <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-6 text-gold">
              <UsersIcon />
            </div>
            <h3 className="text-xl text-foreground mb-4">Cross-Industry Convergence</h3>
            <p className="text-dim text-sm leading-relaxed text-pretty">
              <G>Finland's leading export companies, SMEs, universities, public organisations and startups</G>{" "}
              in a trusted, curated network — finding unexpected idea combinations at industry intersections.
            </p>
          </div>

          {/* Pillar III */}
          <div ref={ref2} className="cin-reveal px-8 md:px-10 py-2 last:pr-0">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-gold font-display text-3xl italic">III</span>
              <div className="h-px flex-1 gold-line opacity-30" />
            </div>
            <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-6 text-gold">
              <LightbulbIcon />
            </div>
            <h3 className="text-xl text-foreground mb-4">New Growth Creation</h3>
            <p className="text-dim text-sm leading-relaxed text-pretty">
              No optimisations. No savings.{" "}
              <G>NEW products. NEW services and NEW AI-native solutions based on REAL world needs.</G>{" "}
              Data-driven services, better productivity, and smoother processes across public and private sectors.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
