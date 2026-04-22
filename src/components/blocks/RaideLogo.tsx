import Image from "next/image"

export default function RaideLogo() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Emblem */}
      <div
        className="relative opacity-0 animate-scale-in"
        style={{ animationDelay: "800ms", animationDuration: "1.2s", animationFillMode: "forwards" }}
      >
        <div className="absolute inset-[-24%] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.28)_0%,transparent_68%)] blur-2xl" />
        <Image
          src="/raide-next/raide-emblem-v3.png"
          alt="RAIDE emblem"
          width={512}
          height={512}
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] drop-shadow-[0_0_90px_hsl(var(--accent)/0.65)]"
        />
      </div>

      {/* RAIDE wordmark */}
      <h2
        className="font-display italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gold gold-glow tracking-tight mt-6 opacity-0 animate-fade-up"
        style={{ animationDelay: "1600ms", animationFillMode: "forwards" }}
      >
        RAIDE
      </h2>

      {/* Acronym subtitle */}
      <p
        className="text-foreground/50 text-xs sm:text-sm uppercase tracking-[0.3em] mt-3 opacity-0 animate-fade-up font-light"
        style={{ animationDelay: "2000ms", animationFillMode: "forwards" }}
      >
        Radical AI Deployment Ecosystem
      </p>
    </div>
  )
}
