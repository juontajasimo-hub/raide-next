"use client"

import { useScrollReveal } from "hooks/useScrollReveal"

export default function VisionSection() {
  const ref = useScrollReveal()

  return (
    <section className="py-40 md:py-52 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px gold-line opacity-40" />

      <div ref={ref} className="cin-reveal container mx-auto px-6 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.4em] font-semibold block mb-10">
          Vision 2030
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground max-w-4xl mx-auto text-balance leading-[0.95] italic">
          Making Finland a global model for AI deployment
        </h2>
        <p className="text-dim text-lg md:text-xl max-w-2xl mx-auto mt-10 leading-relaxed text-pretty font-light">
          Not through optimization, but through products shipped,
          services transformed, and a new generation of talent forged
          in real-world collaboration.
        </p>

        <div className="h-px w-20 gold-line mx-auto mt-12 opacity-50" />
      </div>
    </section>
  )
}
