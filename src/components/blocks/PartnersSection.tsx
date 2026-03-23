"use client"

import { useScrollReveal } from "hooks/useScrollReveal"

const partners = [
  "Demola Global",
  "Business Finland",
  "Wärtsilä",
]

export default function PartnersSection() {
  const ref = useScrollReveal()

  return (
    <section id="partners" className="py-32 md:py-40 bg-dark-surface-2 relative">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      <div ref={ref} className="cin-reveal container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-6">
            Ecosystem Partners
          </span>
          <h2 className="text-3xl md:text-4xl text-foreground text-balance">
            Backed by Finland's boldest
          </h2>
          <p className="text-dim mt-4 text-base max-w-lg mx-auto text-pretty">
            Major export companies, public organisations, universities, and startups —
            united in a trusted, enterprise-driven cluster.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {partners.map((name) => (
            <div
              key={name}
              className="px-10 py-6 border border-border/60 hover:border-accent/40 transition-colors duration-300 flex items-center justify-center"
            >
              <span className="text-foreground/80 font-semibold text-sm uppercase tracking-wider">{name}</span>
            </div>
          ))}
          <div className="px-10 py-6 border border-border/30 flex items-center justify-center">
            <span className="text-dim text-sm font-medium tracking-wider">+ More joining</span>
          </div>
        </div>
      </div>
    </section>
  )
}
