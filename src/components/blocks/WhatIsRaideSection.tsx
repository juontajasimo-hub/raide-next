"use client";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function WhatIsRaideSection() {
  const refTitle = useScrollReveal(0);
  const refBody = useScrollReveal(150);

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px gold-line opacity-30" />

      <div className="container mx-auto px-6 max-w-3xl">
        <div ref={refTitle} className="cin-reveal mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 gold-line opacity-60" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
            So what is RAIDE?
          </h2>
        </div>

        <div ref={refBody} className="cin-reveal">
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed text-pretty">
            RAIDE is Finland's <span className="text-gold font-medium">trust-driven AI Deployment ecosystem</span> funded by{" "}
            <span className="text-foreground font-medium">Business Finland</span> and orchestrated by{" "}
            <span className="text-foreground font-medium">Demola Global</span> for the leading companies and organizations in Finland.
          </p>
        </div>
      </div>
    </section>
  );
}
