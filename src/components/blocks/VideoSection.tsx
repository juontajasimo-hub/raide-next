"use client";

import { useScrollReveal } from "hooks/useScrollReveal"

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

export default function VideoSection() {
  const ref = useScrollReveal()

  return (
    <section className="py-32 md:py-40 bg-dark-surface-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-20" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="cin-scale-reveal">
          <div className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-accent/15 via-secondary to-accent/5 border border-border/60">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <button
                aria-label="Play the film"
                className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/90 hover:scale-105 transition-all duration-200 active:scale-95 shadow-lg"
              >
                <PlayIcon />
              </button>
              <div className="text-center">
                <p className="text-foreground text-sm font-bold uppercase tracking-[0.2em]">
                  Watch the Film
                </p>
                <p className="text-muted-foreground text-xs mt-1 font-semibold">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
