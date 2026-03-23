import Image from "next/image"
import RaideLogo from "components/blocks/RaideLogo"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-cinematic.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          {/* Cinematic pre-title */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 gold-line opacity-60" />
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
                A New Chapter for Finland
              </span>
            </div>
          </div>

          {/* Main title — cinematic */}
          <h1
            className="text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 opacity-0 animate-title-reveal text-balance"
            style={{ animationDelay: "600ms" }}
          >
            The Age of{" "}
            <span className="text-gold gold-glow italic">
              Deployment
            </span>
          </h1>

          {/* Acronym logo — horizontal */}
          <div className="mb-10">
            <RaideLogo />
          </div>

          {/* Subtitle */}
          <p
            className="text-foreground/80 text-lg md:text-xl max-w-xl mb-12 leading-relaxed text-pretty opacity-0 animate-fade-up font-normal"
            style={{ animationDelay: "1000ms" }}
          >
            Cost cuts won't save us. More AI talk doesn't lift us. We need understanding. And action.
            <br /><br />
            RAIDE is Finland's national, enterprise-driven
            ecosystem that turns AI capabilities into real-world products, services
            and competitive advantage - faster and with more impact than anywhere else.
          </p>

          {/* Gold divider line */}
          <div
            className="h-px w-32 gold-line mb-12 opacity-0 animate-line-expand origin-left"
            style={{ animationDelay: "1300ms" }}
          />

          {/* CTA */}
          <div
            className="flex flex-wrap gap-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "1500ms" }}
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
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
