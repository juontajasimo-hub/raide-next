"use client";
import { useScrollReveal } from "hooks/useScrollReveal";

export default function MissionSection() {
  const refTitle = useScrollReveal();
  const refLeft = useScrollReveal(100);
  const refRight = useScrollReveal(200);

  return (
    <section id="about" className="py-32 md:py-40 relative">
      <div className="container mx-auto px-6">
        <p className="font-display italic text-2xl md:text-3xl text-foreground/70 max-w-2xl mb-20 leading-snug text-pretty">
          AI exponentially increases and speeds up the amount of low value outputs while deeper insights are left in the shadows.
        </p>
        <p className="font-display italic text-2xl md:text-3xl text-foreground/70 max-w-2xl mb-20 leading-snug text-pretty">
          We focus on achieving deep understanding and scaling solutions and services to real life needs.
        </p>
        {/* Section title */}
        <div ref={refTitle} className="cin-reveal mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 gold-line opacity-60" />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
              The Manifesto
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground max-w-3xl text-balance">
            Finland's competitiveness won't improve through efficiency alone
          </h2>
        </div>

        {/* Two-column manifesto */}
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
          <div ref={refLeft} className="cin-reveal-left">
            <p className="text-foreground/70 text-lg leading-[1.8] text-pretty mb-8">
              The competitive edge no longer belongs to those who adopt tools first — it belongs to those 
              who connect new technologies to <span className="text-gold font-medium">real customer value</span>, 
              understand the problems deeply, and scale learnings into practice.
            </p>
            <p className="text-foreground/70 text-lg leading-[1.8] text-pretty">
              Most development portfolios are already full. RAIDE doesn't replace what exists — 
              it opens a disciplined, ambitious path to discover what's genuinely new.
            </p>
          </div>
          <div ref={refRight} className="cin-reveal-right">
            <div className="border-l-2 border-divider pl-8">
              <blockquote className="text-foreground/90 font-display text-2xl md:text-3xl italic leading-snug mb-6">
                "Our goal is to build a model where new technologies connect rapidly to value: 
                services, products, and the reinvention of workflows."
              </blockquote>
              <cite className="text-dim text-sm not-italic block">
                — Ville Kairamo, CEO, Demola Global
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
