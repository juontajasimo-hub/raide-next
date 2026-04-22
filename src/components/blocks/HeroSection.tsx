import Image from "next/image"
import RaideLogo from "components/blocks/RaideLogo"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/raide-next/hero-cinematic.jpg" alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_75%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-32 md:pt-40">
        {/* Pre-title */}
        <p
          className="text-gold/70 text-xs uppercase tracking-[0.35em] mb-6 opacity-0 animate-fade-up font-medium"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          Finland's new chapter
        </p>

        {/* Main title */}
        <h1
          className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 md:mb-16 opacity-0 animate-title-reveal text-balance"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          The Age of{" "}
          <span className="text-gold gold-glow italic">Deployment</span>
        </h1>

        {/* Logo — the centerpiece */}
        <RaideLogo />

        {/* Subtitle */}
        <p
          className="text-foreground/60 text-base md:text-lg max-w-lg mt-14 md:mt-16 leading-relaxed text-pretty font-light opacity-0 animate-fade-up"
          style={{ animationDelay: "2400ms", animationFillMode: "forwards" }}
        >
          Finland's enterprise-driven ecosystem turning AI into real-world
          products, services, and competitive advantage.
        </p>

        {/* CTA */}
        <div
          className="flex flex-wrap justify-center gap-5 mt-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "2800ms", animationFillMode: "forwards" }}
        >
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm uppercase tracking-wider transition-colors duration-300 active:scale-[0.97]"
          >
            Discover RAIDE
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-foreground/20 text-foreground hover:border-foreground/50 font-medium text-sm uppercase tracking-wider transition-all duration-300 active:scale-[0.97]"
          >
            Join the Ecosystem
          </a>
        </div>

        {/* Save the Date */}
        <div
          className="mt-10 opacity-0 animate-fade-up flex items-center gap-4"
          style={{ animationDelay: "3200ms", animationFillMode: "forwards" }}
        >
          <div className="h-px w-12 gold-line opacity-60" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-gold gold-glow text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.4em] font-bold">
              Save the Date · 26.5.2026
            </span>
            <span className="text-foreground/50 text-xs sm:text-sm uppercase tracking-[0.3em] font-light">
              Helsinki · Business Finland · GenAI Forum
            </span>
          </div>
          <div className="h-px w-12 gold-line opacity-60" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
