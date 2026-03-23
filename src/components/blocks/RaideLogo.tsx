const words = [
  { highlight: "R", rest: "adical" },
  { highlight: "AI", rest: "" },
  { highlight: "D", rest: "eployment" },
  { highlight: "E", rest: "cosystem" },
]

export default function RaideLogo() {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      {words.map(({ highlight, rest }, i) => (
        <span
          key={i}
          className="font-display italic text-3xl md:text-4xl opacity-0 animate-fade-up"
          style={{ animationDelay: `${1600 + i * 200}ms` }}
        >
          <span className="text-gold gold-glow">{highlight}</span>
          <span className="text-foreground/40">{rest}</span>
        </span>
      ))}
    </div>
  )
}
