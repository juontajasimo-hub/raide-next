"use client";
"use client"

import Image from "next/image"
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
          {/* Video container */}
          <div className="relative aspect-video max-w-5xl mx-auto overflow-hidden border border-border/50">
            <Image
              src="/pattern-dark.jpg"
              alt=""
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-background/40" />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-20 border-2 border-accent/60 rounded-full flex items-center justify-center cursor-pointer hover:border-accent hover:bg-accent/10 transition-all duration-300 active:scale-95 group">
                <span className="text-gold ml-1 group-hover:scale-110 transition-transform duration-300">
                  <PlayIcon />
                </span>
              </div>
              <div className="text-center">
                <p className="text-foreground/80 text-sm font-medium uppercase tracking-[0.2em]">
                  Watch the Film
                </p>
                <p className="text-dim text-xs mt-1">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
